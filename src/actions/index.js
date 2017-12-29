import { v4 } from 'node-uuid';

/**
 * Created by robbie on 7/10/17.
 */
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});
