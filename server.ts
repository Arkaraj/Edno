// import { serve } from "https://deno.land/std/http/server.ts";
// import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
// const handler = (request: Request) => {
//   const body = `Your user-agent is:\n\n${
//     request.headers.get("user-agent") ?? "Unknown"
//   }`;
//   return new Response(body, { status: 200 });
// };
// const server = serve(handler);
// console.log("listening to http://localhost:8000/");
// console.log(await bcrypt.hash("thisIsRandomStuff"));
// for await (const req of server) {
//   if (req.method == "GET" && req.url == "/test") {
//     req.respond({ body: JSON.stringify({ message: "Hello, World!" }) });
//   } else {
//     req.respond({
//       body: `{ "error": true, "code": 404,
//       "message": "path ${req.method} ${req.url} not found." }`,
//     });
//   }
// }
import { serve } from "https://deno.land/std/http/server.ts";
serve((_req) => new Response("Hello, world"));
