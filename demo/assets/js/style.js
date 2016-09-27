(function($) {

  // $(".link-table").click(function() {
  //       window.document.location = $(this).data("href");
  //   });
  // $('[data-init-plugin="select2"]').select2({
  // placeholder: "Select a state"
  // });


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

    'use strict';

    var responsiveHelper = undefined;
    var breakpointDefinition = {
        tablet: 1024,
        phone: 480
    };

    // var initTableFarSticky = function() {
    //   var heightTd = $('td.far-sticky-col');
    //    //var heightTdVal = $('.v-align-middle').outerHeight( true );
    //   var heightTdVal =  heightTd.parent('tbody').children('.v-align-middle').outerHeight( true );
    //
    //   $('td.far-sticky-col').height(heightTdVal);
    //
    // }

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
    var initDetailedViewTable = function() {

        var _format = function(d) {
            // `d` is the original data object for the row
            return '<table class="table table-inline">' +
                '<tr>' +
                '<td>Learn from real test data <span class="label label-important">ALERT!</span></td>' +
                '<td>USD 1000</td>' +
                '</tr>' +
                '<tr>' +
                '<td>PSDs included</td>' +
                '<td>USD 3000</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Extra info</td>' +
                '<td>USD 2400</td>' +
                '</tr>' +
                '</table>';
        }


        var table = $('#detailedTable');

        table.DataTable({
            "sDom": "t",
            "scrollCollapse": true,
            "paging": false,
            "bSort": false
        });

        // Add event listener for opening and closing details
        $('#detailedTable tbody').on('click', 'tr', function() {
            //var row = $(this).parent()
            if ($(this).hasClass('shown') && $(this).next().hasClass('row-details')) {
                $(this).removeClass('shown');
                $(this).next().remove();
                return;
            }
            var tr = $(this).closest('tr');
            var row = table.DataTable().row(tr);

            $(this).parents('tbody').find('.shown').removeClass('shown');
            $(this).parents('tbody').find('.row-details').remove();

            row.child(_format(row.data())).show();
            tr.addClass('shown');
            tr.next().addClass('row-details');
        });

    }


    // initTableFarSticky();
    initTableWithSearch();
    initDetailedViewTable();
    initTableWithDynamicRows();
    initTableWithExportOptions();
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



})(window.jQuery);
