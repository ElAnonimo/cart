import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class DiscountComponent extends Component {
  constructor() {
    super();

    this.state = {
      discount: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  onSubmit(evt) {
    evt.preventDefault();

    this.props.handleDiscount(this.state.discount);
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup row>
          <Label for='discount' md={3}>Применить скидку</Label>
          <Col sm={2}>
            <Input
              type='text'
              name='discount'
              pattern='[0-9]*'
              value={this.state.discount > 0 ? this.state.discount : ''}
              onChange={this.onChange}
            />
          </Col>
          <Label md={2}>рублей</Label>
          <Button md={5}>Применить</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default DiscountComponent;
