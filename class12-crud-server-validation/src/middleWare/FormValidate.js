import {
    useState
} from "react";
import {
    omit
} from "lodash";
import { toast } from "react-toastify";

const initState = {
    name: "",
    email: "",
    image: "",
    mobile: "",
    address: "",
};

// userForm => Form validation custom hook
function UserForm() {
    const [contact, setContact] = useState(initState);
    const [errors, setErrors] = useState({});

    // Error printing
    const errPrint = (prop, msg) => {
        setErrors({
            ...errors,
            [prop]: msg
        });
    };

    // Validation Function
    const validate = (event, name, value) => {
        switch (name) {
            case "name":
                if (value.length === 0) {
                    errPrint(name, "Name field must be filled");
                } else if (value.length < 3) {
                    errPrint(name, "Name should have at least 3 characters");
                } else if (!new RegExp(/^[a-zA-Z\s]+$/).test(value)) {
                    errPrint(name, "Invalid Name");
                } else {
                    let newOb = omit(errors, "name");
                    setErrors(newOb);
                }
                break;

            case "email":
                if (value.length === 0) {
                    errPrint(name, "Email field must be filled");
                } else if (
                    !new RegExp(/^[a-zA-Z0-9\S]+@[a-zA-Z\S]+\.[a-zA-Z\S]+$/).test(value)
                ) {
                    errPrint(name, "Invalid Email format");
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb);
                }
                break;

            case "image":
                if (value.length === 0) {
                    errPrint(name, "Image field must be filled");
                } else if (!new RegExp(/^\S+$/).test(value)) {
                    errPrint(name, "Invalid Image URL");
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb);
                }
                break;

            case "mobile":
                if (value.length === 0) {
                    errPrint(name, "Mobile field must be filled");
                } else if (!new RegExp(/^[6-9]\d{9}$/).test(value)) {
                    errPrint(name, "Invalid Mobile Number.");
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb);
                }
                break;

            case "address":
                if (value.length === 0) {
                    errPrint(name, "Address field must be filled");
                } else if (
                    !new RegExp(/^([a-zA-Z0-9/\\''(),-/#\s]{2,225})$/).test(value)
                ) {
                    errPrint(name, "Invalid Address.");
                } else {
                    let newOb = omit(errors, name);
                    setErrors(newOb);
                }
                break;

            default:
                break;
        }
    };

    const readValue = (e) => {
        const {
            name,
            value
        } = e.target;
        validate(e, name, value);
        setContact({
            ...contact,
            [name]: value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0 && Object.keys(contact).length !== 0 ) {
            console.log("New Contact : ",contact);
        } else {
            toast.error("Some errors are in form or fields are empty");
        }
    };
    return {
        contact,
        errors,
        readValue,
        submitHandler,
        setContact,
    };
}

export default UserForm;