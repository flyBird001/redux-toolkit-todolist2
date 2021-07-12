import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { Task } from "./taskItem/TaskItem";

// state 作成
interface taskState {
  idCount: number;
  tasks: Task[];
  selectedTask: Task;
  isModalOpen: boolean;
}

//　初期state
const initialState: taskState = {
  idCount: 1,
  tasks: [{ id: 1, title: "Task-Redux", completed: false }],
  selectedTask: { id: 0, title: "", completed: false },
  isModalOpen: false,
};

// Slice作成
export const taskSlice = createSlice({
  // 名称
  name: "task",
  // 初期化state
  initialState,
  // action 作成
  reducers: {
    // create task action
    // Stateを反映する
    createTask: (state, action) => {
      //
      state.idCount++;
      const newTask: Task = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    //
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    //
    handleModalClose: (state, action) => {
      state.isModalOpen = action.payload;
    },
    //selectedTask
    handleSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    //
    handleTaskEidt: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
    //削除Task
    handleTaskDelete: (state, action) => {
      const tasks = state.tasks.filter((t) => t.id !== action.payload);
      state.tasks = tasks;
    },
    //Task 状態変更
    handleTaskStatus: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const {
  createTask,
  handleModalOpen,
  handleModalClose,
  handleSelectedTask,
  handleTaskEidt,
  handleTaskDelete,
  handleTaskStatus,
} = taskSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync =
//   (amount: number): AppThunk =>
//   (dispatch) => {
//     setTimeout(() => {
//       dispatch(incrementByAmount(amount));
//     }, 1000);
//   };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// selectTask 作成　⇒　selector 作成
export const selectTasks = (state: RootState): taskState["tasks"] =>
  state.task.tasks;
export const selectIsModalOpen = (state: RootState): taskState["isModalOpen"] =>
  state.task.isModalOpen;
export const selectedTask = (state: RootState): taskState["selectedTask"] =>
  state.task.selectedTask;
export default taskSlice.reducer;
