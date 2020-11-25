function edges(data) {
    var cityname = 'yangzhou';
    echarts.registerMap(cityname, data);
    var chart = echarts.init(document.getElementById('map'));
    var roads = [].concat.apply([], data.features.map(function (feature, idx) {
        return {
            coords: feature.geometry.coordinates
        }
    }));
    var sample = {
        type: 'lines',
        coordinateSystem: 'geo',
        polyline: true,
        data: roads,
        silent: true,
        lineStyle: {
            normal: {
                color: 'white',
                color: 'rgb(200, 35, 45)',
                opacity: 0.2,
                width: 1
            }
        },
        progressiveThreshold: 500,
        progressive: 200
    };
    var series = [sample];
    console.log(series);
    var option = {
        geo: {
            map: '扬州路网',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'white',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: 'gray'
                }
            }
        },
        "title": [
            {
                "textStyle": {
                    "color": "#000",
                    "fontSize": 18
                },
                "subtext": "",
                "text": "扬州路网及边界",
                "top": "auto",
                "subtextStyle": {
                    "color": "#aaa",
                    "fontSize": 12
                },
                "left": "auto"
            }
        ],
        "legend": [
            {
                "selectedMode": "multiple",
                "top": "top",
                "orient": "horizontal",
                "data": [
                    ""
                ],
                "left": "center",
                "show": true
            }
        ],
        "backgroundColor": "#fff",
        "series": series
    };
    chart.setOption(option);
}