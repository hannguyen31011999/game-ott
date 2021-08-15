import ottContant from '../Contants/OttContant';

const initialState = {
    image: [
        { id: 1, image: "./ott/keo.png" },
        { id: 2, image: "./ott/bua.png" },
        { id: 3, image: "./ott/bao.png" }
    ],
    isChoose: { id: 1, image: "./ott/keo.png" },
    imageRandom: {},
    score: 0,
    round: 0,
    styleComputer: {
        opacity: 1
    }
}


const gameOttReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ottContant.choose: {
            return { ...state, isChoose: payload, styleComputer: { ...state.styleComputer.opacity, opacity: 1 } }
        }
        case ottContant.play: {
            const arr = [...state.image];
            const index = Math.floor(Math.random() * state.image.length);
            state.round++;
            if ((state.isChoose.id > arr[index].id && state.isChoose.id !== 1) || (state.isChoose.id - arr[index].id === -2)) {
                ++state.score; // những hàm phức tạp kiểu này nên tách ra 1 hàm xử lý riêng, nhận vào 2 tham số để output kết quả, để reducer không bị dài dòng
            }
            return { ...state, imageRandom: arr[index], styleComputer: { ...state.styleComputer.opacity, opacity: 0 } };
        }
        default:
            return state;
    }
}

export default gameOttReducer;