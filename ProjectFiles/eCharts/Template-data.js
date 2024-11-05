var dom = document.getElementById('container');
var myChart = echarts.init(dom, 'dark', {
    renderer: 'svg',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    radar: {
        shape: 'circle',
        silent: true,
        indicator: [
            { name: 'R Phase Voltage THD', max: 20, color: "#ffffff" },  // 1st position
            { name: 'R Phase Current THD', max: 20, color: "#ffffff" },  // 2nd position
            { name: 'Y Phase Voltage THD', max: 20, color: "#ffffff" },  // 3rd position
            { name: 'Y Phase Current THD', max: 20, color: "#ffffff" },  // 4th position
            { name: 'B Phase Voltage THD', max: 20, color: "#ffffff" },  // 5th position
            { name: 'B Phase Current THD', max: 20, color: "#ffffff" }   // 6th position
        ],
        axisName: {
            fontSize: 15,
            fontFamily: "Share Tech Mono"
        },
        axisLine: {
            lineStyle: {
                color: "#375454",
                width: 4,
                cap: "round"
            },
        }
    },
    series: [
        {
            name: 'Voltage THD values',
            type: 'radar',
            data: [
                {
                    value: [$01, null, $03, null, $05, null],  // Only Voltage values for R, Y, B phases
                    name: 'Voltage THD'
                }
            ],
            itemStyle: {
                color: "#0000ff"  // Blue color for Voltage
            },
            lineStyle: {
                color: '#0000ff',  // Connects the voltage dots with blue lines
                width: 4
            }
        },
        {
            name: 'Current THD values',
            type: 'radar',
            data: [
                {
                    value: [null, $02, null, $04, null, $06],  // Only Current values for R, Y, B phases
                    name: 'Current THD'
                }
            ],
            itemStyle: {
                color: "#ffa500"  // Orange color for Current
            },
            lineStyle: {
                color: '#ffa500',  // Connects the current dots with orange lines
                width: 4
            }
        }
    ],
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
