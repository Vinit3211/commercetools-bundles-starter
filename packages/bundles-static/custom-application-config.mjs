import { entryPointUriPath, PERMISSIONS } from "./src/constants";

const config = {
name: "Static bundles",
    entryPointUriPath: entryPointUriPath,
    cloudIdentifier: "gcp-us",
    env: {
        production: {
            applicationId: "cl946dvxj87256301v437gub1oh",
            url: "https://Global-BT2.vercel.app",
        },
        development: {
            initialProjectKey: ""
        }
    },
    oAuthScopes: {
        view: ["view_products"],
        manage: ["manage_products"]
    },
    icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
    mainMenuLink: {
        defaultLabel: "Bundles",
        permissions: [PERMISSIONS.View],
        labelAllLocales: []
    }
}

export default config
