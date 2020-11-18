import React from "react";

// component
import Header from "components/shared/Header/Header";
import Container from "components/shared/Container/Container";
// library
import { Select, DatePicker, Space, Table } from "antd";
import moment from "moment";
// scss
import "./Activity.scss";

const { Option } = Select;

const dateFormat = "MM/DD/YYYY";

// const customFormat = value => {
//   return `custom format: ${value.format(dateFormat)}`;
// };

const accountsColumns = [
  {
    title: "Account",
    dataIndex: "account",
    key: "account",
    render: (text) => <a href="/AccountDetail">{text}</a>,
  },
  {
    title: "Trade Date",
    dataIndex: "tradedate",
    key: "tradedate",
  },
  {
    title: "Ticker",
    dataIndex: "ticker",
    key: "ticker",
  },
  {
    title: "Type",
    key: "type",
    dataIndex: "type",
  },
  {
    title: "Currency",
    key: "currency",
    dataIndex: "currency",
  },
  {
    title: "Quantity",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "Price",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "Amount",
    key: "amount",
    dataIndex: "amount",
  },
  {
    title: "Description",
    key: "discription",
    dataIndex: "discription",
  },
];

const Activity = () => {
  return (
    <div className="activity-page">
      <Header />
      <Container>
        <section className="account-activity">
          <div className="filter-bar">
            <div className="account-field">
              <h4> Account:</h4>
              <Select placeholder="Select Account" allowClear>
                <Option value="">DU1987191</Option>
              </Select>
            </div>
            <div className="type-field">
              <h4> Type:</h4>
              <Select placeholder="Select Type" allowClear>
                <Option value="Deposit">Deposit</Option>
                <Option value="Withdrawal">Withdrawal</Option>
                <Option value="Dividend">Dividend</Option>
                <Option value="Fee">Fee</Option>
                <Option value="Interest">Interest</Option>
                <Option value="luSecurityTransfercy">Security Transfer</Option>
                <Option value="Trade">Trade</Option>
              </Select>
            </div>
            <div className="start-date">
              <h4>Select Start Date:</h4>
              <Space direction="vertical">
                <DatePicker defaultValue={moment("01/01/2000", dateFormat)} format={dateFormat} />
              </Space>
            </div>
            <div className="end-date">
              <h4>Select End Date:</h4>
              <Space direction="vertical">
                <DatePicker defaultValue={moment("01/01/2000", dateFormat)} format={dateFormat} />
              </Space>
            </div>
          </div>
          <div className="activity-table">
            <Table columns={accountsColumns} pagination={true} className="table" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Activity;
