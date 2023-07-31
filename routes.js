const { addBookHandler, getBookByIdHandler, editBookByIdHandler } = require("./handler");

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
  {
    method: "GET",
    path: "/books{id}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books{id}",
    handler: editBookByIdHandler,
  },
];

module.exports = routes;
