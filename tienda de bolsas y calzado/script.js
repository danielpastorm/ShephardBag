document.getElementById("social-button").addEventListener("click", function () {
    var container = document.getElementById("social-container");
    if (container.style.display === "block") {
        container.style.display = "none";
    } else {
        container.style.display = "block";
    }
});




// Seleccionamos el botón de "Agregar al carrito" y el contador del carrito
const botonAgregar = document.querySelector('.product-add-to-cart');
const contadorCarrito = document.querySelector('.cart-counter');

// Inicializamos el contador del carrito en cero
let cantidadProductos = 0;

// Agregamos un evento "click" al botón de "Agregar al carrito"
botonAgregar.addEventListener('click', () => {
    // Aumentamos el contador del carrito y actualizamos su contenido
    cantidadProductos+=1;
    contadorCarrito.innerHTML = cantidadProductos;
    alert('El producto ha sido agregado al carrito');
});



$(function () {

    var goToCartIcon = function($addTocartBtn){
      var $cartIcon = $(".my-cart-icon");
      var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
      $addTocartBtn.prepend($image);
      var position = $cartIcon.position();
      $image.animate({
        top: position.top,
        left: position.left
      }, 500 , "linear", function() {
        $image.remove();
      });
    }
  
    $('.my-cart-btn').myCart({
      classCartIcon: 'my-cart-icon',
      classCartBadge: 'my-cart-badge',
      affixCartIcon: true,
      checkoutCart: function(products) {
        $.each(products, function(){
          console.log(this);
        });
      },
      clickOnAddToCart: function($addTocart){
        goToCartIcon($addTocart);
      },
      getDiscountPrice: function(products) {
        var total = 0;
        $.each(products, function(){
          total += this.quantity * this.price;
        });
        return total * 0.5;
      }
    });
  
  });