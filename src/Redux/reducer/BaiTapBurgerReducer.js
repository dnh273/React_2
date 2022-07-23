


const burgerState = {

    burger: { salad: 1, cheese: 1, beef: 1 },
    // [{name:'salad',amount:1},{name:'c heese',amount:1},{name:'beef',amount:1}]

    menu: { salad: 10, cheese: 20, beef: 55 },

    total: 85

}

const BaiTapBurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case 'ADD_BREAD': {
            let { propsBurger, amout } = action;
            console.log(action);
            let burgerUpdate = { ...state.burger };
            if (amout === -1 && burgerUpdate[propsBurger] < 1) {
                alert('Gia tri khong the nho hon 1')
                return { ...state }
            }
            burgerUpdate[propsBurger] += amout;
            state.burger = burgerUpdate;
            // Tinh tong tien
            state.total += amout * state.menu[propsBurger]

            return { ...state }
        }

        default: return { ...state }
    }
}
export default BaiTapBurgerReducer