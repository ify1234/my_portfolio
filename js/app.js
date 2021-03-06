
/*-----------------about section-----------------*/
(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) => {
    /* -----if event.target contains 'tab-item'   class and not contain active class-------------------*/
    if (event.target.classList.contains('tab-item') &&
      !event.target.classList.contains("active")){
      const target = event.target.getAttribute("data-target");
      //deactivate existing active "tab-item"
      tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active")
      //activate new active "tab-item"
      event.target.classList.add("active", "outer-shadow");
      //deactivate existing active "tab-item"
      aboutSection.querySelector(".tab-content.active").classList.remove("active");
      //activate new "tab-content"
      aboutSection.querySelector(target).classList.add("active");
    }
  })
})();

//----------------------------- portfolio filter and pop up
(() =>{
  
  const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = (".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
  let itemIndex, slideIndex, screenshots;
  //--------------- filter portfolio items
  filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("active")) {
      // deactivate existing active "filter"
      filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
      // activate new 'filter item'
      event.target.classList.add("active", "outer-shadow");
      const target = event.target.getAttribute("data-target");
      portfolioItems.forEach((item) => {
        if(target === item.getAttribute("data-category") || target ==='all') {
          item.classList.remove("hide");
          item.classList.add("show");
        }
        else{
          item.classList.remove("show");
          item.classList.add("hide");
        }
     })
    } 
  })
  portfolioItemsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".portfolio-item-inner")) {
      const portfolioItem = event.target.closest(".portfolio-item-inner").
        parentElement;
      // get the portfolioItem index
      itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(
        portfolioItem);
      screenshots = portfolioItems[itemIndex].querySelector
        (".portfolio-item-img img").getAttribute("data-screenshots");
      // convert screenshots into array
      screenshots = screenshots.split(",");
      slideIndex = 0;
      popupToggle();

    }
  })
  function poppupToggle() {
    popup.classList.toggle("open");

  }
})();























