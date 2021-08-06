import moviesContant from "../Contants/MoviesContant";

export const confirmForm = (form) => ({
    type: moviesContant.confirmForm,
    payload: form
});

export const selectSeat = (seat) => ({
    type: moviesContant.selectSeat,
    payload: seat
});

export const confirmReceipt = () => ({
    type: moviesContant.confirmReceipt
})