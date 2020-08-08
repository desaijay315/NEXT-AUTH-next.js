module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/data.js":
/*!*********************!*\
  !*** ./lib/data.js ***!
  \*********************/
/*! exports provided: getPostList, getPost, saveUser, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostList\", function() { return getPostList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPost\", function() { return getPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveUser\", function() { return saveUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony import */ var _github_cms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-cms */ \"./lib/github-cms.js\");\n/* harmony import */ var _fs_cms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fs-cms */ \"./lib/fs-cms.js\");\n\n\n\nfunction canUseGitHub() {\n  return Boolean(process.env.GITHUB_PAT);\n}\n\nasync function getPostList() {\n  if (canUseGitHub()) {\n    return _github_cms__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPostList();\n  }\n\n  return _fs_cms__WEBPACK_IMPORTED_MODULE_1__[\"getPostList\"]();\n}\nasync function getPost(slug) {\n  if (canUseGitHub()) {\n    return _github_cms__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPost(slug);\n  }\n\n  return _fs_cms__WEBPACK_IMPORTED_MODULE_1__[\"getPost\"](slug);\n}\nconst users = {};\nasync function saveUser(type, profile) {\n  const user = {\n    id: `${type}-${profile.id}`,\n    [type]: profile\n  };\n  await _fs_cms__WEBPACK_IMPORTED_MODULE_1__[\"saveUser\"](user);\n  return user.id;\n}\nasync function getUser(id) {\n  return _fs_cms__WEBPACK_IMPORTED_MODULE_1__[\"getUser\"](id);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGF0YS5qcz9iYjFmIl0sIm5hbWVzIjpbImNhblVzZUdpdEh1YiIsIkJvb2xlYW4iLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX1BBVCIsImdldFBvc3RMaXN0IiwiZ2l0aHViQ21zIiwiZnNDbXMiLCJnZXRQb3N0Iiwic2x1ZyIsInVzZXJzIiwic2F2ZVVzZXIiLCJ0eXBlIiwicHJvZmlsZSIsInVzZXIiLCJpZCIsImdldFVzZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQ3BCLFNBQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQWIsQ0FBZDtBQUNIOztBQUVNLGVBQWVDLFdBQWYsR0FBNkI7QUFDaEMsTUFBSUwsWUFBWSxFQUFoQixFQUFvQjtBQUNoQixXQUFPTSxtREFBUyxDQUFDRCxXQUFWLEVBQVA7QUFDSDs7QUFFRCxTQUFPRSxtREFBQSxFQUFQO0FBQ0g7QUFFTSxlQUFlQyxPQUFmLENBQXVCQyxJQUF2QixFQUE2QjtBQUNoQyxNQUFJVCxZQUFZLEVBQWhCLEVBQW9CO0FBQ2hCLFdBQU9NLG1EQUFTLENBQUNFLE9BQVYsQ0FBa0JDLElBQWxCLENBQVA7QUFDSDs7QUFFRCxTQUFPRiwrQ0FBQSxDQUFjRSxJQUFkLENBQVA7QUFDSDtBQUVELE1BQU1DLEtBQUssR0FBRyxFQUFkO0FBRU8sZUFBZUMsUUFBZixDQUF3QkMsSUFBeEIsRUFBOEJDLE9BQTlCLEVBQXVDO0FBQzFDLFFBQU1DLElBQUksR0FBRztBQUNUQyxNQUFFLEVBQUcsR0FBRUgsSUFBSyxJQUFHQyxPQUFPLENBQUNFLEVBQUcsRUFEakI7QUFFVCxLQUFDSCxJQUFELEdBQVFDO0FBRkMsR0FBYjtBQUtBLFFBQU1OLGdEQUFBLENBQWVPLElBQWYsQ0FBTjtBQUNBLFNBQU9BLElBQUksQ0FBQ0MsRUFBWjtBQUNIO0FBRU0sZUFBZUMsT0FBZixDQUF1QkQsRUFBdkIsRUFBMkI7QUFDOUIsU0FBT1IsK0NBQUEsQ0FBY1EsRUFBZCxDQUFQO0FBQ0giLCJmaWxlIjoiLi9saWIvZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnaXRodWJDbXMgZnJvbSAnLi9naXRodWItY21zJ1xuaW1wb3J0ICogYXMgZnNDbXMgZnJvbSAnLi9mcy1jbXMnXG5cbmZ1bmN0aW9uIGNhblVzZUdpdEh1YigpIHtcbiAgICByZXR1cm4gQm9vbGVhbihwcm9jZXNzLmVudi5HSVRIVUJfUEFUKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdExpc3QoKSB7XG4gICAgaWYgKGNhblVzZUdpdEh1YigpKSB7XG4gICAgICAgIHJldHVybiBnaXRodWJDbXMuZ2V0UG9zdExpc3QoKVxuICAgIH1cblxuICAgIHJldHVybiBmc0Ntcy5nZXRQb3N0TGlzdCgpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0KHNsdWcpIHtcbiAgICBpZiAoY2FuVXNlR2l0SHViKCkpIHtcbiAgICAgICAgcmV0dXJuIGdpdGh1YkNtcy5nZXRQb3N0KHNsdWcpXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmc0Ntcy5nZXRQb3N0KHNsdWcpXG59XG5cbmNvbnN0IHVzZXJzID0ge31cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVVc2VyKHR5cGUsIHByb2ZpbGUpIHtcbiAgICBjb25zdCB1c2VyID0ge1xuICAgICAgICBpZDogYCR7dHlwZX0tJHtwcm9maWxlLmlkfWAsXG4gICAgICAgIFt0eXBlXTogcHJvZmlsZVxuICAgIH1cblxuICAgIGF3YWl0IGZzQ21zLnNhdmVVc2VyKHVzZXIpXG4gICAgcmV0dXJuIHVzZXIuaWRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoaWQpIHtcbiAgICByZXR1cm4gZnNDbXMuZ2V0VXNlcihpZClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/data.js\n");

/***/ }),

/***/ "./lib/fs-cms.js":
/*!***********************!*\
  !*** ./lib/fs-cms.js ***!
  \***********************/
/*! exports provided: getPostList, getPost, saveUser, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostList\", function() { return getPostList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPost\", function() { return getPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveUser\", function() { return saveUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getPostList() {\n  const markdownFiles = await fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"].readdir('data');\n  const postList = markdownFiles.map(filename => {\n    const slug = filename.replace(/.md$/, '');\n    const [year, month, date, ...rest] = slug.split('-');\n    const createdAt = new Date(`${year} ${month} ${date}`).getTime();\n    const title = rest.join(' ');\n    return {\n      slug,\n      createdAt,\n      title\n    };\n  });\n  return postList;\n}\nasync function getPost(slug) {\n  const [year, month, day, ...rest] = slug.split('-');\n  const createdAt = new Date(`${year} ${month} ${day}`).getTime();\n  const title = rest.join(' ');\n  const content = await fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"].readFile(`data/${slug}.md`, 'utf8');\n  return {\n    slug: slug,\n    title,\n    content,\n    createdAt\n  };\n}\n\nfunction genUserFilePath(userId) {\n  return path__WEBPACK_IMPORTED_MODULE_2___default.a.join(os__WEBPACK_IMPORTED_MODULE_1___default.a.tmpdir(), 'bulletproof-next-app', 'user', `${userId}.json`);\n}\n\nasync function saveUser(user) {\n  const payload = JSON.stringify(user);\n  const filePath = genUserFilePath(user.id);\n  await fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"].mkdir(path__WEBPACK_IMPORTED_MODULE_2___default.a.dirname(filePath), {\n    recursive: true\n  });\n  await fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"].writeFile(filePath, payload, 'utf8');\n  return user.id;\n}\nasync function getUser(id) {\n  const filePath = genUserFilePath(id);\n\n  try {\n    const jsonString = await fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"].readFile(filePath, 'utf8');\n    return JSON.parse(jsonString);\n  } catch (err) {\n    if (err.code === 'ENOENT') {\n      return null;\n    }\n\n    throw err;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZnMtY21zLmpzP2Y2NmIiXSwibmFtZXMiOlsiZ2V0UG9zdExpc3QiLCJtYXJrZG93bkZpbGVzIiwiZnNQcm9taXNlcyIsInJlYWRkaXIiLCJwb3N0TGlzdCIsIm1hcCIsImZpbGVuYW1lIiwic2x1ZyIsInJlcGxhY2UiLCJ5ZWFyIiwibW9udGgiLCJkYXRlIiwicmVzdCIsInNwbGl0IiwiY3JlYXRlZEF0IiwiRGF0ZSIsImdldFRpbWUiLCJ0aXRsZSIsImpvaW4iLCJnZXRQb3N0IiwiZGF5IiwiY29udGVudCIsInJlYWRGaWxlIiwiZ2VuVXNlckZpbGVQYXRoIiwidXNlcklkIiwicGF0aCIsIm9zIiwidG1wZGlyIiwic2F2ZVVzZXIiLCJ1c2VyIiwicGF5bG9hZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWxlUGF0aCIsImlkIiwibWtkaXIiLCJkaXJuYW1lIiwicmVjdXJzaXZlIiwid3JpdGVGaWxlIiwiZ2V0VXNlciIsImpzb25TdHJpbmciLCJwYXJzZSIsImVyciIsImNvZGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxlQUFlQSxXQUFmLEdBQTZCO0FBQ2hDLFFBQU1DLGFBQWEsR0FBRyxNQUFNQywyQ0FBVSxDQUFDQyxPQUFYLENBQW1CLE1BQW5CLENBQTVCO0FBRUEsUUFBTUMsUUFBUSxHQUFHSCxhQUFhLENBQUNJLEdBQWQsQ0FBa0JDLFFBQVEsSUFBSTtBQUMzQyxVQUFNQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixNQUFqQixFQUF5QixFQUF6QixDQUFiO0FBQ0EsVUFBTSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBY0MsSUFBZCxFQUFvQixHQUFHQyxJQUF2QixJQUErQkwsSUFBSSxDQUFDTSxLQUFMLENBQVcsR0FBWCxDQUFyQztBQUNBLFVBQU1DLFNBQVMsR0FBSSxJQUFJQyxJQUFKLENBQVUsR0FBRU4sSUFBSyxJQUFHQyxLQUFNLElBQUdDLElBQUssRUFBbEMsQ0FBRCxDQUF1Q0ssT0FBdkMsRUFBbEI7QUFDQSxVQUFNQyxLQUFLLEdBQUdMLElBQUksQ0FBQ00sSUFBTCxDQUFVLEdBQVYsQ0FBZDtBQUVBLFdBQU87QUFDSFgsVUFERztBQUVITyxlQUZHO0FBR0hHO0FBSEcsS0FBUDtBQUtILEdBWGdCLENBQWpCO0FBYUEsU0FBT2IsUUFBUDtBQUNIO0FBRU0sZUFBZWUsT0FBZixDQUF1QlosSUFBdkIsRUFBNkI7QUFDaEMsUUFBTSxDQUFDRSxJQUFELEVBQU9DLEtBQVAsRUFBY1UsR0FBZCxFQUFtQixHQUFHUixJQUF0QixJQUE4QkwsSUFBSSxDQUFDTSxLQUFMLENBQVcsR0FBWCxDQUFwQztBQUNBLFFBQU1DLFNBQVMsR0FBSSxJQUFJQyxJQUFKLENBQVUsR0FBRU4sSUFBSyxJQUFHQyxLQUFNLElBQUdVLEdBQUksRUFBakMsQ0FBRCxDQUFzQ0osT0FBdEMsRUFBbEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdMLElBQUksQ0FBQ00sSUFBTCxDQUFVLEdBQVYsQ0FBZDtBQUNBLFFBQU1HLE9BQU8sR0FBRyxNQUFNbkIsMkNBQVUsQ0FBQ29CLFFBQVgsQ0FBcUIsUUFBT2YsSUFBSyxLQUFqQyxFQUF1QyxNQUF2QyxDQUF0QjtBQUVBLFNBQU87QUFDSEEsUUFBSSxFQUFFQSxJQURIO0FBRUhVLFNBRkc7QUFHSEksV0FIRztBQUlIUDtBQUpHLEdBQVA7QUFNSDs7QUFFRCxTQUFTUyxlQUFULENBQXlCQyxNQUF6QixFQUFpQztBQUM3QixTQUFPQywyQ0FBSSxDQUFDUCxJQUFMLENBQVVRLHlDQUFFLENBQUNDLE1BQUgsRUFBVixFQUF1QixzQkFBdkIsRUFBK0MsTUFBL0MsRUFBd0QsR0FBRUgsTUFBTyxPQUFqRSxDQUFQO0FBQ0g7O0FBRU0sZUFBZUksUUFBZixDQUF3QkMsSUFBeEIsRUFBOEI7QUFDakMsUUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZixDQUFoQjtBQUNBLFFBQU1JLFFBQVEsR0FBR1YsZUFBZSxDQUFDTSxJQUFJLENBQUNLLEVBQU4sQ0FBaEM7QUFDQSxRQUFNaEMsMkNBQVUsQ0FBQ2lDLEtBQVgsQ0FBaUJWLDJDQUFJLENBQUNXLE9BQUwsQ0FBYUgsUUFBYixDQUFqQixFQUF5QztBQUFFSSxhQUFTLEVBQUU7QUFBYixHQUF6QyxDQUFOO0FBRUEsUUFBTW5DLDJDQUFVLENBQUNvQyxTQUFYLENBQXFCTCxRQUFyQixFQUErQkgsT0FBL0IsRUFBd0MsTUFBeEMsQ0FBTjtBQUNBLFNBQU9ELElBQUksQ0FBQ0ssRUFBWjtBQUNIO0FBRU0sZUFBZUssT0FBZixDQUF1QkwsRUFBdkIsRUFBMkI7QUFDOUIsUUFBTUQsUUFBUSxHQUFHVixlQUFlLENBQUNXLEVBQUQsQ0FBaEM7O0FBQ0EsTUFBSTtBQUNBLFVBQU1NLFVBQVUsR0FBRyxNQUFNdEMsMkNBQVUsQ0FBQ29CLFFBQVgsQ0FBb0JXLFFBQXBCLEVBQThCLE1BQTlCLENBQXpCO0FBQ0EsV0FBT0YsSUFBSSxDQUFDVSxLQUFMLENBQVdELFVBQVgsQ0FBUDtBQUNILEdBSEQsQ0FHRSxPQUFNRSxHQUFOLEVBQVc7QUFDVCxRQUFJQSxHQUFHLENBQUNDLElBQUosS0FBYSxRQUFqQixFQUEyQjtBQUN2QixhQUFPLElBQVA7QUFDSDs7QUFFRCxVQUFNRCxHQUFOO0FBQ0g7QUFDSiIsImZpbGUiOiIuL2xpYi9mcy1jbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9taXNlcyBhcyBmc1Byb21pc2VzIH0gZnJvbSAnZnMnXG5pbXBvcnQgb3MgZnJvbSAnb3MnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdExpc3QoKSB7XG4gICAgY29uc3QgbWFya2Rvd25GaWxlcyA9IGF3YWl0IGZzUHJvbWlzZXMucmVhZGRpcignZGF0YScpXG5cbiAgICBjb25zdCBwb3N0TGlzdCA9IG1hcmtkb3duRmlsZXMubWFwKGZpbGVuYW1lID0+IHtcbiAgICAgICAgY29uc3Qgc2x1ZyA9IGZpbGVuYW1lLnJlcGxhY2UoLy5tZCQvLCAnJylcbiAgICAgICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXRlLCAuLi5yZXN0XSA9IHNsdWcuc3BsaXQoJy0nKVxuICAgICAgICBjb25zdCBjcmVhdGVkQXQgPSAobmV3IERhdGUoYCR7eWVhcn0gJHttb250aH0gJHtkYXRlfWApKS5nZXRUaW1lKClcbiAgICAgICAgY29uc3QgdGl0bGUgPSByZXN0LmpvaW4oJyAnKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzbHVnLFxuICAgICAgICAgICAgY3JlYXRlZEF0LFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcG9zdExpc3Rcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3Qoc2x1Zykge1xuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5LCAuLi5yZXN0XSA9IHNsdWcuc3BsaXQoJy0nKVxuICAgIGNvbnN0IGNyZWF0ZWRBdCA9IChuZXcgRGF0ZShgJHt5ZWFyfSAke21vbnRofSAke2RheX1gKSkuZ2V0VGltZSgpXG4gICAgY29uc3QgdGl0bGUgPSByZXN0LmpvaW4oJyAnKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmc1Byb21pc2VzLnJlYWRGaWxlKGBkYXRhLyR7c2x1Z30ubWRgLCAndXRmOCcpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzbHVnOiBzbHVnLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgY3JlYXRlZEF0XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5Vc2VyRmlsZVBhdGgodXNlcklkKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihvcy50bXBkaXIoKSwgJ2J1bGxldHByb29mLW5leHQtYXBwJywgJ3VzZXInLCBgJHt1c2VySWR9Lmpzb25gKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZVVzZXIodXNlcikge1xuICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgIGNvbnN0IGZpbGVQYXRoID0gZ2VuVXNlckZpbGVQYXRoKHVzZXIuaWQpXG4gICAgYXdhaXQgZnNQcm9taXNlcy5ta2RpcihwYXRoLmRpcm5hbWUoZmlsZVBhdGgpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuXG4gICAgYXdhaXQgZnNQcm9taXNlcy53cml0ZUZpbGUoZmlsZVBhdGgsIHBheWxvYWQsICd1dGY4JylcbiAgICByZXR1cm4gdXNlci5pZFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihpZCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZ2VuVXNlckZpbGVQYXRoKGlkKVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBhd2FpdCBmc1Byb21pc2VzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmOCcpXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25TdHJpbmcpXG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVyclxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/fs-cms.js\n");

/***/ }),

/***/ "./lib/github-cms.js":
/*!***************************!*\
  !*** ./lib/github-cms.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _arunoda_git_cms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arunoda/git-cms */ \"@arunoda/git-cms\");\n/* harmony import */ var _arunoda_git_cms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_arunoda_git_cms__WEBPACK_IMPORTED_MODULE_0__);\n\nconst githubCms = new _arunoda_git_cms__WEBPACK_IMPORTED_MODULE_0__[\"GitHubCMS\"]({\n  owner: process.env.GITHUB_REPO_OWNER,\n  repo: process.env.GITHUB_REPO_NAME,\n  token: process.env.GITHUB_PAT\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (githubCms);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ2l0aHViLWNtcy5qcz85YTViIl0sIm5hbWVzIjpbImdpdGh1YkNtcyIsIkdpdEh1YkNNUyIsIm93bmVyIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9SRVBPX09XTkVSIiwicmVwbyIsIkdJVEhVQl9SRVBPX05BTUUiLCJ0b2tlbiIsIkdJVEhVQl9QQVQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsU0FBUyxHQUFHLElBQUlDLDBEQUFKLENBQWM7QUFDNUJDLE9BQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQURTO0FBRTVCQyxNQUFJLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxnQkFGVTtBQUc1QkMsT0FBSyxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUs7QUFIUyxDQUFkLENBQWxCO0FBTWVULHdFQUFmIiwiZmlsZSI6Ii4vbGliL2dpdGh1Yi1jbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHaXRIdWJDTVMgfSBmcm9tICdAYXJ1bm9kYS9naXQtY21zJ1xuXG5jb25zdCBnaXRodWJDbXMgPSBuZXcgR2l0SHViQ01TKHtcbiAgICBvd25lcjogcHJvY2Vzcy5lbnYuR0lUSFVCX1JFUE9fT1dORVIsXG4gICAgcmVwbzogcHJvY2Vzcy5lbnYuR0lUSFVCX1JFUE9fTkFNRSxcbiAgICB0b2tlbjogcHJvY2Vzcy5lbnYuR0lUSFVCX1BBVFxufSlcblxuZXhwb3J0IGRlZmF1bHQgZ2l0aHViQ21zXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/github-cms.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/data */ \"./lib/data.js\");\n\n\n\nconst providers = [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.GitHub({\n  clientId: process.env.GITHUB_CLIENT_ID,\n  clientSecret: process.env.GITHUB_CLIENT_SECRET\n})];\nconst callbacks = {};\n\ncallbacks.signIn = async function signIn(user, account, metadata) {\n  const emailRes = await fetch('https://api.github.com/user/emails', {\n    headers: {\n      'Authorization': `token ${account.accessToken}`\n    }\n  });\n  const emails = await emailRes.json();\n  const primaryEmail = emails.find(e => e.primary).email;\n  const githubUser = {\n    id: metadata.id,\n    login: metadata.login,\n    name: metadata.name,\n    email: primaryEmail,\n    avatar: user.image\n  };\n  user.id = await Object(_lib_data__WEBPACK_IMPORTED_MODULE_2__[\"saveUser\"])('github', githubUser);\n  return true;\n};\n\ncallbacks.jwt = async function jwt(token, user) {\n  if (user) {\n    token = {\n      id: user.id\n    };\n  }\n\n  console.log(token, \"token here\");\n  return token;\n};\n\ncallbacks.session = async function session(session, token) {\n  const dbUser = await Object(_lib_data__WEBPACK_IMPORTED_MODULE_2__[\"getUser\"])(token.id);\n\n  if (!dbUser) {\n    return null;\n  }\n\n  session.user = {\n    id: dbUser.id,\n    github: {\n      avatar: dbUser.github.avatar,\n      login: dbUser.github.login,\n      name: dbUser.github.name\n    }\n  };\n  return session;\n};\n\nconsole.log(process.env.JWT_SECRET);\nconst options = {\n  providers,\n  session: {\n    jwt: true\n  },\n  jwt: {\n    secret: process.env.JWT_SECRET\n  },\n  callbacks\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2lnbkluIiwidXNlciIsImFjY291bnQiLCJtZXRhZGF0YSIsImVtYWlsUmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiYWNjZXNzVG9rZW4iLCJlbWFpbHMiLCJqc29uIiwicHJpbWFyeUVtYWlsIiwiZmluZCIsImUiLCJwcmltYXJ5IiwiZW1haWwiLCJnaXRodWJVc2VyIiwiaWQiLCJsb2dpbiIsIm5hbWUiLCJhdmF0YXIiLCJpbWFnZSIsInNhdmVVc2VyIiwiand0IiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvbiIsImRiVXNlciIsImdldFVzZXIiLCJnaXRodWIiLCJKV1RfU0VDUkVUIiwib3B0aW9ucyIsInNlY3JldCIsInJlcSIsInJlcyIsIk5leHRBdXRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxTQUFTLEdBQUcsQ0FDZEMsMERBQVMsQ0FBQ0MsTUFBVixDQUFpQjtBQUNiQyxVQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFEVDtBQUViQyxjQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZiLENBQWpCLENBRGMsQ0FBbEI7QUFPQSxNQUFNQyxTQUFTLEdBQUcsRUFBbEI7O0FBRUFBLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixlQUFlQSxNQUFmLENBQXNCQyxJQUF0QixFQUE0QkMsT0FBNUIsRUFBcUNDLFFBQXJDLEVBQStDO0FBQzlELFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsb0NBQUQsRUFBdUM7QUFDakVDLFdBQU8sRUFBRTtBQUNQLHVCQUFrQixTQUFRSixPQUFPLENBQUNLLFdBQVk7QUFEdkM7QUFEd0QsR0FBdkMsQ0FBNUI7QUFLQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFULEVBQXJCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRixNQUFNLENBQUNHLElBQVAsQ0FBWUMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLE9BQW5CLEVBQTRCQyxLQUFqRDtBQUVBLFFBQU1DLFVBQVUsR0FBRztBQUNqQkMsTUFBRSxFQUFFYixRQUFRLENBQUNhLEVBREk7QUFFakJDLFNBQUssRUFBRWQsUUFBUSxDQUFDYyxLQUZDO0FBR2pCQyxRQUFJLEVBQUVmLFFBQVEsQ0FBQ2UsSUFIRTtBQUlqQkosU0FBSyxFQUFFSixZQUpVO0FBS2pCUyxVQUFNLEVBQUVsQixJQUFJLENBQUNtQjtBQUxJLEdBQW5CO0FBUUFuQixNQUFJLENBQUNlLEVBQUwsR0FBVSxNQUFNSywwREFBUSxDQUFDLFFBQUQsRUFBV04sVUFBWCxDQUF4QjtBQUNBLFNBQU8sSUFBUDtBQUNILENBbkJEOztBQXFCQWhCLFNBQVMsQ0FBQ3VCLEdBQVYsR0FBZ0IsZUFBZUEsR0FBZixDQUFtQkMsS0FBbkIsRUFBMEJ0QixJQUExQixFQUFnQztBQUM1QyxNQUFJQSxJQUFKLEVBQVU7QUFDUnNCLFNBQUssR0FBRztBQUFDUCxRQUFFLEVBQUVmLElBQUksQ0FBQ2U7QUFBVixLQUFSO0FBQ0Q7O0FBRURRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQWtCLFlBQWxCO0FBRUEsU0FBT0EsS0FBUDtBQUNILENBUkQ7O0FBVUF4QixTQUFTLENBQUMyQixPQUFWLEdBQW9CLGVBQWVBLE9BQWYsQ0FBdUJBLE9BQXZCLEVBQWdDSCxLQUFoQyxFQUF1QztBQUN2RCxRQUFNSSxNQUFNLEdBQUcsTUFBTUMseURBQU8sQ0FBQ0wsS0FBSyxDQUFDUCxFQUFQLENBQTVCOztBQUNBLE1BQUksQ0FBQ1csTUFBTCxFQUFhO0FBQ1gsV0FBTyxJQUFQO0FBQ0Q7O0FBRURELFNBQU8sQ0FBQ3pCLElBQVIsR0FBZTtBQUNiZSxNQUFFLEVBQUVXLE1BQU0sQ0FBQ1gsRUFERTtBQUViYSxVQUFNLEVBQUU7QUFDTlYsWUFBTSxFQUFFUSxNQUFNLENBQUNFLE1BQVAsQ0FBY1YsTUFEaEI7QUFFTkYsV0FBSyxFQUFFVSxNQUFNLENBQUNFLE1BQVAsQ0FBY1osS0FGZjtBQUdOQyxVQUFJLEVBQUVTLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjWDtBQUhkO0FBRkssR0FBZjtBQVNBLFNBQU9RLE9BQVA7QUFDSCxDQWhCRDs7QUFrQkFGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZL0IsT0FBTyxDQUFDQyxHQUFSLENBQVltQyxVQUF4QjtBQUVBLE1BQU1DLE9BQU8sR0FBRztBQUNkekMsV0FEYztBQUVkb0MsU0FBTyxFQUFFO0FBQ1BKLE9BQUcsRUFBRTtBQURFLEdBRks7QUFLZEEsS0FBRyxFQUFFO0FBQ0hVLFVBQU0sRUFBRXRDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbUM7QUFEakIsR0FMUztBQVFkL0I7QUFSYyxDQUFoQjtBQVdlLGdFQUFDa0MsR0FBRCxFQUFNQyxHQUFOLEtBQWNDLGdEQUFRLENBQUNGLEdBQUQsRUFBTUMsR0FBTixFQUFXSCxPQUFYLENBQXJDIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXG5pbXBvcnQgeyBzYXZlVXNlciwgZ2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhJ1xuXG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcbiAgICBQcm92aWRlcnMuR2l0SHViKHtcbiAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVRcbiAgICB9KVxuXVxuXG5jb25zdCBjYWxsYmFja3MgPSB7fVxuXG5jYWxsYmFja3Muc2lnbkluID0gYXN5bmMgZnVuY3Rpb24gc2lnbkluKHVzZXIsIGFjY291bnQsIG1ldGFkYXRhKSB7XG4gICAgY29uc3QgZW1haWxSZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2VyL2VtYWlscycsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgdG9rZW4gJHthY2NvdW50LmFjY2Vzc1Rva2VufWBcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IGVtYWlscyA9IGF3YWl0IGVtYWlsUmVzLmpzb24oKVxuICAgIGNvbnN0IHByaW1hcnlFbWFpbCA9IGVtYWlscy5maW5kKGUgPT4gZS5wcmltYXJ5KS5lbWFpbDtcbiAgXG4gICAgY29uc3QgZ2l0aHViVXNlciA9IHtcbiAgICAgIGlkOiBtZXRhZGF0YS5pZCxcbiAgICAgIGxvZ2luOiBtZXRhZGF0YS5sb2dpbixcbiAgICAgIG5hbWU6IG1ldGFkYXRhLm5hbWUsXG4gICAgICBlbWFpbDogcHJpbWFyeUVtYWlsLFxuICAgICAgYXZhdGFyOiB1c2VyLmltYWdlXG4gICAgfVxuICBcbiAgICB1c2VyLmlkID0gYXdhaXQgc2F2ZVVzZXIoJ2dpdGh1YicsIGdpdGh1YlVzZXIpXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmNhbGxiYWNrcy5qd3QgPSBhc3luYyBmdW5jdGlvbiBqd3QodG9rZW4sIHVzZXIpIHtcbiAgICBpZiAodXNlcikge1xuICAgICAgdG9rZW4gPSB7aWQ6IHVzZXIuaWR9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codG9rZW4sXCJ0b2tlbiBoZXJlXCIpXG4gIFxuICAgIHJldHVybiB0b2tlblxufVxuXG5jYWxsYmFja3Muc2Vzc2lvbiA9IGFzeW5jIGZ1bmN0aW9uIHNlc3Npb24oc2Vzc2lvbiwgdG9rZW4pIHtcbiAgICBjb25zdCBkYlVzZXIgPSBhd2FpdCBnZXRVc2VyKHRva2VuLmlkKVxuICAgIGlmICghZGJVc2VyKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBcbiAgICBzZXNzaW9uLnVzZXIgPSB7XG4gICAgICBpZDogZGJVc2VyLmlkLFxuICAgICAgZ2l0aHViOiB7XG4gICAgICAgIGF2YXRhcjogZGJVc2VyLmdpdGh1Yi5hdmF0YXIsXG4gICAgICAgIGxvZ2luOiBkYlVzZXIuZ2l0aHViLmxvZ2luLFxuICAgICAgICBuYW1lOiBkYlVzZXIuZ2l0aHViLm5hbWVcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHNlc3Npb25cbn1cbiAgXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuXG5jb25zdCBvcHRpb25zID0ge1xuICBwcm92aWRlcnMsXG4gIHNlc3Npb246IHtcbiAgICBqd3Q6IHRydWVcbiAgfSxcbiAgand0OiB7XG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVUXG4gIH0sXG4gIGNhbGxiYWNrc1xufVxuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "@arunoda/git-cms":
/*!***********************************!*\
  !*** external "@arunoda/git-cms" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@arunoda/git-cms\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXJ1bm9kYS9naXQtY21zXCI/ZDY2MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXJ1bm9kYS9naXQtY21zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFydW5vZGEvZ2l0LWNtc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@arunoda/git-cms\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvc1wiP2I3MTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoib3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///os\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });