

// =============> CART COMPONENT<==================
function CartPage() {
    return `
            <div id="cartPage">
            <div class="banner">
                <div class="banner__header">
                    <h1>view your CART products</h1>
                </div>
                <div class="banner__img-box">
                    <img src="https://source.unsplash.com/random" alt="">
                </div>
            </div>
            <div class="cartList__box">
                <div class = "cartPage__product-header">
                    <div class= "cartPage__product-title">PRODUCT</div>
                    <div class = "cartPage__product-price">PRICE</div>
                    <div class = "cartPage__product-quantity">QUANTITY</div>
                    <div class = "cartPage__product-total">TOTAL</div>
                </div>
                <div class="product-box">
                </div>

            </div>

            <div class="cartPage-footer">
                <div class = "cartPage__Subtotal">
                    <h3 class="cartPage__Subtotal-text">Subtotal:</h3>
                    <div class="cartPage__Subtotal-number">

                    </div>
                </div>
                <div class="cartPage__Checkout">
                    <span class="cartPage__Checkout-text">CHECK OUT</span>
                </div>
            </div>

            </div>

    
    `;
}

function CartPageEmpty() {
    return `    <div class="cartList__Empty">
                    <div class="empty__logo">
                        <i class="fas fa-shopping-bag"></i>
                
                    </div>
                    <h2>YOUR CART IS EMPTY.</h2>
                    <p>You don't have any products in the cart yet.</p>
                    
                    <p>You will find a lot of products on our "Shop" page.</p>

                    <button onclick = " window.location.hash = '#order'">MY ORDER</button>
                    <button onclick = " window.location.hash = '#shop'">RETURN TO SHOP</button>
                </div>`;
}

function ProductItemCartModel(product) {
    return `
        <li class="modal__cart-product-item">
            <div class="modal__cart-imgbox">
                <img class="modal__cart-img" src="${product.img}" alt="">
            </div>
            <div class="modal__cart-item-infor">
                <h3 class="modal__cart-item-name">${product.name}</h3>
                <span class="modal__cart-item-price">${formatMoney(product.sale, '$')}</span>
                <div class="modal__cart-item-input">
                    <button class="cart__item-decrement"  data-id = "${product.id}">-</button>
                    <input type="number" min="1" max="9999" step="1" value="${product.quantity}" class="cart_item-input" data-id = "${product.id}" inputmode="numeric">
                    <button class="cart__item-increment" data-id = "${product.id}">+</button>
                </div>
                <div class="modal__cart-delete-icon deleteIcon">
                    <i class="far fa-trash-alt deleteIcon" data-id = "${product.id}"></i>
                </div>
            </div>
        </li>
    `;
}

function ProductItemCartPage(product) {
    return `
        <div class="cartPage__product">
            <div class="cartPage__product-item">
                <div class="cartPage__product-imgBox">
                    <img class="cartPage__product-img" src="${product.img}" alt="">
                </div>

                <div class="cartPage__product-item-infor">
                    <h3 class="cartPage__product-name">
                        ${product.name}
                    </h3>
                
                    <div class="modal__cart-delete-icon deleteIcon">
                    <i class="far fa-trash-alt deleteIcon" data-id = "${product.id}"></i>
                    </div>
                </div>
            </div>
            <div class="cartPage__product-item-price">
                <span class="cartPage__product-cost">${formatMoney(product.sale, '$')}</span>
            </div>
            <div class="cartPage__item-input">                           
                <div class="modal__cart-item-input">
                    <button class="cart__item-decrement"  data-id = "${product.id}">-</button>
                    <input type="number" min="1" max="9999" step="1" value="${product.quantity}" class="cart_item-input" data-id = "${product.id}"  inputmode="numeric">
                    <button class="cart__item-increment" data-id = "${product.id}">+</button>
                </div>
            </div>                             
            <div class = "cartPage__product-total">
                <span class="cartPage__product-total-cost">${formatMoney(product.sale * product.quantity, '$')}</span>
            </div>
        </div>
    `;
}
// =============================================



// =============> FUNCTION <==================
function getProductInCart() {
    return JSON.parse(localStorage.getItem('productsInShoppingCart'));
}

function updateProductInCart(productInCart) {
    localStorage.setItem('productsInShoppingCart', JSON.stringify(productInCart));
    renderProductCart.CartModel();
    renderProductCart.CartPage();
    renderComponentNavbar.amountCart();
}

function productTotalPrice() {
    let productsInCart = getProductInCart();
    let sumPrice = 0;
    productsInCart.forEach((product) => {
        sumPrice += product.sale * product.quantity;
    });
    return sumPrice;
}

function AddProductInCart(product, inputQuantity) {
    let productToCart = {
        id: product.id,
        name: product.name,
        category: product.category,
        img: product.imgList[0],
        quantity: parseInt(inputQuantity.value),
        sale: +product.sale,
    };

    let productsInCart = getProductInCart();

    let isExist = false;
    for (let productInCart of productsInCart) {
        if (productInCart.id == productToCart.id) {
            isExist = true;
            productInCart.quantity += productToCart.quantity; //1
            // productInCart.price = productInCart.basePrice * productInCart.quantity;
        }
    }

    if (!isExist) {
        productsInCart.push(productToCart);
    }
    renderToastAddToCart.start()
    updateProductInCart(productsInCart);
}





// =============================================

if(!getProductInCart())
localStorage.setItem('productsInShoppingCart',JSON.stringify([]))



// =============> RENDER <==================
const renderProductCart = {
    CartModel() {
        let productsInCart = getProductInCart();

        if (productsInCart.length <= 0) {
            $('.modal__cart-footer').style.display = 'none';
            $('.modal__cart-product-box').innerHTML = `
                <div class = "modal__cart-empty">
                    <i class="fas fa-shopping-cart"></i>
                    <h4 class="modal__cart-empty-text">Your shopping cart is empty</h4>
              </div>
              `
            $('.modal__cart-subtotal-all').innerHTML = '';
            return;
        }

        let productlist = productsInCart.map((product) => {
            return ProductItemCartModel(product);
        });

        $('.modal__cart-product-box').innerHTML = productlist.join('');
        $('.modal__cart-footer').style.display = 'block';
        $('.modal__cart-subtotal-all').innerHTML =  formatMoney(productTotalPrice(), '$');
    },

    CartPage() {
        if($('#cartPage .product-box')) {
            let productsInCart = getProductInCart();

            if (productsInCart.length <= 0) {
                $('.cartPage__product-header').style.display = 'none';
                $('#cartPage .cartPage-footer').style.display = 'none';
                $('#cartPage .product-box').innerHTML = CartPageEmpty();
                $('.cartPage__Subtotal-number').innerHTML = '';
                return;
            }

            let productlist = productsInCart.map((product) => {
                return ProductItemCartPage(product);
            });

            $('#cartPage .product-box').innerHTML = productlist.join('');
            $('#cartPage .cartPage-footer').style.display = 'flex';
            $('.cartPage__Subtotal-number').innerHTML = formatMoney(productTotalPrice(), '$');
        }
    },
};

const renderCartPage = {
    start() {
        loading();
        $('.btn-exist').click();
        if(!$('#app')) renderApp.start(); // b??n zmain - render.js
        $('#app').innerHTML = CartPage();
        renderProductCart.CartPage();
        eventCart.btnCartPage();
        eventCart.btnCheckoutCartPage();
    },
};
// =============================================






// =============> EVENT <==================
const eventCart = {
    btnCart(e) {
        let isPlus = e.target.classList.contains('cart__item-increment'); // g??n d???u + b???ng n??i x???y ra s??? ki???n m?? c?? class l?? cart__item-increment
        let isMinus = e.target.classList.contains('cart__item-decrement');
        let isDelete = e.target.classList.contains('deleteIcon');
        let cartItemInput = $$('.cart_item-input');   
        let productsInCart = getProductInCart();

        if (isPlus || isMinus) {
            let Input, newValue, value, max;

            for (let i = 0; i < productsInCart.length; i++) {
                if (productsInCart[i].id == e.target.dataset.id) {
                    Input = cartItemInput[i];
                    max = Input.max;
                    value = Input.value;

                    if (isPlus) {
                        newValue = parseInt(value) + 1;
                        if (newValue <= max) {
                            Input.value = newValue;
                            productsInCart[i].quantity = parseInt(Input.value);
                        }
                    } else if (isMinus) {
                       
                        newValue = parseInt(value) - 1;
                        Input.value = newValue;
                        productsInCart[i].quantity = parseInt(Input.value);
                    }

                    // productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].quantity;
                }

                if (productsInCart[i].quantity < 1) {
                    productsInCart.splice(i, 1);
                }
            }

            if (newValue <= max) {
                updateProductInCart(productsInCart);
            }
        }
        if (isDelete) {
            for (let i = 0; i < productsInCart.length; i++) {
                if (productsInCart[i].id == e.target.dataset.id) {
                    productsInCart.splice(i, 1);
                }
            }
            updateProductInCart(productsInCart);
        }
    },

    inputOnBlur() {
        let productsInCart = getProductInCart();
        let cartItemInput = $$('.cart_item-input');

        cartItemInput.forEach((input) => {
            input.onblur = () => {

                if (Number(input.value) <= Number(input.max)) {
                    productsInCart.forEach((product) => {
                      
                        if (product.id == input.dataset.id) {
                            product.quantity = Number(input.value);
                            // product.price = product.basePrice * product.quantity;
                        }

                    });
                }

                updateProductInCart(productsInCart);
            };
        });
    },

    btnCartModal() {
        $('.modal__cart-product-box').addEventListener('click', (e) => {
            this.btnCart(e); 
            this.inputOnBlur(); 
        });

        
    },

    btnViewCartModal() {
        $('.modal__cart-view-cart').onclick = () => {
            // renderCartPage.start();
                window.location.hash = "#cart";
            //????? h??m render ??? zmain render
        };
    },

    btnCartPage() {
        $('#cartPage .product-box').addEventListener('click', (e) => {
            this.btnCart(e);
            this.inputOnBlur();
        });
    },

    btnCheckoutCartPage () {
        $('.cartPage__Checkout').addEventListener('click',(e) => {
            let productsInCarts = getProductInCart();
            let Bill = {
        
                id: BillModel.getAll().length + 1,
                username: JSON.parse(localStorage.getItem('userCurrent')).username,
                products: productsInCarts,
                subtotal : productTotalPrice(),
                created_at: Date.now(),
                status : "PENDING"
            }

            BillModel.insertBill(Bill);
            updateProductInCart([]);

            $('.modal').classList.add('active')
            $('.modal__noti').classList.add('success')
            $('.modal__noti input').focus()
            $('.modal-noti__disc.success').innerText = "B???n ???? ?????t h??ng th??nh c??ng"
            window.scrollTo(0, 0);
            modalEvent.btnNoti();
        })
    },

    init() {
        eventCart.btnCartModal()
        eventCart.btnViewCartModal()
    }
};

// =============================================



// ???????c g???i ??? zmain / render.js / renderApp
// renderProductCart.CartModel();
// eventCart.init(); 



//s??? ki???n chung cho home detail shop:
function AddToCart() {
    let inputQuantities = $$('.inputQuantity');
    $$('.addToCart').forEach((item, index) => {
        item.onclick = () => {
            if(!chekLogin) {
                $('.modal').classList.add('active')
                $('.modal__noti').classList.add('error')
                $('.modal-noti__disc.error').innerText = "Vui l??ng ????ng nh???p !"
                modalEvent.btnNoti('checkLogin');
                return;
            } 

            let inputQuantity = inputQuantities[index];
            let id = item.dataset.id;
           
            let product = ProductModel.getAll().filter((product) => product.id == id && product.id == inputQuantity.dataset.id)[0];

            AddProductInCart(product, inputQuantity);

        };
    });
}
