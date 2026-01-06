// selectors
export const getAllCategories = ({ categories }) => categories;

// actions
const createActionName = (actionName) => `app/categories/${actionName}`;

// actions creators
const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
export default categoriesReducer;
