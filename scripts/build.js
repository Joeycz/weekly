const { resolve } = require("path");
const { existsSync, lstatSync, readdirSync } = require("fs");
let currentIssue = 0;

function getAllIssueDocs (year) {
  const dirPath = resolve(`./docs/${year}`);
  const files = readdirSync(dirPath);
  let issues = {}
  files.forEach((item, index) => {
    const itemArray = readdirSync(`./docs/${year}/${item}`)
    issues[`${year}_${item}`] = itemArray.map((ele, i) => {
      const re = i + 1
      return re + currentIssue
    })
    currentIssue = currentIssue + itemArray.length
  });
  return issues;
}

const issues2019 = getAllIssueDocs('2019')
const issues2020 = getAllIssueDocs('2020')

const issues = Object.assign(issues2019, issues2020)

function readFileList(year, issue) {
  const fileList = [];
  const dirPath = resolve(`./docs/${year}/${issue}/`);
  const isDir = existsSync(dirPath) && lstatSync(dirPath).isDirectory();
  if (!isDir) {
    return fileList;
  }

  const files = readdirSync(dirPath);
  files.forEach((item, index) => {
    const currentFile = item.slice(0, 2);
    fileList.push([
      `/${year}/${issue}/${currentFile}`,
      `${year}年${issue}月${currentFile}期（第${issues[`${year}_${issue}`][index]}期）`,
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
  getAllIssueDocs,
  readFileList,
  readOldBlogs,
};
