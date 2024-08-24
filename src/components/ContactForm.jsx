import React, { useState } from "react";
import Button from "./Button";
function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    setIsSending(true);
    setError(null); // Reset any previous errors
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setIsSending(false);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong, please try again.");
      setIsSending(false);
    }
  };

  const handleTabKey = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();

      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      textarea.value =
        textarea.value.substring(0, start) +
        "\t" +
        textarea.value.substring(end);

      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <form id="contact-form" onSubmit={onSubmit} className="d-flex flex-column">
      <div className="input-wrapper mb-4">
        <p className="mb-1">Name</p>
        <input type="text" name="name" placeholder="Enter your name" />
      </div>
      <div className="input-wrapper mb-4">
        <p className="mb-1">Email</p>
        <input type="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="input-wrapper mb-4">
        <p className="mb-1">Message</p>
        <textarea
          rows="5"
          onKeyDown={handleTabKey}
          onChange={handleInputChange}
          name="message"
          placeholder="Enter your message here"
        ></textarea>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Button
          label={isSending ? "Sending..." : "Send Message"}
          disabled={isSending}
        />
      </div>
      {error && <p className="text-danger mt-3">{error}</p>}
    </form>
  );
}

export default ContactForm;
