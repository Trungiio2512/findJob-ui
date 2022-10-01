import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Item.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Item({ company = false, profession = false, hoverBorder = false, hoverTitle = false }) {
    return (
        <div className={cx('item', { hoverBorder, hoverTitle })}>
            <Link to>
                <div className={cx('item__img-box')}>
                    <Image className={cx('item__img')} alt="default" />
                </div>
                <div className={cx('item__body')}>
                    <span className={cx('item__name')}>Company Name</span>
                    {company && (
                        <Button small news className={cx('item__tag')}>
                            Viec moi
                        </Button>
                    )}
                    {profession && <span className={cx('item__count')}>217 việc làm</span>}
                </div>
            </Link>
        </div>
    );
}

export default Item;
