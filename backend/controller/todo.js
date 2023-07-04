import Todo from "../models/todo.js";

//to post a todo task
export const postTask = async (req, res) => {
  const { title } = req.body;
  try {
    const task = await Todo.create({
      title,
    });

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//to get all the todo tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//to get a todo task by id
export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Todo.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//to update a todo task by id
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { isComplete } = req.body;
  try {
    console.log(id, isComplete);
    const task = await Todo.findByIdAndUpdate(
      id,
      { isComplete },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//to delete a todo task by id
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Todo.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
