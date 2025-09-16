"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/upload/route";
exports.ids = ["app/api/upload/route"];
exports.modules = {

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/assign":
/*!********************************!*\
  !*** external "lodash/assign" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ "lodash/at":
/*!****************************!*\
  !*** external "lodash/at" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("lodash/at");

/***/ }),

/***/ "lodash/clone":
/*!*******************************!*\
  !*** external "lodash/clone" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/clone");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "lodash/compact":
/*!*********************************!*\
  !*** external "lodash/compact" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ "lodash/difference":
/*!************************************!*\
  !*** external "lodash/difference" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/difference");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ "lodash/filter":
/*!********************************!*\
  !*** external "lodash/filter" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/filter");

/***/ }),

/***/ "lodash/first":
/*!*******************************!*\
  !*** external "lodash/first" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/first");

/***/ }),

/***/ "lodash/functions":
/*!***********************************!*\
  !*** external "lodash/functions" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/functions");

/***/ }),

/***/ "lodash/identity":
/*!**********************************!*\
  !*** external "lodash/identity" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/identity");

/***/ }),

/***/ "lodash/includes":
/*!**********************************!*\
  !*** external "lodash/includes" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/includes");

/***/ }),

/***/ "lodash/isArray":
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isArray");

/***/ }),

/***/ "lodash/isElement":
/*!***********************************!*\
  !*** external "lodash/isElement" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/isElement");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isNumber":
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isNumber");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isPlainObject":
/*!***************************************!*\
  !*** external "lodash/isPlainObject" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isString");

/***/ }),

/***/ "lodash/isUndefined":
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ "lodash/last":
/*!******************************!*\
  !*** external "lodash/last" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ "lodash/take":
/*!******************************!*\
  !*** external "lodash/take" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/take");

/***/ }),

/***/ "lodash/trim":
/*!******************************!*\
  !*** external "lodash/trim" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fluckysanchez%2FDocuments%2Fcontrol-acces-employment%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fluckysanchez%2FDocuments%2Fcontrol-acces-employment&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fluckysanchez%2FDocuments%2Fcontrol-acces-employment%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fluckysanchez%2FDocuments%2Fcontrol-acces-employment&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_luckysanchez_Documents_control_acces_employment_app_api_upload_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api/upload/route.ts */ \"(rsc)/./app/api/upload/route.ts\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/upload/route\",\n        pathname: \"/api/upload\",\n        filename: \"route\",\n        bundlePath: \"app/api/upload/route\"\n    },\n    resolvedPagePath: \"/Users/luckysanchez/Documents/control-acces-employment/app/api/upload/route.ts\",\n    nextConfigOutput,\n    userland: _Users_luckysanchez_Documents_control_acces_employment_app_api_upload_route_ts__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/upload/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmx1Y2t5c2FuY2hleiUyRkRvY3VtZW50cyUyRmNvbnRyb2wtYWNjZXMtZW1wbG95bWVudCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZsdWNreXNhbmNoZXolMkZEb2N1bWVudHMlMkZjb250cm9sLWFjY2VzLWVtcGxveW1lbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQzRDO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRyb2wtYWNjZXMtZW1wbG95bWVudC8/NjUzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbHVja3lzYW5jaGV6L0RvY3VtZW50cy9jb250cm9sLWFjY2VzLWVtcGxveW1lbnQvYXBwL2FwaS91cGxvYWQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VwbG9hZC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VwbG9hZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXBsb2FkL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2x1Y2t5c2FuY2hlei9Eb2N1bWVudHMvY29udHJvbC1hY2Nlcy1lbXBsb3ltZW50L2FwcC9hcGkvdXBsb2FkL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VwbG9hZC9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fluckysanchez%2FDocuments%2Fcontrol-acces-employment%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fluckysanchez%2FDocuments%2Fcontrol-acces-employment&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/upload/route.ts":
/*!*********************************!*\
  !*** ./app/api/upload/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/cloudinary */ \"(rsc)/./lib/cloudinary.ts\");\n// import { NextResponse } from \"next/server\";\n// import cloudinary from \"@/lib/cloudinary\";\n// export const POST = async (req: Request) => {\n//   try {\n//     const form = await req.formData();\n//     const file = form.get(\"file\") as unknown as File | null;\n//     if (!file) {\n//       return NextResponse.json({ error: \"No file\" }, { status: 400 });\n//     }\n//     const arrayBuffer = await file.arrayBuffer();\n//     const buffer = Buffer.from(arrayBuffer);\n//     const upload = () =>\n//       new Promise<any>((resolve, reject) => {\n//         const stream = cloudinary.uploader.upload_stream(\n//           { folder: \"next_front_photos\", resource_type: \"image\" },\n//           (error: any, result: any) => {\n//             if (error) reject(error);\n//             else resolve(result);\n//           }\n//         );\n//         stream.end(buffer);\n//       });\n//     const result = await upload();\n//     return NextResponse.json(\n//       { url: result.secure_url, public_id: result.public_id },\n//       { status: 200 }\n//     );\n//   } catch (err: any) {\n//     console.error(\"Upload error:\", err);\n//     return NextResponse.json({ error: err.message || err }, { status: 500 });\n//   }\n// };\n\n\nconst runtime = \"nodejs\"; // 🔹 importante para Buffer y upload_stream\nconst POST = async (req)=>{\n    try {\n        const form = await req.formData();\n        const file = form.get(\"file\");\n        if (!file) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"No file\"\n            }, {\n                status: 400\n            });\n        }\n        const arrayBuffer = await file.arrayBuffer();\n        const buffer = Buffer.from(arrayBuffer);\n        const upload = ()=>new Promise((resolve, reject)=>{\n                const stream = _lib_cloudinary__WEBPACK_IMPORTED_MODULE_1__[\"default\"].uploader.upload_stream({\n                    folder: \"next_front_photos\",\n                    resource_type: \"image\"\n                }, (error, result)=>{\n                    if (error) reject(error);\n                    else resolve(result);\n                });\n                stream.end(buffer);\n            });\n        const result = await upload();\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            url: result.secure_url,\n            public_id: result.public_id\n        }, {\n            status: 200\n        });\n    } catch (err) {\n        console.error(\"Upload error:\", err);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: err.message || err\n        }, {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VwbG9hZC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsOENBQThDO0FBQzlDLDZDQUE2QztBQUU3QyxnREFBZ0Q7QUFDaEQsVUFBVTtBQUNWLHlDQUF5QztBQUN6QywrREFBK0Q7QUFDL0QsbUJBQW1CO0FBQ25CLHlFQUF5RTtBQUN6RSxRQUFRO0FBRVIsb0RBQW9EO0FBQ3BELCtDQUErQztBQUUvQywyQkFBMkI7QUFDM0IsZ0RBQWdEO0FBQ2hELDREQUE0RDtBQUM1RCxxRUFBcUU7QUFDckUsMkNBQTJDO0FBQzNDLHdDQUF3QztBQUN4QyxvQ0FBb0M7QUFDcEMsY0FBYztBQUNkLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsWUFBWTtBQUVaLHFDQUFxQztBQUVyQyxnQ0FBZ0M7QUFDaEMsaUVBQWlFO0FBQ2pFLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxnRkFBZ0Y7QUFDaEYsTUFBTTtBQUNOLEtBQUs7QUFFc0M7QUFDRDtBQUVuQyxNQUFNRSxVQUFVLFNBQVMsQ0FBQyw0Q0FBNEM7QUFFdEUsTUFBTUMsT0FBTyxPQUFPQztJQUN6QixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxRQUFRO1FBQy9CLE1BQU1DLE9BQU9GLEtBQUtHLEdBQUcsQ0FBQztRQUV0QixJQUFJLENBQUNELE1BQU07WUFDVCxPQUFPUCxrRkFBWUEsQ0FBQ1MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQVUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQy9EO1FBRUEsTUFBTUMsY0FBYyxNQUFNTCxLQUFLSyxXQUFXO1FBQzFDLE1BQU1DLFNBQVNDLE9BQU9DLElBQUksQ0FBQ0g7UUFFM0IsTUFBTUksU0FBUyxJQUNiLElBQUlDLFFBQWEsQ0FBQ0MsU0FBU0M7Z0JBQ3pCLE1BQU1DLFNBQVNuQix1REFBVUEsQ0FBQ29CLFFBQVEsQ0FBQ0MsYUFBYSxDQUM5QztvQkFBRUMsUUFBUTtvQkFBcUJDLGVBQWU7Z0JBQVEsR0FDdEQsQ0FBQ2QsT0FBWWU7b0JBQ1gsSUFBSWYsT0FBT1MsT0FBT1Q7eUJBQ2JRLFFBQVFPO2dCQUNmO2dCQUVGTCxPQUFPTSxHQUFHLENBQUNiO1lBQ2I7UUFFRixNQUFNWSxTQUFTLE1BQU1UO1FBRXJCLE9BQU9oQixrRkFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVrQixLQUFLRixPQUFPRyxVQUFVO1lBQUVDLFdBQVdKLE9BQU9JLFNBQVM7UUFBQyxHQUFHO1lBQUVsQixRQUFRO1FBQUk7SUFDbEcsRUFBRSxPQUFPbUIsS0FBVTtRQUNqQkMsUUFBUXJCLEtBQUssQ0FBQyxpQkFBaUJvQjtRQUMvQixPQUFPOUIsa0ZBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPb0IsSUFBSUUsT0FBTyxJQUFJRjtRQUFJLEdBQUc7WUFBRW5CLFFBQVE7UUFBSTtJQUN4RTtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250cm9sLWFjY2VzLWVtcGxveW1lbnQvLi9hcHAvYXBpL3VwbG9hZC9yb3V0ZS50cz9hODhkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuLy8gaW1wb3J0IGNsb3VkaW5hcnkgZnJvbSBcIkAvbGliL2Nsb3VkaW5hcnlcIjtcblxuLy8gZXhwb3J0IGNvbnN0IFBPU1QgPSBhc3luYyAocmVxOiBSZXF1ZXN0KSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xuLy8gICAgIGNvbnN0IGZpbGUgPSBmb3JtLmdldChcImZpbGVcIikgYXMgdW5rbm93biBhcyBGaWxlIHwgbnVsbDtcbi8vICAgICBpZiAoIWZpbGUpIHtcbi8vICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk5vIGZpbGVcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuLy8gICAgIH1cblxuLy8gICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuLy8gICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKTtcblxuLy8gICAgIGNvbnN0IHVwbG9hZCA9ICgpID0+XG4vLyAgICAgICBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8vICAgICAgICAgY29uc3Qgc3RyZWFtID0gY2xvdWRpbmFyeS51cGxvYWRlci51cGxvYWRfc3RyZWFtKFxuLy8gICAgICAgICAgIHsgZm9sZGVyOiBcIm5leHRfZnJvbnRfcGhvdG9zXCIsIHJlc291cmNlX3R5cGU6IFwiaW1hZ2VcIiB9LFxuLy8gICAgICAgICAgIChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKGVycm9yKSByZWplY3QoZXJyb3IpO1xuLy8gICAgICAgICAgICAgZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICBzdHJlYW0uZW5kKGJ1ZmZlcik7XG4vLyAgICAgICB9KTtcblxuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwbG9hZCgpO1xuXG4vLyAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuLy8gICAgICAgeyB1cmw6IHJlc3VsdC5zZWN1cmVfdXJsLCBwdWJsaWNfaWQ6IHJlc3VsdC5wdWJsaWNfaWQgfSxcbi8vICAgICAgIHsgc3RhdHVzOiAyMDAgfVxuLy8gICAgICk7XG4vLyAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgZXJyKTtcbi8vICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgZXJyIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4vLyAgIH1cbi8vIH07XG5cbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGNsb3VkaW5hcnkgZnJvbSBcIkAvbGliL2Nsb3VkaW5hcnlcIjtcblxuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSBcIm5vZGVqc1wiOyAvLyDwn5S5IGltcG9ydGFudGUgcGFyYSBCdWZmZXIgeSB1cGxvYWRfc3RyZWFtXG5cbmV4cG9ydCBjb25zdCBQT1NUID0gYXN5bmMgKHJlcTogUmVxdWVzdCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXEuZm9ybURhdGEoKTtcbiAgICBjb25zdCBmaWxlID0gZm9ybS5nZXQoXCJmaWxlXCIpIGFzIHVua25vd24gYXMgRmlsZSB8IG51bGw7XG5cbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk5vIGZpbGVcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKTtcblxuICAgIGNvbnN0IHVwbG9hZCA9ICgpID0+XG4gICAgICBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY2xvdWRpbmFyeS51cGxvYWRlci51cGxvYWRfc3RyZWFtKFxuICAgICAgICAgIHsgZm9sZGVyOiBcIm5leHRfZnJvbnRfcGhvdG9zXCIsIHJlc291cmNlX3R5cGU6IFwiaW1hZ2VcIiB9LFxuICAgICAgICAgIChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBzdHJlYW0uZW5kKGJ1ZmZlcik7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwbG9hZCgpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdXJsOiByZXN1bHQuc2VjdXJlX3VybCwgcHVibGljX2lkOiByZXN1bHQucHVibGljX2lkIH0sIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVwbG9hZCBlcnJvcjpcIiwgZXJyKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfHwgZXJyIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn07XG5cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjbG91ZGluYXJ5IiwicnVudGltZSIsIlBPU1QiLCJyZXEiLCJmb3JtIiwiZm9ybURhdGEiLCJmaWxlIiwiZ2V0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiYXJyYXlCdWZmZXIiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwidXBsb2FkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdHJlYW0iLCJ1cGxvYWRlciIsInVwbG9hZF9zdHJlYW0iLCJmb2xkZXIiLCJyZXNvdXJjZV90eXBlIiwicmVzdWx0IiwiZW5kIiwidXJsIiwic2VjdXJlX3VybCIsInB1YmxpY19pZCIsImVyciIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/upload/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/cloudinary.ts":
/*!***************************!*\
  !*** ./lib/cloudinary.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY2xvdWRpbmFyeS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUNDLDBDQUFVQSxDQUFDQyxNQUFNLENBQUM7SUFDaEJDLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MscUJBQXFCO0lBQzdDQyxTQUFTSCxRQUFRQyxHQUFHLENBQUNHLGtCQUFrQjtJQUN2Q0MsWUFBWUwsUUFBUUMsR0FBRyxDQUFDSyxxQkFBcUI7QUFDL0M7QUFFQSxpRUFBZVQsMENBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250cm9sLWFjY2VzLWVtcGxveW1lbnQvLi9saWIvY2xvdWRpbmFyeS50cz84NDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHYyIGFzIGNsb3VkaW5hcnkgfSBmcm9tIFwiY2xvdWRpbmFyeVwiO1xuXG5jbG91ZGluYXJ5LmNvbmZpZyh7XG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQ0xPVURfTkFNRSxcbiAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfS0VZLFxuICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9TRUNSRVQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xvdWRpbmFyeTtcblxuXG4iXSwibmFtZXMiOlsidjIiLCJjbG91ZGluYXJ5IiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRElOQVJZX0NMT1VEX05BTUUiLCJhcGlfa2V5IiwiQ0xPVURJTkFSWV9BUElfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VESU5BUllfQVBJX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/cloudinary.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/core-js","vendor-chunks/cloudinary","vendor-chunks/q","vendor-chunks/cloudinary-core"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fluckysanchez%2FDocuments%2Fcontrol-acces-employment%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fluckysanchez%2FDocuments%2Fcontrol-acces-employment&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();