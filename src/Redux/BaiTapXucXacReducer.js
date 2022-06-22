

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
        default: return { ...state }
    }
}

export default BaiTapGameXucXacReducer;