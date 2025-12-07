/*let timeoutId=0.5;

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("mouseover", function () {
  dropdownMenu.classList.add("show"); // Add the "show" class to reveal the dropdown
});

dropdown.addEventListener("mouseleave", function () {
  dropdownMenu.classList.remove("show"); // Remove the "show" class to hide the dropdown
});

dropdown.addEventListener("mouseover", function () {
    clearTimeout(timeoutId); // Clear any existing timeout
    dropdownMenu.classList.add("show");
  });
  
  dropdown.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.remove("show");
    }, 300); // Delay hiding the dropdown by 300ms
  });*/
  const cursor = document.querySelector("#cursor");
  const cursorBorder = document.querySelector("#cursor-border");
  const cursorPos = { x: 0, y: 0 };
  const cursorBorderPos = { x: 0, y: 0 };
  
  document.addEventListener("mousemove", (e) => {
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;
  
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  
  requestAnimationFrame(function loop() {
    const easting = 8;
    cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
    cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
  
    cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
    requestAnimationFrame(loop);
  });
  
  document.querySelectorAll("[data-cursor]").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (item.dataset.cursor === "pointer") {
        cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
        cursorBorder.style.setProperty("--size", "30px");
      }
      if (item.dataset.cursor === "pointer2") {
        cursorBorder.style.backgroundColor = "white";
        cursorBorder.style.mixBlendMode = "difference";
        cursorBorder.style.setProperty("--size", "80px");
      }
    });
    item.addEventListener("mouseout", (e) => {
      cursorBorder.style.backgroundColor = "unset";
      cursorBorder.style.mixBlendMode = "unset";
      cursorBorder.style.setProperty("--size", "50px");
    });
  });
  


/*side bar open*/
  const openButton = document.getElementById('open-sidebar-button');
  const navbar = document.getElementById('navbar');
  
  // Function to open the sidebar
  function openSidebar() {
    navbar.classList.add('show'); 
    openButton.setAttribute('aria-expanded', 'true'); 
    navbar.removeAttribute('inert'); 
  }
  
  // Function to close the sidebar
  function closeSidebar() {
    navbar.classList.remove('show'); // Remove the 'show' class to hide the sidebar
    openButton.setAttribute('aria-expanded', 'false'); // Update accessibility attribute
    navbar.setAttribute('inert', ''); // Make the sidebar non-interactive
  }
  
  // Attach event listeners
  openButton.addEventListener('click', openSidebar);
  
  // Optional: Add a close button inside the sidebar
  const closeButton = document.getElementById('close-sidebar-button');
  if (closeButton) {
    closeButton.addEventListener('click', closeSidebar);
  }
  const sidebar = document.getElementById('navbar');

// Open sidebar
openButton.addEventListener('click', () => {
    sidebar.classList.add('show');
});

// Close sidebar
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('show');
});
/*--------------*/
function custommodal() {
  const modal = document.querySelector(".my-modal");
  const modaljourney = document.querySelector(".my-modaljourney");

  const closebtn = document.querySelector(".x-btn");
  const playbtn = document.querySelector(".play-button");
  const playbtnjourney = document.querySelector(".play-buttonjourney");


  playbtnjourney.addEventListener("click", (e) => {
      modal.classList.remove("d-none");

  });
  playbtn.addEventListener("click", (e) => {
    modal.classList.remove("d-none");
    modaljourney.classList.remove("d-none");

});

  closebtn.addEventListener("click", (e) => {
      modal.classList.add("d-none");
      modaljourney.classList.add("d-none");

  });

  document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
          modal.classList.add("d-none");
          modaljourney.classList.add("d-none");

      }
  });
}

// Call the function to initialize the modal
custommodal();
/*------animation------*/
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animations
        const bringing = document.querySelector('.bringing');
        const flavor = document.querySelector('.flavorh2');
        if (bringing) bringing.classList.add('active');
        if (flavor) flavor.classList.add('active');

        // Trigger reveal animations
        document.querySelectorAll('.reveal').forEach(element => {
          element.classList.add('active');
        });

        // Stop observing after triggering animations
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe sections
  const bringingSection = document.querySelector('.opening');
  const chooseSection = document.querySelector('.chooseus');
  if (bringingSection) observer.observe(bringingSection);
  if (chooseSection) observer.observe(chooseSection);
});
/*---------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  // Find the maximum target value among all counters
  const maxTarget = Math.max(...Array.from(counters).map(counter => +counter.getAttribute('data-count')));

  const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-count');
      const speed = 3600; // Total time for the animation in milliseconds
      const increment = target / (speed / 16); // Adjust the increment based on the target value

      const updateCount = () => {
          let count = parseFloat(counter.innerText);
          
          if (count < target) {
              counter.innerText = Math.ceil(count + increment) + (target !== 50 ? '+' : '');
              requestAnimationFrame(updateCount);
          } else {
              counter.innerText = target + (target !== 50 ? '+' : '');
          }
      };
      updateCount();
  };

  const observerOptions = {
      root: null,
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  counters.forEach(counter => {
      observer.observe(counter);
  });
});
/*----------------*/
document.querySelectorAll('.btn-custom').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelector('.btn-custom.active').classList.remove('active');
    this.classList.add('active');
  });
});
/*----tabs------*/
function openCity(evt, cityName) {
  // Get all elements with class="tabcontent" and hide them
  var tabcontents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active");
  }

  // Get all elements with class="tablinks" and remove the class "active"
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Set the first tab as active by default
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.tablinks').classList.add('active');
  document.querySelector('.tabcontent').classList.add('active');
});
/*--------------------*/
/*icon toggle*/
document.addEventListener('DOMContentLoaded', function() {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Collapse all sections and set their icons to "+"
      accordionButtons.forEach(btn => {
        if (btn !== this) {
          btn.setAttribute('aria-expanded', 'false');
          btn.querySelector('.icon').textContent = '+';
          const targetId = btn.getAttribute('data-bs-target');
          const targetElement = document.querySelector(targetId);
          if (targetElement.classList.contains('show')) {
            targetElement.classList.remove('show');
          }
        }
      });

      // Toggle the clicked section's icon and state
      const icon = this.querySelector('.icon');
      if (this.getAttribute('aria-expanded') === 'true') {
        icon.textContent = '-';
      } else {
        icon.textContent = '+';
      }

      // Toggle the aria-expanded attribute of the clicked button
      this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });
  });
});
/*----------------*/

/*fade toggle*/
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the classes .fade-up and .fade-left
  const fadeElements = document.querySelectorAll(".fade-up, .fade-left");

  // Create an IntersectionObserver
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  // Add the 'animate' class when the element is in the viewport
                  entry.target.classList.add("animate");
              }
          });
      },
      {
          threshold: 0.5, // Trigger when 50% of the element is visible
      }
  );

  // Observe each element
  fadeElements.forEach((element) => {
      observer.observe(element);
  });
});
/*-----------------*/


// Initialize ScrollReveal
$(document).ready(function () {
  let animated = false; // Flag to ensure the animation runs only once

  $(window).on("scroll", function () {
    const imageContainer = $(".image-container");
    const imagePosition = imageContainer.offset().top; // Get the top position of the image container
    const scrollPosition = $(window).scrollTop() + $(window).height(); // Get the current scroll position

    // Check if the image container is in the viewport and hasn't been animated yet
    if (scrollPosition > imagePosition && !animated) {
      imageContainer.addClass("animate"); // Trigger the animation
      animated = true; // Set the flag to true to prevent re-triggering
    }
  });
});



/*-----------------*/

/*-------------images slidding----*/

	const image6 = ["./assest/images/main-page-images/mainpage1.jpeg", "./assest/images/main-page-images/mainpage2.jpeg", "./assest/images/main-page-images/mainpage3.jpeg", "./assest/images/main-page-images/mainpage4.jpeg"];
	var current6 =0;
	
	function change6(direction){
		current6+=direction;
		if(current6<0){
			current6=image6.length-1;
		}
		else if(current6>=image6.length){
			current6=0;
		}
		document.getElementById("iiiiii").src=image6[current6];
		
	}
/*-------------------------*/
	const image1 = ["./assest/images/activityimages/arduino1.jpeg", "./assest/images/activityimages/arduino2.jpeg", "./assest/images/activityimages/arduino3.jpeg", "./assest/images/activityimages/arduino4.jpeg", "./assest/images/activityimages/arduino5.jpeg", "./assest/images/activityimages/arduino6.jpeg", "./assest/images/activityimages/arduino7.jpeg", "./assest/images/activityimages/arduino9.jpeg", "./assest/images/activityimages/arduino10.jpeg"];
	var current1 =0;
	
	function change1(direction){
		current1+=direction;
		if(current1<0){
			current1=image1.length-1;
		}
		else if(current1>=image1.length){
			current1=0;
		}
		document.getElementById("iiiii").src=image1[current1];
		
	}
/*----------------*/
	const ramadanimage = ["./assest/images/ramadan/ramadan1.jpeg", "./assest/images/ramadan/ramadan2.jpeg", "./assest/images/ramadan/ramadan3.jpeg", "./assest/images/ramadan/ramadan4.jpeg", "./assest/images/ramadan/ramadan5.jpeg", "./assest/images/ramadan/ramadan6.jpeg", "./assest/images/ramadan/ramadan7.jpeg"];
	var currentramadan =0;
	
	function changeramadan(direction){
		currentramadan+=direction;
		if(currentramadan<0){
			currentramadan=ramadanimage.length-1;
		}
		else if(currentramadan>=ramadanimage.length){
			currentramadan=0;
		}
		document.getElementById("ramadan").src=ramadanimage[currentramadan];
		
	}
	/*----------------*/
	const ramadanclashimage = ["./assest/images/ramadanclash/ramadanclash1.jpeg", "./assest/images/ramadanclash/ramadanclash2.jpeg", "./assest/images/ramadanclash/ramadanclash3.jpeg", "./assest/images/ramadanclash/ramadanclash4.jpeg", "./assest/images/ramadanclash/ramadanclash5.jpeg","./assest/images/ramadanclash/ramadanclash6.jpeg","./assest/images/ramadanclash/ramadanclash7.jpeg","./assest/images/ramadanclash/ramadanclash8.jpeg"];
	var currentramadanclash =0;
	
	function changeramadanclash(direction){
		currentramadanclash+=direction;
		if(currentramadanclash<0){
			currentramadanclash=ramadanclashimage.length-1;
		}
		else if(currentramadanclash>=ramadanclashimage.length){
			currentramadanclash=0;
		}
		document.getElementById("ramadanclash").src=ramadanclashimage[currentramadanclash];
		
	}
/*--------------*/
/*--------------*/
	const image2 = ["./assest/images/logicClash/logicclash1.jpeg", "./assest/images/logicClash/logicclash2.jpeg", "./assest/images/logicClash/logicclash3.jpeg", "./assest/images/logicClash/logicclash4.jpeg", "./assest/images/logicClash/logicclash5.jpeg", "./assest/images/logicClash/logicclash6.jpeg", "./assest/images/logicClash/logicclash7.jpeg", "./assest/images/logicClash/logicclash8.jpeg", "./assest/images/logicClash/logicclash9.jpeg", "./assest/images/logicClash/logicclash10.jpeg"];
	var current2 =0;
	
	function change2(direction){
		current2+=direction;
		if(current2<0){
			current2=image2.length-1;
		}
		else if(current2>=image2.length){
			current2=0;
		}
		document.getElementById("iiii").src=image2[current2];
		
	}
/*------------------*/
const image3 = ["./assest/images/ai/ai1.jpeg", "./assest/images/ai/ai2.jpeg", "./assest/images/ai/ai3.jpeg", "./assest/images/ai/ai4.jpeg"];
var current3 =0;

function change3(direction){
	current3+=direction;
	if(current3<0){
		current3=image3.length-1;
	}
	else if(current3>=image3.length){
		current3=0;
	}
	document.getElementById("iii").src=image3[current3];
	
}
/*------------*/
const image4 = ["./assest/images/hor/hor1.jpeg", "./assest/images/hor/hor2.jpeg", "./assest/images/hor/hor3.jpeg", "./assest/images/hor/hor4.jpeg", "./assest/images/hor/hor5.jpeg", "./assest/images/hor/hor6.jpeg", "./assest/images/hor/hor7.jpeg", "./assest/images/hor/hor8.jpeg", "./assest/images/hor/hor9.jpeg", "./assest/images/hor/hor10.jpeg", "./assest/images/hor/hor11.jpeg"];
var current4 =0;

function change4(direction){
	current4+=direction;
	if(current4<0){
		current4=image4.length-1;
	}
	else if(current4>=image4.length){
		current4=0;
	}
	document.getElementById("ii").src=image4[current4];
	
}
/*------------------*/
const image5 = ["./assest/images/exteme/exteme1.jpeg", "./assest/images/exteme/exteme2.jpeg", "./assest/images/exteme/exteme3.jpeg", "./assest/images/exteme/exteme4.jpeg"];
var current5 =0;

function change5(direction){
	current5+=direction;
	if(current5<0){
		current5=image5.length-1;
	}
	else if(current5>=image5.length){
		current5=0;
	}
	document.getElementById("i").src=image5[current5];
	
}
/*-------------*/
const image7 = ["./assest/images/ext/ext1.jpeg", "./assest/images/ext/ext2.jpeg", "./assest/images/ext/ext3.jpeg", "./assest/images/ext/ext4.jpeg", "./assest/images/ext/ext5.jpeg"];
var current7 =0;

function change7(direction){
	current7+=direction;
	if(current7<0){
		current7=image7.length-1;
	}
	else if(current7>=image7.length){
		current7=0;
	}
	document.getElementById("ext").src=image7[current7];
	
}
/*-------------*/
const image8 = ["./assest/images/ard/ard1.jpeg", "./assest/images/ard/ard2.jpeg", "./assest/images/ard/ard3.jpeg", "./assest/images/ard/ard4.jpeg", "./assest/images/ard/ard5.jpeg", "./assest/images/ard/ard6.jpeg", "./assest/images/ard/ard7.jpeg", "./assest/images/ard/ard8.jpeg", "./assest/images/ard/ard9.jpeg", "./assest/images/ard/ard10.jpeg"];
var current8 =0;

function change8(direction){
	current8+=direction;
	if(current8<0){
		current8=image8.length-1;
	}
	else if(current8>=image8.length){
		current8=0;
	}
	document.getElementById("ard").src=image8[current8];
	
}
/*-------------*/
const image9 = ["./assest/images/javascript/java1.jpeg", "./assest/images/javascript/java2.jpeg", "./assest/images/javascript/java3.jpeg", "./assest/images/javascript/java4.jpeg", "./assest/images/javascript/java5.jpeg", "./assest/images/javascript/java6.jpeg", "./assest/images/javascript/java7.jpeg"];
var current9 =0;

function change9(direction){
	current9+=direction;
	if(current9<0){
		current9=image9.length-1;
	}
	else if(current9>=image9.length){
		current9=0;
	}
	document.getElementById("javasc").src=image9[current9];
	
}
/*-------------*/
const image10 = ["./assest/images/ardwork/work1.jpeg", "./assest/images/ardwork/work2.jpeg", "./assest/images/ardwork/work3.jpeg"];
var current10 =0;

function change10(direction){
	current10+=direction;
	if(current10<0){
		current10=image10.length-1;
	}
	else if(current10>=image10.length){
		current10=0;
	}
	document.getElementById("ardwork").src=image10[current10];
	
}
/*-------------*/
const image11 = ["./assest/images/grad/grad1.jpeg", "./assest/images/grad/grad2.jpeg", "./assest/images/grad/grad3.jpeg", "./assest/images/grad/grad4.jpeg", "./assest/images/grad/grad5.jpeg", "./assest/images/grad/grad6.jpeg", "./assest/images/grad/grad7.jpeg", "./assest/images/grad/grad8.jpeg", "./assest/images/grad/grad9.jpeg", "./assest/images/grad/grad10.jpeg"];
var current11 =0;

function change11(direction){
	current11+=direction;
	if(current11<0){
		current11=image11.length-1;
	}
	else if(current11>=image11.length){
		current11=0;
	}
	document.getElementById("grad").src=image11[current11];
	
}
/*-------------*/
const image12 = ["./assest/images/pesd/pesd1.jpeg", "./assest/images/pesd/pesd2.jpeg", "./assest/images/pesd/pesd3.jpeg", "./assest/images/pesd/pesd4.jpeg", "./assest/images/pesd/pesd5.jpeg", "./assest/images/pesd/pesd6.jpeg", "./assest/images/pesd/pesd7.jpeg", "./assest/images/pesd/pesd8.jpeg", "./assest/images/pesd/pesd9.jpeg", "./assest/images/pesd/pesd10.jpeg", "./assest/images/pesd/pesd11.jpeg", "./assest/images/pesd/pesd12.jpeg", "./assest/images/pesd/pesd13.jpeg", "./assest/images/pesd/pesd14.jpeg"];
var current12 =0;

function change12(direction){
	current12+=direction;
	if(current12<0){
		current12=image12.length-1;
	}
	else if(current12>=image12.length){
		current12=0;
	}
	document.getElementById("pesd").src=image12[current12];
	
}
/*-------------*/
const image13 = ["./assest/images/ramadannight/night1.jpeg", "./assest/images/ramadannight/night2.jpeg", "./assest/images/ramadannight/night3.jpeg", "./assest/images/ramadannight/night4.jpeg", "./assest/images/ramadannight/night5.jpeg"];
var current13 =0;

function change13(direction){
	current13+=direction;
	if(current13<0){
		current13=image13.length-1;
	}
	else if(current13>=image13.length){
		current13=0;
	}
	document.getElementById("ramadan").src=image13[current13];
	
}
/*-------------*/
const image14 = ["./assest/images/letc/letc5.jpeg", "./assest/images/letc/letc4.jpeg", "./assest/images/letc/letc3.jpeg", "./assest/images/letc/letc2.jpeg", "./assest/images/letc/letc1.jpeg"];
var current14 =0;

function change14(direction){
	current14+=direction;
	if(current14<0){
		current14=image14.length-1;
	}
	else if(current14>=image14.length){
		current14=0;
	}
	document.getElementById("letc").src=image14[current14];
	
}
/*-------------*/
const image15 = ["./assest/images/node/node4.jpeg", "./assest/images/node/node5.jpeg", "./assest/images/node/node1.jpeg", "./assest/images/node/node2.jpeg", "./assest/images/node/node3.jpeg"];
var current15 =0;

function change15(direction){
	current15+=direction;
	if(current15<0){
		current15=image15.length-1;
	}
	else if(current15>=image15.length){
		current15=0;
	}
	document.getElementById("node").src=image15[current15];
	
}
/*-------------*/
const image16 = ["./assest/images/IEEexteme/iEEEexteme10.jpeg", "./assest/images/IEEexteme/iEEEexteme9.jpeg", "./assest/images/IEEexteme/iEEEexteme8.jpeg", "./assest/images/IEEexteme/iEEEexteme7.jpeg", "./assest/images/IEEexteme/iEEEexteme6.jpeg", "./assest/images/IEEexteme/iEEEexteme5.jpeg", "./assest/images/IEEexteme/iEEEexteme4.jpeg", "./assest/images/IEEexteme/iEEEexteme3.jpeg", "./assest/images/IEEexteme/iEEEexteme2.jpeg", "./assest/images/IEEexteme/iEEEexteme1.jpeg"];
var current16 =0;

function change16(direction){
	current16+=direction;
	if(current16<0){
		current16=image16.length-1;
	}
	else if(current16>=image16.length){
		current16=0;
	}
	document.getElementById("exteme").src=image16[current16];
	
}
/*-------------*/
const image17 = ["./assest/images/exhibition/exhibition1.jpeg", "./assest/images/exhibition/exhibitio2.jpeg", "./assest/images/exhibition/exhibition3.jpeg", "./assest/images/exhibition/exhibition4.jpeg", "./assest/images/exhibition/exhibition5.jpeg", "./assest/images/exhibition/exhibition6.jpeg", "./assest/images/exhibition/exhibition7.jpeg", "./assest/images/exhibition/exhibition8.jpeg", "./assest/images/exhibition/exhibition9.jpeg", "./assest/images/exhibition/exhibition10.jpeg"];
var current17 =0;

function change17(direction){
	current17+=direction;
	if(current17<0){
		current17=image17.length-1;
	}
	else if(current17>=image17.length){
		current17=0;
	}
	document.getElementById("exhibition").src=image17[current17];
	
}
/*-------------*/
const image18 = ["./assest/images/python/python3.jpeg", "./assest/images/python/python2.jpeg", "./assest/images/python/python1.jpeg", "./assest/images/python/python4.jpeg", "./assest/images/python/python5.jpeg"]
var current18 =0;
function change18(direction){
	current18+=direction;
	if(current18<0){
		current18=image18.length-1;
	}
	else if(current18>=image18.length){
		current18=0;
	}
	document.getElementById("python").src=image18[current18];
	
}
/*-------------*/
const image19 = ["./assest/images/conference/conference5.jpeg", "./assest/images/conference/conference4.jpeg", "./assest/images/conference/conference3.jpeg", "./assest/images/conference/conference2.jpeg", "./assest/images/conference/conference1.jpeg"]
var current19 =0;
function change19(direction){
	current19+=direction;
	if(current19<0){
		current19=image19.length-1;
	}
	else if(current19>=image19.length){
		current19=0;
	}
	document.getElementById("conference").src=image19[current19];
	
}
/*-------------*/
const image20 = ["./assest/images/expo/expo1.jpeg", "./assest/images/expo/expo2.jpeg", "./assest/images/expo/expo3.jpeg", "./assest/images/expo/expo4.jpeg", "./assest/images/expo/expo5.jpeg"]
var current20 =0;
function change20(direction){
	current20+=direction;
	if(current20<0){
		current20=image20.length-1;
	}
	else if(current20>=image20.length){
		current20=0;
	}
	document.getElementById("expo").src=image20[current20];
	
}
/*-------------*/
var image21 = ["./assets/images/activities/hor8.jpeg", "./assets/images/activities/hor1.jpeg", "./assets/images/activities/hor2.jpeg", "./assets/images/activities/hor3.jpeg", "./assets/images/activities/hor4.jpeg","./assets/images/activities/hor5.jpeg","./assets/images/activities/hor6.jpeg","./assets/images/activities/hor7.jpeg","./assets/images/activities/hor9.jpeg","./assets/images/activities/hor10.jpeg","./assets/images/activities/hor11.jpeg"]
var current21 =0;
function change21(direction){
	current21+=direction;
	if(current21<0){
		current21=image21.length-1;
	}
	else if(current21>=image21.length){
		current21=0;
	}
	document.getElementById("pcb").src=image21[current21];
	
}
