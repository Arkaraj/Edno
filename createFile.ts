const encoder = new TextEncoder();

const testText: Uint8Array = encoder.encode(
  "Hello World \nThis is just for testing!\nThis file was created from files/createFile.ts"
);

await Deno.writeFile("test.txt", testText);
