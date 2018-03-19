
class OrderStaff {
    constructor(order, staff){
        this.order = order;
        this.staff = staff;
    }

    setOrder(order){
        this.order = order;
        return this;
    }

    setStaff(staff){
        this.staff = staff;
        return this;
    }
    
    orderById () {
        let id = {'主任': 0,'老师':1,'学生':2,'实习':3};
        this.staff.sort((a,b) => {
            return (id[a.info.id] - id[b.info.id]);
        });
        return this;
    }

    orderByAgeUp () {
        this.staff.sort((a,b)=>{
            return (a.info.age - b.info.age);
        });
        return this;
    }

    orderByAgeDown () {
        this.staff.sort((a,b)=>{
            return b.info.age - a.info.age;
        });
        return this;
    }

    orderStaff () {
        // console.log(this.order);
        if(parseInt(this.order,10) === 0) {
            this.orderById();
        }else if (parseInt(this.order,10) === 1){
            this.orderByAgeUp();
        }else {
            this.orderByAgeDown();
        }
        return this;
    }
}

export default OrderStaff