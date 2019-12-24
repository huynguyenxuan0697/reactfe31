import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class FormSinhVien extends Component {
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
    disable= "disable";
    handleSubmit =() =>{
        const sinhVien = {...this.state};
        this.props.onSubmit(sinhVien);
    }
    handleChange = (event)=>{
        const {name, value} = event.target;
        this.setState({
            [name] : value,
        })
    }
    componentDidUpdate(prevProps){
        if(prevProps.sinhVienEdit !== this.props.sinhVienEdit){
            const {maSV, hoTenSV, tuoiSV, email }=this.props.sinhVienEdit;
            this.setState({
                maSV,
                hoTenSV,
                tuoiSV,
                email,
            });
            
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
                                   ref={this.refMaSV}
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
                                   placeholder="..."
                                   onChange={this.handleChange}
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
