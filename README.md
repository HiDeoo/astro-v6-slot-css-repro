# astro-v6-starlight-steps-css-repro

## Steps to reproduce

1. Clone this repository
1. Run `pnpm install`
1. Run `pnpm dev`
1. Visit [`http://localhost:4321/`](http://localhost:4321/) in your browser
1. Open `src/styles/global.css` and uncomment the `background-color: red;` line
1. Observe that the background color of the page change to red
1. Refresh the page and observe:
   - `<p>Test</p>` is rendered literally
   - The `content` from `await Astro.slots.render('default')` is logged in the console as `&lt;p&gt;Test&lt;/p&gt;`
