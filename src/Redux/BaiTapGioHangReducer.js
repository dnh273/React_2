
// Set up stateGioHang tren store

import { type } from "@testing-library/user-event/dist/type";

const stateGioHang = {
    gioHang: []
}



const BaiTapGioHangRedux = (state = stateGioHang, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);

            if (index !== -1) {
                state.gioHang[index].soLuong += 1;
            } else {
                state.gioHang.push(action.spGioHang)
            }
            // SetState
            // Cap nhat lai state.gioHang
            state.gioHang = [...state.gioHang]

            // console.log('gioHang', state.gioHang)

            return { ...state };
        }; break;

        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang]
            // Tim ra phan tu can xoa dua vao maSP
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP);
            if (index !== -1) {
                gioHangCapNhat.splice(index, 1);
            }
            // Cap nhat lai state gio hang moi de component render lai
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }; break;
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state.gioHang]
            // Xu ly tang giam tren gio hang cap nhat
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
            if (index !== -1) {
                if (action.tangGiam) {
                    gioHangCapNhat[index].soLuong += 1;
                } else {
                    if (gioHangCapNhat[index].soLuong > 1) {
                        gioHangCapNhat[index].soLuong -= 1;
                    } else {
                        alert('So luong toi thieu la 1')
                    }
                }
            }
            // Lay gia tri gio hang cap nhat gan vao state.gioHang
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }; break;
        default: return { ...state }

    }

}

export default BaiTapGioHangRedux;