import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { fisrtFooter, secondFooter, thirdFooter, fourthFooter } from '~/config/configFooter';

const cx = classNames.bind(styles);

function Footer() {
    const [footers, setFooter] = useState([fisrtFooter, secondFooter, thirdFooter, fourthFooter]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer')}>
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        {footers.map((footer, index) => (
                            <div key={index} className={cx('col l-3 m-6 c-12')}>
                                <h4 className={cx('footer__heading')}>{footer.heading}</h4>
                                <ul className={cx('footer__list')}>
                                    {footer.list.map((footerItem, index) => (
                                        <Link to={footerItem.path} key={index} className={cx('footer__item')}>
                                            {footerItem.title}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
