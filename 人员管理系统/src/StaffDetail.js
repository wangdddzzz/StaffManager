import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './StaffDetail.css';

class StaffDetail extends Component {

    //完成按钮响应事件，修改成员信息
    changeBtn(e) {
        e.preventDefault();
        let item = {};
        let sex = document.querySelector('#staffEditSex');
        let id = document.querySelector('#staffEditId');

        item.name = document.querySelector('#staffEditName').value.trim();
        item.age = document.querySelector('#staffEditAge').value.trim();
        item.descrip = document.querySelector('#staffEditDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;
        item.key = this.props.staffDetail.key;

        //表单验证
        if (item.name === '' || item.age === '' || item.descrip === '') {
            let tips = ReactDOM.findDOMNode(this.refs.DtipsUnDone);
            tips.style.display = 'block';
            setTimeout(() => tips.style.display = 'none', 1000);
            return false;
        }

        let numReg = /^\d+$/;
        if (!numReg.test(item.age) || parseInt(item.age,10) > 150) {
            let tips = ReactDOM.findDOMNode(this.refs.DtipsUnAge);
            tips.style.display = 'block';
            setTimeout(() => tips.style.display = 'none', 1000);
            return false;
        }

        //回调函数，修改成员信息
        this.props.editStaffItem(item);

        //提交成功
        let tips = ReactDOM.findDOMNode(this.refs.Dtips);
        tips.style.display = 'block';
        setTimeout(() => tips.style.display = 'none', 1000);
        return false;
    }

    //关闭按钮响应函数
    closeBtn () {
        document.getElementById('contentBox').style.opacity = 1;
        //回调函数
        this.props.closeBtn();
    }

    componentDidUpdate() {
        // console.log('wangdi');
        if(!this.props.staffDetail){
            return;
        }
        // console.log(this.props.staffDetail);
        let staffDetail = this.props.staffDetail;
        let sex = document.querySelector('#staffEditSex');
        let id = document.querySelector('#staffEditId');
        sex.value = staffDetail.info.sex;
        id.value = staffDetail.info.id;
    }

    render() {
        let staffDetail = this.props.staffDetail;
        // console.log(staffDetail);
        if (!staffDetail) {
            return null;
        }
        return (
            <div className='detailBox'>
                <h4 style={{ 'textAlign': 'center' }}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4>
                <table ref='editTabel'>
                    <tbody>
                        <tr>
                            <th>姓名</th>
                            <td><input type="text" id='staffEditName' defaultValue={staffDetail.info.name} /></td>
                        </tr>
                        <tr>
                            <th>年龄</th>
                            <td><input id='staffEditAge' type="text" defaultValue={staffDetail.info.age}></input></td>
                        </tr>
                        <tr>
                            <th>性别</th>
                            <td>
                                <select ref='selSex' id='staffEditSex'>
                                    <option value="男">男</option>
                                    <option value="女">女</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>身份</th>
                            <td>
                                <select ref="selId" id='staffEditId'>
                                    <option value="主任">主任</option>
                                    <option value="老师">老师</option>
                                    <option value="学生">学生</option>
                                    <option value="实习">实习</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>个人描述</th>
                            <td><textarea id='staffEditDescrip' type="text" cols='24' rows='2' defaultValue={staffDetail.descrip}></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <p ref='Dtips' className='tips'>修改成功</p>
                <p ref='DtipsUnDone' className='tips'>请录入完整的人员信息</p>
                <p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
                <div className='buttonBox'>
                    <button onClick={this.changeBtn.bind(this)}>完成</button>
                    <button onClick={this.closeBtn.bind(this)}>关闭</button>
                </div>
            </div >
        )
    }
}

export default StaffDetail