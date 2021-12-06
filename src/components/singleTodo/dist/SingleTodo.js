"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("./SingleTodo.css");
var SingleTodo = function (_a) {
    var todo = _a.todo, setTodos = _a.setTodos, todos = _a.todos;
    var _b = react_1.useState(false), edit = _b[0], setEdit = _b[1];
    var _c = react_1.useState(todo.todo), editData = _c[0], setEditData = _c[1];
    var handleDone = function (id) {
        setTodos(todos === null || todos === void 0 ? void 0 : todos.map(function (todo) {
            return todo.id === id ? __assign(__assign({}, todo), { isDone: !todo.isDone }) : todo;
        }));
    };
    var handleDelete = function (id) {
        setTodos(todos === null || todos === void 0 ? void 0 : todos.filter(function (todo) { return todo.id !== id; }));
    };
    return (react_1["default"].createElement("form", { className: "todos_single" },
        edit ? (react_1["default"].createElement("input", { value: editData, onChange: function (e) { return setEditData(e.target.value); }, className: "todos_single_input" })) : todo.isDone ? (react_1["default"].createElement("s", { className: "todos_single-text" }, todo === null || todo === void 0 ? void 0 : todo.todo)) : (react_1["default"].createElement("span", { className: "todos_single-text" }, todo === null || todo === void 0 ? void 0 : todo.todo)),
        react_1["default"].createElement("div", { className: "todos_single-button" },
            react_1["default"].createElement("button", { onClick: function () {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                } }, "Edit"),
            react_1["default"].createElement("button", { onClick: function () { return handleDelete(todo.id); } }, "Delete"),
            react_1["default"].createElement("button", { onClick: function () { return handleDone(todo.id); } }, "Done"))));
};
exports["default"] = SingleTodo;
