import React from "react";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Search,
  Notifications,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import "./Header.css";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="header_middle">
        <Search />
        <input type="text" placeholder="Search GMail" />
        <ArrowDropDown className="header_input" />
      </div>
      <div className="header_right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar style={{cursor: "pointer"}} src={user?.photoUrl} onClick={signOut} />
      </div>
    </div>
  );
}

export default Header;
