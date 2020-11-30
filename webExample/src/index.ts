import * as smartype from "../../smartype-dist/web/smartype"
import {product_info} from "../products/product-info"

class MyApp {
  begin() {
    var api = new smartype.SmartypeApi()
    var message;

    document.addEventListener('click', function(e){           
      // Click listener that tracks which products a customer views
      if (e.target.classList[0] === 'product-image') {   
        var product = product_info[e.target.id]         
        message = api.viewProduct(product.product_name, product.product_price, product.product_category, product.product_availability)                      
      }
    })
  }

  receive(message) {
    // receive the serialized object and send to other SDKs/consumers  
  }
}

var app = new MyApp()
app.begin()