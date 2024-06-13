// Generate Private Key
resource "tls_private_key" "rsa_4096" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

variable "key_name" {
  description = "Name of the SSH key pair"
  default     = "MERNServer"  // Default value if not provided
}

// Create Key Pair for Connecting EC2 via SSH
resource "aws_key_pair" "key_pair" {
  key_name   = var.key_name
  public_key = tls_private_key.rsa_4096.public_key_openssh
}

// Save PEM file locally
resource "local_file" "private_key" {
  content  = tls_private_key.rsa_4096.private_key_pem
  filename = "${var.key_name}.pem"  // Ensure a valid filename

  provisioner "local-exec" {
    command = "chmod 400 ${var.key_name}.pem"
  }
}

// Create a security group
resource "aws_security_group" "sg_ec2" {
  name        = "sg_ec2"
  description = "Security group for EC2"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "pft_instance" {
  ami                    = "ami-04b70fa74e45c3917"
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.key_pair.key_name
  vpc_security_group_ids = [aws_security_group.sg_ec2.id]

  tags = {
    Name = "pft-ec2-instance"
  }

  root_block_device {
    volume_size = 30
    volume_type = "gp2"
  }

  provisioner "remote-exec" {
    connection {
      type        = "ssh"
      private_key = file("${var.key_name}.pem")
      user        = "ubuntu"
      host        = self.public_ip
    }

    inline = [
      "echo 'Starting provisioning...'",
      "sleep 200",
      "echo 'Installing Git...'",

      "sudo apt update",
      "sudo apt install git -y",

      "echo 'Removing existing Docker packages...'",
      "for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg -y; done",
      "sudo apt-get update",
      "sudo apt-get install ca-certificates curl -y",
      "sudo install -m 0755 -d /etc/apt/keyrings",
      "sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc",
      "sudo chmod a+r /etc/apt/keyrings/docker.asc",
      "echo \"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo \"$VERSION_CODENAME\") stable\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null",
      "sudo apt-get update",
      "sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y",
      "sudo docker run hello-world",
      "sudo usermod -aG docker ubuntu",


      "echo 'Installing Ansible...'",
      "sudo apt-add-repository --yes --update ppa:ansible/ansible",
      "sudo apt update",
      "sudo apt install ansible -y",
      "ansible --version"
    ]
  }
}

output "ACCESS_YOUR_PFT_APP" {
  value = "http://${aws_instance.pft_instance.public_ip}:3000"
}

output "PFT_SERVER_PUBLIC_IP" {
  value = aws_instance.pft_instance.public_ip
}

output "PFT_SERVER_PRIVATE_IP" {
  value = aws_instance.pft_instance.private_ip
}
