var myChart = echarts.init(document.getElementById('main'));
function yangzhou(geoJson) {
    
    echarts.registerMap('扬州', geoJson);
    let option = {
        series: [
            {
                name: '扬州地图',
                type: 'map',
                mapType: '扬州',
                itemStyle: {
                    normal: { label: { show: true } },
                    emphasis: { label: { show: true } }
                },
            }
        ]
    }
    myChart.setOption(option);
}