import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserProfile from "./Components/UserProfile";
import TodoList from "./Components/Todos";
import AddTask from "./Components/AddTask";
import { useDispatch } from "react-redux";
import { getTasks } from "./Api";
import { addTasks } from "./Store/Reducers/Tasks";

const TodoHeader = () => {
  return (
    <div className='w-full h-14 flex items-center border-2 border-gray-200 flex-row px-2 rounded bg-[#a08a71] bg-opacity-90 '>
      <img src={"/icons/list.svg"} alt='List Icon' className='w-6 h-6' />
      <span className='text-white ml-3'>Your Todos</span>
      <img
        src={"/icons/chevron.svg"}
        alt='chevron Icon'
        className='w-6 h-6 ml-auto cursor-pointer'
      />
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTasks()
      .then((res) => {
        dispatch(addTasks(res.data.tasks));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className='app_container bg-slate-400  flex items-center justify-center h-screen w-screen'>
        <div className='todo_container w-4/5  md:w-3/5 lg:w-2/5 flex flex-col items-center justify-around '>
          <UserProfile />
          <AddTask />
          <TodoHeader />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
