let newsletter=document.getElementById("mc_embed_signup");if(newsletter){let e=newsletter.querySelector("#mc-embedded-subscribe");function validateNewsletterEmail(e){const t=e.value.trim();return""!==t&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function verifyPlataformasNewsletter(e){const t=e.querySelectorAll(".block__newsletter__label .block__newsletter__checkbox");for(let e=0;e<t.length;e++)if(t[e].checked)return!0;return!1}function verifyTermosNewsletter(e){const t=e.querySelectorAll(".block__newsletter__terms .block__newsletter__checkbox");for(let e=0;e<t.length;e++)if(t[e].checked)return!0;return!1}function showHideNewsletterMessages(e){e.style.display="block",e.style.marginTop="16px",setTimeout((function(){e.style.display="none",e.style.marginTop=0}),3e3)}e.type="button",newsletter.querySelectorAll(".block__newsletter_desc").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("active")}))})),e.addEventListener("click",(function(){const t=newsletter.querySelector("#mce-EMAIL"),s=newsletter.querySelector("#responseEmail"),n=newsletter.querySelector("#responseTerms"),r=newsletter.querySelector("#responsePlatforms");if(!validateNewsletterEmail(t))return e.type="button",void showHideNewsletterMessages(s);verifyPlataformasNewsletter(newsletter)?(r.style.display="none",e.type="submit",verifyTermosNewsletter(newsletter)?n.style.display="none":(showHideNewsletterMessages(n),e.type="button")):(e.type="button",showHideNewsletterMessages(r))}))}const SRC_MC_VALIDATE="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";let btnMcSubscribe=document.getElementById("mc-embedded-subscribe")||!1,inpMcEmail=document.getElementById("mce-EMAIL")||!1;function mcValidate(){if(!document.querySelectorAll(`[src='${SRC_MC_VALIDATE}']`).length){let e=document.createElement("script");e.type="text/javascript",e.src=SRC_MC_VALIDATE;let t=document.getElementsByTagName("script")[0];t.insertAdjacentElement("beforebegin",e);let s=document.createElement("script");s.type="text/javascript",s.textContent="(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);",t.insertAdjacentElement("beforebegin",s)}}inpMcEmail&&btnMcSubscribe&&(btnMcSubscribe.addEventListener("mouseover",mcValidate),inpMcEmail.addEventListener("focus",mcValidate));