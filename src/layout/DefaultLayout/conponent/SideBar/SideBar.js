import classNames from 'classnames/bind';
import config from '~/config';
import styles from './SideBar.module.scss';

import Menu, { MenuItem } from './Menu';
import { HomeIcon, JobIcon, QuestionIcon, HomeiconActive, JobIconActive, QuestionIconActive } from '~/components/Icons';
const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.router.home} icon={<HomeIcon />} iconActive={<HomeiconActive />} />
                <MenuItem title="Viec lam" to={config.router.jobs} icon={<JobIcon />} iconActive={<JobIconActive />} />
                <MenuItem
                    title="Cau hoi"
                    to={config.router.viewQuestion}
                    icon={<QuestionIcon />}
                    iconActive={<QuestionIconActive />}
                />
                {/* {config.MENU_SIDEBAR.map((menu, index) => (
                    <MenuItem key={index} title={menu.title} icon={menu.icon} />
                ))} */}
            </Menu>
        </aside>
    );
}

export default SideBar;
