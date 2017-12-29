/**
 * Created by robbie on 7/17/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, FormControl, FormGroup, Button } from 'react-bootstrap';
import { addTodo } from '../../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <FormGroup>
          <InputGroup bsSize="lg">
            <FormControl
              type="text"
              ref={(node) => {
                input = node;
              }}
            />

            <InputGroup.Button type="submit">
              <Button>Add Todo</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
