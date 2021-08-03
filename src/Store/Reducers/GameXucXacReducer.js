import data from '../../Xucxac/data.json';

const initialState = {
    image: [
        data[0],
        data[1],
        data[2]
    ],
    isChoose: null,
    score: 0,
    round: 0
}

const xucXacReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "PLAY_GAME": {
            const overlay = document.getElementById('overlay');
            overlay.style.transform = "translateY(0)";
            overlay.style.opacity = "1";
            overlay.style.visibility = "visible";
            const arr = [];
            let dem = 0;
            for (let i = 0; i < data.length; i++) {
                dem++;
                if (dem > 3) break;
                const index = Math.floor(Math.random() * data.length);
                arr.push(data[index]);
            }
            return { ...state, image: arr }
        }
        case "CHOOSE_DOOR": {
            if (payload) {
                document.getElementById('xiu').classList.remove('active_tx');
                document.getElementById('tai').classList.add('active_tx');
            } else {
                document.getElementById('tai').classList.remove('active_tx');
                document.getElementById('xiu').classList.add('active_tx');
            }
            return { ...state, isChoose: payload }
        }
        case "OPEN__OVERLAY": {
            const overlay = document.getElementById('overlay');
            let diem = 0;
            let vong = state.round;
            if (state.isChoose === null) {
                alert("Mời chọn tài hoặc xỉu?");
                return { ...state };
            } else {
                document.getElementById('xiu').classList.remove('active_tx');
                document.getElementById('tai').classList.remove('active_tx');
                const sum = state.image.reduce((total, img) => {
                    return total += img.score;
                }, 0);
                if (state.isChoose && (sum > 10 || sum < 18)) {
                    diem += 1 + state.score;
                } else if (!state.isChoose && !(sum > 10 || sum < 18)) {
                    diem += 1 + state.score;
                } else {
                    diem = state.score;
                }
                vong++;
                overlay.style.transform = "";
                overlay.style.opacity = "";
                overlay.style.visibility = "";
                return { ...state, score: diem, round: vong, isChoose: null }
            }
        }
        default:
            return state;
    }
}

export default xucXacReducer;