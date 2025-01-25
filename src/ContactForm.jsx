import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const ids = {
    service: import.meta.env.VITE_SERVICE_ID,
    template: import.meta.env.VITE_TEMPLATE_ID,
    user: import.meta.env.VITE_USER_ID,
  };

  const data = {
    service_id: ids.service,
    template_id: ids.template,
    user_id: ids.user,
    template_params: {
      from_name: name,
      to_name: "Saqib",
      from_email: email,
      from_num: number,
      message: message,
    },
  };

  const [successMsg, setSuccessMsg] = useState(false);
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name.length) {
      return toast.error("Enter Name");
    }
    if (name.length < 3) {
      return toast.error("Enter Fullname");
    }
    if (!email.length) {
      return toast.error("Enter Email");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Email is not valid");
    }
    if (!number.length) {
      return toast.error("Enter Phone Number");
    }
    if (!message.length) {
      return toast.error("Enter your Message");
    }
    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then((res) => {
        toast.success("Sent Successfully");
        console.log("Success - ", res.data);
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
        setSuccessMsg((msg) => !msg);
      })
      .catch((err) => {
        console.log("Failed - ", err);
        toast.error("Bad Request! Try Again");
      });
  };

  return (
    <>
      {successMsg && (
        <div className="text-center font-semibold text-green-400">
          Thank you! We&apos;ll get back to you soon.
        </div>
      )}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <div className="relative">
          <input
            type="tel"
            maxLength={14}
            placeholder="(+Country Code) Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full rounded-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <textarea
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className="w-full resize-none rounded-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-pink-600 py-2 text-white transition hover:bg-pink-700"
          onClick={sendEmail}
        >
          Send Message
        </button>
        <Toaster
          toastOptions={{
            style: {
              backgroundColor: "#3f3f46",
              color: "#eeeeee",
            },
          }}
        />
      </form>
    </>
  );
};
export default ContactForm;
