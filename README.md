# EDNO

Just trying out Deno :)

- Decentralized packages :))
- Installation: https://deno.land/
- https://deno.land/std@0.120.0
- Top level async
- Server: https://deno.land/std@0.120.0/http

## Tech Stack

- Deno

## Commands

```bash
$ deno run <filename>

# integrity check
$ deno cache --lock=lock.json --lock-write <dependency file>

# install/download all the dependencies
$ deno cache --lock=lock.json <dependecy file>

# Allow read/write operations
$ deno run --allow-write createFile.ts
$ deno run --allow-read readFile.ts

# Allow net
$ deno run --allow-net server.ts
```
