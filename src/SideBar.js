import {
  AccessTimeFilled,
  Add,
  Drafts,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  Person,
  Phone,
  Send,
  Star,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
import SideBarOption from "./SideBarOption";
import "./SideBar.css";

function SideBar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        className="sidebar_compose"
        startIcon={<Add fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SideBarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SideBarOption Icon={Star} title="Starred" number={54} />
      <SideBarOption Icon={AccessTimeFilled} title="Snoozed" number={54} />
      <SideBarOption Icon={LabelImportant} title="Important" number={54} />
      <SideBarOption Icon={Send} title="Sent" number={54} />
      <SideBarOption Icon={Drafts} title="Draft" number={54} />
      <SideBarOption Icon={ExpandMore} title="More" number={54} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
