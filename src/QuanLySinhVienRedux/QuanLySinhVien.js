import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import DanhSachSinhVien from './DanhSachSinhVien'

export default class QuanLySinhVien extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          isOpen:false,
    //          mangSV : [],
    //          sinhVienEdit : {},
    //     }
        
    // }

    // handleToggle = ()=>{
    //     this.setState( state =>({
    //         isOpen: !state.isOpen
    //     }))
    // }
    // handleStore =() =>{
    //     localStorage.setItem("dssv",JSON.stringify(this.state.mangSV));
    // }
    // handleSubmit = (sv) =>{
    //     const mangSV = this.state.mangSV;
    //     const index = mangSV.findIndex(sinhVien=> sinhVien.maSV === sv.maSV);
    //     if (index !== -1){
    //         mangSV[index] = {...sv};
    //     } else{
    //         mangSV.push(sv);
    //     }
    //     this.setState({mangSV},this.handleStore())
    //     this.handleToggle();
    // }
    // handleDelete = (sv) =>{
    //     const mangSV = this.state.mangSV;
    //     const index = mangSV.findIndex(sinhVien => sinhVien.maSV === sv.maSV);
    //     if (index !== -1){
    //         mangSV.splice(index,1);
    //     }
    //     this.setState({mangSV},this.handleStore());
    // }
    // handleEdit = (sv) =>{
    //     this.handleToggle();
    //     this.setState({sinhVienEdit:sv})
    // }
    


    render() {
        return (
            <div className="container">
                <DanhSachSinhVien/>
                <FormSinhVien/>
            </div>
        )
    }
}
