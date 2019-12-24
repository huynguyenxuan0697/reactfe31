import React, { Component , useState, useEffect } from 'react'

export default class DemoClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: '',
        }
    }
    handleChange = (evt) => {
        const [name,value] = evt.target;
        this.setState({
            [name] :value,
        });
        console.log('render');
    }
    render() {
        return (
            <div>
                <h1>State Class</h1>
                <p>{this.state.count}</p>
                <button onClick={()=>
                    this.setState(state=>({
                        count:state.count +1 }))}>Click me</button>
                <input type="text" name='name' value={this.state.name} onChange ={this.handleChange}/>
            </div>
        )
    }
}



export const DemoHooks = () => {
    const [count , setCount] = useState(0);
    const [name , setName] = useState({
        firstName: '',
        lastName:'',
    });
    //useEffect chạy sau khi state thay đổi và render lại
    //nó nhận vào 2 tham số, 1: hàm callback để xử lý, 
    //2: 1 array các tham số mà nó sẽ so sánh để quyết định xem có chạy useEffect sau khi render lại hay không
    //Hàm useEffect này chỉ chạy khi count thay đổi
    //Khai báo useState và useEffect ở trên cùng của hàm

    // if(count === 5){
    //     //Không thể sử dụng useEffect hoặc useState trong if else for while
    // }
    useEffect(()=>{
        console.log('count sau khi render: ',count)
    },[count])

    useEffect(()=>{
        console.log('count sau khi render: ',name)
    },[name])

    //array không tham số => useEffect chỉ chạy 1 lần duy nhất => tương ứng với componentDidMount
    //Sử dụng khi call API
    useEffect(()=>{
        console.log('count sau khi render: ',name)
    },[])

    //Không có array thì mỗi khi return(render) chạy thì nó sẽ chạy không quan tâm điều kiện
    //Không nên gọi API trong đây
    useEffect(()=>{
        console.log('render lại mỗi khi state hoặc props thay đổi')
    })

    const handleChange = (event) => {
        // const [name, value] = event.target;
        setName({...name,[event.target.name]:event.target.value}); // Không ...name thì sau khi thay đổi nó chỉ còn 1 thuộc tính
    }
    return (
        <div>
             <h1>Demo Hooks</h1>
            {/*<p>{count}</p >
            <button onClick ={()=> setCount(count +1 )}>Click here</button>
            {count === 0 && <HooksChild/>} */}
            <input type="text" name="firstName" value={name.firstName} onChange ={handleChange}/>
            <input type="text" name="lastName" value={name.lastName} onChange ={handleChange}/>
        </div>
    )
}



export const HooksChild = () => {
    useEffect(()=>{
        let timeOut=setTimeout(()=>{
            console.log("render sau 1s")
        },1000)
        console.log("HooksChild render");
        return ()=>{
            console.log("HooksChild Unmount");
            clearTimeout();
            
        }
    })
    return (
        <div>
            Hello
        </div>
    )
}
