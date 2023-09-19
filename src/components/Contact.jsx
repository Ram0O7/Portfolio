"use client";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../../config";
import { useThemeContext } from "@/context/ThemeContext";

async function sendContactEmail(body, toastId) {
  // Define the data you want to send in the request body
  const requestData = {
    name: body.name,
    email: body.email,
    message: body.message,
  };

  try {
    const result = await fetch(`${baseURL}/api/user`, {
      method: "POST",
      body: JSON.stringify(requestData),
    });
    //making fetch request to backend to store client's data to the database
    const { message, statusCode } = await result.json();
    // extracting the response data to show appropriate messages according to the status code recieved
    if (statusCode === 201) {
      toast.update(toastId, {
        render: message,
        type: toast.TYPE.SUCCESS,
        autoClose: 5000,
      });
    } else if (statusCode === 400) {
      toast.update(toastId, {
        render: message,
        type: toast.TYPE.WARNING,
        autoClose: 5000,
      });
    } else {
      toast.update(toastId, {
        render: message,
        type: toast.TYPE.ERROR,
        autoClose: 5000,
      });
    }
  } catch (error) {
    console.log(error);
    // Handle any errors that occur during the request
    if (!error.response) {
      toast.update(toastId, {
        render: "internet connection required!",
        type: toast.TYPE.WARNING,
        autoClose: 5000,
      });
    } else {
      toast.update(toastId, {
        render: "falid to recieve info, try again!",
        type: toast.TYPE.ERROR,
        autoClose: 5000,
      });
    }
  }
}

const Contact = () => {
  const { theme, mode } = useThemeContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const toastRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toastRef.current = toast.info("processing your info...");
    //clearing the form
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
    // posting data to airtable and reacieving as email from aws
    sendContactEmail({ name, email, message }, toastRef.current);
  };

  return (
    <div
      id="contact"
      className={`contact_form flex flex-col sm:grid grid-cols-2 w-full justify-between gap-8 font-bold text-center sm:text-left py-8 lg:py-16 border-t border-${theme}-txt`}
    >
      <div className="flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl">Get in touch!</h1>
        <p className={`text-xs sm:text-sm max-w-sm text-${theme}-txt/70`}>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <form
        action="submit"
        className="flex flex-col gap-5 text-sm font-bold"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            ref={nameInputRef}
            type="text"
            placeholder="name"
            required
            onChange={() => setName(nameInputRef.current.value)}
          />
        </div>
        <div>
          <input
            ref={emailInputRef}
            type="email"
            placeholder="email"
            required
            onChange={() => setEmail(emailInputRef.current.value)}
          />
        </div>
        <div>
          <textarea
            ref={messageInputRef}
            rows={4}
            cols={30}
            type="text"
            placeholder="message"
            className="resize-none"
            required
            onChange={() => setMessage(messageInputRef.current.value)}
          />
        </div>
        <div className="self-end">
          <button
            type="submit"
            className={`btn after:bg-${theme}-secondary-accent relative uppercase tracking-widest pb-1`}
          >
            send message
          </button>
        </div>
      </form>
      <ToastContainer theme={mode} autoClose={false} />
    </div>
  );
};

export default Contact;
