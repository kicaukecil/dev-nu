(function($) {



  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

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
  $( document ).ready(function() {

    //var hTd = $('.v-align-middle').outerHeight( true );
    //$('td.far-sticky-col').height(hTd);

    $('#bidangKependidikan').hide();
    $('#bidangPendidik').hide();

    $('#inputPendidik').click(function(e){
      var intPend = $(this).val();
      if (intPend == 2){
        $('#bidangPendidik').hide();
        $('#bidangKependidikan').show();
      }
      if (intPend == 1){
        $('#bidangPendidik').show();
        $('#bidangKependidikan').hide();
      }
    });


    $('.add_field_button').click(function(e){ //on add input button click
        e.preventDefault();


             $(this).parent('div').children('.input_fields_wrap').append('\
            <div class="input-group p-r-5 p-l-5 m-b-5">\
            <input class="form-control" type="text">\
            <span class="input-group-addon danger remove_field"><i class="pg-close"></i></span>\
            </div>\
            '); //add input box
      });

      $('.input_fields_wrap').on("click",".remove_field", function(e){e.preventDefault(); $(this).parent('div').remove(); x--;});




     $("#namaYayasan" ).hide();
    $("#statusHukum input").on( "click", function() {
      var x = $( "#statusHukum input:checked" ).val();
      if ( x == 'yes'){
        $("#namaYayasan" ).hide();
      }else{
        $("#namaYayasan" ).show();
      }
    });

      $('#datepicker_1, #datepicker_2').datepicker();



    });

    $(document).ready(function() {
      var countries = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: 'assets/js/alamat.json'
      });

        var bestPictures = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          prefetch: 'http://revox.io/json/drop-countries.json',
          remote: {
            url: 'http://revox.io/json/drop-countries.json',
            wildcard: '%QUERY'
          }
        });
      // passing in `null` for the `options` arguments will result in the default
      // options being used
      $('.sample-typehead').typeahead(null, {
        name: 'countries',
        source: countries
      });
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
                "sInfo": "<span>Ditemukan _TOTAL_ data. | </span><span>Jumlah data per halaman: </span><div class='btn-group' data-toggle='buttons'>\
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
                </div>\
                ",
                "sInfoFiltered":"<span>Jumlah data perhalaman: </span><div class='btn-group' data-toggle='buttons'>\
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
                </div>\
                <span>Ditemukan _TOTAL_ data.</span>",
                "sInfoEmpty":"",
                "sZeroRecords":"Data tidak ditemukan"
            },
            "scrollX":false,
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
    // initDetailedViewTable();
    // initTableWithDynamicRows();
    // initTableWithExportOptions();





})(window.jQuery);
