import React from "react";
import Card from "./Card";
import "./index.css"

class Logs extends React.Component {
    render() {
        const logsData = [
            {
                id: 0,
                date: new Date(2022, 6, 7, 11, 11),
                desc:'学习react',
                time:'40分钟'
            },
            {   id: 1,
                date: new Date(2022, 7, 7, 11, 11),
                desc:'学习vue',
                time:'30分钟'
            },
            {
                id: 2,
                date: new Date(2022, 7, 7, 11, 11),
                desc:'学习react2',
                time:'20分钟'
            },
        ]

        const logItemData = logsData.map((item)=>
            <Card key = {item.id} date = {item.date} desc = {item.desc} time = {item.time}/>)
        return(
            <div className='logs'>
                {logItemData}
            </div>
        );
    }
}

export default Logs;