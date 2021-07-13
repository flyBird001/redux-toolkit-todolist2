import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Modal from "@material-ui/core/Modal";
import { useDispatch } from "react-redux";
import {
  handleModalOpen,
  handleModalClose,
  selectIsModalOpen,
  handleSelectedTask,
  handleTaskDelete,
  handleTaskStatus,
} from "../taskSlice";
import { useSelector } from "react-redux";
//import { selectIsModalOpen } from "../taskSlice";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./TaskItem.module.scss";
import TaskForm from "../taskForm/TaskForm";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

interface ProTypes {
  task: Task;
}
const TaskItem: React.FC<ProTypes> = ({ task }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
  // Modal action
  //const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    //setOpen(true);
    dispatch(handleModalOpen(true));
    dispatch(handleSelectedTask(task));
    //
  };

  const handleClose = () => {
    //setOpen(false);
    dispatch(handleModalClose(false));
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon className={styles.icon} />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          checked={task.completed}
          //onChange={() => console.log(`check ${task.id}`)}
          onChange={() => dispatch(handleTaskStatus(task.id))}
          className={styles.checkbox}
        />
        {/* 編集ボダン */}
        <button className={styles.button_edit} onClick={handleOpen}>
          <EditIcon />
        </button>
        {/* 削除ボダン */}
        <button
          className={styles.button_delete}
          //onClick={() => console.log(`delete ${task.id}`)}
          onClick={() => dispatch(handleTaskDelete(task.id))}
        >
          <DeleteIcon />
        </button>
      </div>
      <Modal open={isModalOpen} onClose={handleClose} className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Modal Title</div>
          <TaskForm edit />
        </div>
      </Modal>
    </div>
  );
};
export type { Task };
export default TaskItem;
