import { combineReducers } from 'redux'

import BaiTapGioHangRedux from './BaiTapGioHangReducer';
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer';
import BaiTapOanTuTiReducer from './BaiTapOanTuTiReducer.';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';

const rootReducer = combineReducers({ //Store tong cua ung dung
    stateGioHang: BaiTapGioHangRedux, // state gio hang
    BaiTapGameXucXacReducer, // State BaiTapXucXac
    BaiTapOanTuTiReducer,
    BaiTapDatVeReducer

})

export default rootReducer;