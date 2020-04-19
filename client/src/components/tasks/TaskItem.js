import React, { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";
import TaskContext from "../../context/task/taskContext";
import RewardsContext from "../../context/rewards/rewardsContext";

const TaskItem = ({ task }) => {
  const [editMode, setEditMode] = useState(false);
  const [changedTask, setChangedTask] = useState(task);

  const taskContext = useContext(TaskContext);
  const { deleteTask, updateTask } = taskContext;

  const rewardsContext = useContext(RewardsContext);
  const { addCoins } = rewardsContext;

  const { id, name, reward } = task;

  const onDelete = (e) => {
    deleteTask(id);
  };

  const onChange = (e) => {
    setChangedTask({ ...changedTask, [e.target.name]: e.target.value });
  };

  const onChangeNumberInput = (e) => {
    if (isNaN(e.target.value)) {
      e.target.value.toString();
      // on older browsers, input type number might not be supported and strings might be entered. as a fallback just set the reward to 0 for now)
      setChangedTask({ ...changedTask, [e.target.name]: 0 });
      // TODO: show a form validation error client-side (only necessary in older browsers that dont implement input type "number")
    } else {
      setChangedTask({
        ...changedTask,
        [e.target.name]: parseInt(e.target.value),
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    updateTask(changedTask);
  };

  const onDone = (e) => {
    // give Points to the user who finished the task
    // todo: make sure that the points are added only to the user who is logged in and not to a global score
    addCoins(reward);

    // todo: instead of deleting, move the task to an archive (setIsDone to true and only display tasks in the tasks list that have "isDone" = false). on the archive only show the ones with isDone = true.
    deleteTask(id);
  };

  if (editMode) {
    return (
      <Fragment>
        <div className="card container">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              value={changedTask.name}
              onChange={onChange}
            />
            <input
              type="text"
              name="reward"
              value={changedTask.reward || 0}
              onChange={onChangeNumberInput}
            />
            <input
              type="submit"
              value="Save changes"
              className="btn btn-primary"
            />
            <button
              type="button"
              className="btn"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="card container">
        <h3 className="text-primary text-left">{name}</h3>
        <span className="badge">+ {reward} coins</span>
        <span style={{ float: "right" }}>
          <button className="btn btn-success" onClick={onDone}>
            Done <i className="fas fa-check"></i>
          </button>
          <button className="btn" onClick={() => setEditMode(true)}>
            <i className="fas fa-pen"></i>
          </button>
          <button className="btn" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
        </span>
      </div>
    </Fragment>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
