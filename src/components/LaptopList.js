import React from 'react'
import Laptop from './Laptop'

export default function LaptopList() {
    return (
        <div className="container ">
            
            <h1 className="text-center text-white my-5">LAPTOP</h1>
            <div className="row">
            
            <div className="col-3">
                <Laptop/>

            </div>
            <div className="col-3">
                <Laptop/>

            </div>
            <div className="col-3">
                <Laptop/>

            </div>
            <div className="col-3">
                <Laptop/>

            </div>
                
            </div>

        </div>
    )
}
