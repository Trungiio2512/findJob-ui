import {
    CreateAccIcon,
    FaceIcon,
    GoogleIcon,
    LoginIcon,
    ManagerFileIcon,
    MyJobIcon,
    ManagerAccIcon,
    KeyBoardIcon,
    SupportIcon,
    LanguageIcon,
} from '~/components/Icons';
const MENU_LOGIN = [
    {
        icon: <FaceIcon />,
        title: 'Với Facebook',
    },
    {
        icon: <GoogleIcon />,
        title: 'Với Google',
        subMenu: {
            title: 'Ngôn ngữ',
            data: [
                { code: 'vi', title: 'Tiếng việt' },
                { code: 'en', title: 'English' },
            ],
        },
    },
    {
        icon: <LoginIcon />,
        title: 'Đăng nhập',
        type: 'login',
    },
    {
        icon: <CreateAccIcon />,
        title: 'Tạo tài khoản mới',
        type: 'register',
    },
];

const MENU_USER = [
    {
        icon: <ManagerFileIcon />,
        title: 'Quản lý hồ sơ',
    },
    {
        icon: <MyJobIcon />,
        title: 'Việc làm của tôi',
    },
    {
        icon: <ManagerAccIcon />,
        title: 'Quản lý tài khoản',
    },
    {
        icon: <LoginIcon />,
        title: 'Thoát',
    },
];

const MENU_NOT_USER = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng việt',
    },
    {
        icon: <SupportIcon />,
        title: 'Phản hồi và trợ giúp',
    },
    {
        icon: <KeyBoardIcon />,
        title: 'Phím tắt trên bàn phím',
    },
];

export { MENU_LOGIN, MENU_USER, MENU_NOT_USER };
