function kiemTraFormValidateCacInputDeTrong() {
    var hopLe = true;

    var danhSachNodeInputKhongDeTrong = document.querySelectorAll('input[khongDeTrong]');
    for (var i = 0; i < danhSachNodeInputKhongDeTrong.length; i++) {
        var nodeInputKhongDeTrong = danhSachNodeInputKhongDeTrong[i];
        // Lấy dữ liệu trong node Input
        var giaTri = nodeInputKhongDeTrong.value;
        // Truy xuất tới node hiển thị lỗi
        var idNodeInput = nodeInputKhongDeTrong.getAttribute('id');
        var nodeHienThiLoi = truyXuatNodeHienThiLoiTheoInputId(idNodeInput);
        // Kiểm tra giá trị, nếu giá trị để trống thì hiển thị lên nodeHienThiLoi
        if (giaTri == null || giaTri.length == 0) {
            hopLe = false;
            var noiDungLoi = layNoiDungHienThiLoiTheoNodeInput(nodeInputKhongDeTrong);
            nodeHienThiLoi.innerHTML = noiDungLoi;
        }
    }


    return hopLe;
}
// Truy xuất node hiển thị lỗi theo inputId
function truyXuatNodeHienThiLoiTheoInputId(inputId) {
    var nodeHienThiLoi = document.querySelector('label.error[for="' + inputId + '"]');
    nodeHienThiLoi.innerHTML = '';
    return nodeHienThiLoi;
}

function layNoiDungHienThiLoiTheoNodeInput(nodeInput) {
    var noiDungLoi = "Không được để trống";
    if (nodeInput.hasAttribute('noiDungDeTrong')) {
        noiDungLoi = nodeInput.getAttribute('noiDungDeTrong');
    }
    return noiDungLoi;
}

function kiemTraFormValidateInputPhanTramGiamGia() {
    var hopLe = true;
    var danhSachNodeInputPhanTramGiamGia = document.querySelectorAll('input[khongNhoHon0VaLonHon100]');
    for (var i = 0; i < danhSachNodeInputPhanTramGiamGia.length; i++) {
        var nodeInputPhanTramGiamGia = danhSachNodeInputPhanTramGiamGia[i];
        // Lấy dữ liệu trong node Input
        var giaTri = nodeInputPhanTramGiamGia.value;
        // Truy xuất tới node hiển thị lỗi
        var idNodeInput = nodeInputPhanTramGiamGia.getAttribute('id');
        // console.log('id node input là: ' + idNodeInput);
        var nodeHienThiLoi = truyXuatNodeHienThiLoiTheoInputIdPhanTram(idNodeInput);
        // Kiểm tra giá trị, nếu giá trị để trống thì hiển thị lên nodeHienThiLoi
        if (giaTri == null || giaTri.length == 0 || giaTri < 0 || giaTri > 100) {
            hopLe = false;
            var noiDungLoi = layNoiDungHienThiLoiTheoNodeInputPhanTram(nodeInputPhanTramGiamGia);
            nodeHienThiLoi.innerHTML = noiDungLoi;
        }
    }


    return hopLe;
}
// Truy xuất node hiển thị lỗi theo inputId
function truyXuatNodeHienThiLoiTheoInputIdPhanTram(inputId) {
    var nodeHienThiLoi = document.querySelector('label.error[for="' + inputId + '"]');
    nodeHienThiLoi.innerHTML = '';
    return nodeHienThiLoi;
}

function layNoiDungHienThiLoiTheoNodeInputPhanTram(nodeInput) {
    var noiDungLoi = "Không được để trống và nhỏ hơn 0 và không lớn hơn 100";
    if (nodeInput.hasAttribute('noiDungPhanTramGiamGia')) {
        noiDungLoi = nodeInput.getAttribute('noiDungPhanTramGiamGia');
    }
    return noiDungLoi;
}


// Kiểm tra form email

function kiemTraFormValidateCacInputFormEmail() {
    var hopLe = true;
    var danhSachNodeInputKhongDeTrong = document.querySelectorAll('input[saiDinhDangEmail]');
    for (var i = 0; i < danhSachNodeInputKhongDeTrong.length; i++) {
        var nodeInputKhongDeTrong = danhSachNodeInputKhongDeTrong[i];
        // Lấy dữ liệu trong node Input
        var giaTri = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$\b/g;
        giaTri = nodeInputKhongDeTrong.value;
        // Truy xuất tới node hiển thị lỗi
        var idNodeInput = nodeInputKhongDeTrong.getAttribute('id');
        var nodeHienThiLoi = truyXuatNodeHienThiLoiTheoInputIdEmail(idNodeInput);
        // Kiểm tra giá trị, nếu giá trị để trống thì hiển thị lên nodeHienThiLoi
        if (giaTri == false) {
            hopLe = false;
            var noiDungLoi = layNoiDungHienThiLoiTheoNodeInputEmail(nodeInputKhongDeTrong);
            nodeHienThiLoi.innerHTML = noiDungLoi;
        }
    }


    return hopLe;
}
// Truy xuất node hiển thị lỗi theo inputId
function truyXuatNodeHienThiLoiTheoInputIdEmail(inputId) {
    var nodeHienThiLoi = document.querySelector('label.error[for="' + inputId + '"]');
    nodeHienThiLoi.innerHTML = '';
    return nodeHienThiLoi;
}

function layNoiDungHienThiLoiTheoNodeInputEmail(nodeInput) {
    var noiDungLoi = "Sai định dạng email";
    if (nodeInput.hasAttribute('noiDungDeTrong')) {
        noiDungLoi = nodeInput.getAttribute('noiDungDeTrong');
    }
    return noiDungLoi;
}


// Kiểm tra số điện thoại
function kiemTraFormValidateInputDienThoai() {
    var hopLe = true;
    var danhSachNodeInputPhanTramGiamGia = document.querySelectorAll('input[saiDinhDangSoDienThoai]');
    for (var i = 0; i < danhSachNodeInputPhanTramGiamGia.length; i++) {
        var nodeInputDienThoai = danhSachNodeInputPhanTramGiamGia[i];
        // Lấy dữ liệu trong node Input
        var giaTri = nodeInputDienThoai.value;
        // Truy xuất tới node hiển thị lỗi
        var idNodeInput = nodeInputDienThoai.getAttribute('id');
        // console.log('id node input là: ' + idNodeInput);
        var nodeHienThiLoi = truyXuatNodeHienThiLoiTheoInputIdDienThoai(idNodeInput);
        // Kiểm tra giá trị, nếu giá trị để trống thì hiển thị lên nodeHienThiLoi
        if (giaTri == null || giaTri.length < 10 || giaTri == /((09|03|07|08|05)+([0-9]{8})\b)/g) {
            hopLe = false;
            var noiDungLoi = layNoiDungHienThiLoiTheoNodeInputDienThoai(nodeInputDienThoai);
            nodeHienThiLoi.innerHTML = noiDungLoi;
        }
    }


    return hopLe;
}
// Truy xuất node hiển thị lỗi theo inputId
function truyXuatNodeHienThiLoiTheoInputIdDienThoai(inputId) {
    var nodeHienThiLoi = document.querySelector('label.error[for="' + inputId + '"]');
    nodeHienThiLoi.innerHTML = '';
    return nodeHienThiLoi;
}

function layNoiDungHienThiLoiTheoNodeInputDienThoai(nodeInput) {
    var noiDungLoi = "Không được để trống và phải dưới 10 kí tự";
    if (nodeInput.hasAttribute('noiDungSoDienThoai')) {
        noiDungLoi = nodeInput.getAttribute('noiDungSoDienThoai');
    }
    return noiDungLoi;
}