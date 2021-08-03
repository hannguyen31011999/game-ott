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
    round: 0
}


const gameOttReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ottContant.choose: {
            document.getElementById('ott-overplay').style.opacity = 1;
            return { ...state, isChoose: payload }
        }
        case ottContant.play: {
            document.getElementById('ott-overplay').style.opacity = 0;
            const arr = [...state.image];
            const index = Math.floor(Math.random() * state.image.length);
            state.round++;
            if ((state.isChoose.id > arr[index].id && !state.isChoose.id === 1) || (state.isChoose.id - arr[index].id === -2)) {
                ++state.score;
            }
            return { ...state, imageRandom: arr[index] };
        }
        default:
            return state;
    }
}

export default gameOttReducer;