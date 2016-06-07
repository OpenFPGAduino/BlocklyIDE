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
        if(datasets[i].name == name)
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

var plot_size = 200;
function plotp(name, p, color) 
{
  var dataset = get_data_byname(myLineChart.data.datasets,name);
  if (dataset == null)
  {
    dataset = {
        label:name,
        data: [],
        fill: false,
        borderColor: color,
    }
  }
  dataset.data.push(p);
  if(dataset.data.length > plot_size)
    dataset.data.shift();
  myLineChart.update();
}
function plotclean()
{
  myLineChart.data.datasets=[];
  myLineChart.update();
  myLineChart.clear(); 
}
//plot("lizhizhou", [1,2,3,2,1], "rgba(0,0,192,1)")
//plot("ababas", [65, 59, 80, 81, 56, 55, 40], "rgba(75,192,192,1)")
//plotclean()

