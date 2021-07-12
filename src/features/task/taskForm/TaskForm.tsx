import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTask,
  handleModalClose,
  selectedTask,
  handleTaskEidt,
} from "../taskSlice";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";

type Inputs = {
  taskTitle: string;
};
type ProType = {
  edit?: boolean;
};
const TaskForm: React.FC<ProType> = ({ edit }) => {
  const dispatch = useDispatch();
  const currentTask = useSelector(selectedTask);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };
  const handleEdit = (data: Inputs) => {
    console.log(data);
    const sendData = { ...currentTask, title: data.taskTitle };
    dispatch(handleTaskEidt(sendData));
    dispatch(handleModalClose(false));
  };
  const handleClose = () => {
    //setOpen(false);
    dispatch(handleModalClose(false));
  };

  return (
    <div className={styles.root}>
      <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
      >
        <TextField
          id="outlined-basic"
          label={edit ? "Edit Task" : "New Task"}
          defaultValue={edit ? currentTask.title : ""}
          variant="outlined"
          {...register("taskTitle", { required: true })}
          name="taskTitle"
          className={styles.text_field}
          error={Boolean(errors.taskTitle)}
          helperText={errors.taskTitle && errors.taskTitle.message}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <div className={styles.status}>
              {currentTask.completed ? "True" : "False"}
            </div>
            <button type="submit" className={styles.submit_button}>
              Submit
            </button>
            <button
              type="button"
              className={styles.cancel_button}
              onClick={handleClose}
            >
              Cancle
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;
