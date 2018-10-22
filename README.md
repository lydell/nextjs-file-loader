# Next.js [file-loader] example

I couldn't get the [with-hashed-statics] example working, so I made my own.
This example:

- Lets you `import image from "./some/image.jpg"` in .js files.
- Lets you `url("./some/image.jpg")` in .css files.
- Works during development (`next`).
- Works with `next start` (after `next build`).
- Works with `next export`.

Try it out:

1. Clone this repo.
2. Install dependencies: `npm ci`
3. Run in dev mode: `npm run dev`
4. Build and export: `npm run build`
5. Run in production mode: `npm start`
6. Serve static export: `npm run serve`

[file-loader]: https://github.com/webpack-contrib/file-loader
[with-hashed-statics]: https://github.com/zeit/next.js/tree/canary/examples/with-hashed-statics
