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
    borderColor: color,
  }
  myLineChart.data.datasets.push(dataset);
  myLineChart.update();
}
function plotclean()
{
  myLineChart.data.datasets=[];
  myLineChart.update();
  myLineChart.clear(); 
}
plot("lizhizhou", [1,2,3,2,1], "rgba(0,0,192,1)")
plot("ababas", [65, 59, 80, 81, 56, 55, 40], "rgba(75,192,192,1)")
plotclean()

