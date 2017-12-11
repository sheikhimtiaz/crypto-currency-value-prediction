/*
// Our labels along the x-axis
var timestamp = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var social = [86,114,106,106,107,111,133,221,783,2478];

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
*/

/*var ctx2 = document.getElementById("bitChart");
var bitChart = new Chart(ctx2, {
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
});*/
var buf = {};
buf['bitChart'] = [[], []]; // prepare buffer
var pusher = new Pusher('de504dc5763aeef9ff52'); // Pusher key for Bitstamp
var channel = pusher.subscribe('live_trades'); // subscribe live trade data
channel.bind('trade', function (data) { // callback on message receipt
    buf['bitChart'][data.type].push({
        x: data.timestamp * 1000, // timestamp in milliseconds
        y: data.price             // price in US dollar
    });
});
var id ='bitChart';
var ctx = document.getElementById(id).getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [],
            label: 'Buy',                     // 'buy' price data
            borderColor: 'rgb(255, 99, 132)', // line color
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // fill color
            fill: false,                      // no fill
            lineTension: 0,                    // straight line
			//beginAtZero: true
        }, {
            data: [],
            label: 'Sell',                    // 'sell' price data
            borderColor: 'rgb(54, 162, 235)', // line color
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // fill color
            fill: false,                      // no fill
            lineTension: 0,			// straight line
			//beginAtZero: true
        }]
    },
    options: {
        title: {
            text: 'BTC/USD (' + id + ')', // chart title
            display: true
        },
        scales: {
            xAxes: [{
                type: 'realtime' // auto-scroll on X axis
            }]
        },
        plugins: {
            streaming: {
                duration: 300000, // display data for the latest 300000ms (5 mins)
                onRefresh: function(chart) { // callback on chart update interval
                    Array.prototype.push.apply(
                        chart.data.datasets[0].data, buf[id][0]
                    );            // add 'buy' price data to chart
                    Array.prototype.push.apply(
                        chart.data.datasets[1].data, buf[id][1]
                    );            // add 'sell' price data to chart
                    buf[id] = [[], []]; // clear buffer
                }
            }
        }
    }
});

/////////////////////////////////////////////////////////////////////////


var buf2 = {};
buf2['ethChart'] = [[], []]; // prepare buffer
var pusher2 = new Pusher('de504dc5763aeef9ff52'); // Pusher key for Bitstamp
var channel2 = pusher2.subscribe('live_trades_ethusd'); // subscribe live trade data
channel2.bind('trade', function (data) { // callback on message receipt
    buf2['ethChart'][data.type].push({
        x: data.timestamp * 1000, // timestamp in milliseconds
        y: data.price             // price in US dollar
    });
});
var id2 ='ethChart';
var ctx2 = document.getElementById(id2).getContext('2d');
var chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        datasets: [{
            data: [],
            label: 'Buy',                     // 'buy' price data
            borderColor: 'rgb(255, 99, 132)', // line color
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // fill color
            fill: false,                      // no fill
            lineTension: 0,                    // straight line
			//beginAtZero: true
        }, {
            data: [],
            label: 'Sell',                    // 'sell' price data
            borderColor: 'rgb(54, 162, 235)', // line color
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // fill color
            fill: false,                      // no fill
            lineTension: 0,			// straight line
			//beginAtZero: true
        }]
    },
    options: {
        title: {
            text: 'ETH/USD (' + id2 + ')', // chart title
            display: true
        },
        scales: {
            xAxes: [{
                type: 'realtime' // auto-scroll on X axis
            }]
        },
        plugins: {
            streaming: {
                duration: 300000, // display data for the latest 300000ms (5 mins)
                onRefresh: function(chart2) { // callback on chart update interval
                    Array.prototype.push.apply(
                        chart2.data.datasets[0].data, buf2[id2][0]
                    );            // add 'buy' price data to chart
                    Array.prototype.push.apply(
                        chart2.data.datasets[1].data, buf2[id2][1]
                    );            // add 'sell' price data to chart
                    buf2[id2] = [[], []]; // clear buffer
                }
            }
        }
    }
});

//////////////////////////////////////////////////////////////////////

var buf3 = {};
buf3['liteChart'] = [[], []]; // prepare buffer
var pusher3 = new Pusher('de504dc5763aeef9ff52'); // Pusher key for Bitstamp
var channel3 = pusher3.subscribe('live_trades_ltcusd'); // subscribe live trade data
channel3.bind('trade', function (data) { // callback on message receipt
    buf3['liteChart'][data.type].push({
        x: data.timestamp * 1000, // timestamp in milliseconds
        y: data.price             // price in US dollar
    });
});
var id3 ='liteChart';
var ctx3 = document.getElementById(id3).getContext('2d');
var chart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        datasets: [{
            data: [],
            label: 'Buy',                     // 'buy' price data
            borderColor: 'rgb(255, 99, 132)', // line color
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // fill color
            fill: false,                      // no fill
            lineTension: 0,                    // straight line
			//beginAtZero: true
        }, {
            data: [],
            label: 'Sell',                    // 'sell' price data
            borderColor: 'rgb(54, 162, 235)', // line color
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // fill color
            fill: false,                      // no fill
            lineTension: 0,			// straight line
			//beginAtZero: true
        }]
    },
    options: {
        title: {
            text: 'LTC/USD (' + id3 + ')', // chart title
            display: true
        },
        scales: {
            xAxes: [{
                type: 'realtime' // auto-scroll on X axis
            }]
        },
        plugins: {
            streaming: {
                duration: 300000, // display data for the latest 300000ms (5 mins)
                onRefresh: function(chart3) { // callback on chart update interval
                    Array.prototype.push.apply(
                        chart3.data.datasets[0].data, buf3[id3][0]
                    );            // add 'buy' price data to chart
                    Array.prototype.push.apply(
                        chart3.data.datasets[1].data, buf3[id3][1]
                    );            // add 'sell' price data to chart
                    buf3[id3] = [[], []]; // clear buffer
                }
            }
        }
    }
});

/////////////////////////////////////////////////////////////////////

var buf4 = {};
buf4['xrpChart'] = [[], []]; // prepare buffer
var pusher4 = new Pusher('de504dc5763aeef9ff52'); // Pusher key for Bitstamp
var channel4 = pusher4.subscribe('live_trades_xrpusd'); // subscribe live trade data
channel4.bind('trade', function (data) { // callback on message receipt
    buf4['xrpChart'][data.type].push({
        x: data.timestamp * 1000, // timestamp in milliseconds
        y: data.price             // price in US dollar
    });
});
var id4 ='xrpChart';
var ctx4 = document.getElementById(id4).getContext('2d');
var chart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        datasets: [{
            data: [],
            label: 'Buy',                     // 'buy' price data
            borderColor: 'rgb(255, 99, 132)', // line color
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // fill color
            fill: false,                      // no fill
            lineTension: 0,                    // straight line
			//beginAtZero: true
        }, {
            data: [],
            label: 'Sell',                    // 'sell' price data
            borderColor: 'rgb(54, 162, 235)', // line color
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // fill color
            fill: false,                      // no fill
            lineTension: 0,			// straight line
			//beginAtZero: true
        }]
    },
    options: {
        title: {
            text: 'Ripple/USD (' + id4 + ')', // chart title
            display: true
        },
        scales: {
            xAxes: [{
                type: 'realtime' // auto-scroll on X axis
            }]
        },
        plugins: {
            streaming: {
                duration: 300000, // display data for the latest 300000ms (5 mins)
                onRefresh: function(chart4) { // callback on chart update interval
                    Array.prototype.push.apply(
                        chart4.data.datasets[0].data, buf4[id4][0]
                    );            // add 'buy' price data to chart
                    Array.prototype.push.apply(
                        chart4.data.datasets[1].data, buf4[id4][1]
                    );            // add 'sell' price data to chart
                    buf4[id4] = [[], []]; // clear buffer
                }
            }
        }
    }
});
