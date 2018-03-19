import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
// import './StaffHeader.css'

class StaffHeader extends Component {

  //搜索框onChange响应函数
  handlerSearch() {
    let bar = ReactDOM.findDOMNode(this.refs.searchBar);
    let value = bar.value;
    //回调函数
    this.props.searchStaffDescrip(value);
  }

  //身份框onChange响应函数
  idSearch() {
    let index = ['','主任','老师','学生','实习']
    let select = document.querySelector('#idSelect');
    let value = select.options[select.selectedIndex].value;
    //回调函数
    this.props.searchStaffId(index[value]);
  }

  //排序框onChange响应函数
  orderSearch() {
    let select = document.querySelector('#orderSelect');
    let value = select.options[select.selectedIndex].value;
    //回调函数
    this.props.searchStaffOrder(value);
  }


  render() {
    return (
      <div className='headerBox'>
        <h3>人员管理系统</h3>
        <table className='optHeader'>
          <tbody>
            <tr>
              <td className='headerTd'><input ref='searchBar' type="text" placeholder='Search...' onChange={this.handlerSearch.bind(this)}/></td>
              <td className='headerTd'>
                <label htmlFor="idSelect">人员筛选 </label>
                <select id="idSelect" onChange={this.idSearch.bind(this)}>
                  <option value="0">全部</option>
                  <option value="1">主任</option>
                  <option value="2">老师</option>
                  <option value="3">学生</option>
                  <option value="4">实习</option>
                </select>
              </td>
              <td className='headerTd'>
                <label htmlFor="orderSelect">排列方式 </label>
                <select id="orderSelect" onChange={this.orderSearch.bind(this)}>
                  <option value="0">身份</option>
                  <option value="1">年龄升</option>
                  <option value="2">年龄降</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default StaffHeader