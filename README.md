# nextjs-nextauth-prisma-db
This is a Next.js starter kit that uses NextAuth.js for simple email + password login, Prisma as the ORM, and a Northwind MySQL database to persist the data.

## Setup and Use NextAuth.js in Next.js App Directory

### 【Setp 1】
```bash
$ node --version
$ npm --version
$ npm i -y
$ npx create-next-app@latest nextjs-nextauth-prisma-db
$ mkdir src prisma
$ npm install -D next-auth
$ npm install -D prisma @prisma/client @next-auth/prisma-adapter typescript @types/node
$ npm install -D tailwindcss postcss autoprefixer
$ npm install -D @mui/material @emotion/react @emotion/styled --legacy-peer-deps
$ npm install -D @mui/icons-material --legacy-peer-deps
```

### 【Setp 2】
```bash
$touch tsconfig.json prisma/schema.prisma
```
#### tsconfig.json

```json
  "exclude": ["lib"],
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "next-env.d.ts",
    "src/auth.js",
    ".next/types/**/*.ts"
  ],
```

#### prisma/schema.prisma

```js
datasource db {
  provider = "mysql"
  url      = "mysql://root:123456@localhost:3306/norhwind"
}

generator client {
  provider        = "prisma-client-js"
}
```

### 【Setp 3】

```bash
$ npx prisma generate
$ npx prisma migrate dev --name init
```
