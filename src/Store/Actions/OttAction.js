import ottContant from '../Contants/OttContant';

export const actChoose = (item) => ({
    type: ottContant.choose,
    payload: item
});

export const actPlayGame = () => ({
    type: ottContant.play
});