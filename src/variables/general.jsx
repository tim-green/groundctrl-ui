// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
  {
    checked: false,
    text: 'Arrange meeting for GroundCTRL UI"'
  },
  {
    checked: false,
    text: "Create the Tower of Pimps"
  },
  {
    checked: true,
    text:
      "Space gravity is different to planet gravity"
  }
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Name", "Country", "City", "Salary"];
const tbody = [
  {
    className: "table-success",
    data: ["E1", "Australia", "RT", "$36,738"]
  },
  {
    className: "",
    data: ["E1", "Australia", "RT", "$36,738"]
  },
  {
    className: "table-info",
    data: ["E1", "Australia", "RT", "$36,738"]
  },
  {
    className: "",
    data: ["E1", "Australia", "RT", "$36,738"]
  },
  {
    className: "table-danger",
    data: ["E1", "Australia", "RT", "$36,738"]
  },
  { className: "", data: ["E1", "Australia", "RT", "$36,738"] },
  {
    className: "table-warning",
    data: ["E1", "Australia", "RT", "$36,738"]
  }
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };
