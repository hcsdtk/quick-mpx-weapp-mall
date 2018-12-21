const config = {
  isOnline: process.env.NODE_ENV === 'production',
  apiUrl: "https://www.easy-mock.com/mock/5c1c5ab16fedb679d1b94aa3/quick-mpx-weapp-mall-mock",
  httpCode: {
    success: 200
  }
};


config.apiUrl = config.isOnline ? "https://www.quanweibanfan.com" : config.apiUrl; //不准修改

export default config
