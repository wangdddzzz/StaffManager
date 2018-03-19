import React from 'react';
import ReactDOM from 'react-dom';
// import './StaffFooter.css';

class StaffFooter extends React.Component {

    //提交按钮响应函数
    handlerAddClick(e){
        e.preventDefault();
        let item = {};
        let addForm = ReactDOM.findDOMNode(this.refs.addForm);    //返回实际的DOM元素
        let sex = addForm.querySelector('#staffAddSex');
        let id = addForm.querySelector('#staffAddId');

        item.name = addForm.querySelector('#staffAddName').value.trim();
        item.age = addForm.querySelector('#staffAddAge').value.trim();
        item.descrip = addForm.querySelector('#staffAddDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;

        //表单验证
        if(item.name === '' || item.age === '' || item.descrip === ''){
            let tips = ReactDOM.findDOMNode(this.refs.tipsUnDone);
            tips.style.display = 'block';
            setTimeout(() => tips.style.display = 'none', 1000);
            return false;
        }
        let numReg = /^\d+$/;
        if(!numReg.test(item.age) || parseInt(item.age,10) > 150){
            let tips = ReactDOM.findDOMNode(this.refs.tipsUnAge);
            tips.style.display = 'block';
            setTimeout(() => tips.style.display = 'none', 1000);
            return false;
        }

        //回调函数
        this.props.addStaffItem(item);
        addForm.reset();

        //提交成功
        let tips = ReactDOM.findDOMNode(this.refs.tips);
        tips.style.display = 'block';
        setTimeout(() => tips.style.display = 'none', 1000);
        return false;
    }

    render() {
        return (
            <div className='footerBox'>
                <h4>人员新增</h4>
                <form ref='addForm'>
                    <div>
                        <label htmlFor="">姓名</label>
                        <input type="text" ref='addName' id='staffAddName' placeholder='Your Name'/>
                    </div>
                    <div>
                        <label htmlFor="staffAddAge">年龄</label>
                        <input type="text" ref='addAge' id='staffAddAge' placeholder='Your age(0-150)'/>
                    </div>
                    <div>
                        <label htmlFor="">性别</label>
                        <select ref='addSex' id="staffAddSex">
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="staffAddId">身份</label>
                        <select ref='addId' id="staffAddId">
                            <option value="主任">主任</option>
                            <option value="老师">老师</option>
                            <option value="学生">学生</option>
                            <option value="实习">实习</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="staffAddDescrip">个人描述</label>
                        <textarea ref='addDescrip' id="staffAddDescrip" cols="25" rows="2" style={{'overflowY':'hidden'}}></textarea>
                    </div>
                    <p ref='tips' className='tips'>提交成功</p>
                    <p ref='tipsUnDone' className='tips'>请录入完整的人员信息</p>
                    <p ref='tipsUnAge' className='tips'>请录入正确的年龄</p>
                    <div>
                        <button onClick={this.handlerAddClick.bind(this)}>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default StaffFooter