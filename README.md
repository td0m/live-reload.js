1. copy and import this file.
   - it's so simple, I don't even distribute it with NPM or CDNs. Just copy paste.
2. make sure your backend has a `/health` endpoint that returns the time the server was span up as the value of the `startedAt` key.
3. reload backend on save.
   - I do this via `find . | entr -rs 'go run ./'`
4. party!

I also recommend filtering out these requests from the network tab with the following filter:
 - `-regexp:/health$`
