# ACheckin SDK

<a href="https://www.npmjs.org/package/acheckin-sdk">
<img src="https://badge.fury.io/js/acheckin-sdk.svg" alt="Current npm package version." />
</a>

Giới thiệu ACheckin SDK

## Mục lục

- [Yêu cầu](#-yêu-cầu)
- [Cài đặt](#-cài-đặt)
- [Chạy trên ACheckin](#-khởi-chạy-ứng-dụng)
- [Phát triển ứng dụng](#-phát-triển-ứng-dụng)
- [Phát hành](#-phát-hành-ứng-dụng)
- [API Reference](#-api-reference)

## 📋 Yêu cầu

- Ứng dụng ACheckin: https://acheckin.vn/
- NodeJS & NPM (khuyên dùng) hoặc
- dự án Web có thể chạy độc lập không cần cài đặt lên server

## 🛠 Cài đặt

Chúng tôi hỗ trợ nhà phát triển có thể tạo mới một ứng dụng chạy trên nền tảng ACheckin với nhiều cách khác nhau. Hãy lựa chọn một phương án mà bạn yêu thích.

### 🚀 Bắt đầu một dự án mới (khuyên dùng)

Bạn có thể khởi tạo một ứng dụng mới hoàn toàn bằng công cụ ACheckin CLI do chúng tôi cung cấp.

Chú ý: ứng dụng được viết trên nền ReactJS.

1. #### Cài đặt CLI

   `npm install acheckin -global`

2. #### Tạo dự án mới

   `acheckin init MyMiniApp`<br>
   `acheckin init MyMiniApp --bundle_id com.example.miniapp --template ts --ws`<br>

   ##### Cú pháp

   - `--template [js|ts|html]` tạo project theo template javascript react (defaul) | typescript react | html
   - `--bundle_id [your_bundle_id]` cài đặt bundle ID của app
   - `--ws` cài đặt kiểu app là workspace

3. #### Chúc mừng, bạn đã khởi tạo thành công!
   Nhập lệnh `cd MyMiniApp && acheckin run` và dùng ACheckin trên điện thoại quét mã QR được tạo trên Terminal.

### 📚 Thêm ACheckin SDK vào dự án NPM / Yarn-supported có sẵn

ACheckin SDK có thể được cài đặt như một thư viện cho các dự án dùng npm / yarn.

Bạn có thể cài đặt bằng cú pháp

- `npm install acheckin-sdk` hoặc
- `yarn add acheckin-sdk`

Sau đó, tạo file `config.json` ở thư mục public của dự án mà bạn có thể xem với url `http://your-ip-address/config.json`

```json
{
	"app_name": "tên-app-của-bạn",
	"app_id": "acheckin.miniapp.template",
	"package_name": "acheckin.miniapp.template",
	"app_flashscreen": "acheckin.png",
	"display": "fullscreen",
	"app_type": "personal", // hoặc "workspace"
	"developer_email": "dev@acheckin.vn",
	"developer_name": "Developer",
	"version": "0.0.1",
	"main": "index.html",
	"use_scroll": false,
	"permissions": ["basic_info"]
}
```

### 🔖 Thêm ACheckin SDK như một thư viện JS

Sẽ cập nhật sớm

## 📱 Khởi chạy ứng dụng

### Đối với ứng dụng tạo bằng ACheckin CLI

Thật đơn giản, hãy chạy cú pháp `acheckin run` và dùng ACheckin quét mã QR.

### Với các ứng dụng khác

- chạy webserver môi trường dev
- tạo mã QR code với định dạng `acheckin://app_dev?h=[your_ip_address]&p=[port]` và quét mã này bằng ACheckin
- sử dụng [ACheckin CLI](#cài-đặt-cli) với cú pháp `acheckin qr`

## ⌨️ Phát triển ứng dụng

- Import ACheckin SDK vào dự án

```javascript
import { ACheckinSDK } from "acheckin-sdk";
```

- Khởi tạo SDK

```javascript
window.asyncACheckinInit = async () => {
	ACheckinSDK.init();
};
```

- Lấy các thông tin người dùng

```javascript
try {
	// Access token
	const accessToken = await ACheckinSDK.getAccessToken();

	// lấy thông tin người dùng (public)
	const userInfo = await ACheckinSDK.getUserPersonalInfo([
		"id",
		"email",
		"name"
	]);
	// lấy thông tin người dùng (trong workspace)
	const userInfo = await ACheckinSDK.getUserWorkspaceInfo([
		"id",
		"email",
		"name"
	]);
} catch (e) {}
```

Chúc mừng, bạn đã lấy được thông tin cơ bản của người dùng.

Hãy [Quét mã QR](#-khởi-chạy-ứng-dụng) trên ACheckin nhé!

## 🎉 Phát hành ứng dụng

Để phát hành ứng dụng trên ACheckin, bạn cần đăng kí một tài khoản tại [ACheckin Connect](https://connect.acheckin.io).

### Với các ứng dụng dùng ACheckin CLI

- Đăng nhập với CLI `acheckin login`

- Build và gửi bản build `acheckin build`

### Với các ứng dụng NPM / Yarn-supported

- Build ứng dụng `yarn build` hoặc `npm build`
- Nén folder `build` và upload file zip lên ACheckin Connect

### Với các ứng dụng khác

- Nén toàn bộ file chạy ứng dụng và upload file zip lên ACheckin Connect

## 📖 API Reference

- `setHeadererTitle(string)` -> `Promise<any>` - đặt title cho header của ứng dụng
- `getAccessToken()` -> `Promise<string>` - lấy accesstoken
- `getUserPersonalInfo(array)` -> `Promise<UserInfo>` - lấy thông tin user public (personal)

```typescript
interface UserInfo {
	id: string;
	name: string;
	picture: string;
	email: string;
	birthday: string;
	gender: "F" | "M";
}
```

- `getUserWorkspaceInfo(array)` -> `Promise<UserWorkspaceInfo>` - lấy thông tin user trong workspace

```typescript
interface UserWorkspaceInfo {
	id: string;
	name: string;
	picture: string;
	email: string;
	birthday: string;
	gender: "F" | "M";
	is_owner: boolean;
	is_leader: boolean;
	current_workspace: string;
}
```

- `setItem(key: string, value: string)` -> `Promise<boolean>` - lưu string vào bộ nhớ theo key
- `getItem(key: string)` -> `Promise<string>` - lấy value theo key

- `getDeviceInfo(Array<keyof DeviceInfo>)` -> `Promise<DeviceInfo>` - thông tin thiết bị

```typescript
interface DeviceInfo {
	device_id: string;
	device_name: string;
	device_platform: string;
	bundle_id: string;
	device_os_version: string;
	is_tablet: boolean;
	ip_address: string;
	battery_level: number;
	battery_changing: boolean;
	device_mac_address: string;
	device_manufacturer: string;
	device_brand: string;
	wifi_name: string;
	is_wifi: boolean;
	has_network: string;
	is_mobile_data: boolean;
}
```

- `readBarCode()` -> `Promise<string>` - đọc QR / bar code

- `addShakeEventListener(callback)` - xử lý event lắc thiết bị

- `showBottomTabs` - hiện thanh công cụ ở dưới màn hình
- `hideBottomTabs` - ẩn thanh công cụ ở dưới màn hình

- `isCheckedIn` -> `Promise<boolean>` - kiểm tra user đã checkin vào workspace hay chưa

- `getCurrentLocation` -> `Promise<Location>` - lấy vị trí hiện tại của user

```typescript
interface Location {
	latitude: number;
	longitude: number;
}
```

- `shareScreen(string)` - chụp màn hình và chia sẻ với message tùy chọn

- `setLocalNotification({title, body, schedule_time: number})` - tạo và lên lịch hiển thị local notification

- `vibrate` - rung thiết bị

- `getStaffOfLeader({offset, limit})` -> `Promise<{total, data: {id, name, picture, email}}>` - lấy danh sách nhân viên
