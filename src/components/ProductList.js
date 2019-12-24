import React from 'react'
import Product from './Product'

export default function ProductList() {
    return (
        <div className="container">
            <h1 className="text-center text-white my-5">SMART PHONE</h1>
            <div className="row">
            <div className="col-3 ">
            <Product />
            </div>
            <div className="col-3 ">
            <Product />
            </div>
            <div className="col-3 ">
            <Product />
            </div>
            <div className="col-3 ">
            <Product />
            </div>

            </div>

        </div>

    )
}
