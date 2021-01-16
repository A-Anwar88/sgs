

    $('#product-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },1000:{
                items:4
            }
        }
    })

    //portfolio item filter

const filterContainer = document.querySelector(".portfolio-filter"), filterBtns = filterContainer.children, totalFilterBtn = filterBtns.length, portfolioItems = document.querySelectorAll(".portfolio-item"), totalportfolioItem = portfolioItems.length;
for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalportfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else {
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }
    });
}
//portfolio lightbox

    const lightbox=document.querySelector(".lightbox"),
          lightboxImg=lightbox.querySelector(".lightbox-img"),
          lightboxColse=lightbox.querySelector(".lightbox-close"),
          lightboxText=lightbox.querySelector(".caption-text"),
          lightboxCounter=lightbox.querySelector(".caption-counter");
    let itemIndex=0;

    for(let i=0; i<totalportfolioItem; i++) {
        portfolioItems[i].addEventListener("click" , function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
    }
        function nextItem(){
            if(itemIndex === totalportfolioItem-1){
            itemIndex=0;
            }else{
            itemIndex++
            }
            changeItem();
        }
        function prevItem(){
            if(itemIndex === 0){
            itemIndex =totalportfolioItem-1;
            }else{
            itemIndex--
            }
            changeItem();
        }

        function toggleLightbox(){
            lightbox.classList.toggle("open");
        }

        function changeItem(){
        imgsrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src=imgsrc;
        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML=(itemIndex+1) + "of" +totalportfolioItem;
        }

//close lightbox
        lightbox.addEventListener("click",function(event){
        if(event.target === lightboxColse || event.target ===lightbox){
        toggleLightbox();
        }
        })
/*
     class Translate{
         constructor(){
             document.getElementById("arabic").addEventListener("click" , ()=>{
                 this.translate("arabic");
             });
             document.getElementById("arabic").addEventListener("click" , ()=>{
                this.translate("arabic");
            });
         }
         translate(language){

         }
     }
     onload = new Translate();
*/