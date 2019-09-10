import soccer from './assets/Soccer.png';
import technology from './assets/Technology.png';
import camera from './assets/Camera.png';
import music from './assets/Music.png';
import shirt from './assets/T-Shirt.png';
import cube from './assets/Rubiks_Cube.png';
import phone from './assets/Phone.png';
import mail from './assets/Mail.png';
import facebook from './assets/Facebook.png';
import earth from './assets/Earth.png';
import person from './assets/Person.png';
import instagram from './assets/Instagram.png';
import location from './assets/Location.png';
import behance from './assets/Behance.png';
import example from './assets/example.jpg';
import background from './assets/background.png';

export const klauzulaCV = 'Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922).';

export const header = {
   headerImg: example,
   backgroundImg: background,
   name: 'Konrad Pasik',
   profession: 'FrontEnd Developer',
   introduction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
   items: [
      {
         text: '31.01.1997',
         img: person,
      },
      {
         text: 'Kraków, os. Albertyńskie 19/64',
         img: location,
      },
      {
         text: '/lorem',
         img: behance,
      },
      {
         text: '/ipsum',
         img: instagram,
      }
   ],
}

export const skillsBlockContent = [
   {
      title: "Wiedza",
      content: [
         {
            title: 'HTML5',
            master: 5,
         },
         {
            title: 'CSS3',
            master: 6,
         },
         {
            title: 'JavaScript',
            master: 5,
         },
         {
            title: 'React',
            master: 6,
         },
         {
            title: 'Java',
            master: 4,
         },
      ]
   },
   {
      title: "Umiejętności",
      content: [
         {
            title: 'RWD',
            master: 6,
         },
         {
            title: 'MS Office',
            master: 4,
         },
         {
            title: 'Sieci Komputerowe',
            master: 3,
         },
      ]
   },
   {
      title: "Języki",
      content: [
         {
            title: 'Angielski',
            master: 8,
         },
         {
            title: 'Rosyjski',
            master: 2,
         },
      ]
   }
];

export const specialSkillBlock = {
   title: "Umiejętności osobowe",
   content: [
      {
         title: 'Współpraca',
         master: 8,
      },
      {
         title: 'Organizacja',
         master: 7,
      },
      {
         title: 'Punktualność',
         master: 9,
      },
      {
         title: 'Komunikatywność',
         master: 7,
      },
      {
         title: 'Kreatywność',
         master: 5,
      },
   ]
};

export const detailsBlocksContent = [
   {
      title: "Edukacja",
      content: [
         {
            dateFrom: '2013',
            dateTo: '2016',
            text: 'Liceum Ogólnokształcące I w Dębicy',
            subtext: 'Profil matematyczno - informatyczno - fizyczny',
         },
         {
            dateFrom: '2017',
            dateTo: '?',
            text: 'Informatyka Stosowana',
            subtext: 'Akademia Górniczo Hutnicza w Krakowie',
         },
      ]
   },
   {
      title: "Doświadczenie",
      content: [
         {
            dateFrom: '2019',
            dateTo: '?',
            text: 'Frontend Developer',
            subtext: 'x-kom - staż',
         },
         {
            dateFrom: '2019',
            dateTo: '?',
            text: 'Frontend Developer',
            subtext: 'DESVN',
         },
         {
            dateFrom: '2018',
            dateTo: '2019',
            text: 'Lorem Ipsum',
            subtext: 'Lorem Ipsum',
         },
      ]
   },
   {
      title: "Projekty",
      content: [
         {
            dateFrom: '2019',
            text: 'ChampionsLeague',
            subtext: 'Strona do sprawdzania wyniku Ligi Mistrzów',
         },
         {
            dateFrom: '2019',
            text: 'DESVN',
            subtext: 'Stworzenie strony desvn.pl',
         },
         {
            dateFrom: '2018',
            text: 'Oscyloskop',
            subtext: 'Program symulujący pracę oscyloskopu',
         },
      ]
   },
]

export const contact = {
   title: 'Kontakt',
   items: [
      {
         content: '+(48) 517 532 850',
         img: phone,
      },
      {
         content: 'k.pasik97@gmail.com',
         img: mail,
      },
      {
         content: '/Pasik97',
         img: facebook,
      },
      {
         content: 'github.com/Pasik97',
         img: earth,
      },
   ],
}

export const interests = {
   title: 'Zainteresowania',
   items: [
      {
         title: 'Piłka nożna',
         img: soccer,
      },
      {
         title: 'Nowe Technologie',
         img: technology,
      },
      {
         title: 'Fotografia',
         img: camera,
      },
      {
         title: 'Muzyka',
         img: music,
      },
      {
         title: 'Moda',
         img: shirt,
      },
      {
         title: 'Kostka Rubika',
         img: cube,
      },
   ],
}