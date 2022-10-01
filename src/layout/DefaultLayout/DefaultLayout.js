import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layout/DefaultLayout/conponent/Header';
import Footer from '~/layout/DefaultLayout/conponent/Footer';
import SideBar from '~/layout/DefaultLayout/conponent/SideBar';
const cx = classNames.bind(styles);

function Defaultlayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('container__wrapper')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default Defaultlayout;
