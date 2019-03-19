/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { addItem } from '../actions/itemsAction';

type State = {
  itemName: string,
  itemPrice: number
};

type Props = {
  addItem: ({ itemName: string, itemPrice: number }) => void
};

class AddItem extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      itemName: '',
      itemPrice: 0
    };

    // @see https://github.com/facebook/flow/issues/1517#issuecomment-194538151
    (this: any).onChange = this.onChange.bind(this);
    (this: any).onSubmit = this.onSubmit.bind(this);
  }

  onChange(evt: SyntheticInputEvent<HTMLInputElement>):void {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  onSubmit(evt: SyntheticInputEvent<HTMLFormElement>):void {
    evt.preventDefault();

    const newItem = {
      itemName: this.state.itemName,
      itemPrice: this.state.itemPrice
    };

    this.props.addItem(newItem);

    this.setState({
      itemName: '',
      itemPrice: 0
    });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='itemName'>Продукт</Label>
              <Input
                type='text'
                name='itemName'
                value={this.state.itemName}
                placeholder='название продукта'
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='itemPrice'>Цена</Label>
              <Input
                type='text'
                name='itemPrice'
                pattern='[0-9]*'
                value={this.state.itemPrice > 0 ? this.state.itemPrice : ''}
                placeholder='цена продукта'
                onChange={this.onChange}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>&nbsp;</Label>
              <Button className='form-control'>Добавить</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default connect(null, { addItem })(AddItem);
