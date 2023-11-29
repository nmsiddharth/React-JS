import {toast} from 'react-toastify'

// Initial Data
const users = JSON.parse(localStorage.getItem("users")) || [] ;
console.log('users',users)

// Register
const registerUser = async (user) => {
    console.log('Register =', user);

    const extEmail = () => {
       return users.email === user.email;
    };
    const extMobile = () => {
        return users.mobile === user.mobile;
     };

    if (extEmail) {
        toast.warning(`${users.email} already exists`)
    }
    else if(extMobile){
        toast.warning(`${users.mobile} is already registered`);
    }
    else{
        user.push(user);
        saveUsers(user);
        toast.success(`Hi, ${users.name} you have registered successfully`);
        window.location.href = "/login";
    }
    
};

// Save Data
const saveUsers = (data) => {
    localStorage.setItem("users", JSON.stringify(data));
}
export { registerUser } ;