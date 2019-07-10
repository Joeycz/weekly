const { resolve } = require("path");
const { existsSync, lstatSync, readdirSync } = require("fs");

function readFileList(year, issue) {
  const fileList = [];
  const dirPath = resolve(`./docs/${year}/${issue}/`);
  const isDir = existsSync(dirPath) && lstatSync(dirPath).isDirectory();
  if (!isDir) {
    return fileList;
  }

  const files = readdirSync(dirPath);
  files.forEach((item) => {
    const currentFile = item.slice(0, 2);
    fileList.push([
      `/${year}/${issue}/${currentFile}`,
      `${year}年${issue}月${currentFile}期`,
    ]);
  });
  return fileList.reverse();
}

function readOldBlogs() {
  const fileList = [];
  const dirPath = resolve("./docs/old-blogs/");
  const isDir = existsSync(dirPath) && lstatSync(dirPath).isDirectory();
  if (!isDir) {
    return fileList;
  }

  const files = readdirSync(dirPath);
  files.forEach((item) => {
    const currentFile = item;
    fileList.push([
      `/old-blogs/${currentFile}`,
      currentFile.split(".md")[0],
    ]);
  });
  return fileList.reverse();
}

module.exports = {
  readFileList,
  readOldBlogs,
};
