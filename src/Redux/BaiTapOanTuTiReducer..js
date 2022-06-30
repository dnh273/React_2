
const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/gameOanTuTi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/gameOanTuTi/bua.png', datCuoc: true },
        { ma: 'bao', hinhAnh: './img/gameOanTuTi/bao.png', datCuoc: false },
    ],
    ketQua: 'Thang',
    soBanThang: 0,
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

            // setState cua mangCuoc => render lai gia  o dien
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }

        }
        case 'RANDOM': {

            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

            state.computer = quanCuocNgauNhien

            return { ...state }
        }

        case 'END_GAME':

            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'hoa'
                    } else if (computer.ma === 'bao') {
                        state.ketQua = 'thang'
                        state.soBanThang++;
                    } else {
                        state.ketQua = 'thua'
                    }; break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'thang'
                        state.soBanThang++;
                    } else if (computer.ma === 'bao') {
                        state.ketQua = 'thua'

                    } else {
                        state.ketQua = 'hoa'
                    }; break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'thua'
                    } else if (computer.ma === 'bao') {
                        state.ketQua = 'hoa'
                    } else {
                        state.ketQua = 'thang'
                        state.soBanThang++;
                    }; break;
                default:
                    state.soBanThang++;
                    state.ketQua = 'Im iron man, i love u 3000'
            }
            state.soBanChoi++;
            return { ...state }
        default: return { ...state }
    }
}

export default BaiTapOanTuTiReducer;