
const cardData = [
  // 1
  {
    image: 'https://img.freepik.com/free-photo/empty-glowing-screen-with-person-holding-mobile-phone_53876-98458.jpg?size=626&ext=jpg&uid=R139493551&ga=GA1.1.695771359.1709017003&semt=sph',
    title: 'phone',
    description: 'loremmm'
  },
  // 2
  {
    image: 'https://images6.alphacoders.com/133/1331511.png',
    title: 'shoes',
    description: 'lorem ipsum'
  },
  // 3
  {
    image: 'https://i.etsystatic.com/43898962/r/il/7a6320/5383790719/il_fullxfull.5383790719_qzna.jpg',
    title: 'clothes',
    description: 'lorem ipsum'
  },
  // 4
  {
    image: 'https://wallpapercave.com/wp/wp9637079.jpg',
    title: 'shoes',
    description: 'lorem ipsum'
  },
  // 5
  {
    image: 'https://img.freepik.com/free-photo/empty-glowing-screen-with-person-holding-mobile-phone_53876-98458.jpg?size=626&ext=jpg&uid=R139493551&ga=GA1.1.695771359.1709017003&semt=sph',
    title: 'phone',
    description: 'loremmm'
  },
  // 6
  {
    image: 'https://images6.alphacoders.com/133/1331511.png',
    title: 'shoes',
    description: 'lorem ipsum'
  },
  // 7
  {
    image: 'https://i.etsystatic.com/43898962/r/il/7a6320/5383790719/il_fullxfull.5383790719_qzna.jpg',
    title: 'clothes',
    description: 'lorem ipsum'
  },
  // 8
  {
    image: 'https://wallpapercave.com/wp/wp9637079.jpg',
    title: 'shoes',
    description: 'lorem ipsum'
  },
];

function generateCard(image, title, description) {
  return `
    <a href="#" class="card bg-white group rounded-lg overflow-hidden shadow-md p-4" data-name="${title.toLowerCase()}">
      <div class="overflow-hidden w-[120%] h-40 -mx-4 -mt-4">
        <img class="w-full h-full object-cover transition duration-300 group-hover:scale-110 mb-4" src="${image}" alt="">
      </div>  
      <h3 class="text-lg font-semibold">${title}</h3>
      <p>${description}</p>
    </a>
  `;
}

function renderCards() {
  const container = document.querySelector('.grid');
  container.innerHTML = '';
  cardData.forEach(({ image, title, description }) => {
    const cardHTML = generateCard(image, title, description);
    container.innerHTML += cardHTML;
  });
}

const filter_buttons = document.querySelectorAll('.filter_btns button');

const filterCards = e => {
  const currentActive = document.querySelector('.active');
  if (currentActive) {
    currentActive.classList.remove('active');
  }
  e.target.classList.add('active');

  const filterName = e.target.dataset.name.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.style.display = 'none';
    // card.classList.add("hidden")
    if (filterName === 'all' || card.dataset.name === filterName) {
      card.style.display = 'block';
    // card.classList.add("block")
    }
  });
}

filter_buttons.forEach(button => button.addEventListener("click", filterCards));


const showAllButton = document.querySelector('[data-name="all"]');
showAllButton.click();

window.addEventListener('DOMContentLoaded', renderCards);