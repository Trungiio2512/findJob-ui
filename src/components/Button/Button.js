import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            disabled = false,
            small = false,
            lagre = false,
            outline = false,
            primary = false,
            hot = false,
            news = false,
            to,
            newJob,
            href,
            onClick,
            children,
            className,
            iconLeft,
            iconRight,
            ...passProps
        },
        ref,
    ) => {
        let Type = 'button';
        const props = {
            onClick,
            ...passProps,
        };

        const classes = cx('btn', {
            [className]: className,
            outline,
            primary,
            hot,
            newJob,
            small,
            lagre,
            news,
        });

        // remove event when btn disabled
        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        }
        if (to) {
            props.to = to;
            Type = Link;
        } else if (href) {
            props.href = href;
            Type = 'a';
        }
        return (
            <Type className={classes} {...props} ref={ref}>
                {iconLeft && <span className={cx('icon', 'icon--left')}>{iconLeft}</span>}
                {children}
                {iconRight && <span className={cx('icon', 'icon--right')}>{iconRight}</span>}
            </Type>
        );
    },
);

export default Button;
