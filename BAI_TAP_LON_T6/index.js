document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    const userIcon = document.querySelector('.user a');
    const cartIcon = document.querySelector('.cart a');

// thanh tìm kiếm
searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    alert(`Đang tìm kiếm: ${query}`);
});

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm.');
    }
});

userIcon.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = userIcon.href;
});

cartIcon.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = cartIcon.href;
});
// ô quản trị
userIcon.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Đang chuyển hướng đến trang quản trị');
    window.location.href = userIcon.href;
});
// giỏ hàng
cartIcon.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Đang chuyển hướng đến trang sản phẩm');
    window.location.href = cartIcon.href;
});

});
