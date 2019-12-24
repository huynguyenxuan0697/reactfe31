import React from 'react'

export default function Databinding() {
    const title = 'CyberSoft';
    const phone = {
        id: 'IP',
        name: 'IPHONE 11 PRO MAX',
        price: 1099,
    }
    
    const getProduct =()=> {
        const androidPhone = {
            id: 'SS',
            name: 'SAMSUNG NOTE 10',
            price: 2099,
        }
        return (
            <div className="card text-dark bg-light">
                <img className="card-img-top" src="holder.js/100px180/" alt />
                <div className="card-body">
                    <h4 className="card-title">{androidPhone.name}</h4>
                    <p className="card-text">{androidPhone.price}</p>
                    <button className="btn btn-success" onClick ={()=>{handleClick(androidPhone.name)}}>Show detail</button>
                </div>
                </div>
        )
    }
    //Hàm xử lý cho nút button showdetail
    const handleClick = (name) => {
        alert(name);
    }
    return (
        <div className="container">
            <p id="text">{title}</p>
            <div className="card text-dark bg-light">
                <img className="card-img-top" src="holder.js/100px180/" alt />
                <div className="card-body">
                    <h4 className="card-title">{phone.name}</h4>
                    <p className="card-text">{phone.price}</p>
                    <button className="btn btn-success" onClick ={()=>{handleClick(phone.name)}}>Show detail</button>
                </div>
            </div>

            {getProduct()}
        </div>
    )
}
