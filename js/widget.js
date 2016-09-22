/*
    Widget specific JS (ie: init scripts of
    plugins used in the widget) go here
*/

(function($) {

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
                  "sLengthMenu": "",
                  "sInfo": ""
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
        var initPaiCart1 = function() {

          var json = [
                {
                  "label": "Perkumpulan NU",
                  "value" : 60
                } ,
                {
                  "label": "Yayasan",
                  "value" : 40
                }

              ];

          nv.addGraph(function() {
            var chart = nv.models.pieChart()
                .x(function(d) { return d.label })
                .y(function(d) { return d.value })
                .showLabels(false)
                .color([
          		    $.Pages.getColor('info'),
          		    // $.Pages.getColor('menu')
          		    $.Pages.getColor('warning')
          		])
                .tooltipContent(function(key, y, e, graph) { return '<div><p class="key font-montserrat hint-text">'+key+'</p><p class="value semi-bold">'+y+'</p></div>' });

              d3.select("#nvd3-pie svg")
                  .datum(json)
                  .transition().duration(350)
                  .call(chart);

              d3.select(".nv-legendWrap")
            		.attr("transform", "translate(-30,330)");

            return chart;
          });


        }

        initTableWithSearch();
        initPaiCart1();


var json = [
      {
        "label": "Laki - Laki",
        "value" : 5783
      } ,
      {
        "label": "Perempuan",
        "value" : 4613
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
          } ,
        ];

nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)
      .color([
		    $.Pages.getColor('complete'),
		    $.Pages.getColor('menu'),
		    $.Pages.getColor('primary')
		])
      .tooltipContent(function(key, y, e, graph) { return '<div><p class="key font-montserrat hint-text">'+key+'</p><p class="value semi-bold">'+y+d.value+'</p> </div>' });

    d3.select("#nvd3-pie svg")
        .datum(json)
        .transition().duration(350)
        .call(chart);

    d3.select(".nv-legendWrap")
  		.attr("transform", "translate(-30,330)");

      d3.select("#nvd3-pie-status svg")
          .datum(json2)
          .transition().duration(350)
          .call(chart);

      d3.select(".nv-legendWrap")
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
