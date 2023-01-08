import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./EmailRow.css";
import { selectMail } from "./features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    history.push("/mail");
  };

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail")
    
  };
  return (
    <div className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow_title" onClick={openMail}>
        {title}
      </h3>
      <div className="emailRow_message">
        <h4>
          {subject}
          <span className="emailRow_description">-{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
