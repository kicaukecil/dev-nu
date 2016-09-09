/* ============================================================
 * Vector Map
 * Render a vector map (SVG) using Mapplic plugin
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */

(function($) {

    'use strict';

    $(document).ready(function() {

        // Apply mapplic plugin
        $('#mapplic').mapplic({
            source: 'assets/js/indonesia.json',
            height: '500px',
            search: false,
            sidebar: false,
            minimap: false,
            locations: true,
            deeplinking: true,
            fullscreen: true,
            hovertip: false,
            maxscale: 4,
            animate: true
        });

        // Resets map to default zoom
        $('.clear-map').click(function() {
            $('.mapplic-clear-button').trigger('click');
        });

        // Load country list into select2
        $.getJSON('assets/js/indonesia.json', function(data) {
            var countryList = [];

            $.each(data.levels[0].locations, function(key, val) {
                countryList.push({
                    id: val.id,
                    text: val.title
                });
            });

            $("#country-list").select2({
                data: countryList,
                width: "240px"
            });

        });

        // jump to country on select2 change
        $('#country-list').change(function() {
            var sel = $('#country-list').select2('data');
            window.location.hash = sel.id;
        });

    });
})(window.jQuery);
