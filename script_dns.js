let namelist2 = [];
let conflist = [];
let pricelist2 = [];
let imglist = [];
let hreflist = [];
let give_items = () => {
    //give namelist
    let namelist = document.querySelectorAll(".catalog-product__name");
    for (let i = 0; i < namelist.length; i++) {
        namelist2[i] = namelist[i].innerHTML.split('>')[1].split('<')[0].split('[')[0].split('\\')[0];
        conflist[i] = namelist[i].innerHTML.split('>')[1].split('<')[0].split('[')[1].split(']')[0];
    }
    console.log(namelist2);
    console.log(conflist);
    //give price
    let pricelist = document.querySelectorAll(".product-buy__price");

    for (let i = 0; i < pricelist.length; i++) {
        pricelist2[i] = pricelist[i].innerHTML.split('<')[0];
    }
    console.log(pricelist2);
    //give img
    let imglist1 = document.querySelectorAll(".catalog-product__image-link");
    for (let i = 0; i < imglist1.length; i++) {
        imglist[i] = imglist1[i].innerHTML.split('src="')[1].split(' ')[0].split('"')[0];
    }
    console.log(imglist);
    let href = document.querySelectorAll(".catalog-product");
    for (let i = 0; i < href.length; i++) {
        hreflist[i] = href[i].innerHTML.split('href="')[1].split('"')[0];
    }
    console.log(hreflist);
}
let upload_items = () => {
    //document.querySelector(".js-chatik-container").innerHTML = NULL;
    //document.querySelector(".ui-input-search").innerHTML = NULL;
    //document.querySelector(".logo-container").innerHTML = "<a id='header-logo' class='logo' href='/'></a>";
    document.querySelector(".buttons").innerHTML = '<a class="ui-link compare-link" href="/compare/"><span class="compare-link__badge compare-link__badge_empty"></span><span class="compare-link__icon"></span><span class="compare-link__lbl">Сравнить</span></a><a class="ui-link wishlist-link" href="/wishlist/"><span class="wishlist-link__badge wishlist-link__badge_empty"></span><span class="wishlist-link__icon"></span><span class="wishlist-link__lbl">Избранное</span></a><a class="ui-link cart-link" href="https://www.dns-shop.ru/cart/" data-commerce-target="CART" data-role="cart-modal-position"><span class="cart-link__badge cart-link__badge_empty"></span><span class="cart-link__icon"></span><span class="cart-link__lbl">Корзина</span></a>'
    let item = '<style>.header__user-menu{display: none}.button{background-color: #35a638;border: none;color: white;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;border-radius: 5px; padding: 3%  30% 3% 30%;}.button:hover{background-color:#267429;}.button:active {background-color:#1b521c;}.item{padding-top:5px; border: 2px solid rgb(0,0,0,0.4)}.info{padding-top:5px;padding-bottom:5px;display: inline-block; width:80%}.item{border-radius: 10%; rgba(34, 60, 80, 0.2);text-align: center;margin:5px;}.item img{width: 80%;border-radius: 10px; margin-top:10px;}</style><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><div class="row">';
    item += '<style> a{color:white;} </style>'
    for (let i = 0; i < namelist2.length; i++) {
        item += '<div class="col s12 m6 l4">';
        item += '<div class="item"><img src="'+imglist[i]+'">';
        item += '<div class="info">';
        item += '<div class="row name"><b>'+ namelist2[i] +'</b></div>';
        item += '<div class="row conf">'+ conflist[i]+'</div>';
        item += '<div class="row price">' + pricelist2[i]+'</div>'; 
        item += '<div class="row button"><a href="'+ hreflist[i] +'">Выбрать</a></div>';
        item += '</div></div></div>';
    }
    item += '</div>';
    document.querySelector(".products-page").innerHTML = item;

}
give_items();
upload_items();