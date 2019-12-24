import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect  } from "react-redux";
import { handleToggle, addSVAction, saveEditAction } from '../redux/action/QuanLySinhVien';
class FormSinhVien extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            maSV: '',
            hoTenSV: '',
            tuoiSV:'',
            email:'',
        }   
        this.refMaSV = React.createRef();
    }

    handleSubmit =() =>{
        const sinhVien = {...this.state};
        const mangSV = this.props.mangSV;
        const index = mangSV.findIndex(sv => sv.maSV === sinhVien.maSV);
        if(index === -1){
            this.props.onSubmit(sinhVien);
            this.props.onToggle();
        } else {
            this.props.saveEdit(sinhVien);
            this.props.onToggle();
        }
    };
    handleChange = (event)=>{
        const {name, value} = event.target;
        this.setState({
            [name] : value,
        })
    };
    componentDidUpdate(prevProps){
        if(prevProps.sinhVienEdit !== this.props.sinhVienEdit){
            const {maSV,hoTenSV,tuoiSV,email} = this.props.sinhVienEdit
            this.setState({
                maSV: maSV ||'',
                hoTenSV:hoTenSV||'',
                tuoiSV:tuoiSV||'',
                email:email ||''
            })
        }
    }
    render() {
        return (
                    <Modal isOpen={this.props.isOpen} toggle={this.props.onToggle} >
                        <ModalHeader toggle={this.props.onToggle}>Form thông tin</ModalHeader>
                        <ModalBody>
                           <form>
                               <div className = "form-group">
                                   <label htmlFor="maSV">Mã sinh viên</label>
                                   <input type="text" className="form-control" id="maSV" 
                                   placeholder="..."
                                   name="maSV"
                                   value = {this.state.maSV}
                                   onChange = {this.handleChange}
                                   >
                                   </input>
                               </div>
                               <div className = "form-group">
                                   <label htmlFor="hoTen">Họ tên</label>
                                   <input 
                                   type="text" 
                                   className="form-control" 
                                   id="hoTen"
                                   name="hoTenSV" 
                                   value={this.state.hoTenSV}
                                   onChange={this.handleChange}
                                   placeholder="..."
                                   ></input>
                               </div>
                               <div className = "form-group">
                                   <label htmlFor="tuoi">Tuổi</label>
                                   <input type="text" className="form-control" id="tuoi" placeholder="..."
                                   name="tuoiSV"
                                   value={this.state.tuoiSV}
                                   onChange = {this.handleChange}
                                   ></input>
                               </div>
                               <div className = "form-group">
                                   <label htmlFor="email">Email</label>
                                   <input type="email" className="form-control" id="email" placeholder="..."
                                   name="email"
                                   value={this.state.email}
                                   onChange = {this.handleChange}
                                   ></input>
                               </div>
                           </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleSubmit}>Lưu</Button>
                            <Button color="danger" onClick={this.props.onToggle}>Hủy</Button>
                        </ModalFooter>
                    </Modal>
        )
    }
}

const mapStateToProps = state => ({
    isOpen : state.quanLySinhVien.isOpen,
    sinhVienEdit : state.quanLySinhVien.sinhVienEdit,
    mangSV : state.quanLySinhVien.mangSV
})

const mapDispatchToProps = dispatch => ({
    onToggle: ()=>dispatch(handleToggle()),
    onSubmit : (sv)=> dispatch(addSVAction(sv)),
    saveEdit : (sv) => dispatch(saveEditAction(sv))
})

export default connect(mapStateToProps,mapDispatchToProps)(FormSinhVien)