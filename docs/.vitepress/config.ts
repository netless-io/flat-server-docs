import { defineConfig } from "vitepress"
import apiV2 from "./sidebar/api-v2";
import configs from "./sidebar/configs";
import miscAJVFormats from "./sidebar/misc-ajv-formats";
import types from "./sidebar/types";

export default defineConfig({
    lang: "en-US",
    title: "Agora Flat Server",
    description: "Agora Flat Server Documentation",
    themeConfig: {
        nav: [
            {
                text: "Home",
                link: "/"
            },
            {
                text: "API",
                link: "/api/v2/index"
            },
            {
                text: "Configs",
                link: "/configs/index"
            },
            {
                text: "Types",
                link: "/types/index"
            },
            {
                text: "Misc",
                items: [
                    {
                        text: "AJV Formats",
                        link: "/misc/ajv-formats/index"
                    }
                ]
            }
        ],
        sidebar: {
            "/api/v2/": apiV2,
            "/configs/": configs,
            "/types/": types,
            "/misc/ajv-formats": miscAJVFormats,
        },
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/netless-io/flat-server",
            },
            {
                icon: "slack",
                link: "https://join.slack.com/t/agoraflat/shared_invite/zt-vdb09pf6-mD4hB7sDA4LXN2O5dhmEPQ",
            },
            {
                icon: "twitter",
                link: "https://twitter.com/AgoraFlat"
            }
        ],
        editLink: {
            pattern: "https://github.com/netless-io/flat-server-docs/edit/main/docs/:path",
            text: "Edit this page on GitHub"
        },
        footer: {
            message: "Released under the MIT License.",
        },
    }
});
