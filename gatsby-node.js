const path = require(`path`);
const fs = require(`fs`);

const extractPath = (fileName) => {
  if (fileName === "index.jsx") {
    return "/";
  }
  return fileName.split(".").slice(0, -1).join(".");
};

const readFiles = (directoryPath) => {
  return new Promise((resolve) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return new Error("Unable to scan directory");
      }
      return resolve(files);
    });
  });
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const screensDir = path.join(__dirname, `app/screens`);
  return readFiles(screensDir)
    .then((files) => {
      return files.forEach((file) => {
        const component = path.resolve(`app/screens/${file}`);
        createPage({
          path: extractPath(file),
          component,
        });
      });
    })
    .catch(() => {
      return "Something went wrong";
    });
};
