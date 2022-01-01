const PlanetChecker = (value) => {
  switch (value) {
    case (value = "Sun"):
      return 274;
    case (value = "Earth"):
      return 9.8;
    case (value = "Mercury"):
      return 3.7;
    case (value = "Venus"):
      return 8.87;
    case (value = "Mars"):
      return 3.71;
    case (value = "Jupiter"):
      return 29.92;
    case (value = "Saturn"):
      return 10.44;
    case (value = "Uranus"):
      return 8.87;
    case (value = "Neptune"):
      return 11.5;
    case (value = "Pluto"):
      return 0.58;
  }
};
export default PlanetChecker;
