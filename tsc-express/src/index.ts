import http from "http";
import { env } from "./env";
import { logger } from "./logger";
import { createApp } from "./app";

async function main() {
    try {
        const port:number = +(env.PORT ?? 8000);
        const server = http.createServer(createApp());
        server.listen(port,()=>{
            logger.info(`Server is listening on ${port}`)
        })
    } catch (error) {
        logger.error(`Error Starting Server ${error}`);
    }
}
main();


