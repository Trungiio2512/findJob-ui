import classNames from "classnames/bind";
import styles from './Job.module.scss'

import Image from "~/components/Image"
const cx = classNames.bind(styles)
function Job() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('job-image')}>
                <Image className={cx('image')} />
            </div>
            <div className={cx('info')}>
                <h3 className={cx('name-job')}>Name Job</h3>
                <span className={cx('conpany')}>Name Company</span>
            </div>
        </div>
    );
}

export default Job;