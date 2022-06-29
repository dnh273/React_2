import { keyboard } from "@testing-library/user-event/dist/keyboard";

const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/gameOanTuTi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/gameOanTuTi/bua.png', datCuoc: true },
        { ma: 'bao', hinhAnh: './img/gameOanTuTi/bao.png', datCuoc: false },
    ],
    ketQua: 'Thang',
    soBanthang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/gameOanTuTi/keo.png', datCuoc: false }
}

const BaiTapOanTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'CHON_KEO_BAO_BUA': {
            // Reset mang
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            console.log('mangCuocUpdate', mangCuocUpdate)
            // let index tim ra ma datCuoc de change trang thai dat cuoc ung voi ma~ do
            // let index = mangCuocUpdate.findIndex(qc => qc.ma === action.maCuoc);
            // if (index !== -1) {
            //     mangCuocUpdate[index].datCuoc = true;
            // }

            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }

        }
        case 'RANDOM': {

            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

            state.computer = quanCuocNgauNhien

            return { ...state }
        }

        default: return { ...state }
    }
}

export default BaiTapOanTuTiReducer;