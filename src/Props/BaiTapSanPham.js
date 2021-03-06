import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapSanPham extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mangSanPham: [

                { maSP: 1, tenSP: 'VinSmart Live', manHinh: 'AMOLED, 6.2", Full HD+', heDieuHanh: 'Android 9.0 (Pie)', cameraTruoc: '20 MP', cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP', ram: '4 GB', rom: '64 GB', giaBan: 5700000, hinhAnh: './img/vsphone.jpg' },

                { maSP: 2, tenSP: 'Meizu 16Xs', manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels', heDieuHanh: 'Android 9.0 (Pie); Flyme', cameraTruoc: '20 MP', cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP', ram: '4 GB', rom: '64 GB', giaBan: 7600000, hinhAnh: './img/meizuphone.jpg' },

                { maSP: 3, tenSP: 'Iphone XS Max', manHinh: 'OLED, 6.5", 1242 x 2688 Pixels', heDieuHanh: 'iOS 12', cameraSau: 'Chính 12 MP & Phụ 12 MP', cameraTruoc: '7 MP', ram: '4 GB', rom: '64 GB', giaBan: 27000000, hinhAnh: './img/applephone.jpg' }

            ],
            mangGioHang: [],
        }
    }

    
    laySanPham = (sp) => {
        const mangGioHang = this.state.mangGioHang;
        const index = mangGioHang.findIndex(spGioHang => spGioHang.maSP === sp.maSP);
        // trưởng hợp chưa có sp trong giỏ hàng
        if (index === -1) {
            const spGioHang = {
                maSP: sp.maSP,
                tenSP: sp.tenSP,
                hinhAnh: sp.hinhAnh,
                giaBan: sp.giaBan,
                soLuong: 1,
            };
            mangGioHang.push(spGioHang);
        } else {
            // trường hợp có sp trong giỏ hàng
            mangGioHang[index].soLuong += 1;
        }

        this.setState({
            mangGioHang: mangGioHang, // có thể chỉ ghi mangGioHang 
        });
        // this.setState(state=> ({
        //     mangGioHang : [...state.mangGioHang,sp],
        // }))
    }
    render() {
        return (
            <div>
                <DanhSachSanPham mangSanPham={this.state.mangSanPham} laySanPham={this.laySanPham} />
                <GioHang sanPhamGioHang={this.state.mangGioHang} />
            </div>
        )
    }
}
