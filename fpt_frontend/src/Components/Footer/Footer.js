import React from "react";
import styled from "styled-components";
import About from "../About/About";

const Footer = () => {
  return (
    <div>
      <h1 className="uppercase">
      </h1>
       <FooterStyled>
      <p>&copy; 2023 Personal Finance Tracker. All rights reserved.</p>
     
      {/* 
      <div className="absolute top-[769px] left-[0px] w-[1359px] h-[182px] text-left text-lg text-footer-2-wh font-inter">
            <img
              className="absolute top-[0px] left-[0px] w-[1359px] h-[182px]"
              alt=""
              src="/rectangle-59.svg"
            />
            <div className="absolute top-[19px] left-[1115.43px] w-[227.66px] h-[76px] text-sm font-base-text-medium">
              <div className="absolute top-[0px] left-[49.71px] leading-[24px] font-semibold flex items-center w-[99.41px]">
                Email Support
              </div>
              <div className="absolute top-[28px] left-[49.71px] leading-[24px] font-medium flex items-center w-[177.95px]">
                lpramithamj@gmail.com
              </div>
              <img
                className="absolute top-[6px] left-[0px] w-[39.77px] h-10"
                alt=""
                src="/gmail-logo.svg"
              />
            </div>
            <div className="absolute top-[90px] left-[1117.42px] w-[183.92px] h-[52px] text-sm font-base-text-medium">
              <div className="absolute top-[0px] left-[49.71px] leading-[24px] font-semibold flex items-center w-[134.21px]">
                Whatsapp Support
              </div>
              <div className="absolute top-[28px] left-[49.71px] leading-[24px] font-medium flex items-center w-[103.39px]">
                +94710450844
              </div>
              <img
                className="absolute top-[6px] left-[0px] w-[39.77px] h-10"
                alt=""
                src="/whatsapp-icon.svg"
              />
            </div>
            <div className="absolute top-[67px] left-[16.9px] w-[71.58px] h-[22px]">
              <div className="absolute top-[0px] left-[24.85px] font-semibold inline-block w-[46.72px]">
                2023
              </div>
              <img
                className="absolute top-[2px] left-[0px] w-[17.89px] h-[18px] overflow-hidden opacity-[0.7]"
                alt=""
                src="/bxcopyright.svg"
              />
            </div>
            <div className="absolute top-[29px] left-[16.9px] w-[117.1px] h-[22px]">
              <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[117.1px]">
                PMJ Codes
              </div>
            </div>
            <div className="absolute top-[27px] left-[144.15px] w-[125.26px] h-[152px]">
              <div className="absolute top-[42px] left-[0px] flex flex-col items-start justify-start gap-[22px]">
                <div className="relative inline-block w-[114px] opacity-[0.7]">
                  About Us
                </div>
                <div className="relative inline-block w-[114px] opacity-[0.7]">
                  Career
                </div>
                <div className="relative inline-block w-[114px] opacity-[0.7]">
                  Contact Us
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] text-3xl font-semibold inline-block w-[125.26px]">
                Company
              </div>
            </div>
            <div className="absolute top-[29px] left-[287.31px] w-56 h-[108px]">
              <div className="absolute top-[42px] left-[0px] flex flex-col items-start justify-start gap-[22px]">
                <div className="relative inline-block w-56 opacity-[0.7]">{`Terms & Conditions`}</div>
                <div className="relative inline-block w-56 opacity-[0.7]">
                  Privacy Policy
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] text-3xl font-semibold inline-block w-[124.27px]">
                More Info
              </div>
            </div>
            <div className="absolute top-[29px] left-[499.06px] w-[152px] h-[74px] text-3xl">
              <div className="absolute top-[0px] left-[0px] w-[152px] h-[74px]">
                <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[124.27px]">
                  Follow Us
                </div>
                <div className="absolute top-[48px] left-[0px] flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="relative w-[26px] h-[26px]"
                    alt=""
                    src="/twi.svg"
                  />
                  <img
                    className="relative w-[26px] h-[26px]"
                    alt=""
                    src="/instagram.svg"
                  />
                  <img
                    className="relative w-[26px] h-[26px]"
                    alt=""
                    src="/facebook.svg"
                  />
                  <img
                    className="relative w-[26px] h-[26px]"
                    alt=""
                    src="/linkedln.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[24px] left-[725.73px] w-[289.02px] flex flex-col items-center justify-start gap-[45px] text-5xl">
              <div className="relative font-medium">
                <p className="m-0">Do you love our feature?</p>
                <p className="m-0">Coming Soon..</p>
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="relative w-[135px] h-10 overflow-hidden shrink-0"
                  alt=""
                  src="/ios.svg"
                />
                <img
                  className="relative w-[135.72px] h-[40.02px] overflow-hidden shrink-0"
                  alt=""
                  src="/android.svg"
                />
              </div>
            </div>
      </div>
      */ }
    </FooterStyled>
    <About/>
    </div>
   
  );
};

const FooterStyled = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

export default Footer;
