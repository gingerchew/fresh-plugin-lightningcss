# fresh-plugin-lightningcss

Include LightningCSS in your 🍋 app

**Current Status**

So far I've only needed LightningCSS for minifying CSS code, and haven't taken a look into implementing the other options. I'm sure the current method of `{ ...options }` will be fine for most use cases though.

Since this is a Deno plugin, currently (as of 1/26/23) the Visitor and bundle options are not supported. This is due to limitations when using the lightningcss-wasm module, which supports Deno, where as lightningcss does not. I plan to update that once the LightningCSS team adds support.

_**Looking for help**_

_1/26/23_
- Writing more tests
    - I've written so far only the minify test, and even then I am not sure how trustworthy it is. Would love additional help for writing in the other options as well as other Deno/Fresh tests that may need adding.
- Reviewing dependencies
    - I believe I have added the ones to get it running, but there may be some that are not necessary and would love to kick them if they exist.