import { Application } from "jsr:@oak/oak@^14.2.0";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";

const port = 8080;

const app = new Application();

const setHeaders = (headers: Headers, path: string, stats?: Deno.FileInfo) => {
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Embedder-Policy", "require-corp");
};

app.use(staticFiles("public", { setHeaders }));

app.listen({ port });
console.log(`listening on port ${port}`);
