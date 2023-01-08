import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h2>New Message</h2>
        <Close
          className="sendMail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        <p>{errors.to && <p className="sendMail_error">To is REQUIRED!</p>}</p>
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        <p>
          {errors.subject && (
            <p className="sendMail_error">Subject is REQUIRED!</p>
          )}
        </p>
        <input
          name="message"
          type="text"
          className="sendMail_message"
          ref={register({ required: true })}
        />
        <p>
          {errors.message && (
            <p className="sendMail_error">Message is REQUIRED!</p>
          )}
        </p>
        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            color="primary"
            variant="constrained"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
