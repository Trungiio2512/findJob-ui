function validation(values, type) {
    const errors = {};
    errors.isError = false;
    if (!values.userName) {
        errors.userName = 'Tên đăng nhập không được để trống';
        errors.isError = true;
    }
    if (!values.email) {
        errors.email = 'Email không được để trống';
        errors.isError = true;
    } else if (!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g.test(values.email)) {
        errors.email = 'Đây không phải email';
        errors.isError = true;
    }
    if (!values.password) {
        errors.password = 'Mật khẩu không được để trống';
        errors.isError = true;
    } else if (!/^(?=.*[0-9]).{8,32}$/.test(values.password)) {
        errors.password = 'Mật khẩu tối thiểu tám ký tự, ít nhất một số:';
        errors.isError = true;
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Mật khẩu không được để trống';
        errors.isError = true;
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Mật khẩu không đúng';
        errors.isError = true;
    }
    return errors;
}

export default validation;
