const router = require("express").Router();
const { Blogpost, Comment, User } =require('../../models')

router.get("/", async (req, res) => {
  // find all Blogpost
  try {
    const blogpostData = await Blogpost.findAll({});
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single blogpost by its `id`
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id, {
       include: [
     {model: Comment}
   ],
    });
    if (!blogpostData) {
      res.status(404).json({ message: "No blogpost found with that id!" });
      return;
    }
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
