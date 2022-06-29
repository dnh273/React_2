import { combineReducers } from 'redux'

import BaiTapGioHangRedux from '../Redux/BaiTapGioHangReducer';
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';
import BaiTapOanTuTiReducer from './BaiTapOanTuTiReducer.';

const rootReducer = combineReducers({ //Store tong cua ung dung
    stateGioHang: BaiTapGioHangRedux, // state gio hang
    BaiTapGameXucXacReducer, // State BaiTapXucXac
    BaiTapOanTuTiReducer
})

export default rootReducer;