import React from "react";
import axios from "axios";

class DownloadFile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgURL: '',
            file: ''
        };
    }

    download = (e) => {
        e.preventDefault();
        const url = 'http://localhost:8000/downloadfile/'
        axios({
            method: "POST",
            url: url,
            params: '',
            responseType: 'blob' //返回是个文件
          }).then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            console.log('url is ' + url)
            console.log(response.data)
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', '2022csco.pdf'); //下载后的文件名myfile.log
            document.body.appendChild(link);
            link.click();
          })
    }

    render() {
        return(
            <div className="file-box">
                <form encType="multipart/form-data">
                    <a href="{% url 'down' %}">下载</a>
                    <div className = "downloader">
                        <button type="primary" className="downloader-button" onClick={(e) => this.download(e)}>下载</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default DownloadFile;