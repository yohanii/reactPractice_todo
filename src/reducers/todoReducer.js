import todoAction from "../actions/todoAction";

const todoReducer = (state, action) => {
    switch (action.type) {
        case todoAction.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload.input], checked: [...state.checked, false]};
        case todoAction.CHECK:
            let newChecked = [...state.checked];
            newChecked[action.payload.index] = !newChecked[action.payload.index];
            return {...state, checked: newChecked};
    }
};

export {todoReducer};