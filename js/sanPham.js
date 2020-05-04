function taoDoiTuongSanPham(hinhAnhGoc, hinhAnhPhu1, hinhAnhPhu2, hinhAnhPhu3, ten, giaGoc, phanTramGiamGia, id) {
    var sanPham = new Object();
    sanPham.hinhAnhGoc = hinhAnhGoc;
    sanPham.hinhAnhPhu1 = hinhAnhPhu1;
    sanPham.hinhAnhPhu2 = hinhAnhPhu2;
    sanPham.hinhAnhPhu3 = hinhAnhPhu3;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;

    // TẠO ĐỊNH DANH CHO ĐỐI TƯỢNG
    if (id == null) {
        sanPham.id = taoID();
    } else {
        sanPham.id = id;
    }

    sanPham.tinhGiaBan = function() {
        var giaBan = this.giaGoc * (100 - this.phanTramGiamGia) / 100;
        return giaBan;
    }

    sanPham.toJson = function() {
            var json = JSON.stringify(this);
            return json;
        }
        //     // Từ json chuyển thành một đối tượng đầy đủ các phương thức
        //     // input: json
        //     // output: đối tượng đầy đủ
    sanPham.fromJSON = function(json) {
        var doiTuongDayDu = new Object();
        // Bước 1: Chuyển từ json thành đối tượng
        var doiTuong = JSON.parse(json);
        // Bước 2: Chuyển đối tượng thành đối tượng đầy đủ phương thức
        var doiTuongDayDu = taoDoiTuongSanPham(doiTuong.hinhAnhGoc, doiTuong.hinhAnhPhu1, doiTuong.hinhAnhPhu2, doiTuong.hinhAnhPhu3, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia);
        return doiTuongDayDu;
    }

    sanPham.fromJSONs = function(jsonDanhSachSanPham) {
        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
        for (var i = 0; i < danhSachSanPham.length; i++) {
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = taoDoiTuongSanPham(sanPham.hinhAnhGoc, sanPham.hinhAnhPhu1, sanPham.hinhAnhPhu2, sanPham.hinhAnhPhu3, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.id);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;
    }

    return sanPham;
}

// Mục tiêu: Dựa vào ID của sản phẩm để lấy ra được đối tượng sản phẩm (nằm trong danh sách lưu trữ local storage)
// Input: ID sản phẩm
// Output: Đối tượng sản phẩm
function laySanPhamTheoId(idSanPham) {
    var sanPham = new Object();
    // Bước 1: Lấy toàn bộ sản phẩm trong localStorage ra
    var danhSachSanPham = layDanhSachSanPhamDuoiLocalStorage();
    // console.log(danhSachSanPham);
    // Bước 2: Duyệt danh sách sản phẩm để tìm ra sản phẩm nào có ID sản phẩm
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        console.log(sanPhamHienTai);
        if (sanPhamHienTai.id == idSanPham) {
            sanPham = sanPhamHienTai;
        }
    }
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnhGoc, sanPham.hinhAnhPhu1, sanPham.hinhAnhPhu2, sanPham.hinhAnhPhu3, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.id);
    return sanPham;
}

function layDanhSachSanPhamDuoiLocalStorage() {
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');

    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}

function setDanhSachSanPhamXuongLocalStorage() {
    var jsonDanhSachSanPham = localStorage.setItem('danhSachSanPham');

    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}