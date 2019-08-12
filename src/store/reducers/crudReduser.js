const defaultState = {
  items : [],
  selectedItem : undefined
};

const crudReduser = (state = defaultState, action) => {
  var newState = { ...state };
  switch(action.type)
  {

  }
  return newState;
};

export default crudReduser;
