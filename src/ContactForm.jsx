import axios from "axios";
import { useState } from "react";



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

    const sendEmail = (e) => {
        e.preventDefault();

        axios
            .post("https://api.emailjs.com/api/v1.0/email/send", data)
            .then((res) => {
                console.log("Success - ", res.data);
                setName("");
                setEmail("");
                setNumber("");
                setMessage("");
                setSuccessMsg((msg) => !msg);
            })
            .catch((err) => {
                console.log("Failed - ", err);
            });
    };



    return (
        <>
            {successMsg && <div className="text-center text-green-400 font-semibold">
                Thank you! We&apos;ll get back to you soon.
            </div>}
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-zinc-700 text-pink-50 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-zinc-700 text-pink-50 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <div className="relative">
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-700 text-pink-50 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                </div>
                <textarea
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"

                    className="w-full px-4 py-2 bg-zinc-700 text-pink-50 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none" />
                <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition flex items-center justify-center"
                    onClick={sendEmail}
                >
                    Send Message
                </button>
            </form>
        </>
    )
}
export default ContactForm