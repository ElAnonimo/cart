import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { getItems } from '../actions/itemsAction';
import DiscountComponent from './DiscountComponent';

class ItemTable extends Component {
  constructor() {
    super();

    this.state = {
      discount: 0
    };

    this.handleDiscount = this.handleDiscount.bind(this);
  }

  componentDidMount() {
    this.props.getItems();
  }

  handleDiscount(discount) {
    this.setState({ discount });
  };

  render() {
    const { itemList } = this.props.itemList;

    return (
      <div>
        <DiscountComponent handleDiscount={this.handleDiscount} />
        <Table bordered>
          <thead>
          <tr>
            <th>Продукт</th>
            <th>Цена</th>
            <th>Цена со скидкой</th>
          </tr>
          </thead>
          <tbody>
            {itemList && itemList.length > 0 && itemList.map(item => (
              <tr key={item.itemName}>
                <td>{item.itemName}</td>
                <td>{item.itemPrice}</td>
                <td>
                  {
                    this.state.discount > 0 &&
                    Math.ceil(item.itemPrice - item.itemPrice / 100 * this.state.discount)
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemList: state.itemList
});

ItemTable.propTypes = {
  itemList: PropTypes.objectOf(PropTypes.array).isRequired,
  getItems: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getItems })(ItemTable);
