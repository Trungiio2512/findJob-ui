import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
//--------------------------------
import styles from './Form.module.scss';
import { loginUser } from '~/redux/apiReaquest';
import router from '~/config/configRouter';
import { defaultLoginStatus } from '~/redux/userSlice';

const cx = classNames.bind(styles);

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const hasError = useSelector((state) => state.auth.loginStatus.error);
    const messError = useSelector((state) => state.auth.loginStatus.message);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPass = () => {
        setShowPassword((prev) => !prev);
    };

    useEffect(() => {
        dispatch(defaultLoginStatus());
    }, []);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .matches(/^(?=.*[0-9]).{8,32}$/, 'Mật khẩu tối thiểu tám ký tự, ít nhất một số')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: async (values) => {
            await loginUser(values, dispatch, navigate);
        },
    });
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>Đăng nhập</h2>
                <form className={cx('login-form')} onSubmit={formik.handleSubmit}>
                    <div className={cx('form__group')}>
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Nhập email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <span className={cx('error')}>{formik.errors.email}</span>
                        ) : null}
                    </div>
                    <div className={cx('form__group')}>
                        <label htmlFor={'password'}>Mật khẩu:</label>
                        <div className={cx('form__input')}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Nhập mật khẩu"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            <span className={cx('show-pass')} onClick={handleShowPass}>
                                {showPassword ? (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                ) : (
                                    <FontAwesomeIcon icon={faEye} />
                                )}
                            </span>
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <span className={cx('error')}>{formik.errors.password}</span>
                        ) : null}
                    </div>
                    {hasError && <span className={cx('error')}>{messError}</span>}
                    <button type="submit" className={cx('btn-submit')}>
                        Đăng nhập
                    </button>
                </form>

                <div className={cx('forgot-password')}>Bạn quên mật khẩu ?</div>
                <div className={cx('other-account')}>
                    <div className={cx('account', 'account--facebook')}>
                        <FontAwesomeIcon icon={faFacebookF} className={cx('icon')} />
                    </div>
                    <div className={cx('account', 'account--google')}>
                        <FontAwesomeIcon icon={faGoogle} className={cx('icon')} />
                    </div>
                </div>
                <div className={cx('other')}>
                    Bạn chưa có tài khoản?
                    <strong>
                        {/*put router link here*/}
                        <Link to={router.register}>Đăng ký</Link>
                    </strong>
                </div>
            </div>
        </section>
    );
}

export default Login;
