import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//----------------------------------------------------------------
import config from '~/config';
import Menu from '~/components/Menu';
import Button from '~/components/Button';
import Search from '~/layout/DefaultLayout/conponent/Search';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { MenuIcon } from '~/components/Icons';
import { useState } from 'react';
import router from '~/config/configRouter';
import Modal from '~/components/Modal';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Header() {
    // const [modal, setModal] = useState(false);

    // function openModal() {
    //     setModal(true);
    // }

    // function closeModal() {
    //     setModal(false);
    // }
    const user = useSelector((state) => state.auth?.user);
    return (
        <header className={cx('header')}>
            <Link to={config.router.home} className={cx('header__logo')}>
                <img src={images.logo} alt="logo" />
            </Link>
            {/* Search */}
            <Search />
            <div className={cx('header__actions')}>
                {user ? (
                    <div className={cx('header__notifi')}>
                        <Button className={cx('header__notifi-btn')}>
                            <FontAwesomeIcon className={cx('header__notifi-icon')} icon={faBell} />
                        </Button>
                        <span className={cx('header__notifi-amount')}>3</span>
                    </div>
                ) : (
                    <>
                        <Button to={router.login} outline className={cx('header__actions-btn')}>
                            Đăng nhập
                        </Button>
                        <Button to={router.register} outline className={cx('header__actions-btn')}>
                            Đăng ký
                        </Button>
                    </>
                )}
                {/* Menu */}

                <Menu items={user ? config.MENU_USER : config.MENU_NOT_USER}>
                    <div className={cx('header__actions-menu')}>
                        <MenuIcon />
                    </div>
                </Menu>
            </div>
            {/* <Modal isOpen={modal} onRequestClose={closeModal}>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>
            </Modal> */}
        </header>
    );
}

export default Header;
