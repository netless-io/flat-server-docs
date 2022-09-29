export default [
    {
        text: "cloud storage",
        collapsible: true,
        items: [
            {
                text: "create directory",
                link: "/api/v2/cloud-storage/create-directory",
            },
            {
                text: "list",
                link: "/api/v2/cloud-storage/list",
            },
            {
                text: "rename",
                link: "/api/v2/cloud-storage/rename"
            },
            {
                text: "move",
                link: "/api/v2/cloud-storage/move"
            },
            {
                text: "delete",
                link: "/api/v2/cloud-storage/delete"
            },
            {
                text: "upload start",
                link: "/api/v2/cloud-storage/upload-start"
            },
            {
                text: "upload finish",
                link: "/api/v2/cloud-storage/upload-finish"
            },
            {
                text: "convert start",
                link: "/api/v2/cloud-storage/convert-start"
            },
            {
                text: "convert finish",
                link: "/api/v2/cloud-storage/convert-finish"
            }
        ]
    },
    {
        text: "user",
        collapsible: true,
        items: [
            {
                text: "rename",
                link: "/api/v2/user/rename",
            },
            {
                text: "upload avatar start",
                link: "/api/v2/user/upload-avatar-start",
            },
            {
                text: "upload avatar finish",
                link: "/api/v2/user/upload-avatar-finish",
            },
        ]
    },
    {
        text: "developer",
        collapsible: true,
        items: [
            {
                text: "oauth list",
                link: "/api/v2/developer/oauth-list",
            },
            {
                text: "oauth create",
                link: "/api/v2/developer/oauth-create",
            },
            {
                text: "oauth delete",
                link: "/api/v2/developer/oauth-delete",
            },
            {
                text: "oauth update",
                link: "/api/v2/developer/oauth-update",
            },
            {
                text: "oauth settting detail",
                link: "/api/v2/developer/oauth-settting-detail",
            },
            {
                text: "oauth create secret",
                link: "/api/v2/developer/oauth-secret-create"
            },
            {
                text: "oauth delete secret",
                link: "/api/v2/developer/oauth-secret-delete"
            },
            {
                text: "oauth start upload logo",
                link: "/api/v2/developer/oauth-start-upload-logo"
            },
            {
                text: "oauth finish upload logo",
                link: "/api/v2/developer/oauth-finish-upload-logo"
            }
        ]
    },
    {
        text: "application",
        collapsible: true,
        items: [
            {
                text: "application list",
                link: "/api/v2/application/list",
            },
            {
                text: "application detail",
                link: "/api/v2/application/detail",
            },
            {
                text: "application revoke",
                link: "/api/v2/application/revoke",
            }
        ]
    }
]