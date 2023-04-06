"use strict";(()=>{gsap.registerPlugin(ScrollTrigger);$(".section_key-visual").each(function(){let e=$(this),s=$(".key-visual_sticky-element");gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"center center",scrub:1}}).fromTo(s,{width:"60em",height:"40em"},{width:"100vw",height:"100vh"})});function E(){$(".alignment-cycle_height").each(function(){let e=$(this).find(".track").outerWidth();$(this).height(e)})}E();window.addEventListener("resize",function(){E()});document.addEventListener("DOMContentLoaded",function(){let e=gsap.timeline({delay:1});e.to(".loader_progress-bar",{width:"100%",duration:4,ease:CustomEase.create("custom","M0,0 C0,0.037 0.182,0.09 0.204,0.12 0.266,0.204 0.264,0.244 0.3,0.3 0.386,0.433 0.563,0.498 0.598,0.532 0.611,0.545 0.669,0.737 0.71,0.77 0.82,0.858 0.696,1 1,1  "),onUpdate:function(){let s=(e.progress()*100).toFixed(2),c=(4-e.progress()*4).toFixed(2);document.querySelector(".loader_progress-bar").style.width=`${s}%`,document.querySelector(".preloader_countdown").textContent=c}})});var A=document.querySelectorAll("[nav-link='scramble']");A.forEach(e=>{let s=e.textContent;e.style.display="inline-flex",e.style.width=`${e.offsetWidth}px`,e.addEventListener("mouseenter",()=>{gsap.to(e,{scrambleText:{chars:s,text:s,speed:1,delimiter:"",revealDelay:.5},duration:.5})})});$(".section_header").each(function(){let e=$(this),s=$(".header_background-overlay"),c=$("[header-text-animation='opacity']"),l=gsap.timeline({scrollTrigger:{trigger:e,start:"top center",end:"bottom-=10%",scrub:1}}),p=gsap.timeline({scrollTrigger:{trigger:e,start:"top center",end:"bottom-=20%",scrub:1}});l.to(c,{delay:1.5,opacity:0,duration:1}),p.to(s,{backgroundColor:"rgba(0, 0, 0, 1)",ease:"power1.inOut",duration:1})});$(".section_intro").each(function(){let e=$(this),s=$(".intro_left-grid, .intro_grid-top-right-first, .intro_right-grid-bottom"),c=$("[text-animation='opacity']",this),l=$(".intro_grid-image",this),p=gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"top+=5%",scrub:1}});p.fromTo(s,{"border-right-color":"black","border-top-color":"black"},{"border-right-color":"#302e2e","border-top-color":"#302e2e",duration:1,ease:"power2.inOut"}),p.fromTo(c,{opacity:0,y:30},{opacity:1,y:0,duration:1,ease:"power2.inOut"},"-=0.5"),gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"top+=5%",scrub:1}}).fromTo(l,{opacity:0},{opacity:1,duration:1,ease:"power2.inOut"},.5);let t=gsap.timeline({scrollTrigger:{trigger:e,start:"center+=5%",end:"bottom bottom",scrub:1,ease:"power2.inOut",reverse:!0}});t.to(s,{"border-right-color":"black","border-top-color":"black",duration:1},.05),t.to(c,{opacity:0,duration:1},.05),t.to(l,{opacity:0,duration:1},.05)});gsap.registerPlugin(ScrollTrigger);var x=$(".section_manifesto"),S=$(".fs-globe-container"),O=$("[text-animation='opacity']"),w=gsap.timeline({scrollTrigger:{trigger:x,start:"top top-=5%",end:"center center",scrub:1}});w.fromTo(S,{x:"-50%"},{x:"0%",duration:2,ease:"power2.out"});w.fromTo(O,{opacity:0,y:30},{opacity:1,y:0,duration:1,ease:"power2.inOut"},"-=0.5");w.fromTo(".manifesto_left-grid-wrapper",{"border-right-color":"black"},{"border-right-color":"#302e2e",duration:1,ease:"power2.inOut"},0);var f=gsap.timeline({scrollTrigger:{trigger:x,start:"center+=5%",end:"bottom bottom",scrub:1,ease:"power2.inOut",toggleActions:"play none reverse none"}});f.to(".manifesto_left-grid-wrapper",{"border-right-color":"black",duration:1},0);f.to(O,{opacity:0,duration:1},0);f.fromTo(".manifesto_left-grid-wrapper",{duration:2,ease:"power2.out"},0);f.to(".fs-globe-container",{x:"-50%",duration:2,ease:"power2.inOut"},.05);(function(){$(".section_key-visual").each(function(){let t=$(this),r=$(".key-visual_left-grid, .key-visual_right-grid"),o=$(".key-visual_sticky-image"),i=$("[key-visual-text='opacity']",this),n=gsap.timeline({scrollTrigger:{trigger:t,start:"top top-=70%",end:"center center+=15%",scrub:1}});n.fromTo(r,{opacity:0,"border-right-color":"black","border-top-color":"black"},{opacity:1,"border-right-color":"#302e2e","border-top-color":"#302e2e",ease:"power2.easeIn"}),n.fromTo(i,{opacity:0,y:30},{opacity:1,y:0,duration:4,ease:"power2.easeIn"}),gsap.timeline({scrollTrigger:{trigger:t,start:"center center-=15%",end:"bottom bottom-=15%",scrub:1,ease:"power2.easeOut",reverse:!0}}).add([gsap.to(r,{opacity:0,"border-right-color":"black","border-top-color":"black",duration:1}),gsap.to(i,{opacity:0,duration:1}),gsap.to(o,{opacity:0,ease:"power1.inOut",duration:1,delay:.5})])});function e(t,r,o,i,n,a=0){$(t).each(function(h){let m=$(this),C=m.text(),y=!1,I=20,T=0;function _(d,b){if(T<I){T++;let k="";for(let v=0;v<b.length;v++)k+=String.fromCharCode(b.charCodeAt(v)+Math.floor(Math.random()*3)-1)+" ";d.text(k),requestAnimationFrame(()=>_(d,b))}else T=0,d.text(b)}return gsap.timeline({scrollTrigger:{trigger:r,start:o,end:i,scrub:1,onUpdate:d=>{d.progress===1&&!y?(y=!0,gsap.delayedCall(h*a,()=>{_(m,n)})):d.progress===0&&y&&(y=!1,gsap.delayedCall(h*a,()=>{_(m,C)}))}}})})}function s(t,r,o,i){$(t).each(function(a){let u=$(this);a!==0&&u.css("opacity",0),gsap.to(u,{opacity:a===0?0:1,scrollTrigger:{trigger:r,start:o,end:i,scrub:1,onEnter:()=>{a!==0&&u.css("opacity",0)}}})})}function c(t,r,o,i){let n=$(t),a=r.height(),u="top+="+a*o+"px",h="top+="+a*i+"px";n.each(function(){let m=$(this);gsap.fromTo(m,{opacity:0},{opacity:1,scrollTrigger:{trigger:r,start:"top top",end:u,scrub:1}}),gsap.fromTo(m,{opacity:1},{opacity:0,scrollTrigger:{trigger:r,start:h,end:"bottom bottom",scrub:1}})})}$(".section_alignment-cycle").each(function(){let t=$(this),r=t.height(),o="top+="+r*.33+"px",i="top+="+r*.66+"px";e("[scramble-heading='services']",t,o,o,"Training your own AI models for own use",.2),e("[scramble-pre-heading='services']",t,o,o,"SCOPE"),e("[scramble-text='services']",t,i,i,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique.",.2),e("[scramble-heading='services']",t,i,i,"BUILD YOUR OWN AI MODELS AND CHATGPT intern",.2),e("[scramble-pre-heading='services']",t,i,i,"BUILD"),s("[scramble-image-1='services'], [scramble-image-2='services']",t,o,o),s("[scramble-image-2='services'], [scramble-image-3='services']",t,i,i),$(document).ready(function(){$(".alignment-cycle_right-grid, .alignment-cycle_left-grid").css("opacity",0)}),c(".alignment-cycle_right-grid, .alignment-cycle_left-grid",t,.1,.95)});function l(t,r,o,i){let n=$(t);gsap.fromTo(n,{width:"0%"},{width:"100%",scrollTrigger:{trigger:r,start:"top+="+r.height()*o+"px",end:"top+="+r.height()*i+"px",scrub:1,ease:"power1.inOut"}})}$(".section_alignment-cycle").each(function(){let t=$(this);l(".progress-bar_inside-first",t,.1,.33),l(".progress-bar_inside-second",t,.33,.66),l(".progress-bar_inside-third",t,.66,.9)}),$(".section_about-us").each(function(){let t=$(this),o=t.height()*.15;gsap.fromTo(".about-us_background-image",{opacity:0},{opacity:1,scrollTrigger:{trigger:t,start:"top top",end:"+="+o,scrub:1}}),gsap.fromTo(".about-us_character-choose, [about-us='ani']",{opacity:0},{opacity:1,scrollTrigger:{trigger:t,start:"top top-=33%",end:"+="+o,scrub:1}}),gsap.fromTo(".about-us_image-wrapper",{opacity:0},{opacity:1,scrollTrigger:{trigger:t,start:"top top-=50%",end:"+="+o,scrub:1}}),gsap.to(".section_about-us",{opacity:0,scrollTrigger:{trigger:t,start:"bottom-=20% bottom-=1%",end:"bottom bottom",scrub:1}})});let p={first:"voidwalker",second:"second",third:"third",fourth:"fourth"},g="first";$("[character]").on("click",function(){let t=$(this).attr("character");if(t!==g){let r=g;g=t,gsap.to(".about-us_image-"+p[r],{y:"100%",duration:.5}),gsap.fromTo(".about-us_image-"+p[g],{y:"100%"},{y:"0%",duration:.5}),gsap.to(".about-us_right-wrapper-char-"+r,{opacity:0,display:"none",duration:.25}),gsap.fromTo(".about-us_right-wrapper-char-"+g,{opacity:0,display:"none"},{opacity:1,display:"block",duration:.25}),$("[character]").css("filter","grayscale(100%)"),$(this).css("filter","grayscale(0%)")}}),gsap.set($("[character]"),{css:{filter:"grayscale(100%)"}}),gsap.set($('[character="first"]'),{css:{filter:"grayscale(0%)"}}),$("[character]").hover(function(){$(this).attr("character")!==g&&gsap.to($(this),{duration:.2,css:{filter:"grayscale(0%)"}})},function(){$(this).attr("character")!==g&&gsap.to($(this),{duration:.2,css:{filter:"grayscale(100%)"}})}),$(".section_logos-sticky").each(function(){let t=$(this);gsap.fromTo(".section_logos-sticky",{opacity:0},{opacity:1,scrollTrigger:{trigger:t,start:"top top",end:"top top-=80%",scrub:1}}),gsap.fromTo(".section_logos-sticky",{opacity:1},{opacity:0,scrollTrigger:{trigger:t,start:"top top-=80%",end:"top top-=100%",scrub:1}})}),gsap.set(".section_logos-sticky",{opacity:0}),$(".section_projects-sticky").each(function(){let t=$(this);gsap.fromTo(".section_projects-sticky",{opacity:0},{opacity:1,scrollTrigger:{trigger:t,start:"top top",end:"top top-=80%",scrub:1}}),gsap.fromTo(".section_projects-sticky",{opacity:1},{opacity:0,scrollTrigger:{trigger:t,start:"top top-=80%",end:"top top-=100%",scrub:1}})}),gsap.set(".section_projects-sticky",{opacity:0}),$(".section_cta").each(function(){let t=$(this);gsap.set(".cta_background-image",{opacity:0}),gsap.set(".cta_component",{opacity:0}),gsap.fromTo(".cta_background-image",{opacity:0},{opacity:1,scrollTrigger:{trigger:t,start:"top top",end:"top top-=80%",scrub:1}}),gsap.fromTo(".cta_component",{opacity:0},{opacity:1,scrollTrigger:{trigger:t,start:"top top-=50%",end:"top top-=80%",scrub:1}})})})();})();
