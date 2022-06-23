

const stateDefault = {
    taiXiu: true,// True la tai (tu 11 3->11), false la xiu (12<)
    mangXucXac: [
        { ma: 1, hinhAnh: './img/video_19_game_xuc_xac/1.png' },
        { ma: 1, hinhAnh: './img/video_19_game_xuc_xac/1.png' },
        { ma: 1, hinhAnh: './img/video_19_game_xuc_xac/1.png' },
    ],
    soBanThang: 0,
    tongSoBanChoi: 0,
}


const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu;
            return { ...state }

        case 'PLAY_GAME': {
            // Buoc 1 xu ly random xuc xac
            let mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                // Moi lan lap random so ngau nhien tu 1-6
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                // Tao ra 1 doi tuong xuc xac tu so ngau nhien
                let xucXacNgauNhien = { ma: soNgauNhien, hinhAnh: `./img/video_19_game_xuc_xac/${soNgauNhien}.png` };
                // Push vao mang xuc xac ngau nhien
                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            // Gan state mangXucXac = mangXucXacNgauNhien
            state.mangXucXac = mangXucXacNgauNhien;
            // Xu ly tong so ban choi
            state.tongSoBanChoi += 1;
            // Xu ly so ban thang
            let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
                return tongDiem += xucXac.ma;
            }, 0);
            // Xet dieu kien de nguoi dung thang game
            if ((tongSoDiem > 11 && state.taiXiu === true) || (tongSoDiem <= 11 && state.taiXiu === false)) {
                state.soBanThang += 1;
            }

            return { ...state }
        }
        default: return { ...state }
    }
}

export default BaiTapGameXucXacReducer;