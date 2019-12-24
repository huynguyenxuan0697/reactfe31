import React,{useEffect} from 'react'
import { connect } from "react-redux";
import { takeCourseDetail } from '../redux/action/QuanLyKhoaHoc';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

 const ChiTietKhoaHoc = (props) => {
    useEffect(()=>{
        console.log(props);
        const maKhoaHoc = props.match.params.makh;
        props.takeCourseDetail(maKhoaHoc);
    },[]);
    return (
        <div className="container">
            <h1 className="text-center">Chi tiết khóa học</h1>
            <Card>
                <CardImg top width="100%" src={props.courseDetail.hinhAnh} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.courseDetail.tenKhoaHoc}</CardTitle>
                    <CardSubtitle>{props.courseDetail.biDanh}</CardSubtitle>
                    <CardText>{props.courseDetail.moTa}</CardText>
                   
                </CardBody>
            </Card>
        </div>
    )
}
const mapStateToProps = state =>({
    courseDetail : state.quanLyKhoaHoc.chiTietKhoaHoc
})
const mapDispatchToProps = dispatch => ({
    takeCourseDetail : (maKH)=>dispatch(takeCourseDetail(maKH))
})
export default connect(mapStateToProps,mapDispatchToProps)(ChiTietKhoaHoc)