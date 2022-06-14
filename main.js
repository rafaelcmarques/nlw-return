function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
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

function activateMenuAtCurrentSection(section) {
  //linha alvo
  //scrollY = posição da barra de rolagem na pagina  innerHeight = campo de visao, visivel em uma pagina
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  //quais dados vou precisar?

  //topo da pagina
  const sectionTop = section.offsetTop

  //altura da pagina
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha?
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //console.log('Topo passou da linha?' + sectionTopReachOrPassedTargetLine)

  //a seção termina a onde?
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  //console.log(' O fim passou da linha? ' + sectionEndPassedTargetLine)

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}`)
  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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
