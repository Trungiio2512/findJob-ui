import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);
function Button({ className, next, prev, onClick }) {
    const classes = cx('btn', {
        [className]: className,
        next,
        prev,
    });
    return <div className={classes} onClick={onClick} />;
}

export default Button;
