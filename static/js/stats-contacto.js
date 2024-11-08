const chart = Highcharts.chart('container', {
    chart: {
        type: 'column'  
    },
    title: {
        text: 'Contactos por Comuna'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Número de Contactos'
        }
    },
    series: [{
        name: 'Contactos',
        data: []
    }]
});

chart.showLoading('Cargando datos...');

fetch("http://127.0.0.1:5000/get-stats-data-contacts")
    .then((response) => response.json())
    .then((responseData) => {
        let categories = [];
        let seriesData = []; // Renaming the variable to avoid conflict

        responseData.forEach(element => {
            categories.push(element.category);
            seriesData.push(element.data);
          });

        const chart = Highcharts.charts.find(
            (chart) => chart && chart.renderTo.id == "container"
        );

        chart.update({
            series: [{
                data: seriesData
            }],
            xAxis: [{
                categories: categories
            }]
        });
        chart.hideLoading();
        console.log(categories);
        console.log(seriesData);
        
    })
    .catch((error) => {
        console.error("Error", error);
        chart.hideLoading();
    });
