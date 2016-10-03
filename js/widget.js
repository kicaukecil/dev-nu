/*
    Widget specific JS (ie: init scripts of
    plugins used in the widget) go here
*/

(function($) {
  var body = document.body,
  html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight,
                 html.clientHeight, html.scrollHeight, html.offsetHeight );
  $('[id=ID-]').animate({
  scrollTop: height/3 - window.innerHeight/2
  }, 200);

    'use strict';


    $('#rankingDatepicker').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        format: 'MM/DD/YYYY h:mm A'
    }, function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
    });

        var initTableWithSearch = function() {
            var table = $('#rankingTable');

            var settings = {
              "sDom": "<'table-responsive't><'row'<p i>>",
              "destroy": true,
              "scrollCollapse": true,
              "oLanguage": {
                  "sLengthMenu": "_MENU_ ",
                  "sInfo": "<span>Ditemukan _TOTAL_ data.</span>\
                  <span>Jumlah data per halaman: </span><div class='btn-group' data-toggle='buttons'>\
                    <label class='btn btn-success btn-xs active'>\
                      <input type='radio' value='10' name='options' id='perpage1' checked> 10\
                    </label>\
                    <label class='btn btn-success btn-xs'>\
                      <input type='radio' value='20' name='options' id='perpage2'> 20\
                    </label>\
                    <label class='btn btn-success btn-xs'>\
                      <input type='radio' value='50' name='options' id='perpage3'> 50\
                    </label>\
                    <label class='btn btn-success btn-xs'>\
                      <input type='radio' value='100' name='options' id='perpage3'> 100\
                    </label>\
                  </div>",
                  "sInfoFiltered":"<span>Ditemukan _TOTAL_ data.</span>\
                  <span>Jumlah data per halaman: </span><div class='btn-group' data-toggle='buttons'>\
                    <label class='btn btn-success btn-xs active'>\
                      <input type='radio' value='10' name='options' id='perpage1' checked> 10\
                    </label>\
                    <label class='btn btn-success btn-xs'>\
                      <input type='radio' value='20' name='options' id='perpage2'> 20\
                    </label>\
                    <label class='btn btn-success btn-xs'>\
                      <input type='radio' value='50' name='options' id='perpage3'> 50\
                    </label>\
                    <label class='btn btn-success btn-xs'>\
                      <input type='radio' value='100' name='options' id='perpage3'> 100\
                    </label>\
                  </div>",
                  "sInfoEmpty":"",
                  "sZeroRecords":"Data tidak ditemukan"
              },
              "iDisplayLength": 5
            };



            table.dataTable(settings);

            // search box for table
            $('#tableUser-cari').keyup(function() {table.fnFilter($(this).val());});
            $('#tableUser input[type=checkbox]').click(function() {
                if ($(this).is(':checked')) {
                    $(this).closest('tr').addClass('selected');
                } else {
                    $(this).closest('tr').removeClass('selected');
                }

            });
        }

        initTableWithSearch();


var json = [
      {
        "label": "Laki - Laki",
        "value" : 5783
      } ,
      {
        "label": "Perempuan",
        "value" : 6532
      } ,
    ];

    var json2 = [
          {
            "label": "Perkumpulan NU",
            "value" : 783
          } ,
          {
            "label": "Yayasan",
            "value" : 613
          }
        ];

nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(false)
      .color([
		    $.Pages.getColor('complete'),
		    $.Pages.getColor('menu')
		])
      .tooltipContent(function(x, y, e, graph) { return '<div><p class="key font-montserrat hint-text">'+x+'</p><p class="value semi-bold">'+y+'</p></div>' });

    d3.select("#nvd3-pie svg")
      .datum(json)
      .transition().duration(350)
      .call(chart);
    d3.select("#nvd3-pie-status svg")
      .datum(json2)
      .transition().duration(350)
      .call(chart);
    d3.select("#nvd3-pie .nv-legendWrap")
      .attr("transform", "translate(-30,330)");
    d3.select("nvd3-pie-status .nv-legendWrap")
    	.attr("transform", "translate(-30,330)");

  return chart;
});
})(window.jQuery);

(function() {

    d3.json('js/charts.json', function(data) {

        var container = '.widget-15-chart';

        var seriesData = [
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(4);
        for (var i = 0; i < 4; i++) {
            random.addData(seriesData);
        }

        var graph = new Rickshaw.Graph({
            renderer: 'bar',
            element: document.querySelector(container),
            height: 200,
            padding: {
                top: 0.5
            },
            series: [{
                data: seriesData[0],
                color: $.Pages.getColor('complete-light'),
                name: "New users"
            }]

        });

        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph,
            formatter: function(series, x, y) {
                var date = '<span class="date">' + new Date(x * 1000).toUTCString() + '</span>';
                var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
                var content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
                return content;
            }
        });

        graph.render();

        $(window).resize(function() {
            graph.configure({
                width: $(container).width(),
                height: 200
            });

            graph.render()
        });

        $(container).data('chart', graph);
    });
})();
