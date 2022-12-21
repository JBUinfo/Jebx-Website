export const selectColorYear = (year: number) => {
  switch (year) {
    case 2015:
      return "text-y2015";
    case 2016:
      return "text-y2016";
    case 2017:
      return "text-y2017";
    case 2018:
      return "text-y2018";
    case 2019:
      return "text-y2019";
    case 2020:
      return "text-y2020";
    case 2021:
      return "text-y2021";
    case 2022:
      return "text-y2022";
    case 2023:
      return "text-y2023";
    default:
      return "text-white";
  }
};
