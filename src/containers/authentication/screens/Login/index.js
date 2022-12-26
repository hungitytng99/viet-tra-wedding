import { notification } from 'antd';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { REQUEST_STATE } from '~/app-configs';
import { LOGIN } from '~/redux/actions/user';
import './animated.css';
import './Login.css';

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const history = useHistory();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        dispatch(LOGIN(data));
    };

    useEffect(() => {
        if (user.authState == REQUEST_STATE.SUCCESS) {
            history.push('/');
        }
        if (user?.authState === REQUEST_STATE.ERROR) {
            notification.error({
                message: 'Thất bại',
                description: 'Tài khoản hoặc mật khẩu không chính xác!',
            });
        }
    }, [user?.authState]);

    return (
      <div></div>
    );
};

export default Login;
