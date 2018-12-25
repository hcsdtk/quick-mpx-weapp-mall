const config = {
  isOnline: process.env.NODE_ENV === 'production',
  apiUrl: "https://plan.haosesalad.com",
  httpCode: {
    success: 0
  }
};


config.apiUrl = config.isOnline ? "https://plan.haosesalad.com" : config.apiUrl; //不准修改

export default config
