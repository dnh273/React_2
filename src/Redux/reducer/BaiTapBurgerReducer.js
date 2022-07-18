


const burgerState = {

    burger: { salad: 1, cheese: 1, beef: 1 },
    // [{name:'salad',amount:1},{name:'c heese',amount:1},{name:'beef',amount:1}]

    menu: { salad: 10, cheese: 20, beef: 55 },

    total: 85

}

const BaiTapBurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case 'TANG_GIAM_SO_LUONG_FOOD': {
            let burgerStateUpdate = [...state.burger]
            let { tangGiam, burgerItem } = action;
            if (tangGiam) {
                burgerStateUpdate[burgerItem] += 1;
            } else {
                if (burgerStateUpdate[burgerItem] > 1) {
                    burgerStateUpdate[burgerItem] -= 1;
                } else {
                    alert('So luong toi thieu 1')
                }
            }

            return { ...state }
        }

        default: return { ...state }
    }
}
export default BaiTapBurgerReducer