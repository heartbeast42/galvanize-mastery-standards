function double(x) {
  if (typeof(x) === "number") {
    return x * 2;
  } else {
    return "argument must be of type number";
  }
}

module.exports = {
  double
};
