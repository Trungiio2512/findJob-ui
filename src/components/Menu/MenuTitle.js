import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function MenuTitle({ title, onBackMenu }) {
    return (
        <div className={cx('menu__heading')}>
            <Button className={cx('menu__heading-btn')} onClick={onBackMenu}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <span>{title}</span>
        </div>
    );
}

export default MenuTitle;
