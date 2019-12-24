
import React,{ Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import ProductList from './ProductList'
import Footer from './Footer'
import LaptopList from './LaptopList'

export default class BaiTapLayout extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:"Cybersoft"
        };
    }
    
    changeName = () =>{
        this.setState({
            name: "New CyberSoft",
        })
    }
    render(){
        console.log(this.props.greetingProp);
        return (
            <div className="bg-dark">
                <Header/>
                <Carousel/>
                <ProductList/>
                <LaptopList/>
                <Footer nameProps = {this.state.name}/>
                <button className="btn btn-success"onClick = {()=>this.changeName()}>Change name</button>
            </div>
        )

    }
}
