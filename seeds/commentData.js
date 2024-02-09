const { Comment } = require("../models");

const commentData = [
  { body: "This blog was awesome", user_id: 2, blogpost_id: 1 },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
