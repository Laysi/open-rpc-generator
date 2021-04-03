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
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var fs_extra_1 = require("fs-extra");
var fs = __importStar(require("fs"));
var util_1 = require("util");
var lodash_1 = require("lodash");
var writeFile = util_1.promisify(fs.writeFile);
var readFile = util_1.promisify(fs.readFile);
var indexTemplate = lodash_1.template("import React, { useEffect } from \"react\";\nimport { Grid, Typography, Box, Button } from \"@material-ui/core\";\nimport { Link as GatsbyLink } from \"gatsby\";\nimport Link from \"@material-ui/core/Link\";\nimport { grey } from \"@material-ui/core/colors\";\n\nconst MyApp: React.FC = () => {\n  return (\n    <>\n      <Grid container alignContent=\"center\" alignItems=\"center\" justify=\"center\" direction=\"column\">\n        <img className=\"logo\" alt=\"logo\" src={\"https://raw.githubusercontent.com/open-rpc/design/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/256x256.png\"} style={{ paddingTop: \"10%\" }} />\n        <br/>\n        <Typography variant=\"h1\"><%= openrpcDocument.info.title %></Typography>\n        <Typography gutterBottom style={{ paddingTop: \"100px\", paddingBottom: \"20px\" }} variant=\"inherit\">\n          <%= openrpcDocument.info.description %>\n        </Typography>\n        <br/>\n        <Button variant=\"contained\" color=\"primary\" href=\"/api-documentation\">\n          API Reference Documentation\n        </Button>\n        <br />\n        <br />\n        <br />\n      </Grid>\n    </>\n  );\n};\n\nexport default MyApp;\n");
var gatsbyConfigTemplate = lodash_1.template("\nmodule.exports = {\n  pathPrefix: \"\",\n  siteMetadata: {\n    title: '<%= openrpcDocument.info.title %>',\n    description: '<%= openrpcDocument.info.description %>',\n    logoUrl: 'https://raw.githubusercontent.com/open-rpc/design/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/256x256.png',\n    primaryColor: '#3f51b5', //material-ui primary color\n    secondaryColor: '#f50057', //material-ui secondary color\n    author: '',\n    menuLinks: [\n      {\n        name: 'home',\n        link: '/',\n        ignoreNextPrev: true\n      },\n      {\n        name: 'API Documentation',\n        link: '/api-documentation'\n      }\n    ],\n    footerLinks: [\n      {\n        name: 'OpenRPC',\n        link: 'https://open-rpc.org'\n      }\n    ]\n  },\n  plugins: [\n    \"@xops.net/gatsby-openrpc-theme\",\n    {\n      resolve: 'gatsby-plugin-manifest',\n      options: {\n        name: 'pristine-site',\n        short_name: 'pristine-site',\n        start_url: '/',\n        background_color: 'transparent',\n        theme_color: '#3f51b5',\n        display: 'minimal-ui',\n        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.\n      },\n    }\n  ],\n}\n");
var hooks = {
    afterCopyStatic: [
        function (dest, frm, component, openrpcDocument) { return __awaiter(void 0, void 0, void 0, function () {
            var destPath, tmplPath, tmplPkgStr, tmplPkg, currPkgStr, currPkg, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        destPath = path.join(dest, "package.json");
                        tmplPath = path.join(dest, "_package.json");
                        return [4 /*yield*/, readFile(tmplPath, "utf8")];
                    case 1:
                        tmplPkgStr = _a.sent();
                        tmplPkg = JSON.parse(tmplPkgStr);
                        tmplPkg.name = component.name || lodash_1.startCase(openrpcDocument.info.title).replace(/\s/g, "");
                        tmplPkg.version = openrpcDocument.info.version;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, readFile(destPath, "utf8")];
                    case 3:
                        currPkgStr = _a.sent();
                        currPkg = JSON.parse(currPkgStr);
                        tmplPkg = __assign(__assign(__assign({}, currPkg), tmplPkg), { dependencies: __assign(__assign({}, currPkg.dependencies), tmplPkg.dependencies), devDependencies: __assign(__assign({}, currPkg.devDependencies), tmplPkg.devDependencies) });
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, writeFile(destPath, JSON.stringify(tmplPkg, undefined, "  "))];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, fs_extra_1.remove(tmplPath)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); },
    ],
    templateFiles: {
        gatsby: [
            {
                path: "src/pages/index.tsx",
                template: indexTemplate,
            },
            {
                path: "gatsby-config.js",
                template: gatsbyConfigTemplate,
            },
        ],
    },
};
exports.default = hooks;
//# sourceMappingURL=docs.js.map