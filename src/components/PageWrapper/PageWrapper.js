import classNames from 'classnames/bind';
import styles from './PageWrapper.module.scss';
const cx = classNames.bind(styles);

function PageWrapper({ pageName = '', children }) {
    return (
        <section className={cx(pageName ? `page page__${pageName}` : 'page')}>
            <div className={cx('page__container')}>{children}</div>
        </section>
    );
}

export default PageWrapper;
