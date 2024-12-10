import type { Context } from "hono";
import { createMiddleware } from "hono/factory";
import type { AppLoadContext } from "react-router";
import type { ServerBuild } from "react-router";
import { createRequestHandler } from "react-router";


export interface RemixMiddlewareOptions {
	build: ServerBuild;
	mode?: "development" | "production";
	getLoadContext?(c: Context): Promise<AppLoadContext> | AppLoadContext;
}

export function handler({
	mode,
	build,
	getLoadContext,
}: RemixMiddlewareOptions) {
	return createMiddleware(async (c) => {
		const requestHandler = createRequestHandler(build, mode);
		const loadContext = getLoadContext?.(c);
		return await requestHandler(
			c.req.raw,
			loadContext instanceof Promise ? await loadContext : loadContext,
		);
	});
} 