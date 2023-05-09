# Project specific Stuff

## Styling

The app styling is based on the [`shadcn-ui`](https://ui.shadcn.com) library. This uses Radix UI and tailwindcss under the hood. For the Icons we use the [`lucide-react`](https://lucide.dev/docs/lucide-react).

As a Reference for the Theming, you should take a look at the [Shadcn UI - Theming](https://ui.shadcn.com/docs/theming) page.

## Database

As a Database we use [Supabase](https://supabase.com/docs) and the [Prisma ORM](https://www.prisma.io/)

# Setup Remix

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
