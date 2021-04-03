import { TemplateExecutor } from "lodash";
import { OpenrpcDocument as OpenRPC } from "@open-rpc/meta-schema";
import Typings from "@open-rpc/typings";
declare type FHook = (destDir: string, fromDir: string, component: TComponentConfig, openrpcDocument: OpenRPC, Typings: Typings) => Promise<any>;
export interface IHooks {
    beforeCopyStatic?: FHook[];
    afterCopyStatic?: FHook[];
    beforeCompileTemplate?: FHook[];
    afterCompileTemplate?: FHook[];
    templateFiles: {
        [key: string]: {
            path: string;
            template: TemplateExecutor;
        }[];
    };
}
interface IClientConfig {
    type: "client";
    name: string;
    language: "typescript" | "rust";
}
interface IServerConfig {
    type: "server";
    name: string;
    language: "typescript";
}
interface IDocsConfig {
    type: "docs";
    name: string;
    language: "gatsby";
}
declare type TComponentConfig = IClientConfig | IServerConfig | IDocsConfig;
export interface IGeneratorOptions {
    outDir: string;
    openrpcDocument: OpenRPC | string;
    components: TComponentConfig[];
}
declare const _default: (generatorOptions: IGeneratorOptions) => Promise<void>;
export default _default;
