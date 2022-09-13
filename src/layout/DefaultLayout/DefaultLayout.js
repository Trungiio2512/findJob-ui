import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layout/conponent/Header';
import Footer from '~/layout/conponent/Footer';
import SideBar from '~/layout/conponent/SideBar';
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
