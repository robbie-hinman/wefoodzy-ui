/**
 * Created by robbie on 7/10/17.
 */
let nextTodoId = 0
export const addTodo = text =>  ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})