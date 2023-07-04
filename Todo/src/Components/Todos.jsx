import React, { useEffect, useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

export default function TodoList() {
  const state = useSelector((state) => state);
  const [tasks, setTasks] = useState(state);

  useEffect(() => {
    setTasks(state);
  }, [state]);

  return (
    <div
      className={`bg-white overflow-y-scroll w-full h-2/4 bg-opacity-70 rounded ${
        tasks.length > 0 ? "justify-start" : "justify-center"
      } flex-col flex`}
    >
      {tasks.length > 0 ? (
        <>
          {tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </>
      ) : (
        <p className='text-center self-center  fs-l'>No tasks today</p>
      )}
    </div>
  );
}
