// entry point for use directly in browser
import { Config, load_cvd } from "../load_cvd";
import { load_ctx } from "./canvas";
import { create_controls } from "./controls";

export interface BrowserConfig extends Config {
    // leave undefined to not create controls
    controls_id?: string;
    // random string used to create unique ids
    key?: string;
}

export function load(image_urls: string[], canvas_id: string, config: BrowserConfig | undefined) {
    load_cvd(
        image_urls,
        load_ctx(canvas_id),
        config ? config : {},
        config && config.controls_id ? create_controls(config.controls_id, config.key) : undefined,
    )
}
