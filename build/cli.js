#!/usr/bin/env node
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
var program = require("commander");
var _1 = __importDefault(require("./"));
var inquirer_1 = __importDefault(require("inquirer"));
var schema_utils_js_1 = require("@open-rpc/schema-utils-js");
var lodash_1 = require("lodash");
var fs = __importStar(require("fs"));
var util_1 = require("util");
var readFile = util_1.promisify(fs.readFile);
var writeFile = util_1.promisify(fs.writeFile);
var version = require("../package.json").version; // tslint:disable-line
program
    .version(version, "-v, --version")
    .command("init")
    .action(function () { return __awaiter(void 0, void 0, void 0, function () {
    var initAnswers, components, config;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        name: "document",
                        type: "input",
                        message: "Where is your OpenRPC document? May be a file path or url.",
                        default: function () { return "openrpc.json"; },
                        validate: function (d) { return __awaiter(void 0, void 0, void 0, function () {
                            var e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, schema_utils_js_1.parseOpenRPCDocument(d)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        e_1 = _a.sent();
                                        return [2 /*return*/, "Invalid document. The error recieved: " + e_1.message];
                                    case 3: return [2 /*return*/, true];
                                }
                            });
                        }); }
                    },
                    {
                        name: "outDir",
                        type: "input",
                        message: "Where would you like to write the generated artifacts?",
                        default: function () { return "./"; }
                    },
                    {
                        name: "componentTypes",
                        type: "checkbox",
                        message: "Which components would you like to generate?",
                        choices: [
                            { name: "client" },
                            { name: "server" },
                            { name: "docs" },
                        ]
                    },
                    {
                        name: "docsLanguages",
                        type: "checkbox",
                        message: "What type of documentation do you want to generate?",
                        choices: [
                            { name: "gatsby" }
                        ],
                        when: function (answers) { return answers.componentTypes && answers.componentTypes.find(function (ct) { return ct === "docs"; }) !== undefined; }
                    },
                    {
                        name: "clientLanguages",
                        type: "checkbox",
                        message: "What language(s) would you like to generate a client for?",
                        choices: [
                            { name: "typescript" },
                            { name: "rust" },
                        ],
                        when: function (answers) { return answers.componentTypes && answers.componentTypes.find(function (ct) { return ct === "client"; }) !== undefined; }
                    },
                    {
                        name: "serverLanguages",
                        type: "checkbox",
                        message: "What language(s) would you like to generate a server for?",
                        choices: [
                            { name: "typescript" }
                        ],
                        when: function (answers) { return answers.componentTypes && answers.componentTypes.find(function (ct) { return ct === "server"; }) !== undefined; }
                    },
                    {
                        name: "gatsbyDocsName",
                        type: "input",
                        message: "What would you like the gatsby based docs package to be named?",
                        when: function (answers) { return answers.clientLanguages && answers.clientLanguages.find(function (ct) { return ct === "typescript"; }) !== undefined; }
                    },
                    {
                        name: "typescriptClientName",
                        type: "input",
                        message: "What would you like the typescript client package to be named?",
                        when: function (answers) { return answers.clientLanguages && answers.clientLanguages.find(function (ct) { return ct === "typescript"; }) !== undefined; }
                    },
                    {
                        name: "rustClientName",
                        type: "input",
                        message: "What would you like the rust client crate to be named?",
                        when: function (answers) { return answers.clientLanguages && answers.clientLanguages.find(function (ct) { return ct === "rust"; }) !== undefined; }
                    },
                    {
                        name: "typescriptServerName",
                        type: "input",
                        message: "What would you like the typescript server package to be named?",
                        when: function (answers) { return answers.serverLanguages && answers.serverLanguages.find(function (ct) { return ct === "typescript"; }) !== undefined; }
                    },
                ])];
            case 1:
                initAnswers = _a.sent();
                components = [];
                console.log("Here is a summary of your Generator configuration:"); //tslint:disable-line
                console.log(JSON.stringify(initAnswers, undefined, "\t")); //tslint:disable-line
                initAnswers.componentTypes.forEach(function (componentType) {
                    initAnswers[componentType + "Languages"].forEach(function (language) {
                        components.push({
                            type: componentType,
                            name: initAnswers["" + language + lodash_1.capitalize(componentType) + "Name"],
                            language: language
                        });
                    });
                });
                config = {
                    openrpcDocument: initAnswers.document,
                    outDir: initAnswers.outDir,
                    components: components
                };
                console.log("Writing your config..."); //tslint:disable-line
                return [4 /*yield*/, writeFile("./open-rpc-generator-config.json", JSON.stringify(config, undefined, "    "), "utf8")];
            case 2:
                _a.sent();
                console.log("Config created at open-rpc-generator-config.json. To generate components for the first time run:"); // tslint:disable-line
                console.log("open-rpc-generator generate -c ./open-rpc-generator-config.json "); // tslint:disable-line
                return [2 /*return*/];
        }
    });
}); });
program
    .command("generate")
    .option("-d, --document [openrpcDocument]", "JSON string or a Path/Url pointing to an open rpc schema", "./openrpc.json")
    .option("-o, --outputDir [outputDirectory]", "output directory that the clients will be generated into", "./")
    .option("-c, --config [generatorConfigPath]", "Path to a JSON file with declarative generator config")
    .option("-t, --type [type]", "component type")
    .option("-l, --language [language]", "component language")
    .option("-n, --useName [useName]", "Name to use for the generated component")
    .action(function (opts) { return __awaiter(void 0, void 0, void 0, function () {
    var outDir, config, _a, _b, _c, e_2;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                outDir = opts.outputDir || process.cwd();
                config = {
                    openrpcDocument: opts.document,
                    outDir: outDir,
                    components: []
                };
                if (!opts.config) return [3 /*break*/, 2];
                _a = [__assign({}, config)];
                _c = (_b = JSON).parse;
                return [4 /*yield*/, readFile(opts.config, "utf8")];
            case 1:
                config = __assign.apply(void 0, _a.concat([_c.apply(_b, [_d.sent()])]));
                return [3 /*break*/, 3];
            case 2:
                config.components.push({
                    type: opts.type,
                    name: opts.useName,
                    language: opts.language,
                });
                _d.label = 3;
            case 3:
                _d.trys.push([3, 5, , 6]);
                return [4 /*yield*/, _1.default(config)];
            case 4:
                _d.sent();
                return [3 /*break*/, 6];
            case 5:
                e_2 = _d.sent();
                console.error("There was error at generator runtime:");
                console.error(e_2);
                process.exit(1);
                return [3 /*break*/, 6];
            case 6:
                console.log("Done!"); // tslint:disable-line
                return [2 /*return*/];
        }
    });
}); });
program.parseAsync(process.argv);
//# sourceMappingURL=cli.js.map