// Navbar scroll
const header = document.getElementById("header")
window.addEventListener("scroll", () => {
header.classList.toggle("scrolled", window.scrollY > 50)
})

// Counters animés au scroll
const counters = document.querySelectorAll(".counter")
const options = { threshold: 0.5 }
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    const counter = entry.target
    const update = () => {
        const target = +counter.getAttribute("data-target")
        const count = +counter.innerText
        const speed = target / 200
        if (count < target) {
        counter.innerText = Math.ceil(count + speed)
        setTimeout(update, 20)
        } else {
        counter.innerText = target
        }
    }
    update()
    observer.unobserve(counter)
    }
})
}, options)
counters.forEach(counter => observer.observe(counter))

// Menu mobile
const menu = document.querySelector(".menu-toggle")
const nav = document.querySelector("nav")
const menuClose = document.querySelector(".menu-close")

menu.addEventListener("click", () => { nav.classList.toggle("active") })
menuClose.addEventListener("click", () => { nav.classList.remove("active") })

// Smooth scroll pour tous les liens internes (navbar)
document.querySelectorAll("nav a").forEach(link => {
const href = link.getAttribute("href")
  if (href.startsWith("#")) { // seulement sections internes
    link.addEventListener("click", e => {
    e.preventDefault()
    const id = href.substring(1)
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    // Fermer le menu mobile après navigation
    nav.classList.remove("active")
    })
}
})

// Effet lumineux et interaction pour les liens de navigation
const navLinks = document.querySelectorAll("nav a")
navLinks.forEach(link => {
  link.addEventListener("touchstart", () => {
    link.style.transition = "0.3s"
    link.style.textShadow = "0 0 10px rgba(230,0,35,0.8),0 0 20px rgba(230,0,35,0.5)"
    link.style.color = "#e60023"
    link.style.transform = "scale(1.1)"
  })
  link.addEventListener("touchend", () => {
    link.style.textShadow = "none"
    link.style.color = "inherit"
    link.style.transform = "scale(1)"
  })
})

// Effet flottant et lumineux pour les horaires de cours
const scheduleCards = document.querySelectorAll(".schedule-card")
scheduleCards.forEach(card => {
  card.addEventListener("touchstart", () => {
    card.style.transition = "0.4s"
    card.style.transform = "translateY(-10px)"
    card.style.boxShadow = "0 0 30px rgba(230,0,35,0.6),0 15px 25px rgba(0,0,0,0.15)"
    card.style.background = "linear-gradient(135deg,rgba(230,0,35,0.1),rgba(255,255,255,1))"
  })
  card.addEventListener("touchend", () => {
    card.style.transform = "translateY(0)"
    card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
    card.style.background = "white"
  })
})