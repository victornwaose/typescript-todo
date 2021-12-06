"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SingleTodo_1 = require("../singleTodo/SingleTodo");
require("./TodoList.css");
var TodoList = function (_a) {
    var todos = _a.todos, setTodos = _a.setTodos;
    console.log(todos);
    return (react_1["default"].createElement("div", { className: "todos" }, todos === null || todos === void 0 ? void 0 : todos.map(function (todo) { return (react_1["default"].createElement(SingleTodo_1["default"], { key: todo.id, todo: todo, todos: todos, setTodos: setTodos })); })));
};
exports["default"] = TodoList;
