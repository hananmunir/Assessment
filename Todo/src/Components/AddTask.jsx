import React, { useState } from "react";
import { toast } from "react-toastify";
import { postTask } from "../Api";
import { useDispatch } from "react-redux";
import { addTask } from "../Store/Reducers/Tasks";

export default function AddTask() {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "")
      return toast("Please enter a task", { type: "error" });

    postTask(newTask)
      .then((res) => {
        toast("Task added successfully", { type: "success" });
        dispatch(addTask(res.data.task));
      })
      .catch((err) => {
        console.log(err);
        toast("Something went wrong", { type: "error" });
      });
    setNewTask("");
  };

  return (
    <div className='flex mb-4 w-full p-2 rounded bg-white'>
      <input
        type='text'
        placeholder='Enter a new task'
        value={newTask}
        onChange={handleInputChange}
        className='flex-grow p-2 mr-2 bg-white focus:outline-none'
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTask();
        }}
      />
      <button
        onClick={handleAddTask}
        className='flex-shrink-0 p-2 bg-[#bbb18c] text-white rounded hover:bg-[#d8d2bd] '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-6 h-6 text-[#91856b] '
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
      </button>
    </div>
  );
}
