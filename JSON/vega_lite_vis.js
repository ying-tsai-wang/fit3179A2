var pm25_map = "pm25_map.vg.json";

vegaEmbed("#map_plot", pm25_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var pm10_map = "pm10_map.vg.json";

vegaEmbed("#map_plot", pm10_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var bsp_map = "bsp_map.vg.json";

vegaEmbed("#map_plot", bsp_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var no2_map = " no2_map.vg.json";

vegaEmbed("#map_plot", no2_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var o3_map = "o3_map.vg.json";

vegaEmbed("#map_plot", o3_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var so2_map = "so2_map.vg.json";

vegaEmbed("#map_plot", so2_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var temperature_map = "temperature_map.vg.json";

vegaEmbed("#map_plot", bsp_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var pm25_line = "pm25_line.vg.json";
vegaEmbed("#line_chart", pm25_line).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var bsp_line = "bsp_line.vg.json";
vegaEmbed("#line_chart", bsp_line).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var temperature_line = "temperature_line.vg.json";
vegaEmbed("#line_chart", temperature_line).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var cbd = "cbd.vg.json";
vegaEmbed("#location_chart", cbd).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var geelong = "geelong.vg.json";
vegaEmbed("#location_chart", geelong).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);