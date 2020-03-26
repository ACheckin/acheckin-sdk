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
declare class ACheckinSDK {
    static sdk_ready: boolean;
    static init(options?: ACheckinSDKOptions): void;
    static validInitSDK(): void;
    static setHeaderTitle(title: string): Promise<any>;
    static getAccessToken(): Promise<any>;
    static getUserPersonalInfo(fields: Array<keyof UserPersonalInfo>): Promise<UserPersonalInfo>;
    static getUserWorkspaceInfo(fields: Array<keyof UserWorkspaceInfo>): Promise<UserWorkspaceInfo>;
    static setItem(key: string, value: string): Promise<boolean>;
    static getItem(key: string): Promise<string>;
    static getDeviceInfo(fields: Array<keyof DeviceInfo>): Promise<DeviceInfo>;
    static readBarCode(): Promise<string>;
    static addNavigationChangeListener(callback: (data: ACheckinNavigation) => void): () => void;
    static addShakeEventListener(callback: () => void): () => void;
    static showBottomTabs(): Promise<boolean>;
    static hideBottomTabs(): Promise<boolean>;
    static isCheckedIn(): Promise<boolean>;
    static getCurrentLocation(): Promise<Location>;
    static shareScreen(message: string): Promise<any>;
    static setLocalNotification(options: {
        title: string;
        body: string;
        schedule_time?: number;
    }): Promise<any>;
    static vibrate(): Promise<boolean>;
    static getCurrentDomain(): Promise<string>;
    static getStaffOfLeader(offset: number, limit: number): Promise<{
        total: number;
        data: {
            id: string;
            name: string;
            picture: string;
            email: string;
        }[];
    }>;
}
export { ACheckinSDK };
