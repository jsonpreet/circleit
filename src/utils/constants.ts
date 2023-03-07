export const defaultCircles = [

    {
        circleName: 'BitCoinCircle',
        publicKey: 'BC1YLhx5DHXhWb7ojEfD1fT59YuNE65X4LN7YrZegtSWNrJBr4B3iER'
    },
    {
        circleName: 'DeSoCircle',
        publicKey: 'BC1YLgYC9tzqwYNC6uSSaRrzDcf5ab3CAYXJgfCosbvemEx6Vxwe6q7',
    },
   
    {
        circleName: "CircleIt",
        publicKey: "BC1YLgbXw1u8M3Sf6812pfewa2ozzK8SGQfkKU162QJf59xe1YaFfuU"
    },
    {
        circleName: "CardanoCircle",
        publicKey: "BC1YLhRJYmk7ZhcMhjPU6chYc5EpKsL9XFgYManNKTPUio3VM6YEfF6"
    },
    {
        circleName: "RandomOpinions",
        publicKey: "BC1YLhk1nid26BsyYgaJ1z2pp4tkmfc5PdrdgGcsTe2Yqvc2yrTk2BG"
    },
    {
        circleName: "DevCircle",
        publicKey: "BC1YLgjBP7W4nT3SmPAEHx1Lioa8CaauXZzS7M7X95zyZZ3TgwAKK6f"
    }
]

export const NODE_URL = 'https://node.deso.org/api/v0'; //'https://node.deso.org/api/v0';

export const DESO_CONFIG = {
    nodeUri: NODE_URL
}

export const MIN_DESO_TO_CREATE_PROFILE = 0.001 // IDK WHAT'S THE EXACT VALUE IS. COPIED IT FROM DIAMOND'S FRONTEND (NOT FROM CODE);

export const APP = {
    Name: 'Circleit',
    URL: 'https://circleit.app',
    Description: '',
    Twitter: '@CircleItApp'
}

// Messages
export const ERROR_MESSAGE = 'Oops, something went wrong!'
export const SIGN_IN_REQUIRED_MESSAGE = 'Sign in required'
export const SIGN_ERROR = 'Failed to sign data'

// Media
export const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/mpeg', 'video/ogg', 'video/webm', 'video/quicktime'];
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
export const ALLOWED_MEDIA_TYPES = [...ALLOWED_VIDEO_TYPES, ...ALLOWED_IMAGE_TYPES];

export const GIPHY_TOKEN = 'mztAE0vdQdlfCYsM11E6UaPjUmjpYDHV'
export const LIVEPEER_STUDIO_API_KEY = 'c2bb473c-47af-46be-b991-08648b229b1e'

export const MESSAGE_PAGE_LIMIT = 15;
export const MIN_WIDTH_DESKTOP = 1024;
export const SCROLL_THRESHOLD = 0.5;