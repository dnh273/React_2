import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeType";


const stateDefault = {
    danhSachGheDangDat: [
        // { soGhe: 'A1', gia: 1000 },
    ]

}

const BaiTapDatVeReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                // Khi nguoi dung click ghe da co trong mang => remove di
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                //  Khi nguoi dung click ghe chua co trong mang => push vao
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            // Cap nhat lai state => giao dien render lai
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
        }

        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {
                // Khi nguoi dung click ghe da co trong mang => remove di
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return { ...state }
        }; break;
        default: return { ...state }
    }

}

export default BaiTapDatVeReducer   