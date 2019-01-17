//IMAGES

import secondaryBanjo from '../assets/img/banjo.jpg';
import mainBanjo from '../assets/img/banjo2.jpg';
import thumbBanjo from '../assets/img/instruments/banjo.png';

import mainTheremin from '../assets/img/teheremin.jpg';
import secondaryTheremin from '../assets/img/Thérémine-1-of-1.jpg';
import thumbTheremin from '../assets/img/instruments/theremine.png';



//SOUNDS

import soundBanjo from '../assets/sounds/Bass_guzheng.wav';
import soundTheremin from '../assets/sounds/Melody_theremin.wav';

const Instruments = [
  {
    id: 0,
    title: 'Banjo',
    pronunciation: '[bɑ̃.dʒo]',
    type: 'Cordes frappées',
    shape: 'A queue ou droit',
    origin: 'Amérique du Nord',
    year: 'XVIIIe',
    description: {
      title: 'Un instrument pas seulement utilisé dans la musique country',
      text: 'lLe banjo est un instrument de musique à cordes pincées nord-américain. Avec sa table d\'harmonie à membrane, on le distingue facilement de la guitare. Cet instrument serait un dérivé du luth ouest-africain ekonting apporté par les esclaves noirs (ou plus vraisemblablement recréé par certains d\'entre eux) et qui aurait suscité la création des premiers gourd-banjos (« banjo en gourde »).\n' +
        'L\'origine de l\'instrument moderne remonte d\'abord aux années 1830-1840 durant lesquelles ont commencé l\'industrialisation et la commercialisation d\'un instrument plus ancien (xviie siècle) utilisé par les esclaves africains déportés aux États-Unis. La source iconographique la plus ancienne se trouve dans un récit de voyage écrit par Sir Hans Sloane en 1688 et publié à Londres en 1707. Les musiciens noirs exploitèrent l\'aspect rythmique de l\'instrument avec un tel succès que les blancs du Sud des États-Unis s\'y intéressèrent. '
    },
    facts: [
      'Au début du 19e siècle, le banjo était mentionné dans 19 orthographes différentes, allant de «banza» à «bonjoe».\n',
      'La preuve la plus ancienne de luths pincés provient de la Mésopotamie il y a environ 6000 ans.\n',
      'Des recherches récentes sur la musique ouest-africaine montrent plus de 60 instruments de luth à cordes pincés, qui présentent tous, dans une certaine mesure, quelque ressemblance avec le banjo et sont donc probablement des précurseurs du banjo.',
      'La première description définitive d\'un banjo précoce provient d\'un article de 1687 écrit par Sir Hans Sloane, un médecin anglais en visite en Jamaïque, qui qualifiait cet instrument afro-caribéen de «strum strump».'
    ],
    sound: {
      filePath: soundBanjo,
      type: 'audio/wav'
    },
    videoUrl: 'RQuY8kERaU0',
    coordinates: [67.075459,37.933009],
    mainImage: mainBanjo,
    secondaryImage: secondaryBanjo,
    thumbnail: thumbBanjo

  },
  {
    id: 1,
    title: 'Theremine',
    pronunciation: '[te.ʁe.min]',
    type: 'Electronique',
    shape: 'A clavier ou violoncelle',
    origin: 'Russie',
    year: '1920',
    description: {
      title: 'Un son spatial qui se prête bien à la science fiction',
      text: 'Le thérémine (également appelé theremin, thereminvox, thereminovox ; initialement baptisé éthérophone, ou aetherophone) est un instrument de musique électronique inventé en 1920, en Union soviétique, par le physicien russe Lev Sergueïevitch Termen, plus connu sous le nom de Leon Theremin. Il se compose d\'une enceinte avec des tubes radio produisant des oscillations sonores à deux fréquences situées au-delà du seuil d\'audition humain ; grâce au phénomène de battement, elles produisent une fréquence audible plus basse, égale à leur différence de fréquence. La hauteur du son est contrôlée en approchant ou en éloignant la main ou une baguette d\'une antenne, ce mouvement modifiant la capacité électrique d\'un des oscillateurs, donc l\'une des fréquences inaudibles. Les harmoniques peuvent être filtrés, ce qui permet de varier les timbres et les couleurs sonores sur une étendue de six octaves.'
    },
    facts: [
      'Le theremin est monophonique, ce qui signifie qu’il utilise un seul canal de transmission pour créer un son.',
      'Le thérémine fut rapidement repris par les compositeurs de films hollywoodiens, notamment dans la partition de Max Steiner pour King Kong (1933), de Franz Waxman pour Bride of Frankenstein (1935) et dans la partition de Bernard Herrmann pour The Day the Earth Stood Still (1951).\n',
      'Le theremin est similaire à un récepteur radio. Il possède deux antennes: une à droite verticale et une à gauche en forme de boucle.',
      'La première œuvre orchestrale avec un instrument électronique solo était Simfonicheskaya misteriya («Mystère symphonique») d’Andrey Pashchenko pour thérémine et orchestre, qui a été créée pour la première fois à Léningrad le 2 mai 1924. Lev Termen était un soliste'
    ],
    sound: {
      filePath: soundTheremin,
      type: 'audio/wav'
    },
    videoUrl: '7EluXu6xg1c',
    coordinates:  [ -82.64, 27.773056],
    mainImage: mainTheremin,
    secondaryImage: secondaryTheremin,
    thumbnail: thumbTheremin

  },

];

export default Instruments;