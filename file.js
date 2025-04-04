looker.plugins.visualizations.add({
  id: "myViz",
  label: "My First Viz",
  options: {},
  create: function (element, config) {
    element.innerHTML = "<h2 id='title' style='color: #3366cc;'>Hello Looker!</h2>";
  },
  update: function (data, element, config, queryResponse) {
    // you could add logic here to update on new data
  }
});
