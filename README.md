# Nuxt 3 Playground

## Prerequisites

- [nodejs](https://nodejs.org/en/) installed 

## Getting started

`npm install` - to install all dependecies  
`npm run prisma:setup` - to migrate db and fill with sample data  
`npm run dev` - to start development server on http://localhost:3000  


## Database
[prisma docs](https://www.prisma.io/docs) 

`npm run prisma:studio` - to open the primsa db browser  
`npm run prisma:migrate` - to create a new db migration  
`npm run prisma:generate` - to generate a new db client  

## Trouble Shooting

### Changes in the db schema are not recognized by TypeScript
-> reload the TypeScript-Service  
in VSC: `strg + p`, enter "`>TypeScript: Reload Project`"" (only availabe if a opened TypeScript file is focused )

