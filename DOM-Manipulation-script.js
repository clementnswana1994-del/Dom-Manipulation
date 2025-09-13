// First Lab
// Part 1
// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// const mainEl = document.querySelector('main')

// console.log(mainEl)
// const mainEl = document.createElement("main");
// mainEl.style.backgroundColor = "#4a4e4d";
// document.body.appendChild(mainEl);
// const tag = document.createElement('h1')
// mainEl.appendChild(tag)
// mainEl.innerHTML = 'DOM Manipulation'

// console.log(document.qu)

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
const heading = document.createElement("h1");
const headingtitle = document.createTextNode("DOM Manipulation");
heading.appendChild(headingtitle);
// heading.style.color = 'var(--top-menu-bg)';
mainEl.appendChild(heading);
mainEl.classList.add("flex-ctr");

document.body.appendChild(mainEl);

// Part 2: Creating a Menu Bar

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

console.log(topMenuEl);

// Part 3: Adding Menu Buttons

let a = document.createElement("a");

for (let menuLink of menuLinks) {
  const link = document.createElement("a");
  link.textContent = menuLink["text"];
  link.href = menuLink["href"];
  topMenuEl.appendChild(link);
}

// 2nd Lab
// Part 3

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Part 4

const topMenuLinks = topMenuEl.querySelectorAll("a");
function handleClick(event) {
  // console.dir(event.target)
  // console.log(event.target.tagName)
  // console.log(menuLinks)
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }

  event.target.classList.toggle("active");
  for (let link of topMenuLinks) {
    if (link !== event.target && link.classList.contains("active")) {
      link.classList.remove("active");
    }
    // else if (link.classList.contains("active")) {
    //   link.classList.remove("active");
    // }
  }
 const link = event.target
//   for (let link of menuLinks) {
    if (link.hasOwnProperty("subLinks")) {
        console.log("has sublink");
    }
    else {
        console.log("no sublink")
    }

//   }
}
topMenuEl.addEventListener("click", handleClick);

// Part 5

menuEl.addEventListener('click', function(event) {
  // Check if the clicked element is an <a> tag
  if (event.target.tagName === 'A') {
    // Cache the clicked <a> element
    const clickedLink = event.target;

    // Check if the link does not have the 'active' class
    if (!clickedLink.classList.contains('active')) {
      // Find the corresponding link object from the menuLinks array
      // based on the link's text content.
      // This step assumes the <a> text matches a link's text property.
      const linkObject = menuLinks.find(link => link.text === clickedLink.textContent);
      
      // If the link object exists and has a 'subLinks' property
      if (linkObject && linkObject.hasOwnProperty('subLinks')) {
        // Set the CSS top property of subMenuEl to 100%
        subMenuEl.style.top = '100%';
      } else {
        // Otherwise, set the CSS top property of subMenuEl to 0
        subMenuEl.style.top = '0';
      }
    }
  }
});