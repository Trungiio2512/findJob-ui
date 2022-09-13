import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import MenuItem from './MenuItem';
import MenuTitle from './MenuTitle';

const cx = classNames.bind(styles);

function Menu({ children, items = [], title, hideOnClick = false }) {
    const [menuHistory, setMenuHistory] = useState([{ data: items }]);

    const currentMenu = menuHistory[menuHistory.length - 1];

    const renderMenuItem = () => {
        return currentMenu.data.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (!!item.subMenu) {
                            setMenuHistory((prev) => [...prev, item.subMenu]);
                        } else {
                            return;
                        }
                    }}
                />
            );
        });
    };

    const handleResetMenu = () => {
        setMenuHistory((prev) => prev.slice(0, 1));
    };

    const handleBackMenu = () => {
        setMenuHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderTippyBoxMenu = (attrs) => {
        return (
            <div className={cx('menu')} tabIndex="-1" {...attrs}>
                <PropperWrapper className={cx('menu__list')}>
                    {menuHistory.length > 1 && <MenuTitle onBackMenu={handleBackMenu} title={currentMenu.title} />}
                    {renderMenuItem()}
                </PropperWrapper>
            </div>
        );
    };
    return (
        <Tippy
            zIndex={999}
            interactive
            delay={[500, 800]}
            offset={[0, 10]}
            placement="bottom-end"
            onHide={handleResetMenu}
            hideOnClick={hideOnClick}
            render={(attrs) => renderTippyBoxMenu(attrs)}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
