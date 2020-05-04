function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    var html = "";
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnhGoc, sanPham.hinhAnhPhu1, sanPham.hinhAnhPhu2, sanPham.hinhAnhPhu3, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.id);
    // html = html + "<div class='sanphamnew msp'>";
    // html = html + "    <div class='hinhanhsanpham'>";
    // html = html + "<a href='product.html'><img src='" + sanPham.hinhAnh + "'></a> ";
    // html = html + "</div>";
    // html = html + "<a href='#muangay'><h1 class='sanphamten'>" + sanPham.ten + "</h1></a>";

    // if (sanPham.phanTramGiamGia > 0) {
    //     html = html + "    <p class='sanphamgiagoc'>" + themChamVaoSo(sanPham.giaGoc) + ' ₫' + "</p>";
    // }
    // html = html + "    <p class='giaban'>" + themChamVaoSo(sanPham.tinhGiaBan()) + ' ₫' + "</p>";
    // html = html + "<div class='mbuttonsp'>";
    // html = html + '<button type="button" onclick="onCLickDuaVaoYeuThich(\'' + sanPham.id + '\')" class="abcde"><a href="#yeuthich"><img src="images/love.png" alt="muangay"></a></button>';
    // html = html + "</div>";
    // html = html + "<div class='button-gio-hang'>";
    // html = html + '<button type="button" onclick="onCLickDuaVaoGioiHang(\'' + sanPham.id + '\')" class="abcde"><a href="#thanhcong"><img src="images/buy.png" alt="muangay"></a></button>';
    // html = html + "</div>";
    // html = html + "</div>";
    html = html + '<div class="product">';
    html = html + '<div class="info-large">';
    html = html + '<h4>' + sanPham.ten + '</h4>';
    html = html + '<div class="sku">';
    html = html + 'ID SẢN PHẨM: <strong>' + sanPham.id + '</strong>';
    html = html + '</div>';

    html = html + '<div class="price-big">';
    html = html + '<p class="price-gia">' + themChamVaoSo(sanPham.tinhGiaBan()) + ' ₫' + '</p>';
    if (sanPham.phanTramGiamGia > 0) {
        html = html + '<span>' + themChamVaoSo(sanPham.giaGoc) + ' ₫</span>';
    };
    html = html + '</div>';

    html = html + '<h3>COLORS</h3>';
    html = html + '<div class="colors-large">';
    html = html + '<ul>';
    html = html + '<li><a href="" style="background:#222"><span></span></a></li>';
    html = html + '<li><a href="" style="background:#6e8cd5"><span></span></a></li>';
    html = html + '<li><a href="" style="background:#f56060"><span></span></a></li>';
    html = html + '<li><a href="" style="background:#44c28d"><span></span></a></li>';
    html = html + '</ul>';
    html = html + '</div>';

    html = html + '<h3>SIZE</h3>';
    html = html + '<div class="sizes-large">';
    html = html + '<span>XS </span>';
    html = html + '<span>S </span>';
    html = html + '<span>M </span>';
    html = html + '<span>L </span>';
    html = html + '<span>XL </span>';
    html = html + '<span>XXL </span>';
    html = html + '</div>';

    html = html + '<button onclick="onCLickDuaVaoGioiHang(\'' + sanPham.id + '\')" class="add-cart-large">Thêm Vào Giỏ Hàng</button>';

    html = html + '</div>';
    html = html + '<div class="make3D">';
    html = html + '<div class="product-front">';
    html = html + '<div class="shadow"></div>';
    html = html + "<img src='" + sanPham.hinhAnhGoc + "' alt=''/>";
    html = html + '<div class="image_overlay"></div>';
    html = html + '<div onclick="onCLickDuaVaoGioiHang(\'' + sanPham.id + '\')" class="add_to_cart">Thêm vào giỏ hàng</div>';
    html = html + '<div class="view_gallery">Xem bộ sưu tập</div>';
    html = html + '<div class="stats">';
    html = html + '<div class="stats-container">';
    html = html + '<span class="product_price">' + themChamVaoSo(sanPham.tinhGiaBan()) + ' ₫ </span>';
    html = html + '<span class="product_name">' + sanPham.ten + ' </span>';
    html = html + '<p>Sản phẩm mùa hè</p>';
    html = html + '<div class="product-options">';
    html = html + '<strong>SIZES</strong>';
    html = html + '<span>XS, S, M, L, XL, XXL</span>';
    // html = html + '<select>';
    // html = html + '<option value="XS">XS</option>';
    // html = html + '<option value="S">S</option>';
    // html = html + '<option value="M">M</option>';
    // html = html + '<option value="L">L</option>';
    // html = html + '<option value="XL">XL</option>';
    // html = html + '<option value="XXL">XXL</option>';
    // html = html + '</select>';

    html = html + '<strong>COLORS</strong>';
    html = html + '<div class="colors">';
    html = html + '<div class="c-blue"><span></span></div>';
    html = html + '<div class="c-red"><span></span></div>';
    html = html + '<div class="c-white"><span></span></div>';
    html = html + '<div class="c-green"><span></span></div>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '</div>';

    html = html + '<div class="product-back">';
    html = html + '<div class="shadow"></div>';
    html = html + '<div class="carousel">';
    html = html + '<ul class="carousel-container">';
    html = html + "<li><img src='" + sanPham.hinhAnhPhu1 + "' alt='' /></li>";
    html = html + "<li><img src='" + sanPham.hinhAnhPhu2 + "' alt='' /></li>";
    html = html + "<li><img src='" + sanPham.hinhAnhPhu3 + "' alt='' /></li>";
    html = html + '</ul>';
    html = html + '<div class="arrows-perspective">';
    html = html + '<div class="carouselPrev">';
    html = html + '<div class="y"></div>';
    html = html + '<div class="x"></div>';
    html = html + '</div>';
    html = html + '<div class="carouselNext">';
    html = html + '<div class="y"></div>';
    html = html + '<div class="x"></div>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '<div class="flip-back">';
    html = html + '<div class="cy"></div>';
    html = html + '<div class="cx"></div>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '</div>';
    return html;
}


function danhSachSanPhamSangHTML(danhSachSanPham) {
    var htmlTong = "";
    for (var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var html = chuyenDoiTuongSanPhamThanhHTML(sanPham);
        htmlTong = htmlTong + html;
    }
    return htmlTong;
}

function themChamVaoSo(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}