import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import DanhSachSinhVien from './DanhSachSinhVien'

export default class QuanLySinhVien extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpen:false,
             mangSV : [],
             sinhVienEdit : {},
        }
        
    }

    handleToggle = ()=>{
        this.setState( state =>({
            isOpen: !state.isOpen
        }))
    }
    handleStore =() =>{
        localStorage.setItem("dssv",JSON.stringify(this.state.mangSV));
    }
    handleSubmit = (sv) =>{
        const mangSV = this.state.mangSV;
        const index = mangSV.findIndex(sinhVien=> sinhVien.maSV === sv.maSV);
        if (index !== -1){
            mangSV[index] = {...sv};
        } else{
            mangSV.push(sv);
        }
        this.setState({mangSV},this.handleStore())
        this.handleToggle();
    }
    handleDelete = (sv) =>{
        const mangSV = this.state.mangSV;
        const index = mangSV.findIndex(sinhVien => sinhVien.maSV === sv.maSV);
        if (index !== -1){
            mangSV.splice(index,1);
        }
        this.setState({mangSV},this.handleStore());
    }
    handleEdit = (sv) =>{
        this.handleToggle();
        this.setState({sinhVienEdit:sv})
    }
    componentDidMount(){
        const data = JSON.parse(localStorage.getItem("dssv"));
        if(data){
            this.setState({mangSV:data});
        }
    }


    render() {
        return (
            <div className="container">
                <DanhSachSinhVien
                mangSV ={this.state.mangSV}
                handleDelete ={this.handleDelete}
                handleEdit ={this.handleEdit}
                btnAdd ={()=>
                    this.setState({
                        sinhVienEdit:{},
                        isOpen:true,
                    }) 
                }
                />
                <FormSinhVien
                isOpen = {this.state.isOpen}
                onToggle = {this.handleToggle}
                onSubmit ={this.handleSubmit}
                sinhVienEdit = {this.state.sinhVienEdit}
                />
            </div>
        )
    }
}
