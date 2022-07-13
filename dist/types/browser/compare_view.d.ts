import { Config } from "../load_cvd";
export interface BrowserConfig extends Config {
    controls_id?: string;
    key?: string;
}
export declare function load(image_urls: string[], canvas_id: string, config?: BrowserConfig): void;