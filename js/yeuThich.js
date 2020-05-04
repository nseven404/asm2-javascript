// Yêu cầu: lấy sản phẩm yêu thích từ localStorage lên
// output: sản phẩm yêu thích
function layYeuThichTuLocalStorage() {
    var yeuThich = new Array();
    // TODO: Truy cập vào local storage để lấy giỏ hàng
    // Bước 1: Lấy json
    var jsonYeuThich = localStorage.getItem('yeuThich');
    // Bước 2: Chuyển Json thành đối tượng giỏ hàng
    if (jsonYeuThich != null) {
        yeuThich = JSON.parse(jsonYeuThich);
    }
    return yeuThich;
}

// Yêu cầu: Thêm sản phẩm vào sản phẩm yêu thích
// input: idSanPham, sản phẩm yêu thích cũ
// output: sản phẩm yêu thích sau khi được thêm sản phẩm
function themSanPhamVaoYeuThich(idSanPham, yeuThichCu) {
    var yeuThichSauKhiDuocThem = yeuThichCu;
    // Bước 1: Tạo ra đối tượng item yêu thích
    var itemYeuThich = TaoDoiTuongItemGioHang(idSanPham, 1);
    // Bước 2: Thêm vào yêu thích item mới
    yeuThichSauKhiDuocThem.push(itemYeuThich);

    return yeuThichSauKhiDuocThem;

}

// Yêu cầu: lưu trữ giỏ hàng xuống local storage
// input: yeuThich
// output: 
function luuYeuThichVaoLocalStorage(yeuThich) {
    // Bước 1: Chuyển yêu thích thành json
    var jsonYeuThich = JSON.stringify(yeuThich);
    // Bước 2: Lưu json xuống local storage
    localStorage.setItem('yeuThich', jsonYeuThich);

}

function TaoDoiTuongItemYeuThich(idSanPham, soLuong) {
    var itemYeuThich = new Object();
    itemYeuThich.idSanPham = idSanPham;
    itemYeuThich.soLuong = soLuong;
    return itemYeuThich;
}