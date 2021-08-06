import React, { Component } from 'react'
import data from './danhSachGhe.json';
import { selectSeat } from '../Store/Actions/MoviesAction';
import { connect } from 'react-redux';

class ListSeatMovies extends Component {
    renderListTableIndex = () => {
        const { handleSelected } = this.props;
        return data.map((item, index) => {
            if (index === 0) {
                return (
                    <tr key={index}>
                        <td key={index}></td>
                        {
                            item.danhSachGhe.map((stt, i) => {
                                if (i === 5) {
                                    return (
                                        <td key={-1}></td>
                                    )
                                }
                                return <td className="seat-stt" key={i}>{i + 1}</td>
                            })
                        }
                    </tr>
                )
            } else {
                return (
                    <tr key={index}>
                        <td className="seat-type">{item.hang}</td>
                        {
                            item.danhSachGhe.map((seat, i) => {
                                if (i === 5) {
                                    return (
                                        <td key={-1}></td>
                                    )
                                }
                                return seat.daDat ? <td key={i}><div className="seat reserved" onClick={() => handleSelected(seat)} id={seat.soGhe}></div></td> : <td onClick={() => handleSelected(seat)} key={i}><div className="seat" id={seat.soGhe}></div></td>
                            })
                        }
                    </tr>
                )
            }
        });
    }
    render() {
        return (
            <table className="table-seat">
                {this.renderListTableIndex()}
            </table>

        )
    }
}

// const mapStateToProps = state => {
//     return {

//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        handleSelected: (seat) => {
            dispatch(selectSeat(seat));
        },
    }
}

export default connect(null, mapDispatchToProps)(ListSeatMovies);