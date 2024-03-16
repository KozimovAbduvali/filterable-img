const hrefURl = [
  '#'
]
const imageUrls = [
  'https://img.freepik.com/free-photo/empty-glowing-screen-with-person-holding-mobile-phone_53876-98458.jpg?size=626&ext=jpg&uid=R139493551&ga=GA1.1.695771359.1709017003&semt=sph',
  'https://images6.alphacoders.com/133/1331511.png',
  'https://i.etsystatic.com/43898962/r/il/7a6320/5383790719/il_fullxfull.5383790719_qzna.jpg',
  'https://wallpapercave.com/wp/wp9637079.jpg',
  'https://images.unsplash.com/photo-1633966887768-64f9a867bdba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
  'https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg',
];

const titleS = [
  'Phone',
  'shoes',
  'clothes',
  'shoes',
  'clothes',
  'Phone',
];

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem  consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet,',
  'dolor sit amet.',
  'Lorem  consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet,',
];

const cardGrid = document.getElementById('cardGrid');
const numCards = Math.min(imageUrls.length, titleS.length, descriptions.length);

for (let i = 0; i < numCards; i++) {
  const card = document.createElement('a');
  card.href = hrefURl;
  card.dataset.name = titleS[i % titleS.length].toLowerCase();
  card.classList.add('card', 'bg-white', 'group', 'rounded-lg', 'overflow-hidden', 'shadow-md', 'p-4');

  const imageUrl = imageUrls[i % imageUrls.length];
  const imageWrapper = document.createElement('div')
  const image = document.createElement('img');
  image.src = imageUrl;
  imageWrapper.classList.add('overflow-hidden', 'h-40', '-mx-4', '-mt-4')
  image.classList.add('w-full', 'h-full', 'object-cover', 'transition', 'duration-300', 'group-hover:scale-110', 'mb-4');
  imageWrapper.appendChild(image);
  card.appendChild(imageWrapper);

  const element_H3 = titleS[i % titleS.length];
  const title = document.createElement('h3');
  title.classList.add('text-xl', 'font-semibold', 'my-2');
  title.textContent = element_H3
  card.appendChild(title);

  const element_p = descriptions[i % descriptions.length]
  const description = document.createElement('p');
  description.classList.add('text-gray-700', 'line-clamp-3');
  description.textContent = element_p
  card.appendChild(description);

  cardGrid.appendChild(card);
}

const filter_buttons = document.querySelectorAll('.filter_btns button');
const filter_Cards = document.querySelectorAll('#cardGrid .card');

const filterCards = e => {
  const currentActive = document.querySelector('.active');
  if (currentActive) {
    currentActive.classList.remove('active');
  }
  e.target.classList.add('active');

  filter_Cards.forEach(card => {
    card.classList.add('hidden')
    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all') {
      card.classList.remove('hidden')
    }
  })
}

filter_buttons.forEach(button => button.addEventListener("click", filterCards));


const showAllButton = document.querySelector('[data-name="all"]');
showAllButton.click();