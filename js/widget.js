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
              "iDisplayLength": 6
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
          {
            "label": "Boarding School",
            "value" : 13
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
      .tooltipContent(function(key, y, e, graph) { return '<div><p class="key font-montserrat hint-text">'+key+'</p><p class="value semi-bold">'+y+'</p></div>' });

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
