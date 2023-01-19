"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_setup"] = self["webpackChunkwebpack_setup"] || []).push([["bundle"],{

/***/ "./src/new.js":
/*!********************!*\
  !*** ./src/new.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks),\n/* harmony export */   \"updateLocalStorage\": () => (/* binding */ updateLocalStorage)\n/* harmony export */ });\nconst taskList = document.getElementById(\"task-list\");\r\nlet tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\r\n\r\nfunction renderTasks() {\r\n  taskList.innerHTML = \"\";\r\n  tasks.forEach((task, index) => {\r\n    const li = document.createElement(\"li\");\r\n    li.innerHTML = `\r\n      <input type=\"checkbox\" id=\"task${index}\" ${task.completed ? \"checked\" : \"\"}>\r\n      <label for=\"task${index}\">${task.description}</label>\r\n      <button class=\"delete\">\r\n        <i class=\"fa-solid fa-times\"></i>\r\n      </button>\r\n      <button class=\"edit\">\r\n        <i class=\"fa-solid fa-pen\"></i>\r\n      </button>\r\n    `;\r\n    taskList.appendChild(li);\r\n    li.querySelector('.delete').addEventListener(\"click\", () => deleteTask(index));\r\n    li.querySelector('.edit').addEventListener(\"click\", () => editTask(index));\r\n  });\r\n}\r\n\r\nfunction addTask(e) {\r\n  document.getElementById(\"form\").addEventListener(\"submit\", addTask);\r\n  e.preventDefault();\r\n  const input = document.querySelector(\"input\");\r\n  if (input.value === \"\") return alert(\"Please enter a task\");\r\n  const task = {\r\n    description: input.value,\r\n    completed: false,\r\n    index: tasks.length + 1\r\n  };\r\n  tasks.push(task);\r\n  input.value = \"\";\r\n  renderTasks();\r\n  updateLocalStorage();\r\n}\r\n\r\nfunction deleteTask(index) {\r\n  li.querySelector('.delete').addEventListener(\"click\", () => deleteTask(index));\r\n  tasks.splice(index, 1);\r\n  tasks.forEach((task, i) => task.index = i + 1);\r\n  renderTasks();\r\n  updateLocalStorage();\r\n}\r\n\r\nfunction editTask(index) {\r\n  li.querySelector('.edit').addEventListener(\"click\", () => editTask(index));\r\n  const input = document.createElement(\"input\");\r\n  input.value = tasks[index].description;\r\n  input.classList.add(\"edit-input\");\r\n  const li = taskList.children[index];\r\n  li.innerHTML = \"\";\r\n  li.appendChild(input);\r\n  input.focus();\r\n  input.addEventListener(\"blur\", () => {\r\n    tasks[index].description = input.value;\r\n    renderTasks();\r\n    updateLocalStorage();\r\n  });\r\n}\r\n\r\nfunction updateLocalStorage() {\r\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\r\n}\r\n\r\nrenderTasks();\r\ndocument.getElementById(\"form\").addEventListener(\"submit\", addTask);\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/new.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/new.js"));
/******/ }
]);