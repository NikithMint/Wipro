import React from "react";
import "./Table.css"; // Create this for styling

const transactions = [
  { card: "MasterCard *4920", type: "Credit", date: "Jun 24, 2023 10:00 am", status: "Verified", amount: 290.0,image:"https://www.shutterstock.com/image-vector/mastercard-icon-orange-red-260nw-2457881495.jpg" },
  { card: "Visa *4230", type: "Debit", date: "Jun 20, 2023 11:00 am", status: "Rejected", amount: 49.0,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdRE4elIptBYNu_D2M6TxSKgXooAfkt0fRQ&s" },
  { card: "Visa *5510", type: "Credit", date: "Jun 19, 2023 2:00 pm", status: "Pending", amount: -800.0,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdRE4elIptBYNu_D2M6TxSKgXooAfkt0fRQ&s" },
  { card: "Amex *0983", type: "Debit", date: "Jun 18, 2023 11:00 am", status: "Verified", amount: -30.0,image:"https://play-lh.googleusercontent.com/yVncWQyGct8JJ39fxiNoEWRcbNzEXPqAYYs8p9J2gJlqnzXyzEsFfugg_qOGLBt3vUk=w600-h300-pc0xffffff-pd" },
  { card: "MasterCard *4443", type: "Credit", date: "Jun 17, 2023 10:00 am", status: "Verified", amount: 1500.0,image:"https://www.shutterstock.com/image-vector/mastercard-icon-orange-red-260nw-2457881495.jpg" },
  { card: "Visa *7635", type: "Debit", date: "Jun 14, 2023 9:00 am", status: "Rejected", amount: 200.0,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdRE4elIptBYNu_D2M6TxSKgXooAfkt0fRQ&s" },
];

const Table = () => {
  return (
    <div className="transactions">
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Card</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index} className={txn.status.toLowerCase()}>
              
              <td><img src={txn.image} className="i"></img>  {txn.card} ({txn.type})</td>
              <td>{txn.date}</td>
              <td>{txn.status}</td>
              <td className={txn.amount >= 0 ? "positive" : "negative"}>{txn.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
