const config = {
  isOnline: process.env.NODE_ENV === 'production',
  apiMock: true,
  apiUrl: "https://www.quanweibanfan.com"
};
config.apiMock = config.isOnline ? false : config.apiMock;
config.apiUrl = config.isOnline ? "https://www.quanweibanfan.com" : config.apiUrl;
export default config
