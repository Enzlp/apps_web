Highcharts.chart('container', {
    chart: {
        type: 'pie',
         
    },
    title: {
        text: 'Distribución tipo de dispositivos donados'
    },
    series: [{
        name: 'Dispositivos',  
        colorByPoint: true,  
        data: [
            {   name: "Otro",
                y:0
            }
        ]
    }],
    plotOptions: {
        pie: {
            allowPointSelect: true,   
            cursor: 'pointer',       
            dataLabels: {
                enabled: true,        
                format: '{point.name}: {point.percentage:.1f}%'  
            }
        }
    }
});

fetch("http://127.0.0.1:5000/get-stats-data-devices")
    .then((response) => response.json())
    .then((data) => {
        const chart = Highcharts.charts.find(
            (chart) => chart && chart.renderTo.id === "container"
        )
        chart.update({
            series: [
              {
                data: data,
              },
            ],
        });
    })
    .catch((error) => console.error("Error", error));