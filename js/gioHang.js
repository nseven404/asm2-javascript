// Yêu cầu: lấy giỏ hàng từ localStorage lên
// output: giỏ hàng
function layGioHangTuLocalStorage() {
    var gioHang = new Array();
    // TODO: Truy cập vào local storage để lấy giỏ hàng
    // Bước 1: Lấy json
    var jsonGioHang = localStorage.getItem('gioHang');
    // Bước 2: Chuyển Json thành đối tượng giỏ hàng
    if (jsonGioHang != null) {
        gioHang = JSON.parse(jsonGioHang);
    }
    return gioHang;
}

// Yêu cầu: Thêm sản phẩm vào giỏ hàng
// input: idSanPham, giỏ hàng cũ
// output: giỏ hàng sau khi được thêm sản phẩm
function themSanPhamVaoGioHang(idSanPham, gioHangCu) {
    var gioHangSauKhiDuocThem = gioHangCu;
    // Bước 1: Tạo ra đối tượng item giỏ hàng
    var itemGioHang = TaoDoiTuongItemGioHang(idSanPham, 1);
    // Bước 2: Thêm vào giỏ hàng item mới
    gioHangSauKhiDuocThem.push(itemGioHang);

    return gioHangSauKhiDuocThem;

}

// Yêu cầu: lưu trữ giỏ hàng xuống local storage
// input: gioHang
// output: 
function luuGioHangVaoLocalStorage(gioHang) {
    // Bước 1: Chuyển giỏ hàng thành json
    var jsonGioHang = JSON.stringify(gioHang);
    // Bước 2: Lưu json xuống local storage
    localStorage.setItem('gioHang', jsonGioHang);

}

function TaoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}

function thayDoiSoLuong(id) {
    // Lấy số lượng
    var soLuong = event.target.value;
    if (soLuong == '') {
        return;
    }
    soLuong = parseInt(soLuong);
    if (soLuong < 0) {
        soLuong = 1;
    }
    event.target.value = soLuong;
    var nodechua = event.target.parentElement;
    var nodeSanPham = nodechua.parentElement;

    // Lưu lại số lượng lên gioHang
    if (soLuong > 0) {
        var duLieuGioHang = layDanhSachSanPhamDuoiLocalStorage('gioHang');
        for (var i = 0; i < duLieuGioHang.length; i++) {
            if (duLieuGioHang[i].idSanPham == id) {
                duLieuGioHang[i].soLuong = soLuong;
                break;
            }
        }
        setDanhSachSanPhamXuongLocalStorage("gioHang", duLieuGioHang);
    }

    // Tính tổng tiền sản phẩm
    var nodeTongTien = nodeSanPham.getElementsByClassName('product-line-price')[0];
    var duLieuSanPham = layDanhSachSanPhamDuoiLocalStorage('danhSachSanPham');
    var viTri = duLieuSanPham.findIndex(sp => sp.id == id);
    var giaBan = tinhGiaBan(duLieuSanPham[viTri].giaGoc, duLieuSanPham[viTri].phanTramGiamGia);
    nodeTongTien.innerHTML = themChamVaoSo(giaBan * soLuong) + " ₫";

    tinhTongTien();
}

function tinhTongTien(coupon) {
    var tongTien = 0;
    var duLieuGioHang = layDanhSachSanPhamDuoiLocalStorage('gioHang');
    var duLieuSanPham = layDanhSachSanPhamDuoiLocalStorage('danhSachSanPham');
    for (var i = 0; i < duLieuGioHang.length; i++) {
        var id = duLieuGioHang[i].idSanPham;
        var viTri = duLieuSanPham.findIndex(sp => sp.id == id);
        var giaBan = tinhGiaBan(duLieuSanPham[viTri].giaGoc, duLieuSanPham[viTri].phanTramGiamGia);
        tongTien += giaBan * duLieuGioHang[i].soLuong;
    }
    // cong them tien giao hang
    var nodeChonGiaoHang = document.getElementById('chonGiaoHang');
    var tienGiaoHang = parseInt(nodeChonGiaoHang.value);
    var nodeTongTien = document.getElementById('thanhTien');
    nodeTongTien.innerHTML = themChamVaoSo(tongTien + tienGiaoHang) + " ₫";
}

function tinhGiaBan(giaGoc, phanTramGiamGia) {
    return giaGoc * (100 - phanTramGiamGia) / 100;
}