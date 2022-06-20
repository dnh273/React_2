import { combineReducers } from 'redux'

import BaiTapGioHangRedux from '../Redux/BaiTapGioHangReducer';

const rootReducer = combineReducers({ //Store tong cua ung dung
    stateGioHang: BaiTapGioHangRedux // state gio hang

})

export default rootReducer;