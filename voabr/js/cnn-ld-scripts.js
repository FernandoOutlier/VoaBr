document.addEventListener("DOMContentLoaded",(function(){const e=new URLSearchParams,t=document.querySelector(".cnn_audience_interaction button.like"),n=document.querySelector(".cnn_audience_interaction button.deslike");function o(t,n,o=null){return e.append("action","cnnbrasil_dv_LD_post_insert"),e.append("_ajax_nonce",cnnbrasil_dv_ld_ajax.ajax_nonce),e.append("post_id",t),e.append("post_action",n),e.append("post_check_update",o),e}function i(e,t,n=null){localStorage.getItem(t)||localStorage.setItem(t,JSON.stringify([]));let o=JSON.parse(localStorage.getItem(t));o="remove"===n?function(e,t){let n=[...e];const o=n.findIndex((e=>e===t));return-1!==o&&n.splice(o,1),n}(o,e.toString()):function(e,t){let n=[...e];return-1===n.findIndex((e=>e===t))&&n.push(t),n}(o,e.toString()),localStorage.setItem(t,JSON.stringify(o))}function s(){let e=document.querySelector(".audience_buttons");if(e){e=e.getAttribute("data-id");let t=l(e,!0);!0===t.like?(document.querySelector(".audience_buttons .like").classList.add("active"),document.querySelector(".audience_buttons .deslike").classList.remove("active")):!0===t.deslike&&(document.querySelector(".audience_buttons .deslike").classList.add("active"),document.querySelector(".audience_buttons .like").classList.remove("active")),console.log("@#@#@#@#@",t)}}function l(e,t=null){localStorage.getItem("posts_LD_likes")||localStorage.setItem("posts_LD_likes",JSON.stringify([])),localStorage.getItem("posts_LD_deslikes")||localStorage.setItem("posts_LD_deslikes",JSON.stringify([]));let n=a("posts_LD_likes",e),o=a("posts_LD_deslikes",e);return t?{like:n,deslike:o}:!1===n&&!1===o}function a(e,t){return-1!==JSON.parse(localStorage.getItem(e)).findIndex((e=>e===t))}function c(){fetch(cnnbrasil_dv_ld_ajax.ajax_url,{method:"POST",credentials:"same-origin",headers:new Headers,body:e}).then((e=>{s()})).catch((e=>console.log("ERRO ",e)))}t&&t.addEventListener("click",(function(e){let t=e.target.parentNode.getAttribute("data-id"),n=!0===l(t)?null:"deslike",s=l(t,!0);i(t,"posts_LD_likes"),i(t,"posts_LD_deslikes","remove"),o(t,"like",n),!0!==s.like&&c()})),n&&n.addEventListener("click",(function(e){let t=e.target.parentNode.getAttribute("data-id"),n=!0===l(t)?null:"like",s=l(t,!0);i(t,"posts_LD_deslikes"),i(t,"posts_LD_likes","remove"),o(t,"deslike",n),!0!==s.deslike&&c()})),s()}));