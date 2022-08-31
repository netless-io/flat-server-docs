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
    }
]