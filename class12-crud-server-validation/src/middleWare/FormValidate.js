import React, { useState } from 'react';

const initState = {
    name: '',
    email: '',
    image: '',
    mobile: '',
    address: ''
};

// userForm => Form validation custom hook
function UserForm() {
    const [contact, setContact] = useState(initState);
    const [errors, setErrors] = useState({});

    // Error printing
    const errPrint = (prop, msg) => {
        setErrors({...errors, [prop]:msg});
    };

    // Validation Function
    const validate = (event, name, value) => {
        switch (name) {
            case "name":
                if (value.length === 0) {
                    errPrint(name, "Name field must be filled");
                }
                break;
        
            default:
                break;
        }
    };
       

        const readValue = (e) => {
            const {name, value} = e.target;
           validate(e, name, value);
           setContact({...contact, [name]:value});
        };
        
        const submitHandler = async (e) => {
        e.preventDefault();
        console.log(contact);
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