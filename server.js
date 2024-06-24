const { createServer } = require("http");
const ejs = require("ejs");
const path = require("path");

const PORT = process.env.PORT || 4000;

const server = createServer(async (req, res) => {
  if (req.url === "/") {
    await ejs.renderFile(
      path.join(__dirname, "views", "home.ejs"),
      {
        pageName: "home",
      },
      {},
      (err, str) => {
        if (err) throw err;
        console.log(str);
        res.setHeader("Content-Type", "text/html");
        res.write(str);
        res.end();
      }
    );

    //res.end(html);
  }
});

server.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`);
});
