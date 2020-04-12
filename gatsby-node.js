const path = require("path");
const fs = require("fs");

const extractPath = (fileName) => {
  if (fileName === "index.js") {
    return "/";
  }

  return fileName.split(".").slice(0, -1).join(".");
};

const readFiles = (directoryPath) => new Promise((resolve) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return new Error("Unable to scan directory");
    }

    return resolve(files);
  });
});

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const screensDir = path.join(__dirname, "client/screens");
  return readFiles(screensDir)
    .then((files) => files.forEach((file) => {
      const component = path.resolve(`client/screens/${file}`);
      createPage({
        path: extractPath(file),
        component,
      });
    }))
    .catch(() => "Something went wrong");
};
