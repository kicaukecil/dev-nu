

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
                        <span class="bold">Data kepegawaian</span>\
                        <span class="fs-12 m-l-10">Belum diverivikasi</span>\
                      </a>\
                      <span class="pull-right time">2 menit yang lalu</span>\
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
                        <span class="bold">Surat kepemilikan</span>\
                        <span class="fs-12 m-l-10">Belum diverivikasi</span>\
                      </a>\
                      <span class="pull-right time">kemarin</span>\
                    </div>\
                    <!-- START Notification Item Right Side-->\
                    <div class="option">\
                      <a href="#" class="mark"></a>\
                    </div>\
                    <!-- END Notification Item Right Side-->\
                  </div>\
                  <!-- END Notification Item-->\
                  <!-- START Notification Item-->\
                  <!-- END Notification Item-->\
                </div>\
                <!-- END Notification Body-->\
                <!-- START Notification Footer-->\
                <div class="notification-footer text-center">\
                  <a href="activity.html" class="">Lihat semua notifikasi</a>\
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
      <div class="dropdown pull-right p-r-10 p-t-10 fs-16 font-heading">\
        <button class="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
          <span class="semi-bold">Nama</span> <span class="text-master">User</span>\
        </button>\
        <ul class="dropdown-menu profile-dropdown" role="menu">\
        <li><a href="activity.html"><i class="pg-clock"></i> Aktivitas</a></li>\
        <li><a href="users.html"><i class="pg-clock"></i> Kepengurusan</a></li>\
          <li><a href="pengaturan_akun.html"><i class="pg-settings_small"></i> Pengaturan</a>\
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
