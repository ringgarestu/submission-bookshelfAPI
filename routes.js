const { addBookHandler, getBookByIdHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getBookByIdHandler,
  },
];

module.exports = routes;
