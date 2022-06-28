import React, { useState } from "react";
import Header from "../../components/molecules/header/Header";
import Container from "./style";

const Contacto = () => {
    // States for contact form fields
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    // Validation check method
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
            // tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            // tempErrors["email"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            // tempErrors["message"] = true;
            isValid = false;
        }

        // setErrors({ ...tempErrors });
        // console.log("errors", errors);
        return isValid;
    };

    // //   Handling form submit

    const handleSubmit = async (e) => {

        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            console.log(fullname, email, message);
            //     // setButtonText("Sending");
            const res = await fetch("/api/sendmail", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                // setShowSuccessMessage(false);
                // setShowFailureMessage(true);
                // setButtonText("Send");
                return;
            }
            else {
                console.log("no devolvió error ");
            }
            //     // setShowSuccessMessage(true);
            //     // setShowFailureMessage(false);
            //     // setButtonText("Send");
        }
        else {
            console.log("faltan completar datos");
        }
    };
    return (
        <Container>
            <Header title="Contacto" />
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre y apellido:
                    <input
                        type="text"
                        name="fullname"
                        value={fullname}
                        onChange={(e) => {
                            setFullname(e.target.value);
                        }}
                        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
                </label>
                <label>
                    Mensaje:
                    <input
                        type="text"
                        name="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
                </label>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </Container>
    );

}

export default Contacto