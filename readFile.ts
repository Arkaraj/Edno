const file = await Deno.open("test.txt");
// deno-lint-ignore no-deprecated-deno-api
await Deno.copy(file, Deno.stdout);
file.close();
