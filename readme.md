# ACheckin SDK

## Mục lục

## 📋 Yêu cầu

## 🛠 Cài đặt

Chúng tôi hỗ trợ nhà phát triển có thể tạo mới một ứng dụng chạy trên nền tảng ACheckin với nhiều cách khác nhau. Hãy lựa chọn một phương án mà bạn yêu thích.

### Bắt đầu một dự án mới (khuyên dùng)

Bạn có thể khởi tạo một ứng dụng mới hoàn toàn bằng công cụ ACheckin CLI do chúng tôi cung cấp.

Chú ý: ứng dụng được viết trên nền ReactJS.

1. #### Cài đặt CLI:

   `npm install acheckin`

2. #### Tạo dự án mới:

   `acheckin init MyMiniApp`<br>
   `acheckin init MyMiniApp --bundle_id com.example.miniapp --template ts --ws`<br>

   ##### Cú pháp:

   - `--template [js|ts|html]` tạo project theo template javascript react (defaul) | typescript react | html
   - `--bundle_id [your_bundle_id]` cài đặt bundle ID của app
   - `--ws` cài đặt kiểu app là workspace

3. #### Chúc mừng, bạn đã khởi tạo thành công!
   Nhập lệnh `cd MyMiniApp && acheckin run` và dùng ACheckin trên điện thoại quét mã QR được tạo trên Terminal.

### Thêm ACheckin SDK vào dự án NPM / Yarn-supported có sẵn

ACheckin SDK có thể được cài đặt như một thư viện cho các dự án dùng npm / yarn.

Bạn có thể cài đặt bằng cú pháp

- `npm install acheckin-sdk` hoặc
- `yarn add acheckin-sdk`

2. #### Chạy ứng dụng trên ACheckin

- tạo mã QR code với định dạng `acheckin://app_dev?h=[your_ip_address]&p=[port]` và quét mã này bằng ACheckin
- sử dụng [ACheckin CLI](#cai-dat-cli) với cú pháp `acheckin qr`

### Thêm ACheckin SDK như một thư viện JS
