
// Set up stateGioHang tren store

import { type } from "@testing-library/user-event/dist/type";

const stateGioHang = {
    gioHang: [{ maSP: 1, tenSP: 'sp mac dinh', hinhAnh: '', soLuong: 1, donGia: 1000 }]
}



const BaiTapGioHangRedux = (state = stateGioHang, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);

            if (index !== -1) {
                state.gioHang[index].soLuong += 1;
            } else {
                state.gioHang.push(action.spGioHang)
            }
            // SetState

            state.gioHang = [...state.gioHang]

            console.log('gioHang', state.gioHang)

            return { ...state};

        }
    }

    return state;
}

export default BaiTapGioHangRedux;