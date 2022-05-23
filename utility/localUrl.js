
const localUrl = () => {
   const host = window.location.host ; 
   if(host.includes("localhost")){
      return "http://"+window.location.host; 
   }
   return "https://"+window.location.host; 
};

export default localUrl;