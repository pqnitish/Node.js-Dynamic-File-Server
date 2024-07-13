const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3001;
let folder = fs.readdirSync(__dirname, "utf-8");
console.log(folder);
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    folder.forEach((ele) => {
      //res.write(`<h1>${ele}</h1>`)
      if (fs.statSync(path.join(__dirname, ele)).isDirectory()) {
        res.write(`<a href=${ele}><li>&#128193 ${ele}</li></a>`);
      } else {
        res.write(`<a href=${ele}><li>&#128462${ele}</li></a>`);
      }
    });
    res.end();
  } else {
    const reqPath = req.url;
    res.write(reqPath);
    res.end();
  }
});
server.listen(PORT, (req, res) => {
  console.log(`server is running on port:${PORT}`);
});
