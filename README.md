# svelte-portfolio
Configurable portfolio built using SvelteKit and TypeScript

### Technologies
- SvelteKit
- TypeScript
- PostgreSQL
- Skeleton UI
- Tailwind CSS

### Installation
To link the application with your Vercel PostgreSQL database, run the following commands:
[Read more](https://vercel.com/docs/cli)
```
pnpm i -g vercel
vercel link
vercel env pull .env.development.local
```

You must also specify the following environment variables
```
PUBLIC_USERNAME=Your name
PUBLIC_CONTACT=www.linkedIn.com/you
PUBLIC_ABOUT="My name is..."
```