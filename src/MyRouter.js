import React from "react";
import {Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./components/login/Login";
import Logs from "./components/learn_log/Logs";
import UploadFile from "./components/upload_file/UploadFile";
import DownloadFile from "./components/download_file/DownloadFile";

class MyRouter extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Routes>
                        <Route path = "/about" element = {<About/>} />
                        <Route path = "/home" element = {<Home/>} />
                        <Route path = "/login" element = {<Login/>} />
                        <Route path = "/logs" element = {<Logs/>} />
                        <Route path = "/uploadfile" element = {<UploadFile />} />
                        <Route path = "/downloadfile" element = {<DownloadFile />} />
                    </Routes>
                </div>
            </div>

        )
    }
}


export default MyRouter;