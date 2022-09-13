import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import Portal from '~/components/Portal';
import { useRef, useState, useEffect } from 'react';
import { useCallback } from 'react';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Modal({ isOpen, shouldCloseOnOverlay = false, onRequestClose = defaultFn }) {
    const [closing, setClosing] = useState(false);
    const containerRef = useRef();

    const handleRequestClose = useCallback(() => {
        setClosing(true);
        containerRef.current.addEventListener(
            'animationend',
            () => {
                setClosing(false);
                onRequestClose();
            },
            { once: true },
        );
    }, [onRequestClose]);
    if (!isOpen) {
        return null;
    }
    return (
        <Portal>
            <div className={cx('modal', { closing })}>
                <div className={cx('modal__overlay')} onClick={shouldCloseOnOverlay ? handleRequestClose : defaultFn} />
                <div className={cx('modal__container')} ref={containerRef}>
                    <div className={cx('modal__form')}>
                        <button onClick={handleRequestClose}>close</button>
                        <div className={cx('foom-group')}>
                            <label>Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div className={cx('foom-group')}>
                            <label>Password</label>
                            <input type="text" name="password" />
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default Modal;
