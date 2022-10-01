import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({ className, next = false, prev = false, sizeS = false, onClick }) {
    const classes = cx('btn', {
        [className]: className,
        next,
        prev,
        sizeS,
    });
    return <div className={classes} onClick={onClick} />;
}

export default Button;
