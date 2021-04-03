"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var fs_extra_1 = require("fs-extra");
var path = __importStar(require("path"));
var util_1 = require("util");
var lodash_1 = require("lodash");
var schema_utils_js_1 = require("@open-rpc/schema-utils-js");
var typings_1 = __importDefault(require("@open-rpc/typings"));
var client_1 = __importDefault(require("./components/client"));
var server_1 = __importDefault(require("./components/server"));
var docs_1 = __importDefault(require("./components/docs"));
var writeFile = util_1.promisify(fs.writeFile);
var moveFiles = function (dirName, file1, file2) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fs_extra_1.move(path.join(dirName, file1), path.join(dirName, file2))];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/];
            case 3: return [2 /*return*/];
        }
    });
}); };
var componentHooks = {
    client: client_1.default,
    server: server_1.default,
    docs: docs_1.default,
};
var getComponentTemplatePath = function (component) {
    var d = "/templates/" + component.type + "/" + component.language + "/";
    return path.join(__dirname, "../", d);
};
var copyStaticForComponent = function (destinationDirectoryName, component, dereffedDocument, typings) { return __awaiter(void 0, void 0, void 0, function () {
    var staticPath, hooks, beforeCopyStatic, afterCopyStatic, _i, beforeCopyStatic_1, hookFn, _a, afterCopyStatic_1, hookFn;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                staticPath = getComponentTemplatePath(component);
                hooks = componentHooks[component.type];
                beforeCopyStatic = hooks.beforeCopyStatic, afterCopyStatic = hooks.afterCopyStatic;
                if (!(beforeCopyStatic && beforeCopyStatic.length && beforeCopyStatic.length > 0)) return [3 /*break*/, 4];
                _i = 0, beforeCopyStatic_1 = beforeCopyStatic;
                _b.label = 1;
            case 1:
                if (!(_i < beforeCopyStatic_1.length)) return [3 /*break*/, 4];
                hookFn = beforeCopyStatic_1[_i];
                return [4 /*yield*/, hookFn(destinationDirectoryName, staticPath, component, dereffedDocument, typings)];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [4 /*yield*/, fs_extra_1.copy(staticPath, destinationDirectoryName, { overwrite: true })];
            case 5:
                _b.sent();
                // ignores errors incase there is no gitignore...
                // gets around an issue with the copy function whereby hidden dotfiles are not copied.
                return [4 /*yield*/, moveFiles(destinationDirectoryName, "gitignore", ".gitignore")];
            case 6:
                // ignores errors incase there is no gitignore...
                // gets around an issue with the copy function whereby hidden dotfiles are not copied.
                _b.sent();
                return [4 /*yield*/, fs_extra_1.remove(destinationDirectoryName + "/gitignore")];
            case 7:
                _b.sent();
                if (!(afterCopyStatic && afterCopyStatic.length && afterCopyStatic.length > 0)) return [3 /*break*/, 11];
                _a = 0, afterCopyStatic_1 = afterCopyStatic;
                _b.label = 8;
            case 8:
                if (!(_a < afterCopyStatic_1.length)) return [3 /*break*/, 11];
                hookFn = afterCopyStatic_1[_a];
                return [4 /*yield*/, hookFn(destinationDirectoryName, staticPath, component, dereffedDocument, typings)];
            case 9:
                _b.sent();
                _b.label = 10;
            case 10:
                _a++;
                return [3 /*break*/, 8];
            case 11: return [2 /*return*/];
        }
    });
}); };
var prepareOutputDirectory = function (outDir, component) { return __awaiter(void 0, void 0, void 0, function () {
    var destinationDirectoryName;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                destinationDirectoryName = outDir + "/" + component.type + "/" + component.language;
                return [4 /*yield*/, fs_extra_1.ensureDir(destinationDirectoryName)];
            case 1:
                _a.sent();
                return [2 /*return*/, destinationDirectoryName];
        }
    });
}); };
var writeOpenRpcDocument = function (outDir, doc, component) { return __awaiter(void 0, void 0, void 0, function () {
    var toWrite, _a, destinationDirectoryName;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(typeof doc === "string")) return [3 /*break*/, 2];
                return [4 /*yield*/, schema_utils_js_1.parseOpenRPCDocument(doc, { dereference: false })];
            case 1:
                _a = _b.sent();
                return [3 /*break*/, 3];
            case 2:
                _a = doc;
                _b.label = 3;
            case 3:
                toWrite = _a;
                destinationDirectoryName = outDir + "/" + component.type + "/" + component.language + "/src/openrpc.json";
                return [4 /*yield*/, writeFile(destinationDirectoryName, JSON.stringify(toWrite, undefined, "  "), "utf8")];
            case 4:
                _b.sent();
                return [2 /*return*/, destinationDirectoryName];
        }
    });
}); };
var compileTemplate = function (destDir, component, dereffedDocument, typings) { return __awaiter(void 0, void 0, void 0, function () {
    var templatedPath, hooks, beforeCompileTemplate, afterCompileTemplate, _i, beforeCompileTemplate_1, hookFn, templates, _a, templates_1, t, result, _b, afterCompileTemplate_1, hookFn;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                templatedPath = getComponentTemplatePath(component) + "/templated";
                hooks = componentHooks[component.type];
                beforeCompileTemplate = hooks.beforeCompileTemplate, afterCompileTemplate = hooks.afterCompileTemplate;
                if (!(beforeCompileTemplate && beforeCompileTemplate.length && beforeCompileTemplate.length > 0)) return [3 /*break*/, 4];
                _i = 0, beforeCompileTemplate_1 = beforeCompileTemplate;
                _c.label = 1;
            case 1:
                if (!(_i < beforeCompileTemplate_1.length)) return [3 /*break*/, 4];
                hookFn = beforeCompileTemplate_1[_i];
                return [4 /*yield*/, hookFn(destDir, templatedPath, component, dereffedDocument, typings)];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                templates = hooks.templateFiles[component.language];
                _a = 0, templates_1 = templates;
                _c.label = 5;
            case 5:
                if (!(_a < templates_1.length)) return [3 /*break*/, 8];
                t = templates_1[_a];
                result = t.template({
                    className: lodash_1.startCase(dereffedDocument.info.title).replace(/\s/g, ""),
                    methodTypings: typings,
                    openrpcDocument: dereffedDocument,
                });
                return [4 /*yield*/, writeFile(destDir + "/" + t.path, result, "utf8")];
            case 6:
                _c.sent();
                _c.label = 7;
            case 7:
                _a++;
                return [3 /*break*/, 5];
            case 8:
                if (!(afterCompileTemplate && afterCompileTemplate.length && afterCompileTemplate.length > 0)) return [3 /*break*/, 12];
                _b = 0, afterCompileTemplate_1 = afterCompileTemplate;
                _c.label = 9;
            case 9:
                if (!(_b < afterCompileTemplate_1.length)) return [3 /*break*/, 12];
                hookFn = afterCompileTemplate_1[_b];
                return [4 /*yield*/, hookFn(destDir, templatedPath, component, dereffedDocument, typings)];
            case 10:
                _c.sent();
                _c.label = 11;
            case 11:
                _b++;
                return [3 /*break*/, 9];
            case 12: return [2 /*return*/, true];
        }
    });
}); };
exports.default = (function (generatorOptions) { return __awaiter(void 0, void 0, void 0, function () {
    var openrpcDocument, outDir, dereffedDocument, e_1, methodTypings, _i, _a, component, destDir;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                openrpcDocument = generatorOptions.openrpcDocument, outDir = generatorOptions.outDir;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, schema_utils_js_1.parseOpenRPCDocument(openrpcDocument)];
            case 2:
                dereffedDocument = _b.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _b.sent();
                console.error("Invalid OpenRPC document. Please revise the validation errors below:"); // tslint:disable-line
                console.error(e_1);
                throw e_1;
            case 4:
                methodTypings = new typings_1.default(dereffedDocument);
                _i = 0, _a = generatorOptions.components;
                _b.label = 5;
            case 5:
                if (!(_i < _a.length)) return [3 /*break*/, 11];
                component = _a[_i];
                return [4 /*yield*/, prepareOutputDirectory(outDir, component)];
            case 6:
                destDir = _b.sent();
                return [4 /*yield*/, copyStaticForComponent(destDir, component, dereffedDocument, methodTypings)];
            case 7:
                _b.sent();
                return [4 /*yield*/, writeOpenRpcDocument(outDir, openrpcDocument, component)];
            case 8:
                _b.sent();
                return [4 /*yield*/, compileTemplate(destDir, component, dereffedDocument, methodTypings)];
            case 9:
                _b.sent();
                _b.label = 10;
            case 10:
                _i++;
                return [3 /*break*/, 5];
            case 11: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=index.js.map