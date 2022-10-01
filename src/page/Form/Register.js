import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//--------------------------------
import styles from './Form.module.scss';
import router from '~/config/configRouter';
import { registerUser } from '~/redux/apiReaquest';
import { defaultRegisterStatus } from '~/redux/userSlice';

const cx = classNames.bind(styles);

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const hasError = useSelector((state) => state.auth.registerStatus.error);
    const messError = useSelector((state) => state.auth.registerStatus.message);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPass = () => {
        setShowPassword((prev) => !prev);
    };

    const handleShowComfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev);
    };
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .matches(/^(?!.* )/, 'Không được có khoảng cách')
                .required('Không được để trống'),
            password: Yup.string()
                .matches(
                    /^(?!.* )(?=.*[0-9]).{8,32}$/,
                    'Mật khẩu tối thiểu tám ký tự, ít nhất một số, không có khoảng trắng',
                )
                .required('Không được để trống'),
            email: Yup.string()
                .email('Không phải địa chỉ email')
                .required('Không được để trống')
                .matches(/^(?!.* )/, 'Không có khoảng trắng'),
            confirmPassword: Yup.string()
                .required('Không được để trống')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu không đúng')
                .matches(/^(?!.* )/, 'Không được có khoảng cách'),
        }),
        onSubmit: async (values) => {
            const { confirmPassword, ...user } = values;
            await registerUser(user, dispatch, navigate);
        },
    });

    useEffect(() => {
        dispatch(defaultRegisterStatus());
    }, []);
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>Đăng ký</h2>
                <form className={cx('login-form')} onSubmit={formik.handleSubmit}>
                    <div className={cx('form__group')}>
                        <label htmlFor={'userName'}>Tên người dùng:</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Nhập tên người dùng"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.userName}
                        />
                        {formik.touched.userName && formik.errors.userName ? (
                            <span className={cx('error')}>{formik.errors.userName}</span>
                        ) : null}
                    </div>
                    <div className={cx('form__group')}>
                        <label htmlFor={'email'}>Email:</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
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
                    <div className={cx('form__group')}>
                        <label htmlFor={cx('confirmPassword')}>Nhập lại mật khẩu</label>
                        <div className={cx('form__input')}>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Nhập mật khẩu"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />

                            <span className={cx('show-pass')} onClick={handleShowComfirmPassword}>
                                {showConfirmPassword ? (
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                ) : (
                                    <FontAwesomeIcon icon={faEye} />
                                )}
                            </span>
                        </div>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <span className={cx('error')}>{formik.errors.confirmPassword}</span>
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
                    Bạn đã có tài khoản?
                    <strong>
                        {/*put router link here*/}
                        <Link to={router.login}>Đăng nhập</Link>
                    </strong>
                </div>
            </div>
        </section>
    );
}

export default Register;
