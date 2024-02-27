import React from "react";
import { Component } from "../Reusable/Store-Gaming-Systems/Component";

export const Explore = (props) => {
  const { values } = props;
  const Items = [
    {
      id: 1,
      title: "Online Store",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/en_US/merchandising/MNS_desktop_TEST",
      text: " Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over.",
      btnText: "Start shopping",
    },
    {
      id: 2, // changed the id for the second item
      title: "Gaming Systems",
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/en_US/merchandising/Nintendo_Switch_family_wide_TEST-1",
      text: "Find the perfect Nintendo Switch system for you.",
      btnText: "Explore Now",
    },
  ];
  return (
    <>
      {values === "Online Store" ? (
        <div>
          <Component item={Items[0]} />
        </div>
      ) : (
        <div>
          <Component item={Items[1]} />
        </div>
      )}
    </>
  );
};
