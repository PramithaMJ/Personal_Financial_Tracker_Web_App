import React, { useState } from "react";
import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";
import {
  bitcoin,
  book,
  calender,
  cancel,
  card,
  circle,
  clothing,
  comment,
  edit,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
  other,
  pocketMoney,
  commition,
  interest,
  gift,
  rent,
  taxi,


  

} from "../../utils/Icons";
import Button from "../Button/Button";
import UpdateForm from "../Form/UpdateForm";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
  updateItem,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 

  const handleUpdateClick = () => {
    setIsUpdating(!isUpdating);
    setIsEditing(!isEditing);
  };

  const handleCancelClick = () => {
    setIsUpdating(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedIncome = {
      id,
      title,
      description,
      amount,
      date,
      category,
    };

    updateItem(updatedIncome);
  };

  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return other;
      case "pocketMoney":
        return pocketMoney;
      case "commition":
        return commition;
      case "interest":
        return interest;
      case "gift":
        return gift;
      case "rent":
        return rent;
      case "taxi":
        return taxi;
      case "food":
        return food;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      case "rent":
        return rent;
      case "gift":
        return gift;
      default:
        return "";
    }
  };

  console.log("type", type);

  return (
    <IncomeItemStyled indicator={indicatorColor} className="transition-transform transform hover:scale-105">
      
      <div className="icon">
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              LKR. {amount}
            </p>
            <p>
              {calender} {dateFormat(date)}
            </p>
            <p>
              {comment}
              {description}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--primary-color"}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"var(--color-green)"}
              onClick={() => deleteItem(id)}
            />
            {!isUpdating && (
              <Button
                icon={edit}
                // name={isEditing ? "Save" : "Update"} 
                bPad="1rem"
                bRad="50%"
                bg="var(--primary-color"
                color="#fff"
                iColor="#fff"
                hColor="var(--color-green)"
                onClick={handleUpdateClick}
              />
            )}
            {isUpdating && (
              <Button
                icon={cancel}
                // name="Cancel"
                bPad="1rem"
                bRad="50%"
                bg="var(--primary-color"
                color="#fff"
                iColor="#fff"
                hColor="var(--color-green)"
                onClick={handleCancelClick}
              />
            )}
          </div>
        </div>

        <div>
          {/* Display income details */}

          {isUpdating ? (
            <UpdateForm
              id={id}
              title={title}
              description={description}
              amount={amount}
              date={date}
              type={type}
              category={category}
              updateItem={updateItem}
              setIsUpdating={setIsUpdating}
            />
          ) : (
            <div>
              <p>Title: {title}</p>
              <p>Description: {description}</p>
              <p>Amount: LKR.{amount}</p>
              <p>Date: {date}</p>
              <p>Type: {type}</p>
              <p>Category: {category}</p>
              <button
  onClick={handleUpdateClick}
  className="bg-purple-950 hover:opacity-90 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
>
  Edit
</button>

              {/* <button onClick={() => deleteItem(id)}>Delete</button> */}
            </div>
          )}
        </div>
      </div>
    </IncomeItemStyled>
  );
}

const IncomeItemStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff;
    i {
      font-size: 2.6rem;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${(props) => props.indicator};
      }
    }

    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-color);
          opacity: 0.8;
        }
      }
    }
  }
`;

export default IncomeItem;
