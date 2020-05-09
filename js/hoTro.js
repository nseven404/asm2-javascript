//  Tạo ra một ID duy nhất
function taoID() {
    // Lấy thời gian hiện tại theo milisecond: hiện tại - 0:0:0 1/1/1970 -> milisecond
    var thoiGianHienTai = new Date().getTime();
    var id = Math.random().toString().substr(2, 10) + '_' + String(thoiGianHienTai);
    return id;
}

function layDanhSachSanPhamDuoiLocalStorage(key) {
    var jsonDanhSachSanPham = localStorage.getItem(key);

    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}

function setDanhSachSanPhamXuongLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}