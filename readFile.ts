const file = await Deno.open("test.txt");
await Deno.copy(file, Deno.stdout);
file.close();
