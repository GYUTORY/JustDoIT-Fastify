import fastify from "fastify";
import formData from "fastify-formdata";
import { AddressInfo } from "net";



const app = fastify();

app.register(formData, {
    limits: {
        fields: 0,
        fileSize: 1024 * 1024 * 1024,
        files: 1,
    },
    addToBody: true,
    sharedSchemaId: "fileSchema",
});

app.get("/", async (request, reply) => {
    return reply.status(200).send();
});

app.head("/", async (request, reply) => {
    return reply.status(200).send();
});

// Routing
// app.register(router, { prefix: "/" });

const start = async () => {
    try {
        // await app.listen(Config.SERVER.PORT);
        const { port } = app.server.address() as AddressInfo;
    } catch (err) {
        process.exit(1);
    }
};

start();
