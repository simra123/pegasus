import { Table } from "antd";
import "antd/dist/antd.min.css";
import React from "react";
import { Link } from "react-router-dom";
import "./Checkout";

const columns = [
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a href="#0">{text}</a>,
  },
  {
    title: "Product Quty.",
    dataIndex: "prodcount",
    key: "prodcount",
  },
  {
    title: "Product Description",
    dataIndex: "proddesc",
    key: "proddesc",
  },
  {
    title: "Category",
    key: "prodcat",
    dataIndex: "prodcat",
  },
  {
    title: "Store",
    key: "prodstore",
    dataIndex: "prodstore",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    prodcount: 32,
    proddesc: "Maecenas nisl diam, laoreet ac ullamcorper vitae,",
    prodcat: ["Smok", "Vaporesso"],
    prodstore: "VapeStore",
  },
];

const Cart = () => {
  return (
    <>
      <div className="content_wrap">
        <section className="sec sec2 wishlist_wrap cart_wrap">
          <div className="container">
            <div className="inner_wrap">
              <h2>Cart</h2>
              <div className="content_wrap">
                <div className="col">
                  <Table columns={columns} dataSource={data} />
                </div>
                <div className="col">
                  <div className="added_prod_details">
                    <div className="cartdetails_wrap">
                      <h4>Order Summery</h4>
                      <span className="title_label">Items Total</span>
                      <span className="value_label">$ 499</span>
                      <span className="title_label">Delivery Fee</span>
                      <span className="value_label">$ 499</span>
                      <span className="title_label">Total Payments</span>
                      <span className="value_label">$ 499</span>
                    </div>
                    <Link to="/checkout" className="chckout_btn">
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
