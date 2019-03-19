/* @flow */

import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

type Props = {
  handleDiscount: (discount: number) => void
};

type State = {
  discount: number
};

class DiscountComponent extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      discount: 0
    };

    // @see https://github.com/facebook/flow/issues/1517#issuecomment-194538151
    (this: any).onChange = this.onChange.bind(this);
    (this: any).onSubmit = this.onSubmit.bind(this);
  }

  onChange(evt: SyntheticInputEvent<HTMLInputElement>): void {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  onSubmit(evt: SyntheticInputEvent<HTMLFormElement>):void {
    evt.preventDefault();

    this.props.handleDiscount(this.state.discount);
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} inline>
        <FormGroup className='mb-3 mr-2'>
          <Label for='discount' className='mr-2'>Применить скидку</Label>
          <Input
            className='mr-2'
            type='text'
            name='discount'
            pattern='[0-9]*'
            value={this.state.discount > 0 ? this.state.discount : ''}
            onChange={this.onChange}
          />
          <Label>рублей</Label>
        </FormGroup>
        <Button className='mb-3 form-control'>Применить</Button>
      </Form>
    );
  }
}

export default DiscountComponent;
