import React, { useReducer } from "react";
import uuid from "uuid";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
  FILTER_TASK,
  CLEAR_FILTER,
} from "../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      {
        id: 1,
        name: "do laundry",
        reward: 50,
        isDone: false,
        quantity: 1,
      },
      {
        id: 2,
        name: "do groceries (14 articles)",
        reward: 140,
        isDone: false,
        quantity: 1,
      },
      {
        id: 3,
        name: "vacuum",
        reward: 100,
        isDone: false,
        quantity: 1,
      },
    ],
  };

  // state allows us to access anything in our state. dispatch allows us to dispatch objects to our reducer
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // add task

  // delete task

  // update task

  // set current task

  // clear current task

  // filter tasks

  // clear filter

  // return our provider, so that we can wrap our whole application in this context
  // anything we want to access from other components, goes into "value" of the provider
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;