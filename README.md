# Challenge Encriptador – Backend

_Encryptor_ is an API built on NodeJs. Its purpose is to save an encrypted name in the database and return it unencrypted when queried by id.
## Authors

- [@feliperocha93](https://github.com/feliperocha93)


## Tech Stack
**Server:** Node, Express
**Database:** Postgres
**Tests:** Jest, Supertest
**Crypto:** Crypto _(node module)_


## Run Locally

Clone the project

```bash
  git clone https://github.com/feliperocha93/facile-challenge
```

Go to the project directory

```bash
  cd facile-challenge
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start:dev
```


## Running Tests

To run tests and get coverage, run the following command

```bash
  yarn test
```

To run tests and watch changes

```bash
  yarn test:watch
```


## Collection

In the thunder_client folder, there is the API collection. To use it, you need download Thunder Client extension and import collection and env files that are inside the folder.

First, click in Collections (Thunder Client NavBar - on the top) > import > select ```thunder-collection_Facile Challenge.json```. After it, click in Env > import > select ```thunder-environment_Facile Challenge.json```

