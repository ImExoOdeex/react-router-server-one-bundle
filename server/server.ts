import { availableParallelism } from "os";
import { App } from "./app";
import { serve } from "@hono/node-server";
import cluster from "cluster";

if (cluster.isPrimary) {
    for (let i = 0; i < availableParallelism(); i++) {
        const worker = cluster.fork();
        worker.on("online", () => {
            console.log(`${i} Worker ${worker.process.pid} started`);
        });
    }
} else {
    const app = new App()
    app.initialize().then(() => {
        serve({
            port: 3000,
            fetch: app.fetch,
        })
        console.log(`Server started on port 3000`)  
    })
}