import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AddItem from './AddItem';
import ItemTable from './ItemTable';

class Landing extends Component {
  componentWillUnmount() {
    localStorage.removeItem('items');
  }

  render() {
    return(
      <Container>
        <Row>
          <Col md={{size: 8, offset: 2}}>
            <div className='add-item mt-3'>
              <h3>Добавить продукт</h3>
              <AddItem />
            </div>
            <div className='cart mt-3'>
              <h3>Корзина</h3>
              <ItemTable />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Landing;
