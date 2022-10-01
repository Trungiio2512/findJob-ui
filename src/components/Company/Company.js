import classNames from 'classnames/bind';
import styles from './Company.module.scss';
import Item from '~/components/Item';
import { imgCompany } from '~/assets/imgExmaple';

const cx = classNames.bind(styles);

function CompanyList({ col_l = '2-4', col_m = 4, col_s = 12 }) {
    return (
        <div className={cx('grid')}>
            <div className={cx('row')}>
                {imgCompany.map((img, index) => (
                    <div key={index} className={cx(`col l-${col_l} m-${col_m} c-${col_s}`)}>
                        <Item company hoverBorder />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompanyList;
