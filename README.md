# TuHocG – bản lưu trữ tĩnh của tuhocg.weebly.com

Trang gốc trên Weebly đã ngừng hoạt động; thư mục này là bản dựng lại từ snapshot
Internet Archive ngày 16/09/2026, đã gỡ toàn bộ wrapper của Wayback Machine và Weebly,
chỉ giữ nội dung 7 trang kèm ảnh. Không cần build, chỉ là HTML/CSS/JS tĩnh.

## Cấu trúc

```
index.html                                  Giới Thiệu (trang chủ)
s7917-d7909ng.html                          Sử Dụng
taacutec-gi7843.html                        Tác Giả
t7843i-grammar.html                         Tải Grammar
video.html                                  Video
gi7885ng.html                               Giọng
h4327899ng-d7851n-cagravei-2727863t.html    Hướng Dẫn Cài Đặt
css/style.css   js/slideshow.js   img/      tài nguyên
.nojekyll                                   tắt Jekyll trên GitHub Pages
```

Tên file giữ nguyên slug của Weebly để các link cũ trên mạng vẫn trỏ đúng trang.

## Ảnh

Thư mục `img/` có 50 ảnh, là toàn bộ số ảnh Internet Archive còn lưu được.
45 ảnh còn lại chưa từng được archive nên các thẻ `<img>` trỏ tới chúng đã được gỡ khỏi trang
(chủ yếu là ảnh trong slideshow và ảnh minh hoạ ở trang Hướng Dẫn Cài Đặt).

## Đưa lên GitHub Pages

```bash
git init
git add .
git commit -m "Re-host tuhocg.weebly.com"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

Trên GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root)**.
Vài phút sau trang sẽ có tại `https://<user>.github.io/<repo>/`.
Nếu dùng repo tên `<user>.github.io` thì trang nằm ngay ở gốc domain.

## Những gì đã lược bỏ so với bản gốc

- Thanh công cụ, script `wombat` và prefix `/web/2026…/` của Wayback Machine.
- Header/footer, ô tìm kiếm, "Powered by Weebly", script theo dõi của Weebly.
- Biểu mẫu liên hệ Weebly (có reCAPTCHA, không chạy được trên host tĩnh);
  phần chữ hướng dẫn liên hệ vẫn giữ nguyên.
- Slideshow của Weebly được thay bằng `js/slideshow.js` (tự chuyển ảnh 5 giây, có chấm điều hướng),
  dùng đúng danh sách ảnh gốc.
- 4 trang không nằm trong danh sách crawl (Góp ý, Báo Lỗi, Lý Thông, Thánh Ca Chữ Lớn PDF,
  Cập nhật nóng) đã bỏ khỏi menu; link tới chúng trong nội dung tạm trỏ về Internet Archive.
