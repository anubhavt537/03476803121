import React, { useReducer } from 'react';

// Action types
const SET_SORT_ORDER = 'SET_SORT_ORDER';
const SET_LIST = 'SET_LIST';

// Initial state
const initialState = {
  list: [],
  sortOrder: 'asc' // 'asc' for ascending or 'desc' for descending
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case SET_SORT_ORDER:
      const sortedList = [...state.list].sort((a, b) => {
        if (state.sortOrder === 'asc') {
          return a - b; // Ascending order
        } else {
          return b - a; // Descending order
        }
      });
      return {
        ...state,
        list: sortedList,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
};

// Component
const SortList = () => {
  // Use the useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to handle sorting the list
  const handleSort = (order) => {
    dispatch({ type: SET_SORT_ORDER, payload: order });
  };

  // Function to handle setting the list
  const handleSetList = (newList) => {
    dispatch({ type: SET_LIST, payload: newList });
  };

  // Example usage
  React.useEffect(() => {
    // Setting initial list
    handleSetList();
  }, []);

  return (
    <div>
      <button onClick={() => handleSort('asc')}>Sort Ascending</button>
      <button onClick={() => handleSort('desc')}>Sort Descending</button>
      <ul>
        {state.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortList;
