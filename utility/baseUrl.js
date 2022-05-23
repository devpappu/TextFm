
const baseUrl = () => {
    if (process.env.REACT_APP_ENVIRONMENT !== 'production') {
        return "https://pakbettv-ss.how.com.bd/api" ;
      }
      else{
        return "http://pakbettv-serverside.test/api" ;
      }
};

export default baseUrl;
