var ctx = document.getElementById("myChart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
       datasets : []
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

function get_data_byname(datasets , name)
{
    for(i in datasets) {
        if(datasets[i].label == name)
            return datasets[i];
    }
    return null;
}

function plotxy (name, x, y, color) 
{
  var data = [];
  for(var i= 0; i<y.length;i++)
  {
    data.push({y:y[i],x:x[i]})
  }
  dataset = {
    label:name,
    data:data,
    fill: false,
    borderColor: color,
  }
  myLineChart.data.datasets.push(dataset);
  myLineChart.update();
}
function plot(name, y, color) 
{
  var data = [];
  for(var i= 0;i<y.length;i++)
  {
    data.push({y:y[i],x:i})
  }
  dataset = {
    label:name,
    data:data,
    fill: false,
    borderColor: color,
  }
  myLineChart.data.datasets.push(dataset);
  myLineChart.update();
}

function plotp(name, p, color, size) 
{
  var dataset = get_data_byname(myLineChart.data.datasets,name);
  var point
  if (dataset == null)
  {
    dataset = {
        label:name,
        data: [],
        fill: false,
        borderColor: color,
    }
    myLineChart.data.datasets.push(dataset)
    point = {y:p,x:1}
  } else {
    point = {y:p,x:dataset.data[dataset.data.length-1].x+1};
  }
  dataset.data.push(point);
  if(dataset.data.length > size)
    dataset.data.shift();
  myLineChart.update();
}
function plotclean()
{
  myLineChart.data.datasets=[];
  myLineChart.update();
  myLineChart.clear(); 
}
// plot("lizhizhou", [1,2,3,2,1], "rgba(0,0,192,1)")
// plot("ababas", [65, 59, 80, 81, 56, 55, 40], "rgba(75,192,192,1)")
// //plotclean()
// setInterval(function(){
//     plotp("lizhizhou",Math.random() * 100,"rgba(0,0,192,1)", 50);
//     plotp("ababas",Math.random() * 100,"rgba(75,192,192,1)", 50);
// },1000);

// var canvas = document.getElementById('myChart'),
//     ctx = canvas.getContext('2d'),
//     startingData = {
//       labels: [1, 2, 3, 4, 5, 6, 7],
//       datasets: [
//           {
//               fillColor: "rgba(220,220,220,0.2)",
//               strokeColor: "rgba(220,220,220,1)",
//               pointColor: "rgba(220,220,220,1)",
//               pointStrokeColor: "#fff",
//               data: [65, 59, 80, 81, 56, 55, 40]
//           },
//           {
//               fillColor: "rgba(151,187,205,0.2)",
//               strokeColor: "rgba(151,187,205,1)",
//               pointColor: "rgba(151,187,205,1)",
//               pointStrokeColor: "#fff",
//               data: [28, 48, 40, 19, 86, 27, 90]
//           }
//       ]
//     },
//     latestLabel = startingData.labels[6];

// // Reduce the animation steps for demo clarity.
// var myLiveChart = new Chart(ctx).Line(startingData, {animationSteps: 15});


// setInterval(function(){
//   // Add two random numbers for each dataset
//   myLiveChart.addData([Math.random() * 100, Math.random() * 100], ++latestLabel);
//   // Remove the first point so we dont just add values forever
//   myLiveChart.removeData();
// }, 5000);

