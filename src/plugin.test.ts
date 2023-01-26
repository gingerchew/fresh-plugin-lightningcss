/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import lightningcssPlugin from "./plugin.ts";

import {
    assert,
    assertEquals,
    assertStringIncludes,
} from "https://deno.land/std@0.150.0/testing/asserts.ts";
import { PluginRenderResult } from "$fresh/server.ts";
// import { PluginRenderFunctionResult } from "https://deno.land/x/fresh@1.1.2/src/server";

// from https://deno.land/x/fresh@1.1.2/src/server/types.ts?source
interface PluginRenderFunctionResult {
    /** The HTML text that was rendered. */
    htmlText: string;
    /** If the renderer encountered any islands that require hydration on the
     * client.
     */
    requiresHydration: boolean;
}

const render = ():PluginRenderFunctionResult => {
    return {
        htmlText: '',
        requiresHydration: false
    }

}

Deno.test('minify', () => {
    const result = lightningcssPlugin({
        filename: 'static/main.css',
        minify: true
    });

    const renderResult = result?.render?.({ render });

    const styles = renderResult?.styles;

    assert(styles?.[0]?.cssText, Deno.readTextFileSync('static/outcome.css'));
});

/*
Deno.test('projectRoot', () => {
    const result = lightningcssPlugin({
        filename: 'static/main.css',
    });

    const renderResult = result?.render?.({ render });
})
*/
