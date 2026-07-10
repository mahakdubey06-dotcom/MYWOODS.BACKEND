const getUsers = (req, res) => {
  res.json({ message: "Get all users" });
};

const getUser = (req, res) => {
  res.json({
    message: "Get single user",
    id: req.params.id,
  });
};

const updateUser = (req, res) => {
  res.json({
    message: "User updated",
    id: req.params.id,
  });
};

const deleteUser = (req, res) => {
  res.json({
    message: "User deleted",
    id: req.params.id,
  });
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};