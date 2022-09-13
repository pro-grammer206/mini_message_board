const express = require("express");
const router = express.Router();
const messages = [
  {
    user: "John",
    text: "Behold",
    added: `${new Date().getMinutes()} minutes ago`,
  },
  {
    user: "Jim",
    text: "buckle up for the joyride",
    added: `${new Date().getMinutes() + 1} minutes ago`,
  },
  {
    user: "Jacob",
    text: "awesome life",
    added: `${new Date().getMinutes() + 2} minutes ago`,
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
});
router.get("/new", (req, res) => {
  res.render("form", { title: "Message Board" });
});
router.get("/post/:user", (req, res) => {
  const user = req.params.user;
  const post = messages.find((message) => message.user === user);
  if (post) {
    res.render("message", { title: "Post", post: post });
    return;
  }
  res.redirect("/");
});

router.post("/new", (req, res) => {
  const { user, content } = req.body;
  messages.push({ user, text: content, added: new Date() });
  res.redirect("/");
});

module.exports = router;
