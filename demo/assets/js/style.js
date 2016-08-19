(function($) {


    'use strict';

    var responsiveHelper = undefined;
    var breakpointDefinition = {
        tablet: 1024,
        phone: 480
    };
    var initTableWithSearch = function() {
        var table = $('#tableUser');

        var settings = {
            "sDom": "<'table-responsive't><'row'<p i>>",
            "destroy": true,
            "scrollCollapse": true,
            "oLanguage": {
                "sLengthMenu": "_MENU_ ",
                "sInfo": "<span>Jumlah data perhalaman: </span><div class='btn-group' data-toggle='buttons'>\
                  <label class='btn btn-primary btn-sm active'>\
                    <input type='radio' value='10' name='options' id='perpage1' checked> 10\
                  </label>\
                  <label class='btn btn-primary btn-sm'>\
                    <input type='radio' value='20' name='options' id='perpage2'> 20\
                  </label>\
                  <label class='btn btn-primary btn-sm'>\
                    <input type='radio' value='50' name='options' id='perpage3'> 50\
                  </label>\
                  <label class='btn btn-primary btn-sm'>\
                    <input type='radio' value='100' name='options' id='perpage3'> 100\
                  </label>\
                </div>\
                <span>Ditemukan _TOTAL_ data.</span>",
                "sInfoFiltered":"<span>Jumlah data perhalaman: </span><div class='btn-group' data-toggle='buttons'>\
                  <label class='btn btn-primary btn-sm active'>\
                    <input type='radio' value='10' name='options' id='perpage1' checked> 10\
                  </label>\
                  <label class='btn btn-primary btn-sm'>\
                    <input type='radio' value='20' name='options' id='perpage2'> 20\
                  </label>\
                  <label class='btn btn-primary btn-sm'>\
                    <input type='radio' value='50' name='options' id='perpage3'> 50\
                  </label>\
                  <label class='btn btn-primary btn-sm'>\
                    <input type='radio' value='100' name='options' id='perpage3'> 100\
                  </label>\
                </div>\
                <span>Ditemukan _TOTAL_ data.</span>",
                "sInfoEmpty":"",
                "sZeroRecords":"Data tidak ditemukan"
            },
            "iDisplayLength": 8 //jumlah data tampil per page
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
    initTableWithDynamicRows();
    initTableWithExportOptions();

})(window.jQuery);
