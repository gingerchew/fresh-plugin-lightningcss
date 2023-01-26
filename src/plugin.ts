import init, { transform, TransformOptions } from "https://esm.sh/lightningcss-wasm@1.18.0";
import { Plugin } from "$fresh/server.ts";

type LightningCSSPluginOptions = Omit<TransformOptions, 'code'> & {
    code?: Uint8Array
}

await init();
const encoder = new TextEncoder();
const decoder = new TextDecoder();

export default function lightningcssPlugin(options:LightningCSSPluginOptions):Plugin {
    
    const text = Deno.readTextFileSync(options.filename) ?? '';
    options.code = encoder.encode(text) as Uint8Array;

    const { code } = transform({
        ...(options as TransformOptions)
    })
    
    return {
        name: 'lightningcss',
        render() {
            return {
                styles: [
                    {
                        cssText: decoder.decode(code)
                    }
                ]
            }
        }
    }
}