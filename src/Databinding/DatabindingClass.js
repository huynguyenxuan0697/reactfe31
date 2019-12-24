import React, { Component } from 'react'

export default class DatabindingClass extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLogin : false,
        }
    }
    propName ='Frontend FE31';
    
    handleClick = propName =>{
        // alert(name);
        this.setState(
            state => ({isLogin:!state.isLogin}),()=>{
            //sử dụng callback function để lấy giá trị mới nhất sau khi setstate
            console.log(this.state.isLogin);
        });
        
    }
    // handleLogout = () =>{
    //     this.setState({isLogin:false});
    // }

    
    //render là phương thức có sẵn của class component
    render() {
        //Khai báo biến
        const title = 'cybersoft';
        //return chứa nội dung hiển thị của component
        return (
            <div className="text-center">   
                {
                    this.state.isLogin ? (
                        <div>
                            <p>Bạn đã đăng nhập</p>
                            <button className="btn btn-warning" onClick = {()=>this.handleClick()}>Log out</button>
                        </div>
                        ) :(
                        <div>
                            <p>{title}</p>
                            <h3>{this.propName}</h3>
                            <button className="btn btn-success" onClick ={()=>this.handleClick()}>
                                Login
                            </button>
                        </div>
                    )
                }
            </div>
        )
    }
}

