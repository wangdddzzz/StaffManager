import React, { Component } from 'react';
// import './StaffItem.css'

class StaffItem extends Component {
    //删除按钮响应函数
    removeItem(e){
        //回调函数
        this.props.removeItem(this.props.item.key);
    }

    //详情按钮响应函数
    showDetail(e){
        //回调函数
        this.props.showDetail(this.props.item.key);
    }

    render() {
        return (
            <tr style={{'cursor':'pointer'}}>
                <td className='itemTd'>{this.props.item.info.name}</td>
                <td className='itemTd'>{this.props.item.info.age}</td>
                <td className='itemTd'>{this.props.item.info.id}</td>
                <td className='itemTd'>{this.props.item.info.sex}</td>
                <td className='itemTd'>
                    <a className='itemBtn' onClick={this.removeItem.bind(this)}>删除</a>
                    <a className="itemBtn" onClick={this.showDetail.bind(this)}>详情</a>
                </td>
            </tr>
        )
    }
}





export default StaffItem