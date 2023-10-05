import { NextPage } from "next";
import React, { FC } from "react";
import AdminNav from "../../components/common/AdminNav";

interface IProps {
  // define your props here
}

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/posts", label: "Posts" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/comments", label: "Comments" },
];

const Admin: NextPage<IProps> = ({}) => {
  return (
    <div>
      <AdminNav navItems={navItems} />
      <h1 className="font-bold underline text-3xl bg-green-400 p-2">
        Admin Index
      </h1>
    </div>
  );
};

export default Admin;
