import React from "react";
import axios from "axios";
import "./UploadFile.css"

class UploadFile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgURL: '',
            file: ''
        };
    }

    uploadPhoto = (e) => {
        let _this = this
        console.log(e.target.files)
        let imgfile = e.target.files[0];///获得input的第一个图片
        // console.log('我是图片源文件',imgfile)
        // this.setState({imgURL : e.target.value})
        _this.setState({file: e.target.files[0]})
        if (imgfile.size > 102400000) {
            alert('大于了1MB,请重新上传', 3)
        } else {
            let reader = new FileReader();//filereader.readasdataurl读取图像文件转换为流
            reader.readAsDataURL(imgfile);
            // console.log(reader)
            reader.onload = function (e) {//读取数据时会触发一个load事件
                let imgs = this.result
                // console.log('我是回显的Base64图片文件',imgs)
                _this.setState({
                    imgURL : imgs,
                    file: imgfile
                })
            };

        }
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state.file);
        const url = 'http://localhost:8000/uploadfile/'
        const formData = new FormData();
        formData.append('file', this.state.file);
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        axios.post(
            url,
            formData,
            config
        )
        .then(
            res => {
                console.log(res);
            }
        )
    }

    render() {
        return(
            <div className="file-box">
                <form encType="multipart/form-data">
                    <div className="uploader">
                        <input type="file" accept="*" className="uploader-input" onChange={(e) => this.uploadPhoto(e)} />
                        <button className="uploder-button" onClick={(e) => this.submit(e)}>提交</button>
                    </div>
                    <div>
                        <img src={this.state.imgURL} style={{ width: '200px', height: '200px' }}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default UploadFile;