const AddToCart=(product)=> {
   
      alert('Product Added', product)    

      console.log('product',product)

      let cart = [];
            
          if(localStorage.getItem('cart')){
              cart = JSON.parse(localStorage.getItem('cart'));
          }

          let items = cart.find(item => item.product_id === product.id);
          
          if (items) {
              items.quantity++
          }
          else{
                cart.push({
                name : product.product_title, 
                product_id : product.id, 
                // image : product.image,
                price: product.price,
                sale_price: product.sale_price,
                quantity: 1
          });

          }

      localStorage.setItem('cart', JSON.stringify(cart));
        
    }
   
  export default AddToCart;