$(function(){
	var myChart = echarts.init(document.getElementById('main'));
	$.get('./boundary.json',function(geoJson){
		echarts.registerMap('扬州市',geoJson,{});
		var option = {
            series: [
		        {
		        	name: 'yangzhou',
		            type: 'map',
		            mapType: '扬州市',
		            aspectScale: 0.85,  //地图长度比
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        color: '#fff'
		                    }
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        color: '#333'
		                    }
		                }
		            }
		        }                              
            ]
        };
		    
		myChart.setOption(option);
	});
});