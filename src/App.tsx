import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/header/Header";
import styles from "./App.module.scss";
import TaskForm from "./features/task/taskForm/TaskForm";
import TaskList from "./features/task/taskList/TaskList";
import { fetchTasks } from "./features/task/taskSlice";
import { AppDispatch } from "./app/store";

const App: React.FC = () => {
  // console.log("11111");
  console.log(process.env.REACT_APP_FIREBASE_APIKEY);
  console.log(process.env.REACT_APP_FIREBASE_AUTHDOMAIN);
  console.log(process.env.REACT_APP_FIREBASE_PROJECTID);
  console.log(process.env.REACT_APP_FIREBASE_DATABASE_URL);
  console.log(process.env.REACT_APP_FIREBASE_STORAGEBUCKET);
  console.log(process.env.REACT_APP_FIREBASE_MESSAGEINGSENDERID);
  console.log(process.env.REACT_APP_FIREBASE_APPID);
  // console.log(auth);
  // console.log("11111");
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      dispatch(fetchTasks());
    };
    getData();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
