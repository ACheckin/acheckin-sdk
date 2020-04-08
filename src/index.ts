interface UserInfo {
	id: string;
	name: string;
	picture: string;
	email: string;
	birthday: string;
	gender: "F" | "M";
}

export interface UserPersonalInfo extends UserInfo {
	current_workspace: string;
}

export interface UserWorkspaceInfo extends UserInfo {
	is_owner: boolean;
	is_leader: boolean;
}

export interface DeviceInfo {
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

interface ACheckinSDKOptions {
	use_search_bar?: boolean;
	title?: string;
	default_navigation_id?: string;
}

interface ACheckinNavigation {
	navigation_id: string;
}

export interface Location {
	latitude: number;
	longitude: number;
}

class ACheckinSDK {
	static sdk_ready = false;

	static init(options: ACheckinSDKOptions = {}) {
		if (typeof window.ACheckin.handleSDK !== "function") {
			throw new Error("Bạn phải sử dụng sdk trong ứng dụng ACheckin");
		}

		ACheckinSDK.sdk_ready = true;

		window.ACheckin.handleSDK("init", {
			fields: {
				title: options.title || null,
				use_search_bar: options.use_search_bar || false,
				default_navigation_id: options.default_navigation_id || null
			}
		}).catch();
	}

	static validInitSDK() {
		if (!ACheckinSDK.sdk_ready) {
			throw new Error("SDK chưa được khởi tạo, vui lòng gọi init()");
		}
	}

	/**
	 * Set Header Title
	 * @param title
	 */
	static setHeaderTitle(title: string) {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("setHeaderTitle", {
			fields: {
				title: title
			}
		});
	}

	/**
	 * Set Access Token
	 */
	static getAccessToken() {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getAccessToken");
	}

	/**
	 * Get User Personal Info
	 * @param fields
	 */
	static getUserPersonalInfo(
		fields: Array<keyof UserPersonalInfo>
	): Promise<UserPersonalInfo> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getUserPersonalInfo", {
			fields
		});
	}

	/**
	 * Get Workspace Info
	 * @param fields
	 */
	static getUserWorkspaceInfo(
		fields: Array<keyof UserWorkspaceInfo>
	): Promise<UserWorkspaceInfo> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getUserWorkspaceInfo", {
			fields
		});
	}

	/**
	 * Set Item
	 * @param key
	 * @param value
	 */
	static setItem(key: string, value: string): Promise<boolean> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("setItem", {
			key,
			value
		});
	}

	/**
	 * Get Item
	 * @param key
	 */
	static getItem(key: string): Promise<string> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getItem", {
			key
		});
	}

	/**
	 * Get Device Info
	 * @param fields
	 */
	static getDeviceInfo(fields: Array<keyof DeviceInfo>): Promise<DeviceInfo> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getDeviceInfo", {
			fields
		});
	}

	/**
	 * Read Bar Code
	 */
	static readBarCode(): Promise<string> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("readBarCode");
	}

	/**
	 * Navigation Change
	 * @param callback
	 */
	static addNavigationChangeListener(
		callback: (data: ACheckinNavigation) => void
	): () => void {
		const listenerFn = (data: any) => {
			callback(data.detail);
		};

		window.addEventListener("ACheckin.NavigationChange", listenerFn);

		return () => {
			window.removeEventListener("ACheckin.NavigationChange", listenerFn);
		};
	}

	/**
	 * Shake
	 * @param callback
	 */
	static addShakeEventListener(callback: () => void): () => void {
		const listenerFn = () => {
			callback();
		};

		window.addEventListener("ACheckin.ShakeEvent", listenerFn);

		return () => {
			window.removeEventListener("ACheckin.ShakeEvent", listenerFn);
		};
	}

	/**
	 * Show Bottom Tabs
	 */
	static showBottomTabs(): Promise<boolean> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("showBottomTabs");
	}

	/**
	 * Hide Bottom Tabs
	 */
	static hideBottomTabs(): Promise<boolean> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("hideBottomTabs");
	}

	/**
	 * Is Checkined
	 */
	static isCheckedIn(): Promise<boolean> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("isCheckedIn");
	}

	/**
	 * Get Current location
	 */
	static getCurrentLocation(): Promise<Location> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getCurrentLocation");
	}

	/**
	 * Share current Screen
	 * @param message
	 */
	static shareScreen(message: string) {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("shareScreen", {
			message: message
		});
	}

	/**
	 * Set Local notification
	 * @param options
	 */
	static setLocalNotification(options: {
		title: string;
		body: string;
		schedule_time?: number;
	}) {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("setLocalNotification", {
			title: options.title,
			body: options.body,
			...(options.schedule_time && { schedule_time: options.schedule_time })
		});
	}

	/**
	 * Vibrate
	 */
	static vibrate(): Promise<boolean> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("vibrate");
	}

	/**
	 * Get Current Api Domain
	 */
	static getCurrentDomain(): Promise<string> {
		ACheckinSDK.validInitSDK();

		return window.ACheckin.handleSDK("getCurrentDomain");
	}

	/**
	 * Get Staff Of Leader
	 *
	 * @param offset
	 * @param limit
	 */
	static getStaffOfLeader(
		offset: number,
		limit: number
	): Promise<{
		total: number;
		data: {
			id: string;
			name: string;
			picture: string;
			email: string;
		}[];
	}> {
		ACheckinSDK.validInitSDK();
		return window.ACheckin.handleSDK("getStaffOfLeader", {
			offset,
			limit
		});
	}

	/**
	 * Play Audio
	 * @param url
	 * @param options
	 */
	static playAudio(
		url: string,
		options: { background: boolean }
	): Promise<boolean> {
		ACheckinSDK.validInitSDK();
		return window.ACheckin.handleSDK("playAudio", {
			url,
			options,
		});
	}

	/**
	 * Stop Audio
	 */
	static stopAudio(): Promise<boolean> {
		ACheckinSDK.validInitSDK();
		return window.ACheckin.handleSDK("stopAudio", {});
	}
}

export { ACheckinSDK };
