import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StaffHeader from './StaffHeader';
import StaffItemPanel from './StaffItemPanel';
import StaffFooter from './StaffFooter';
import StaffDetail from './StaffDetail';
import STAFF from './STAFF'
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor () {
        super();
        this.state = {
            staff : new STAFF(),
            // 用于显示在详情页面上的成员信息
            staffDetail : null,
        }
    }

    //根据描述搜索
    searchStaffDescrip(word) {
        this.setState({
            staff: this.state.staff.searchStaffDescrip(word),
        })
    }

    //根据身份排序
    searchStaffId(word) {
        this.setState({
            staff: this.state.staff.searchStaffId(word),
        })
    }

    //根据身份、年龄增、年龄降排序
    searchStaffOrder(word) {
        this.setState({
            staff: this.state.staff.searchStaffOrder(word),
        })
    }

    //添加新成员
    addStaffItem (item) {
        this.setState({
            staff: this.state.staff.addStaffItem(item),
        })
    }

    //编辑已有成员
    editStaffItem(item) {
        this.setState({
            staff: this.state.staff.editStaffItem(item),
        })
        // console.log(item);
    }   

    //移除已有成员
    removeItem (key) {
        this.setState({
            staff: this.state.staff.removeItem(key),
        })
    }

    //显示详情页面
    showDetail(key) {
        document.getElementById('contentBox').style.opacity = '0.2';
        this.setState({
		    staffDetail: this.state.staff.staff.filter(item => {
			    return item.key==key;
			})[0]
		});
    }

    //详情页面关闭按钮回调事件
    closeBtn(){
        this.setState({
            staffDetail : null,
        });
    }

    render() {
        return (
            <div>
                <div id='contentBox' style={{'transition': 'opacity 0.5s ease-in-out'}}>
                    <StaffHeader searchStaffOrder={this.searchStaffOrder.bind(this)} searchStaffDescrip={this.searchStaffDescrip.bind(this)} searchStaffId={this.searchStaffId.bind(this)}/>
                    <StaffItemPanel showDetail={this.showDetail.bind(this)} removeItem={this.removeItem.bind(this)} items={this.state.staff.staff} />
                    <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
                </div>
                    <StaffDetail closeBtn={this.closeBtn.bind(this)} editStaffItem={this.editStaffItem.bind(this)} staffDetail={this.state.staffDetail}/> 
                    
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementsByTagName('div')[0]);
registerServiceWorker();
