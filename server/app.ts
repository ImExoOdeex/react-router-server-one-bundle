import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import type { ServerBuild } from "react-router";
import { handler } from "./handler";
import * as build from "../build/server/index";

export class App extends Hono {
    constructor() {
        super()
    }

    async initialize() {
        this.use("*", serveStatic({
            root: "./build/client",
        }));

        let finalBuild: ServerBuild = build as unknown as ServerBuild;

        if (process.env.NODE_ENV === "development") {
            finalBuild = await import('virtual:remix/server-build')
        }

        this.use(
            "*",
            handler({
                build: finalBuild as unknown as ServerBuild,
                mode: process.env.NODE_ENV as "development" | "production",
            })
        );
    }
}