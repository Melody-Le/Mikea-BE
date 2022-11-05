# Mikea - server side

## About

Mikea is an Ikea Web clone with custome UI, which help user easier to purchase furniture for their home.

## Getting started

- Clone the repository

```
git clone git@github.com:Melody-Le/Mikea-BE.git
```

- Install dependencies

```
cd <project_name>
npm install
```

- Starting compilation in watch mode. ( compile ts file into js file, what will be store in "dist" folder)

```
tsc -w
```

- Setup ENV environment :
  - Create the `.env` file in the root , with the content below:

```
PORT= yourInput
DB_USER = yourinput
DB_NAME = yourinput
DB_PASS = yourinput
JWT_SECRET_ACCESS = yourinput
JWT_SECRET_REFRESH = yourinput
DB_DIALECT=postgres
FRONT_END_URL=yourfrontendlink
CORS_ORIGIN=yourChoice

```

## Set up sequelize ORM :

- Check to make sure sequelize-cli is installed correctly:

```
npx sequelize --help
```

- Create DB

```
npx sequelize db:create

```

- Create table into database by the command:

```bash
npx sequelize-cli db:migrate

# you also can run the command below, what already set in script package.json:
npm run migrate
```

- If you wanna undo migrate:

```bash
npx sequelize-cli db:migrate:undo

# you also can run the command below, what already set in script package.json:
npm run migrate-undo
```

## Running Seeds:

- To create seed files:

```bash
npx sequelize-cli db:seed:all

# you also can run the command below, what already set in script package.json:
npm run seed-all
```

`Important Note when do seeding`

When you run seeding, it WILL appear error

```bash
# ERROR:
ERROR: insert or update on table "lineItems" violates foreign key constraint "lineItems_variantId_fkey"
ERROR DETAIL: Key (variantId)=(9WMIi4TktPWI7HKd) is not present in table "variants".
```

The reason is: vaiantID in lineItem Seeder file need to be update with the correct ID in database, so you can come to database, copy the variant any , replace it in file path:: `./seeders/20221024080339-lineitem`

- Run seed again for lineItem file only:

```bash
npx sequelize db:seed --seed 20221024080339-lineitem.js
```

`You also can skip the step above, if after that , you do add to cart in postman`

## Run and Test Postman collection:

- Download postman file name: `Mikea.postman_collection.json` in the root of this repo,
- Import into your postman
- RUn login route, then we will get the activeTOken and refresh token
- RUn Refreshtoken route:
  - Copy Active token into Barear Token Athoriation
  - Copy Refresh token into the body of refresh token
  - Click run
  - Then we will get the active token
- copy that Active token into Variables `access_token` of Mikea Postman collection

# Deploy

- [Backend link](https://github.com/Melody-Le/Mikea-BE)
- [Mikea Fronend - Demo Link](https://mikea.netlify.app/)
