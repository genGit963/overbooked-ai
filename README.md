# Overbooked AI Project Guide

> # mongodb setup

1. run given cmd and then start it
2. **Or you can specify your own local or remote mongodb:url**

```bash
docker run -d -p 27017:27017 --name mongo-db -v mongo_data:/data/db mongo:latest
```

---

> # wiremock start

1.  check if `mappings` is in root dir with its files inside
2.  copy and run wiremock docker cmd

```bash
docker run -it --rm \
-p 8080:8080 \
--name wiremock_llm \
-v $(pwd)/mappings:/home/wiremock/mappings \
wiremock/wiremock:3.9.2
```

3. run given cmd below to check if wiremock is running
   ```javascript
   // run in browser
   http://localhost:8080/__admin/
   ```

---

> # start the server

1. go with dev mode

```bash
# for now: dev mode
npm run dev
```
