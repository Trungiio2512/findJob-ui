import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './SectionWrapper.module.scss';

const cx = classNames.bind(styles);
function SectionWrapper({
    children,
    sectionTitle = false,
    sectionBoder = false,
    sectionImgTitle = false,
    shouldShowAll = false,
}) {
    return (
        <div className={cx('section', { sectionBoder, sectionImgTitle, shouldShowAll })}>
            <div className={cx('section__wrapper')}>
                {sectionTitle && (
                    <div className={cx('section__title')}>
                        <h2>các công ty hàng đầu</h2>
                        {shouldShowAll ? (
                            <Link to className={cx('section__showAll')}>
                                Xem tất cả
                            </Link>
                        ) : (
                            ''
                        )}
                    </div>
                )}
                <div className={cx('section__content')}>{children}</div>
            </div>
        </div>
    );
}

export default SectionWrapper;
