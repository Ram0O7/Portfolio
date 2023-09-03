const referToComponent = (id, position) => {
  document
    .querySelector(id)
    .scrollIntoView({ behavior: "smooth", block: position });
};

export default referToComponent;
