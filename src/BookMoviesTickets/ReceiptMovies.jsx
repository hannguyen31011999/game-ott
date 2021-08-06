import React, { Component } from 'react'
import { connect } from 'react-redux';

class ReceiptMovies extends Component {
    render() {
        const { form, total, seats } = this.props;
        return (
            <div className="receipt-movies">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Number of Seats</th>
                        <th>Seats</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>{form.name}</td>
                        <td>{form.number}</td>
                        <td>{seats}</td>
                        <td>{total.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                    </tr>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { form, total, seats } = state.moviesReducer;
    return {
        form,
        total,
        seats
    }
}

export default connect(mapStateToProps)(ReceiptMovies);