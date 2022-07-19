import React, { createRef } from "react";
import axios from "axios";
import "./login.css"
// import MyForm from "../form/MyForm";
// import qs from 'qs';
import md5 from "md5-node";
import UploadFile from "../upload_file/UploadFile";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.accountRef = createRef()
        this.state = {
            imgURL: '',
            fileList: null
        }
    }

    register = () => {

    }

    account = "lcforwold"
    code = "ap.ap220"

    testLg = (e) => {
        e.preventDefault();
        const loginForm = {
            account: this.account,
            code: this.code
        }
        console.log(loginForm)
    }

    watchAccount = (e) => {
        this.account = e.target.value
    }

    watchCode = (e) => {
        this.code = e.target.value
    }

    submit = (e, account, code) => {
        e.preventDefault()
        const url = 'http://localhost:8000/sendlogin/';


/*
方式一
*/
        // const data = {
        //     'account': account,
        //     'code': md5(code)
        // };
        // const options = {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //     data: qs.stringify(data),
        //     url,
        // };

/*
方式二
*/
        const formData = new FormData();
        formData.append('account', account);
        formData.append('code', md5(code));
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        return (
/*
方式一
*/
            // axios(options)
            // .then(res => {
            //     if(res && res.status === 200){
            //         // 成功时的回调
            //         console.log("post success")
            //     }else{
            //         // 失败时的回调
            //         console.log("post failed")
            //     }
            // })

/*
方式二
*/
            axios.post(url, formData, config)
                .then( res => {
                    console.log(res)
                }).catch( res => {
                    console.log(res)
                })
        )
    }

    render() {
        return (
            <div className="login-contain">
                <form className = "login-form"
                        id = "loginForm"
                        onSubmit = {(e) => this.submit(e, this.account, this.code)}>
                    <div className="login-form-account">
                        <label htmlFor="account">账号:</label>
                        <input id = 'account' type = 'text' onChange={this.watchAccount} placeholder = "请输入账号" />
                    </div>
                    <div className="login-form-code">
                        <label htmlFor="code">密码:</label>
                        <input id = 'code' type = 'text' placeholder = "请输入密码" onChange={this.watchCode}/>
                    </div>
                <div className="login-form-confirm">
                        <button id = 'login-submit'>登录</button>
                        <button id = 'cancel'>取消</button>
                </div>
                </form>
                <UploadFile/>
            </div>
        )
    }
}

export default Login;