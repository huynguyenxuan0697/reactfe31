import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link  } from "react-router-dom";
const KhoaHoc = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.khoaHoc.hinhAnh} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.khoaHoc.tenKhoaHoc}</CardTitle>
                    <CardSubtitle>{props.khoaHoc.biDanh}</CardSubtitle>
                    <CardText>{props.khoaHoc.moTa}</CardText>
                    <Link 
                    to={'/chitiet/'+props.khoaHoc.maKhoaHoc}
                    className="btn btn-primary">Chi tiết</Link>
                </CardBody>
            </Card>
        </div>
    )
}
export default KhoaHoc