const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
// body-parser 설정, post 정보 전송 시 req.body로 받을 수 있게 도와줌
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// GET /
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// mvc 적용 이후
const indexRouter = require("./routes");
app.use("/", indexRouter);

// 맨 마지막 라우터로 선언
app.get("*", (req, res) => {
  res.render("404");
});
