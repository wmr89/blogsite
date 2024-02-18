const router = require("express").Router();
const { Blogpost, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

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
        { model: User },
        { model: Comment, include: [{ model: User }] },
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

router.post('/:id/comment', withAuth, async (req, res) => {
  try {
    const blogpostId = req.params.id;
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      blogpost_id: blogpostId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogpostData) {
      res.status(404).json({ message: 'No blogpost found with this id!' });
      return;
    }

    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
