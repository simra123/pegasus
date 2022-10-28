import { Table } from "antd";
import 'antd/dist/antd.min.css';
import React from "react";

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
const WishlistTable = () => <Table columns={columns} dataSource={data} />;
export default WishlistTable;
