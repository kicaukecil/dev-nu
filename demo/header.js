function header(pageTitle) {

document.write('\
<div class="header " >\
  <div class="pull-center sm-table">\
    <div class="header-inner">\
      <ul class="notification-list no-margin hidden-sm hidden-xs b-grey b-l b-r no-style p-l-30 p-r-20">\
        <li class="p-r-15 inline">\
          <div class="dropdown">\
            <a href="javascript:;" id="notification-center" class="icon-set globe-fill" data-toggle="dropdown">\
              <span class="bubble"></span>\
            </a>\
            <!-- START Notification Dropdown -->\
            <div class="dropdown-menu notification-toggle" role="menu" aria-labelledby="notification-center">\
              <!-- START Notification -->\
              <div class="notification-panel">\
                <!-- START Notification Body-->\
                <div class="notification-body scrollable">\
                  <div class="notification-item  clearfix">\
                    <div class="heading">\
                      <a href="#" class="text-danger">\
                        <i class="fa fa-exclamation-triangle m-r-10"></i>\
                        <span class="bold">98% Server Load</span>\
                        <span class="fs-12 m-l-10">Take Action</span>\
                      </a>\
                      <span class="pull-right time">2 mins ago</span>\
                    </div>\
                    <!-- START Notification Item Right Side-->\
                    <div class="option">\
                      <a href="#" class="mark"></a>\
                    </div>\
                    <!-- END Notification Item Right Side-->\
                  </div>\
                  <!-- END Notification Item-->\
                  <!-- START Notification Item-->\
                  <div class="notification-item  clearfix">\
                    <div class="heading">\
                      <a href="#" class="text-warning-dark">\
                        <i class="fa fa-exclamation-triangle m-r-10"></i>\
                        <span class="bold">Warning Notification</span>\
                        <span class="fs-12 m-l-10">Buy Now</span>\
                      </a>\
                      <span class="pull-right time">yesterday</span>\
                    </div>\
                    <!-- START Notification Item Right Side-->\
                    <div class="option">\
                      <a href="#" class="mark"></a>\
                    </div>\
                    <!-- END Notification Item Right Side-->\
                  </div>\
                  <!-- END Notification Item-->\
                  <!-- START Notification Item-->\
                  <div class="notification-item unread clearfix">\
                    <div class="heading">\
                      <div class="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">\
                        <img width="30" height="30" data-src-retina="assets/img/profiles/1x.jpg" data-src="assets/img/profiles/1.jpg" alt="" src="assets/img/profiles/1.jpg">\
                      </div>\
                      <a href="#" class="text-complete">\
                        <span class="bold">Revox Design Labs</span>\
                        <span class="fs-12 m-l-10">Owners</span>\
                      </a>\
                      <span class="pull-right time">11:00pm</span>\
                    </div>\
                    <!-- START Notification Item Right Side-->\
                    <div class="option" data-toggle="tooltip" data-placement="left" title="mark as read">\
                      <a href="#" class="mark"></a>\
                    </div>\
                    <!-- END Notification Item Right Side-->\
                  </div>\
                  <!-- END Notification Item-->\
                </div>\
                <!-- END Notification Body-->\
                <!-- START Notification Footer-->\
                <div class="notification-footer text-center">\
                  <a href="#" class="">Read all notifications</a>\
                  <a data-toggle="refresh" class="portlet-refresh text-black pull-right" href="#">\
                    <i class="pg-refresh_new"></i>\
                  </a>\
                </div>\
                <!-- START Notification Footer-->\
              </div>\
              <!-- END Notification -->\
            </div>\
            <!-- END Notification Dropdown -->\
          </div>\
        </li>\
      </ul>\
      <ul class="breadcrumb notification-list no-margin hidden-sm hidden-xs no-style p-l-30 p-r-20">\
        <li><a href="#" class="active">' + pageTitle + '</a></li>\
      </ul>\
    </div>\
  </div>\
  <div class=" pull-right">\
    <div class="visible-lg visible-md m-t-10">\
      <div class="pull-left p-r-10 p-t-10 fs-16 font-heading">\
        <span class="semi-bold">Nama</span> <span class="text-master">User</span>\
      </div>\
      <div class="dropdown pull-right">\
        <button class="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
          <span class="thumbnail-wrapper d32 circular inline m-t-5">\
          <img src="assets/img/profiles/avatar.jpg" alt="" data-src="assets/img/profiles/avatar.jpg" data-src-retina="assets/img/profiles/avatar_small2x.jpg" width="32" height="32">\
      </span>\
        </button>\
        <ul class="dropdown-menu profile-dropdown" role="menu">\
          <li><a href="#"><i class="pg-settings_small"></i> Pengaturan</a>\
          </li>\
          <li><a href="#"><i class="pg-signals"></i> Pusat bantuan</a>\
          </li>\
          <li class="bg-master-lighter">\
            <a href="#" class="clearfix">\
              <span class="pull-left">Logout</span>\
              <span class="pull-right"><i class="pg-power"></i></span>\
            </a>\
          </li>\
        </ul>\
      </div>\
    </div>\
  </div>\
</div>\
');
}
