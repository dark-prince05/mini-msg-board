const { Router } = require("express");

const indexRouter = Router();

const today = new Date();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} ${today.toTimeString().split(" ")[0].slice(0, 5)}`,
  },
  {
    text: "Hello there!",
    user: "Charles",
    added: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} ${today.toTimeString().split(" ")[0].slice(0, 5)}`,
  },
  {
    text: "Don't leave goofy ah messages! 😏",
    user: "Dev",
    added: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} ${today.toTimeString().split(" ")[0].slice(0, 5)}`,
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "Mini Messageboard" });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.msg,
    user: req.body.username,
    added: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} ${today.toTimeString().split(" ")[0].slice(0, 5)}`,
  });
  res.redirect("/");
});

module.exports = indexRouter;
