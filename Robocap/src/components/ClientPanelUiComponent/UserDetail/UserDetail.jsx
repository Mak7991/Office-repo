import React from "react";
// library
import { Link } from "react-router-dom";
import { MobileOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
// scss
import "./UserDetail.scss";

const UserDetail = () => {
  return (
    <div className="detail-panel">
      <div className="sub-detail-panel">
        <div className="user-detail">
          <div>
            <h5>Your Advisor</h5>
            <h1>EK Global Capital (Pvt.) Ltd</h1>
            <div className="contact">
              <MobileOutlined /> <p>+92-21-35344581</p>
            </div>
            <div className="email">
              <MailOutlined /> <p>support@ekglobalcapital.com</p>
            </div>
            <div className="address">
              <HomeOutlined />
              <p>10-C, 3rd Floor, Lane-9, Ittehad Commercial, Phase-VI, DHA, Karachi, Pakistan</p>
            </div>
          </div>
        </div>
        <div className="assets-detail">
          <div className="total-values">
            {/* <div className="new-account">
              <Link to="/newaccount" className="new-account-btn">
                <i className="btn-icon">
                  <PlusOutlined style={{ color: "#fff", width: "20px" }} />
                </i>
                <span>Open a new account</span>
              </Link>
            </div> */}
            <div className="user-assets-detail">
              <Row>
                <img
                  src={require("../../../assets/images/wallet.png")}
                  alt="wallet"
                  className="icon"
                />
                <Col>
                  <h5>Total Net Worth (3 Accounts)</h5>
                  <p>PKR 553,706.67</p>
                </Col>
              </Row>
            </div>
            <div className="user-assets-detail">
              <Row>
                <img
                  src={require("../../../assets/images/assets.png")}
                  alt="wallet"
                  className="icon"
                />
                <Col>
                  <h5>Total Managed Assets (1 Account)</h5>
                  <p>PKR 53,706.67</p>
                </Col>
              </Row>
            </div>
            <div className="user-assets-detail">
              <Row>
                <img
                  src={require("../../../assets/images/link.png")}
                  alt="wallet"
                  className="icon"
                />
                <Col>
                  <h5>
                    Held-away Net Worth <Link to="/Accounts">(2 Accounts)</Link>
                  </h5>
                  <p>PKR 500,000.00</p>
                </Col>
              </Row>
            </div>
            <div className="user-assets-detail">
              <Row>
                <img
                  src={require("../../../assets/images/earning.png")}
                  alt="wallet"
                  className="icon"
                />
                <Col>
                  <h5>Total Earnings</h5>
                  <p>-PKR 45,295.98</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
