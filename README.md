# Overbooked AI Project Guide

> # 1. mongodb setup

1. run given cmd and then start it
2. **Or you can specify your own local or remote mongodb:url**

```bash
docker run -d -p 27017:27017 --name mongo-db -v mongo_data:/data/db mongo:latest
```

---

> # 2. wiremock start

1.  check if `mappings` is in root dir with its files inside
2.  copy and run wiremock docker cmd

```bash
docker run -it --rm \
-p 8080:8080 \
--name wiremock_llm \
-v $(pwd)/mappings:/home/wiremock/mappings \
wiremock/wiremock:3.9.2
```

---

3. run given cmd below to check if wiremock is running
   ```javascript
   // run in browser
   http://localhost:8080/__admin/
   ```

---

> # 3. start the server

```bash
# make sure you run server on 8000 for frontend
npm run dev
```

---

> # 4. Frontend

```bash
# run
npm run dev
```

---

> # 5. API: Postman

##### import the json file to postman and you check APIs: **ASSESSMENT.postman_collection.json**

---

> # 6. Doubt

_for any doubt: **emailto: bogati.mahesh.299.792.458@gmail.com**_


> please, consider other security measures and practices, like env config and other for this assignment, if any furthur question, I welcome you to ask me on interview.
