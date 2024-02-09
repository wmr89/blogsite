const { User } = require("../models/");

const userData = [
  {
    username: "awesomeDave",
    email: "daveisawesome@email.com",
    password: "password1234",
  },
  {
    username: "awesomeJoe",
    email: "joeisawesome@email.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;