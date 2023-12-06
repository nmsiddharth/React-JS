import {toast} from "react-toastify";

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Random ID Generator
const randId = () => {
    return Math.floor(Math.random() * 1000);
}

// Save the Task
const saveTask = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
};

// Store the Tasks
const createTask = async (task) => {
    // console.log("Task.js =", task);
    
    try {
        const extTask = tasks.find((item)=> item.title === task.title);
        if (extTask) {
        toast.warning(`${task.title} already exists`);
        } 
        else {
            const newTask = {
                id: randId(),
                ...task,
            };
            tasks.push(newTask);
            saveTask(tasks);
            toast.success("New task created successfully");
            window.location.href = "/"; 
        } 
    } catch (error) {
        toast.error(error.message);
    };
};

export { createTask };