"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./InputFeild.css");
var InputField = function (_a) {
    var todo = _a.todo, setTodo = _a.setTodo, handleAdd = _a.handleAdd;
    var inputRef = react_1.useRef(null);
    return (react_1["default"].createElement("form", { className: "input", onSubmit: function (e) {
            var _a;
            handleAdd(e);
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        } },
        react_1["default"].createElement("input", { ref: inputRef, type: "text", placeholder: "Enter A Task ", className: "input_Box", value: todo, onChange: function (e) { return setTodo(e.target.value); } }),
        react_1["default"].createElement("button", { type: "submit", className: "input_submit" }, "ADD")));
};
exports["default"] = InputField;
