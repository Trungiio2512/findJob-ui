import classNames from 'classnames/bind';
import styles from './JobQuick.module.scss';
import JobItem from '~/components/JobItem';
const cx = classNames.bind(styles);

function JobQuick({ col_l = 4, col_m = 6, col_s = 12 }) {
    return (
        <div className={cx('grid')}>
            <div className={cx('row')}>
                <div className={cx(`col l-${col_l} m-${col_m} c-${col_s}`)}>
                    <JobItem hot />
                </div>
                <div className={cx(`col l-${col_l} m-${col_m} c-${col_s}`)}>
                    <JobItem hot />
                </div>
                <div className={cx(`col l-${col_l} m-${col_m} c-${col_s}`)}>
                    <JobItem hot />
                </div>
                <div className={cx(`col l-${col_l} m-${col_m} c-${col_s}`)}>
                    <JobItem hot />
                </div>
                <div className={cx(`col l-${col_l} m-${col_m} c-${col_s}`)}>
                    <JobItem hot />
                </div>
                <div className={cx(`col l-${col_l} m-${col_m} c-${col_s}`)}>
                    <JobItem hot />
                </div>
                <div className={cx(`col l-${col_l} m-${col_m} c-${col_s}`)}>
                    <JobItem hot />
                </div>
                <div className={cx(`col l-${col_l} m-${col_m} c-${col_s}`)}>
                    <JobItem hot />
                </div>
                <div className={cx(`col l-${col_l} m-${col_m} c-${col_s}`)}>
                    <JobItem hot />
                </div>
            </div>
        </div>
    );
}

export default JobQuick;
