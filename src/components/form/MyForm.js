import { render } from "@testing-library/react";
import React from "react";


class MyForm extends React.Component{

    // 或者 contentType:multipart/form-data均可以，multipart/form-data表示可以上传下载文件
    //（既可以发送文本数据，也支持二进制数据上载），表明传输的数据要用到多媒体传输协议，由于多媒体传输的都是大量的数据，
    // 所以规定上传文件必须是post方法；contentType默认为application/x-www-form-urlencoded不能上传文件
    render() {
        return(
            <div>
            <form id="userForm" enctype="multipart/form-data">
                <formItem ><input  name="userName"/></formItem>
                <formItem ><input  name="userAge"/></formItem>
                <formItem ><input type="file" name="information"/></formItem>
                <formItem  ><button  onClick={this.Add.bind(this)}>提交</button> </formItem>
            </form>
            </div>

        )
    }

}

export default MyForm;