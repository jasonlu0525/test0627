import{k as o,a as i}from"./index-as_EUU8_.js";var l={BASE_URL:"/test0627/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:d,VITE_PATH:r}=l,p=o("cartStore",{stste:()=>({carts:[],cartslength:0,addCartLoadingItem:"",cartQtyLoading:"",delCart:""}),actions:{getCarts(){this.isLoading=!0;const t=`${d}/api/${r}/cart`;i.get(t).then(a=>{this.carts=a.data.data,this.cartslength=a.data.data.carts.length}).catch(()=>{this.carts=[],this.cartslength=0}),setTimeout(()=>{this.isLoading=!1},1e3)},addToCart(t,a=1){this.isLoading=!0,this.addCartLoading=t;let e=`${d}/api/${r}/cart`,s="post",h={product_id:t,qty:a};i[s](e,{data:h}).then(c=>{this.addCartLoading="",c.data.success&&this.getCarts()}).catch(()=>{this.addCartLoading=""})},cartChangeQty(t,a=1){this.cartQtyLoading=t.id;let e=`${d}/api/${r}/cart/${t.id}`,s="put",h={product_id:t.product.id,qty:a};i[s](e,{data:h}).then(c=>{this.cartQtyLoading="",c.data.success&&this.getCarts()}).catch(()=>{this.cartQtyLoading=""})},delCartItem(t){this.delCart=t;let a=`${d}/api/${r}/cart/${t}`;i["delete"](a).then(s=>{this.delCart="",s.data.success&&this.getCarts()})},delAllCart(){this.delCart="delAll";let t=`${d}/api/${r}/carts`;i["delete"](t).then(e=>{this.getCarts(),this.delCart="",e.data.success&&this.getCarts()})}}});export{p as c};
