"use strict";(()=>{gsap.registerPlugin(ScrollTrigger);$(".section_key-visual").each(function(){let e=$(this),t=$(".key-visual_sticky-element");gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"center center",scrub:1}}).fromTo(t,{width:"60em",height:"40em"},{width:"100vw",height:"100vh"})});function s(){$(".alignment-cycle_height").each(function(){let e=$(this).find(".track").outerWidth();$(this).height(e)})}s();window.addEventListener("resize",function(){s()});document.addEventListener("DOMContentLoaded",function(){let e=gsap.timeline({delay:1});e.to(".loader_progress-bar",{width:"100%",duration:4,ease:CustomEase.create("custom","M0,0 C0,0.037 0.182,0.09 0.204,0.12 0.266,0.204 0.264,0.244 0.3,0.3 0.386,0.433 0.563,0.498 0.598,0.532 0.611,0.545 0.669,0.737 0.71,0.77 0.82,0.858 0.696,1 1,1  "),onUpdate:function(){let t=(e.progress()*100).toFixed(2),r=(4-e.progress()*4).toFixed(2);document.querySelector(".loader_progress-bar").style.width=`${t}%`,document.querySelector(".preloader_countdown").textContent=r}})});var d=document.querySelectorAll("[nav-link='scramble']");d.forEach(e=>{let t=e.textContent;e.style.display="inline-flex",e.style.width=`${e.offsetWidth}px`,e.addEventListener("mouseenter",()=>{gsap.to(e,{scrambleText:{chars:t,text:t,speed:1,delimiter:"",revealDelay:.5},duration:.5})})});$(".section_header").each(function(){let e=$(this),t=$(".header_background-overlay"),r=$("[header-text-animation='opacity']"),o=gsap.timeline({scrollTrigger:{trigger:e,start:"top center",end:"bottom-=10%",scrub:1}}),i=gsap.timeline({scrollTrigger:{trigger:e,start:"top center",end:"bottom-=20%",scrub:1}});o.to(r,{delay:1.5,opacity:0,duration:1}),i.to(t,{backgroundColor:"rgba(0, 0, 0, 1)",ease:"power1.inOut",duration:1})});$(".section_intro").each(function(){let e=$(this),t=$(".intro_left-grid, .intro_grid-top-right-first, .intro_right-grid-bottom"),r=$("[text-animation='opacity']",this),o=$(".intro_grid-image",this),i=gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"top+=5%",scrub:1}});i.fromTo(t,{"border-right-color":"black","border-top-color":"black"},{"border-right-color":"#302e2e","border-top-color":"#302e2e",duration:1,ease:"power2.inOut"}),i.fromTo(r,{opacity:0,y:30},{opacity:1,y:0,duration:1,ease:"power2.inOut"},"-=0.5"),gsap.timeline({scrollTrigger:{trigger:e,start:"top top",end:"top+=5%",scrub:1}}).fromTo(o,{opacity:0},{opacity:1,duration:1,ease:"power2.inOut"},.5);let a=gsap.timeline({scrollTrigger:{trigger:e,start:"center+=5%",end:"bottom bottom",scrub:1,ease:"power2.inOut",reverse:!0}});a.to(t,{"border-right-color":"black","border-top-color":"black",duration:1},.05),a.to(r,{opacity:0,duration:1},.05),a.to(o,{opacity:0,duration:1},.05)});gsap.registerPlugin(ScrollTrigger);var g=$(".section_manifesto"),p=$(".fs-globe-container"),c=$("[text-animation='opacity']"),l=gsap.timeline({scrollTrigger:{trigger:g,start:"top top-=5%",end:"center center",scrub:1}});l.fromTo(p,{x:"-50%"},{x:"0%",duration:2,ease:"power2.out"});l.fromTo(c,{opacity:0,y:30},{opacity:1,y:0,duration:1,ease:"power2.inOut"},"-=0.5");l.fromTo(".manifesto_left-grid-wrapper",{"border-right-color":"black"},{"border-right-color":"#302e2e",duration:1,ease:"power2.inOut"},0);var n=gsap.timeline({scrollTrigger:{trigger:g,start:"center+=5%",end:"bottom bottom",scrub:1,ease:"power2.inOut",toggleActions:"play none reverse none"}});n.to(".manifesto_left-grid-wrapper",{"border-right-color":"black",duration:1},0);n.to(c,{opacity:0,duration:1},0);n.fromTo(".manifesto_left-grid-wrapper",{duration:2,ease:"power2.out"},0);n.to(".fs-globe-container",{x:"-50%",duration:2,ease:"power2.inOut"},.05);})();
