import {toast} from 'react-toastify'

// Initial Data
const users =JSON.parse(localStorage.getItem('users')) || [] ;
console.log('users',users)

// Register
const registerUser = async (user) => {
    console.log('Register =', user);

    const extEmail = users.find((item)=> item.email === user.email);
    const extMobile = users.find((item)=> item.mobile === user.mobile);


    if(extEmail){
        toast.warning(`${user.email} already exists`);
    }
    else if(extMobile){
        toast.warning(`${user.mobile} already exists`);
    }
    else{
        users.push(user);
        saveUsers(users);
        toast.success(`${user.name} you have successfully registered`);
        window.location.href = "/login";
    }

};
// Save Data
const saveUsers = (data) => {
    localStorage.setItem("users", JSON.stringify(data));
};

// Login Handler
const loginUser = async (user) => {
    const extUser = users.find((item)=> item.email === user.email);
  
    if(!extUser){
        toast.warning(`${user.email} not exists`);
    }
    else{
      if (extUser.password === user.password) {
        localStorage.setItem('loginStatus', true); 
        toast.success('User Login success');
        window.location.href = '/';
      }
      else{
        toast.warning('Passwords are not matching');

      }

    }
};

// Logout Handler
const logoutUser = async () => {
    if (localStorage.getItem('loginStatus') === 'true') {
        localStorage.removeItem('loginStatus');
        toast.success("Successfully Logout");
        window.location.href = "/";
    }
};

export { registerUser, loginUser, logoutUser };