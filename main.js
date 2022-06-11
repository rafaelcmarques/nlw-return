function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection()
}

function showNavOnScroll() {
  let navigation = document.getElementById('navigation')
  if (scrollY > 0) {
    /*scrollY é a posição do scroll, se for 0 está no topo da pagina*/
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function activateMenuAtCurrentSection() {
  //linha alvo
  //scrollY = posição da barra de rolagem na pagina  innerHeight = campo de visao, visivel em uma pagina
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  //quais dados vou precisar?

  const sectionTop = home.offsetTop //topo da pagina

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
}

function showBackToTopButtonOnScroll() {
  let toTopButton = document.getElementById('backToTopButton')
  if (scrollY > 550) {
    /*scrollY é a posição do scroll, se for 0 está no topo da pagina*/
    toTopButton.classList.add('show')
  } else {
    toTopButton.classList.remove('show')
  }
}

function openMenu() {
  let body = document.querySelector('body')
  body.classList.add('menu-expanded')
}

function closeMenu() {
  let body = document.querySelector('body')
  body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content'
)
