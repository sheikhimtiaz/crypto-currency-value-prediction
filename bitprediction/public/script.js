// Our labels along the x-axis
var timestamp = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var social = [86,114,106,106,107,111,133,221,783,2478];
var price = [282,350,411,502,635,809,947,1402,3700,5267];

var ctx1 = document.getElementById("socialChart");
var socialChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: timestamp,
    datasets: [
      { 
        data: social,
        label:"social graph",
        borderColor: "#751500",
        fill: false
      }
    ]
  }
});
var ctx2 = document.getElementById("bitcoinChart");
var bitcoinChart = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: timestamp,
    datasets: [
      { 
        data: price,
        label: "price in USD",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  }
});