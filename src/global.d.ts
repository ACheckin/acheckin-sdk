declare interface Window {
  ACheckin: {
    navigations: object;
    handleSDK(type: string, options?: any): Promise<any>;
  }
}

declare var window: Window;