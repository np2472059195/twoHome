import React from 'react';
import { connect ,dva } from 'dva';
import styles from './login.css'

// const app = dva();
// console.log(app._store);

function Login(props) {
    console.log(props);
    let {userName,userPwd} = props;
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrap}>
                <div className={styles.writeIn}>
                    <img src={require("../../assets/yonghu.png")} alt="" />
                    <input type="text" placeholder="请输入用户名" />
                </div>
                <div className={styles.writeIn}>
                    <img src={require("../../assets/mima.png")} alt="" />
                    <input type="text" placeholder="请输入用户密码" />
                </div>
                <div className={styles.check}>
                    <div>
                        <span></span>
                        <p>记住密码</p>
                    </div>
                    <p>忘记密码</p>
                </div>
                <button className={styles.btn}>登陆</button>
            </div>
        </div>
    );
}

Login.propTypes = {
};

export default connect()(Login);