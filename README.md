<h1 align="center">
   Next.js SaaS + RBAC
</h1> 

<div align="center">
  <b>
    <a href="#-Technologies"><b>Technologies</b></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-Project"><b>Project</b></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-Roles & permissions"><b>Roles & permissions</b></a>&nbsp;&nbsp;&nbsp;
  </b>  
</div>

---

<div align="center">
   <img alt="project img" title="image" src="./apps/web/src/assets/logo.svg" width="5%"/>
</div> 

</br>

## 🚀 Getting started

### Api

Clone the project and access the folder.

```bash
$ git clone https://github.com/diaspd/project-manager-saas.git
$ cd 
$ cd apps/api
```

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
$ pnpm run dev
```
The app will be available on `http://localhost:3333`

</br>

## Running the Docker
```
$ 
```

### Web

## Setting the app

```bash
$ cd apps/web
```

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
$ pnpm run dev
```

The app will be available on `http://localhost:3000`

</br>

"Don't forget to set local variables on .env.example"

<br></br>

## 💻 Technologies

This project was developed with the following technologies:
<b>
- React 19
- Next 15
- Fastify
- Shadcn/ui
- Monorepo
</b>

</br>

## 📄 Project
💰 This project contains all the necessary boilerplate to setup a multi-tenant SaaS with Next.js including authentication and RBAC authorization.

<br></br>

## 🔐 Roles & permissions.

### Roles

- Owner (count as administrator)
- Administrator
- Member
- Billing (one per organization)
- Anonymous

### Permissions table

|                          | Administrator | Member | Billing | Anonymous |
| ------------------------ | ------------- | ------ | ------- | --------- |
| Update organization      | ✅            | ❌     | ❌      | ❌        |
| Delete organization      | ✅            | ❌     | ❌      | ❌        |
| Invite a member          | ✅            | ❌     | ❌      | ❌        |
| Revoke an invite         | ✅            | ❌     | ❌      | ❌        |
| List members             | ✅            | ✅     | ✅      | ❌        |
| Transfer ownership       | ⚠️            | ❌     | ❌      | ❌        |
| Update member role       | ✅            | ❌     | ❌      | ❌        |
| Delete member            | ✅            | ⚠️     | ❌      | ❌        |
| List projects            | ✅            | ✅     | ✅      | ❌        |
| Create a new project     | ✅            | ✅     | ❌      | ❌        |
| Update a project         | ✅            | ⚠️     | ❌      | ❌        |
| Delete a project         | ✅            | ⚠️     | ❌      | ❌        |
| Get billing details      | ✅            | ❌     | ✅      | ❌        |
| Export billing details   | ✅            | ❌     | ✅      | ❌        |

> ✅ = allowed
> ❌ = not allowed
> ⚠️ = allowed w/ conditions
#### Conditions

- Only owners may transfer organization ownership;
- Only administrators and project authors may update/delete the project;
- Members can leave their own organization;

Made with ♥ by Pedro Dias. 👋 Follow me on social media! </br>

If you can give a little star, I appreciate it 🤩
