(function($) {
    $('#bidangKependidikan, #namaYayasan').hide();


    $('#inputPendidik').click(function(e){
      var intPend = $(this).val();
      if (intPend == 1){
        $('#bidangPendidik').show();
        $('#bidangKependidikan').hide();
      }else{
        $('#bidangPendidik').hide();
        $('#bidangKependidikan').show();
      }
    });

    var x = 1; //initlal text box count
    $('.add_field_button').click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
             $(this).parent('div').children('.input_fields_wrap').append('\
            <div class="input-group p-r-5 p-l-5 m-b-5">\
<input class="form-control" type="text">\
<span class="input-group-addon danger remove_field"><i class="pg-close"></i></span>\
</div>\
            '); //add input box
        }
      });

      $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
      })




    // $("#namaYayasan" ).hide();
    $("#statusHukum input").on( "click", function() {
      var x = $( "#statusHukum input:checked" ).val();
      if ( x == 'yes'){
        $("#namaYayasan" ).hide();
      }else{
        $("#namaYayasan" ).show();
      }
    });

      $('#datepicker_1, #datepicker_2').datepicker();

      var width = screen.width;

      $('.openSidebar').click(function(){
          $('.page-sidebar').animate({width:'300px'},500);
      });
      $('.closeSidebar').click(function(){
          $('.page-sidebar').animate({width:'0px'},500);
      });
      $('.container-fluid').click(function(){
          if ( screen.width < 992) {
            $('.page-sidebar').animate({width:'0px'},500);
          }
      });

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
                  <label class='btn btn-success btn-sm active'>\
                    <input type='radio' value='10' name='options' id='perpage1' checked> 10\
                  </label>\
                  <label class='btn btn-success btn-sm'>\
                    <input type='radio' value='20' name='options' id='perpage2'> 20\
                  </label>\
                  <label class='btn btn-success btn-sm'>\
                    <input type='radio' value='50' name='options' id='perpage3'> 50\
                  </label>\
                  <label class='btn btn-success btn-sm'>\
                    <input type='radio' value='100' name='options' id='perpage3'> 100\
                  </label>\
                </div>\
                <span>Ditemukan _TOTAL_ data.</span>",
                "sInfoFiltered":"<span>Jumlah data perhalaman: </span><div class='btn-group' data-toggle='buttons'>\
                  <label class='btn btn-success btn-sm active'>\
                    <input type='radio' value='10' name='options' id='perpage1' checked> 10\
                  </label>\
                  <label class='btn btn-success btn-sm'>\
                    <input type='radio' value='20' name='options' id='perpage2'> 20\
                  </label>\
                  <label class='btn btn-success btn-sm'>\
                    <input type='radio' value='50' name='options' id='perpage3'> 50\
                  </label>\
                  <label class='btn btn-success btn-sm'>\
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
