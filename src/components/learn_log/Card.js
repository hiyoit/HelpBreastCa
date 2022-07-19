import React from "react";
import "./index.css"

const Card = (props) => {
  console.log(props);
  const month = props.date.toLocaleString('zh-CN', {month:'long'});
  const date = props.date.getDate();
  return (
<div>
  <div className='logsItem'>
  {/* 日期的容器 */}
    <div className='date'>
      <div className='month'>
        {month}
      </div>
      <div className='day'>
        {date}
      </div>
    </div>
  {/* 学习内容描述 */}
    <div className='content'>
      <h2 className='desc'>
        {props.desc}
      </h2>
      <div className='time'>{props.time}</div>
    </div>
  </div>
</div>
        )
}

export default Card;