export {};

declare global {
  interface Window {
    refreshTokenTimer: number | NodeJS.Timeout;
  }
}
