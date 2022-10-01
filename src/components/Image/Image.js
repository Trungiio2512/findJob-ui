import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, forwardRef, useEffect } from 'react';

import images from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    useEffect(() => {
        if (!src) {
            setFallback(customFallback);
        }
    }, []);
    return (
        <img
            className={cx('img-default', { [className]: className })}
            ref={ref}
            src={fallback || src}
            alt={alt || 'anh mac dinh'}
            {...props}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
