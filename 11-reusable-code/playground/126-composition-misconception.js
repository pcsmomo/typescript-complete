// Bloggers say this is "composition",
// but this is composition literally meant in definition

// Bad pattern
const rectangular = (state) => {
  return {
    area: () => {
      return state.height * state.width;
    },
  };
};

const openable = (state) => {
  return {
    toggleOpen: () => {
      return (state.open = !state.open);
    },
  };
};

const buildRectangleWindow = (state) => {
  return Object.assign(state, rectangular(state), openable(state));
};

const rectangleWindow = buildRectangleWindow({
  height: 20,
  width: 20,
  open: false,
});

console.log(rectangleWindow.open);
rectangleWindow.toggleOpen();
console.log(rectangleWindow.open);
