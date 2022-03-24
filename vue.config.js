// 참고 : https://doozi0316.tistory.com/entry/Vuejs-Spring-Boot-MySQL-MyBatis-%EB%A7%9B%EC%A7%91-%EC%A7%80%EB%8F%84-%EB%A7%8C%EB%93%A4%EA%B8%B01-Spring-Boot-Vuejs-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0
module.exports = {
  outputDir: "../src/main/resources/static",  // build target dir
  devServer: {
    //port: 8080,
    //overlay: false,
    proxy: 'http://localhost:8081'
  }
};