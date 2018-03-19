import OrderStaff from './OrderStaff';
//每一位成员信息
class staffItem {
    constructor(item) {
        this.info = {};
        this.info.name = item.name;
        this.info.age = item.age || 0;
        this.info.sex = item.sex;
        this.info.id = item.id;
        this.descrip = item.descrip || '';
        this.key = staffItem.key++;
    }
}

staffItem.key = 0;

//管理成员
class STAFF {
    constructor() {
        this.allStaff = [
            new staffItem(STAFF.rawData[0]),
            new staffItem(STAFF.rawData[1]),
            new staffItem(STAFF.rawData[2]),
            new staffItem(STAFF.rawData[3]),
            new staffItem(STAFF.rawData[4]),
            new staffItem(STAFF.rawData[5]),
            new staffItem(STAFF.rawData[6]),
            new staffItem(STAFF.rawData[7]),
            new staffItem(STAFF.rawData[8]),
            new staffItem(STAFF.rawData[9]),
            new staffItem(STAFF.rawData[10])
        ];
        //this.staff是用于显示的成员信息
        this.staff = this.allStaff;    
        //创建的类，用于按照身份、年龄排序
        this.orderStaff = new OrderStaff();
        //默认按照身份排序
        this.searchOrder = 0;  //默认按身份排序
        this.searchStaff();
    }

    //根据关键字、身份、年龄排序
    searchStaff() {
        //根据关键字排序
        let words = [this.searchDescrip, this.searchId];
        this.staff = this.allStaff;
        for (let i = 0; i < words.length; i++) {
            if (!words[i]) {
                continue;
            }
            this.staff = this.staff.filter((item) => {
                return item.info.name.indexOf(words[i]) != -1 ||
                    (item.info.age + '').indexOf(words[i]) != -1 ||
                    item.info.id.indexOf(words[i]) != -1 ||
                    item.info.sex.indexOf(words[i]) != -1;
            });
        }

        //根据身份、年龄排序
        this.orderStaff.setStaff(this.staff).setOrder(this.searchOrder).orderStaff();
        return this;
    }

    //获取描述关键字
    searchStaffDescrip(word) {
        this.searchDescrip = word;
        this.searchStaff();
        return this;
    }

    //获取身份
    searchStaffId(word) {
        this.searchId = word;
        // console.log(this.searchId);
        this.searchStaff();
        return this;
    }

    //获取身份、年龄
    searchStaffOrder(word) {
        // console.log(word);
        this.searchOrder = word;
        this.searchStaff();
        return this;
    }

    //添加新成员信息
    addStaffItem(item) {
        let newStaff = new staffItem(item);
        this.allStaff.push(newStaff);
        this.staff = this.allStaff;
        this.searchStaff();
        return this;
    }

    //编辑已有成员信息
    editStaffItem(item) {
        // this.allStaff.forEach((obj) => {
        //     if(obj.key == item.key){
        //         for(let prop in obj.info){
        //             obj.info[prop] = item[prop];
        //         }
        //         obj.descrip = item.descrip;
        //     }
        // })
        for(let i = 0; i < this.allStaff.length; i++){
            if(this.allStaff[i].key == item.key){
                for(let prop in this.allStaff[i].info){
                    this.allStaff[i].info[prop] = item[prop];
                }
                this.allStaff[i].descrip = item.descrip;
            }
        }
        this.searchStaff();
        return this;
    }

    //移除某一成员信息
    removeItem(key) {
        this.allStaff = this.allStaff.filter(value => {
            if(value.key == key){
                return false;
            }
            return true;
        });
        this.staff = this.allStaff;
        this.searchStaff();
        return this;
    }
}

STAFF.rawData = [{descrip: '我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任' },
{descrip: '我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生' },
{descrip: '我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生' },
{descrip: '我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习' },
{descrip: '我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习' },
{descrip: '我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生' },
{descrip: '我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任' },
{descrip: '我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师' },
{descrip: '我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生' },
{descrip: '我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习' },
{ descrip: '我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习' }];

export default STAFF