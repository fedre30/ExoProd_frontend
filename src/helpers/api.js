//IMAGES

import secondaryBanjo from '../assets/img/banjo.jpg';
import mainBanjo from '../assets/img/banjo2.jpg';
import thumbBanjo from '../assets/img/instruments/banjo.png';

import mainTheremin from '../assets/img/teheremin.jpg';
import secondaryTheremin from '../assets/img/Thérémine-1-of-1.jpg';
import thumbTheremin from '../assets/img/instruments/theremine.png';

import mainSitar from '../assets/img/sitar_2.jpg';
import secondarySitar from '../assets/img/Sitar.jpg';
import thumbSitar from '../assets/img/instruments/sitar.png';

import mainDulcimer from '../assets/img/dulcimer.jpg';
import secondaryDulcimer from '../assets/img/dulcimer2.JPG';
import thumbDulcimer from '../assets/img/instruments/dulcimer.png';

import mainCastanets from '../assets/img/castagnet.jpg';
import secondaryCastanets from '../assets/img/castagnet2.jpg';
import thumbCastanets from '../assets/img/instruments/Castanet.png';

import mainKoto from '../assets/img/koto.jpg';
import secondaryKoto from '../assets/img/koto2.png';
import thumbKoto from '../assets/img/instruments/koto.png';

import mainGuzheng from '../assets/img/guzheng.png';
import secondaryGuzheng from '../assets/img/guzheng2.jpg';
import thumbGuzheng from '../assets/img/instruments/Guzheng.png';

import mainPipa from '../assets/img/pipa.jpeg';
import secondaryPipa from '../assets/img/pipa2.jpg';
import thumbPipa from '../assets/img/instruments/pipa.png';

import mainCajon from '../assets/img/cajon.jpg';
import secondaryCajon from '../assets/img/cajon2.jpg';
import thumbCajon from '../assets/img/instruments/cajon.png';


//SOUNDS

import soundBanjo from '../assets/sounds/Bass_guzheng.wav';
import soundTheremin from '../assets/sounds/Melody_theremin.wav';
import soundSitar from '../assets/sounds/Melody_sitar.wav';
import soundDulcimer from '../assets/sounds/Chords_dulcimer.wav';
import soundCastanets from '../assets/sounds/Drums_castanets.wav';
import soundKoto from '../assets/sounds/Chords_koto.wav';
import soundGuzheng from '../assets/sounds/Bass_guzheng.wav';
import soundPipa from '../assets/sounds/Bass_pipa.wav';
import soundCajon from '../assets/sounds/Drums_cajon.wav';

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
    coordinates: [-87.075459, 37.933009],
    mainImage: mainBanjo,
    secondaryImage: secondaryBanjo,
    thumbnail: thumbBanjo

  },
  {
    id: 1,
    title: 'Theremine',
    pronunciation: '[ˈθɛə.ɹəˌmɪn]',
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
    coordinates: [65.751244, 77.618423],
    mainImage: mainTheremin,
    secondaryImage: secondaryTheremin,
    thumbnail: thumbTheremin
  },
  {
    id: 2,
    title: 'Sitar',
    pronunciation: '[ˈs̠it̪ɑr]',
    type: 'Cordes pincées',
    shape: 'Droit',
    origin: 'Inde',
    year: 'XIVe',
    description: {
      title: 'Un incontournable pour les Beatles',
      text: ' Le sitār est un instrument à cordes de la famille des luths très répandu en Inde du Nord. Il mesure 1,2 m de longueur environ et comporte une caisse de résonance piriforme profonde en bois et en calebasse, un manche en bois, long, large et évidé, des chevilles frontales et latérales, et vingt frettes arquées mobiles. Le sitār est généralement muni de cinq cordes mélodiques métalliques, d\'une ou deux cordes métalliques servant aux variations rythmiques en bourdon et de neuf à treize cordes métalliques sympathiques placées sous les frettes dans le manche qui sont accordées sur les notes du rāga qui est joué. Les frettes, convexes, sont fixées par des liens tendus le long du manche, ce qui permet de les déplacer en fonction des besoins. Comme la vīnā classique, le sitār est souvent doté d\'une calebasse de résonance sous l\'extrémité du chevillier du manche.\n'
    },
    facts: [
      'Brain Jones, l\'un des membres originaux des Rolling Stones, a joué le sitar dans la chanson \'Paint it Black\'.',
      'Le sitar est devenu populaire dans la musique moderne à une époque dans les années 1960, quand il a été utilisé dans la musique par les Rolling Stones, les Doors et les Beatles.',
      'Le nom \'sitar\' est dérivé des mots persans \'seh\' et \'tar; qui signifie «trois chaînes» lorsqu\'il est traduit en anglais.',
      'Le grand pont du sitar est réservé aux cordes principales et le petit pont aux cordes sympathiques.'
    ],
    sound: {
      filePath: soundSitar,
      type: 'audio/wav'
    },
    videoUrl: 'O4irXQhgMqg',
    coordinates: [78.962880, 20.593684],
    mainImage: mainSitar,
    secondaryImage: secondarySitar,
    thumbnail: thumbSitar
  },
  {
    id: 3,
    title: 'Dulcimer',
    pronunciation: '[ˈduls̠ime̞r]',
    type: 'Cordes frappées',
    shape: 'Dulcimer des Appalaches, Hammered dulcimer ',
    origin: ' Europe du nord',
    year: ' Moyen  âge',
    description: {
      title: 'Un instrument de rêverie',
      text: 'Le Dulcimer fait partie d\'une famille d\'instruments d\'origine Celte que l\'on peut qualifier de "Cornemuses à cordes grattées". En effet, ces derniers associent, comme les Cornemuses, des cordes « bourdons » réalisant un accord d\'accompagnement, et une corde « chanterelle » souvent diatonique réservée à la mélodie.\n' +
        'Le Dulcimer quant à lui, selon les versions, possède 3 ou 4 cordes: 2 cordes « bourdon » et une ou deux cordes « chanterelles ». Il est purement diatonique (les notes de la tonalité de base ne peuvent être altérées en dièses et en bémols). En ce sens et si on s\'en tient à une utilisation traditionnelle, les fausses notes sont impossibles (ce qui est bien pratique...). Cette caractéristique alliée à sa légèreté et son faible encombrement explique sans doute la popularité du dulcimer en son époque de gloire!\n' +
        'Les cordes sont fixés sur un manche intégré dans la caisse de résonance. Celle-ci est de taille réduite. De ce fait, le dulcimer n\'est pas un instrument puissant. Son succès dans la musique de danse, domaine réservé des bombardes et cornemuses est donc resté limité! Enfin, le dulcimer se décline généralement en deux formes: la forme de type pendule et la forme en goutte d\'eau.\n'
    },
    facts: [
'Une personne qui joue de cet instrument à cordes s\'appelle un dulcimeriste. Cependant, ce terme est rarement utilisé. La plupart des artistes se considèrent eux-mêmes comme des joueurs dulcimer.',
      'Au fil des ans, le dulcimer a acquis un certain nombre de surnoms, notamment «harmonium», «hog fiddle», «boîte à musique», «boîte à harmonie» et «cithare de montagne».',
      'Une fois que les dulcimers ont été produits en série, des modifications de conception ont permis de créer un instrument plus facile à construire et à jouer.',
      'Le dulcimer est un instrument de musique à cordes de la famille des cithares. Contrairement à la cithare, le dulcimer est généralement caractérisé par trois ou quatre chaînes.'
    ],
    sound: {
      filePath: soundDulcimer,
      type: 'audio/wav'
    },
    videoUrl: 'gZa4mdWu6Gs',
    coordinates: [12.340171, 62.278648],
    mainImage: mainDulcimer,
    secondaryImage: secondaryDulcimer,
    thumbnail: thumbDulcimer
  },

  {
    id: 4,
    title: 'Castanets',
    pronunciation: '[ˌkæs.tə.ˈnɛts]',
    type: 'Percussion idiophone',
    shape: 'Castanyoles, Castanholas, Nacchere',
    origin: 'Espagne, Italie, Grèce',
    year: ' Inconnue',
    description: {
      title: 'Pas utilisé seulement pour le flamenco',
      text: 'Les castagnettes (en espagnol : castañuelas, «châtaignes ») sont un instrument de musique à percussion idiophone, typique du folklore espagnol, portugais (castanholas) et italien (nacchere).\n' +
        'Les castanyoles rectangulaires se rencontrent encore aux Îles Baléares.\n' +
        'Elles sont généralement fabriquées en bois dur ou en ivoire et consistent en deux coquilles surmontées d\'une « oreja » (oreille), percées, suivant les modèles, de deux ou trois trous, reliées entre elles par un cordon, dont les faces creuses s\'entrechoquent.\n' +
        'Elles peuvent se jouer de plusieurs manières : classique, elles sont mises aux pouces, la main droite joue avec les 4 doigts en commençant par le petit doigt et la main gauche uniquement avec les deux doigts du milieu, la main droite fera une carretilla. Populaire, elles seront aux majeurs ; on les claque simultanément dans les deux mains en faisant deux allers et retours.'
    },
    facts: [
      'Le mot "castanet" est dérivé du mot espagnol "castaina" qui signifie "châtaigne".\n' +
      'Les castagnettes moins chères en bois ou en plastique sont peu coûteuses et peuvent être vendues pour aussi peu que 10 $.\n',
      'Bien que les castagnettes aient traditionnellement la forme d\'une coquille concave, elles le sont aussi aujourd\'hui sous d\'autres formes telles que rectangulaire, carrée ou même triangulaire.',
      'Les danseurs utilisent des castagnettes pour accompagner leur danse, mais ils sont également utilisés dans d\'autres musiques, même dans les orchestres actuels.',
      'Les castagnettes sont appelées pulgaretes quand elles sont attachées au pouce des danseuses.'
    ],
    sound: {
      filePath: soundCastanets,
      type: 'audio/wav'
    },
    videoUrl: 'jrVbawRPO7I',
    coordinates: [-3.749220, 40.463667],
    mainImage: mainCastanets,
    secondaryImage: secondaryCastanets,
    thumbnail: thumbCastanets
  },

  {
    id: 5,
    title: 'Koto',
    pronunciation: '[ˈkoː.toː]',
    type: 'Cordes pincées',
    shape: ' Jūshichigen, Nijūgen, Nijūgogen',
    origin: 'Japon',
    year: '  VIIe siècle',
    description: {
      title: 'Un son hypnotisant directement du pays du soleil levant',
      text: 'Le koto (琴 en japonais) est un instrument de musique à cordes pincées utilisé en musique japonaise traditionnelle, notamment dans le kabuki et le bunraku. Originaire de Chine (gŭzhēng), il fut introduit au Japon entre le viie et le viiie siècle et était joué principalement à la Cour impériale ; l\'usage s\'en est ensuite démocratisé.\n' +
        'Le koto produit un son lyrique, comparable à celui d\'une harpe, ce qui peut expliquer le terme souvent rencontré de « harpe japonaise ».\n' +
        'On le retrouve dans des morceaux traditionnels japonais tels que "Sakura" ou "Rokudan".\n' +
        'Parmi les musiciens représentatifs du koto, on trouve d\'abord Yatsuhashi Kengyō (1614-1685) ; puis Michio Miyagi (1894-1956, prononcé Miyagui) et Fumiko Yonekawa, née en 1895 et qui avait, en 1983, 185 000 heures de pratique. Miyagi a développé le koto au début du xxe siècle, important ce langage musical en Europe. Son œuvre Haru no umi (La mer du printemps, pour koto et shakuhachi) est la plus connue des œuvres jouées au koto. Kimio Eto est un interprète moderne. La famille Kawai fait aussi partie des joueurs de koto moderne célèbres.\n'
    },
    facts: [
     'Les joueurs Kimonos traditionnels sont portés tout en jouant le koto.',
      'Yatsuhashi Kengyo était responsable du dev du koto.\n',
      'Au début de la période meiji, la musique occidentale a été introduite au Japon.',
      'Le koto mesure 1,82 mètre.'
    ],
    sound: {
      filePath: soundKoto,
      type: 'audio/wav'
    },
    videoUrl: 'HzdjMLKKdgk',
    coordinates: [139.691706, 35.689487],
    mainImage: mainKoto,
    secondaryImage: secondaryKoto,
    thumbnail: thumbKoto
  },
  {
    id: 6,
    title: 'Guhzeng',
    pronunciation: '[kùʈʂə́ŋ]',
    type: 'Cordes pincées',
    shape: ' Ivoire, Tortoise, Guqin',
    origin: 'Chine',
    year: '  IIIe siècle',
    description: {
      title: 'La douceur de la Chine qui frappe le coeur',
      text: 'Le guzheng (chinois simplifié : 古筝 ; chinois traditionnel : 古箏 ; pinyin : gǔzhēng) est un instrument de musique à cordes pincées traditionnel chinois de la famille des cithares sur table, dont les plus anciennes traces datent du iiie siècle avant notre ère. Gǔ signifie ancien et zhēng veut dire cithare.\n' +
        '\n' +
        'Selon une légende, il y avait un roi qui avait deux filles très douées qui adoraient jouer de cet instrument. Il est arrivé un temps où le roi devient trop vieux et il a envie de passer cet instrument à l\'une d’elles. Cependant, ses deux filles voulaient l’avoir. Le roi était vraiment triste de n’avoir qu\'un seul instrument, et pour finir, désespéré, il décida de couper cet instrument en deux. Une avait douze cordes et l’autre treize. À sa grande surprise, le nouvel instrument avait des sons doux et encore plus beaux que l’original. Le roi, tout content, donna un nouveau nom à ce nouvel instrument : « zheng ».'
    },
    facts: [
      ' Les joueurs de Guzheng utilisent un ruban en tissu qui a été fabriqué pour coller les pics au-dessus de leurs doigts de la main droite. Pas tous, seulement les quatre premiers.',
      'Yatsuhashi Kengyo était responsable du dev du koto.\n',
      'Au début de la période meiji, la musique occidentale a été introduite au Japon.',
      'Le koto mesure 1,82 mètre.'
    ],
    sound: {
      filePath: soundGuzheng,
      type: 'audio/wav'
    },
    videoUrl: '3UZH8AY5s4U',
    coordinates: [104.306095, 43.552971],
    mainImage: mainGuzheng,
    secondaryImage: secondaryGuzheng,
    thumbnail: thumbGuzheng
  },

  {
    id: 7,
    title: 'Pipa',
    pronunciation: '[pʰȅi.pʰȁː]',
    type: 'Cordes pincées',
    shape: ' Biwa, đàn tỳ bà, Bipa',
    origin: 'Chine',
    year: '  IIe siècle',
    description: {
      title: 'Un son qui réprésente la tradition dans la culture asiatique',
      text: 'Le pípa (chinois : 琵琶 ; pinyin : pípa) est un instrument de musique à cordes pincées traditionnel chinois de la famille du luth. Cet instrument apparaît pour la première fois dans des textes datant du iie siècle av. J.-C. La forme dérivée japonaise s\'appelle le biwa.\n' +
        '\n' +
        'Le bibacier (arbre à biba), également appelé néflier du Japon en Occident, tire son nom du chinois pípá guǒ 琵琶果, signifiant fruit [en forme de] pípá (琵琶). La graphie chinoise de l\'arbre a ensuite changé tout en remplaçant la clé des deux pièces de jades utilisé pour les instruments à cordes (珏) par celle du bois destiné aux arbres (木) la prononciation de l\'instrument y est conservée ; pípá 枇杷.'
    },
    facts: [
      'Le pipa moderne s\'appelle le pipa quaxing («pipa au cou tordu») en Chine et a été introduit de l\'Inde en 346-53 de notre ère. Cependant, on dit qu\'il est originaire de l\'ancienne Perse.',
      ' Le quxiang pipa était utilisé pendant les dynasties Sui et Tang à des fins de divertissement et était souvent associé à des chants et des danses ou accompagné d\'un ensemble.\n',
      'Les formes traditionnelles du pipa sont encore utilisées dans le Fujian et le nord du Shaanxi, en dépit de la popularité croissante des formes fabriquées en usine.',
    ],
    sound: {
      filePath: soundPipa,
      type: 'audio/wav'
    },
    videoUrl: 'EAVop3YSebQ',
    coordinates: [23.6978, 120.9605],
    mainImage: mainPipa,
    secondaryImage: secondaryPipa,
    thumbnail: thumbPipa
  },
  {
    id: 8,
    title: 'Cajon',
    pronunciation: '[kaˈxõn]',
    type: 'Percussions',
    shape: ' Bois, Métal',
    origin: 'Peru',
    year: '  XVIIIe siècle',
    description: {
      title: 'Tout le rythme sudamérican directement dans une caisse en bois ',
      text: 'Le cajón est une caisse de résonance parallélépipède, de 50cm x 30cm x 30cm (hauteur/largeur/profondeur) en moyenne. La plaque de frappe (devant) est plus fine que les autres côtés, ce qui permet une élasticité et une résonance propre au cajón. Au dos, un trou d\'environ 10 cm de diamètre permet la sortie du son (même effet qu\'un évent de décompression d\'une enceinte de sono). Un timbre situé sous la plaque supérieure vibre lors de la frappe de l\'instrument. Il permet de différencier les cajones, tout en donnant au son cette ressemblance à la caisse claire de la batterie. '
    },
    facts: [
      'Le mot «cajon» signifie «caisse, boîte ou tiroir».\n',
      'Les premiers cajons étaient souvent fabriqués à partir de cartons d\'expédition apportés sur des navires espagnols de l\'Amérique coloniale espagnole. Les tiroirs de petite commode étaient souvent convertis en instruments aussi souvent que possible.',
      'La musique folk irlandaise a adopté l\'utilisation du cajon dans une grande partie de sa musique.',
      'La société Natur Concept à Boulazac Isle Manoire produit un cajón en carton pliable et biodégradable'
    ],
    sound: {
      filePath: soundCajon,
      type: 'audio/wav'
    },
    videoUrl: 'To2HY9i4ePA',
    coordinates: [-69.1900, -15.0152],
    mainImage: mainCajon,
    secondaryImage: secondaryCajon,
    thumbnail: thumbCajon
  },

];

export default Instruments;