import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import styles from './JobItem.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function JobItem({ hot = false, jobDetail = false }) {
    return (
        <div className={cx('job')}>
            <Link to className={cx('job__link')}>
                <div className={cx('job__image-box')}>
                    <Image className={cx('job__image')} />
                </div>
                <div className={cx('job__info')}>
                    <div className={cx('job__wrapper')}>
                        <span className={cx('job__name')}>Name QuickJob toi len nam lop 10 la mot </span>
                        {jobDetail && <span className={cx('job__salary')}>Thuong luong</span>}
                    </div>
                    <span className={cx('job__conpany')}>Name Company</span>
                    {jobDetail && (
                        <>
                            <span className={cx('job__salary', 'job__salary--mobile')}>Thuong long</span>
                            <span className={cx('job__location')}>hai phong</span>
                            <div className={cx('job__wrapper')}>
                                <div className={cx('job__endDate')}>
                                    <span>Ngày kết thúc :</span>
                                    <span>25 - 12 - 2022</span>
                                </div>
                                <Button className={cx('job__btn')}>Thêm</Button>
                            </div>
                        </>
                    )}
                </div>
                {hot && <span className={cx('job__hot')}>Hot</span>}
            </Link>
        </div>
    );
}

export default JobItem;
