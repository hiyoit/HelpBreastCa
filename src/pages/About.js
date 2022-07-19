import React from "react";
import axios from "axios";

class About extends React.Component {

    getAboutData = () => {
        axios
        .post('http://localhost:8000/about/')
        .then(
            response => {
                console.log('success', response.data);
            },
            error => {console.log('failed', error);}
        )
    };

    account = 'lcforworld';

    code = 'ap.ap220';

    sendAboutData = (account, code) => {
        axios
            .post('http://localhost:8000/sendlogin/',
                    {
                        "account" : account,
                        "code": code
                    }
                )
            .then(res => {
                if(res && res.status === 200){
                    // 成功时的回调
                    console.log("post success")
                    console.log("post success")
                }else{
                    // 失败时的回调
                    console.log("post failed")
                }
            })

    };

    render() {
        return (
            <div>
                <button onClick={() => this.getAboutData()}>test</button>
                <span>hello </span>
                <button onClick={() => this.sendAboutData(this.account, this.code)}>send</button>
            </div>
        )
    }
}

export default About;