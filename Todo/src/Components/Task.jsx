import React, { useState } from "react";
import { deleteTask, updateTask } from "../Api";
import { useDispatch } from "react-redux";
import {
  deleteTask as deleteFromStore,
  updateTask as updateFromStore,
} from "../Store/Reducers/Tasks";
import { toast } from "react-toastify";
import moment from "moment";

export default function Task({ task }) {
  const [showInfo, setShowInfo] = useState(false);
  const [update, setUpdate] = useState(false);

  const dispatch = useDispatch();

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleDeleteTask = () => {
    deleteTask(task._id)
      .then((res) => {
        toast("Task deleted successfully", { type: "success" });
        dispatch(deleteFromStore(task._id));
      })
      .catch((err) => {
        console.log(err);
        toast("Something went wrong", { type: "error" });
      });
  };

  const handleUpdateTask = () => {
    updateTask(task._id, !task.isComplete)
      .then((res) => {
        toast("Task updated successfully", { type: "success" });
        dispatch(updateFromStore(res.data.task));
      })
      .catch((err) => {
        console.log(err);
        toast("Something went wrong", { type: "error" });
      });
  };

  console.log(task);

  return (
    <div className='w-full '>
      <div className='flex  py-3 border-b-2 border-gray-500 flex-row justify-start items-center px-3'>
        {task.isComplete ? (
          <img
            src={"/images/checked.png "}
            alt='check circle Icon'
            className='w-6 h-6 z-10 cursor-pointer'
            onClick={handleUpdateTask}
          />
        ) : (
          <img
            src={"/images/unchecked.png"}
            alt='check circle Icon'
            className='w-6 h-6 z-10 cursor-pointer'
            onClick={handleUpdateTask}
          />
        )}

        <h3 className='ml-3'>{task.title}</h3>
        <img
          src={"/icons/dot.svg"}
          alt='dot Icon'
          className='w-6 h-6 ml-auto  cursor-pointer'
          onClick={toggleInfo}
        />
      </div>

      {showInfo && (
        <div className='flex flex-col items-start p-5 bg-white bg-opacity-90 '>
          <span>
            Completed: {task.isComplete ? "Completed" : "Not Completed"}{" "}
          </span>
          <span>
            Created At: {moment(task.timeStamp).format("YYYY-MM-DD hh:mm A")}
          </span>
          <button
            onClick={handleDeleteTask}
            className='bg-red-100 rounded w-full mt-4 hover:bg-red-500 text-red-500 hover:text-white font-bold py-2 px-4 transition duration-300 ease-in-out'
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
