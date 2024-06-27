let fs = require("fs");
let path = require("path");

let files = fs.readdirSync(__dirname);

for (let file of files) {
  let ext = path.extname(file).substring(1);
  console.log(ext);
  if (ext != "json" && ext != "js") {
    if (fs.existsSync(ext)) {
      if (path.extname(file).substring(1) === ext) {
        fs.rename(file, path.join(ext, file), (err) => {
          if (err) throw err;
          console.log("file moved");
        });
      }
    } else {
      fs.mkdir(ext, () => {
        console.log("folder created");
      });
    }
  }
}
