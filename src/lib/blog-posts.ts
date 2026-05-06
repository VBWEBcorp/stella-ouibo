export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  author: string
  publishedAt: string // ISO date
  coverImage: string
  metaTitle: string
  metaDescription: string
  content: string // HTML
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cours-de-maquillage-prive-paris-formation-professionnelle',
    title:
      'Cours de maquillage privé à Paris : se former auprès d\'une artiste internationale',
    excerpt:
      'Apprendre la technique minimaliste signature de Stella : valoriser sans transformer. Cours privés ou collectifs, en présentiel ou en ligne, pour passionnées et futures professionnelles.',
    category: 'Masterclass',
    tags: [
      'cours de maquillage',
      'masterclass',
      'formation maquilleuse',
      'paris',
      'makeup lesson',
    ],
    author: 'Claudia Stella Ceriani',
    publishedAt: '2026-04-12T09:00:00.000Z',
    coverImage:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1800&q=85',
    metaTitle:
      'Cours de maquillage à Paris · Formation par Claudia Stella, MUA international',
    metaDescription:
      'Cours de maquillage privés ou collectifs à Paris, à domicile ou en ligne. Apprenez la technique minimaliste signature Stella avec une artiste internationale (Vogue, L\'Oréal, Givenchy).',
    content: `
<p>Vous voulez apprendre à vous maquiller comme une professionnelle, ou faire de votre passion votre métier ? Mes cours privés et collectifs à Paris transmettent une méthode pensée pour la lumière, la matière et l'émotion — la signature <strong>« Less is more »</strong> que j'ai construite après cinq éditions au Festival de Cannes et des collaborations avec Vogue China, L'Oréal Paris ou Givenchy.</p>

<h2>À qui s'adressent ces cours ?</h2>

<p>La formation est ouverte à plusieurs niveaux, et le programme est entièrement personnalisé selon votre objectif.</p>

<ul>
  <li><strong>Particulières passionnées</strong> qui souhaitent apprendre à se maquiller au quotidien, pour le travail, ou pour des occasions spéciales (mariage, soirées, photos).</li>
  <li><strong>Futures maquilleuses professionnelles</strong> qui veulent maîtriser les fondamentaux avant d'entrer en école ou de se lancer en freelance.</li>
  <li><strong>Maquilleuses confirmées</strong> qui cherchent à perfectionner une technique précise : l'œil de biche, le rouge mat parfait, le teint « no makeup ».</li>
  <li><strong>Marques et entreprises</strong> qui souhaitent former leurs équipes (vendeuses, ambassadrices, employées) à représenter une image de marque.</li>
</ul>

<h2>La méthode : valoriser, pas transformer</h2>

<p>Mon approche tient en une phrase : <em>« It's all about harmony of colors and shapes. »</em> Le maquillage n'est pas un masque, c'est un cadre. L'objectif n'est jamais de cacher un visage, mais de révéler ce qu'il a déjà à offrir, avec la précision d'un trait juste et la discrétion d'un geste sûr.</p>

<h3>Le visage avant le maquillage</h3>

<p>La première heure d'un cours est souvent la plus importante : <strong>analyser le visage</strong>. Forme des yeux, structure des os, qualité de la peau, couleur des lèvres au repos. Avant de toucher un pinceau, on comprend où la lumière tombe naturellement — et où elle manque.</p>

<h3>La précision du trait</h3>

<p>Un eye-liner mal posé fatigue un regard. Un blush mal placé alourdit un visage. Je passe beaucoup de temps sur la <strong>précision gestuelle</strong> : tenir un pinceau, doser un produit, savoir s'arrêter. Cette discipline, c'est ce qui sépare un maquillage « cheap » d'un maquillage couture.</p>

<h3>Le rouge à lèvres parfait</h3>

<p>C'est ma signature. Le rouge à lèvres parfait n'est pas une couleur, c'est une <strong>ligne</strong>. Je vous apprends à dessiner la bouche selon votre morphologie, à choisir la texture (mate, satinée, glossée) selon l'occasion, et à la faire tenir sans retoucher pendant des heures.</p>

<h2>Trois formats, un objectif</h2>

<p>Les cours sont disponibles dans plusieurs formats, selon votre disponibilité et votre lieu.</p>

<ul>
  <li><strong>En présentiel à Paris</strong> — sessions individuelles ou en duo dans un studio dédié, à proximité du métro Champs-Élysées. Lumière naturelle, matériel professionnel fourni.</li>
  <li><strong>À domicile</strong> — je me déplace chez vous, à Paris et région parisienne, ou ailleurs en France et à l'international sur demande. Idéal pour préparer un événement avec un cours en amont.</li>
  <li><strong>En ligne (visioconférence)</strong> — pour les élèves qui ne peuvent pas se déplacer. Cours en direct, exercices guidés, retour personnalisé sur vos progrès.</li>
</ul>

<h2>Cours privés ou collectifs ?</h2>

<p>Le <strong>cours privé</strong> permet une attention totale, un programme cousu main, et une progression rapide. C'est le format que je recommande pour les futures professionnelles ou les élèves qui ont un objectif précis (apprendre à se maquiller pour son mariage, par exemple).</p>

<p>Le <strong>cours collectif</strong> (deux à six personnes) est parfait entre amies, pour un EVJF, ou pour une équipe d'entreprise. L'énergie de groupe est stimulante, et les échanges entre participantes enrichissent l'apprentissage.</p>

<blockquote>
  <p>Un team working entre moi et l'élève. Confiance, bonne humeur, précision. C'est dans cette ambiance qu'on apprend le mieux.</p>
</blockquote>

<h2>Réserver une session</h2>

<p>Les cours sont disponibles sur réservation, au tarif sur devis selon le format choisi et la durée. Je propose des sessions à partir de deux heures pour les particulières, et des programmes complets sur plusieurs séances pour les futures professionnelles.</p>

<p>Pour réserver ou demander un programme personnalisé, écrivez-moi à <a href="mailto:stella.ceriani.mua@gmail.com">stella.ceriani.mua@gmail.com</a> ou via la <a href="/contact">page contact</a>. Réponse sous vingt-quatre heures.</p>
`,
  },
  {
    slug: 'maquillage-tapis-rouge-festival-cannes-vip',
    title:
      'Maquillage tapis rouge : préparer une célébrité pour le Festival de Cannes',
    excerpt:
      'Cinq éditions consécutives, des préparations VIP au Ritz, des projecteurs aux flashs : les coulisses d\'un maquillage pensé pour la lumière, le mouvement et l\'émotion.',
    category: 'Coulisses',
    tags: [
      'tapis rouge',
      'festival de cannes',
      'celebrity makeup',
      'vip makeup',
      'red carpet',
    ],
    author: 'Claudia Stella Ceriani',
    publishedAt: '2026-04-26T10:00:00.000Z',
    coverImage:
      'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=1800&q=85',
    metaTitle:
      'Maquillage tapis rouge Cannes · Préparation VIP par Claudia Stella',
    metaDescription:
      'Coulisses d\'un maquillage de célébrité pour le Festival de Cannes : préparation VIP en hôtel de luxe, tenue 12h sous les flashs, retouches sur place. Bookings 2026 ouverts.',
    content: `
<p>Cinq éditions consécutives au Festival de Cannes, des palaces au tapis rouge, des hôtels de luxe aux interviews télé : préparer une célébrité pour la Croisette est une discipline à part. Voici comment se déroule une journée type, et ce que cela demande quand on est <strong>maquilleuse VIP pour Cannes</strong>.</p>

<h2>Avant le tapis : la préparation en suite</h2>

<p>Tout commence souvent à l'hôtel — le Ritz, le Carlton, le Majestic. La talent (actrice, mannequin, ambassadrice de marque) arrive après une journée d'interviews. La pression est réelle : les photographes attendent, l'attaché de presse veille, l'attente des fans est palpable. Mon rôle, c'est de <strong>créer une bulle</strong>.</p>

<h3>Le brief avec la talent</h3>

<p>Cinq minutes suffisent pour comprendre la robe, l'humeur, le besoin du moment. Une talent qui a peu dormi n'a pas besoin du même maquillage qu'une autre rentrée fraîche d'un déjeuner sur la plage. Je m'adapte. Toujours.</p>

<h3>Le choix de la palette</h3>

<p>La couleur du <strong>tapis rouge</strong> est tirante. Elle « tape » sur le visage, surtout sous les flashs. Il faut donc travailler en complémentaire : un peu plus de pêche pour réchauffer, un peu plus de bleu sur le contour de l'œil pour neutraliser, jamais trop de rose qui amalgame avec le rouge du sol.</p>

<h2>Tenir douze heures sous les flashs</h2>

<p>Un tapis rouge dure rarement plus de quinze minutes. Mais avant et après, il y a la projection, le dîner, l'after-party. Le maquillage doit donc <strong>résister sans se figer</strong>.</p>

<h3>La base</h3>

<p>Une peau Cannes commence par un sérum hydratant, suivi d'une crème adaptée à la lumière (pas trop matifiante, jamais trop satinée — les flashs trahissent les deux extrêmes). Le fond de teint est posé en couches très fines, ciblées : T zone, ailes du nez, contour bouche. Le reste reste « peau ». La photo doit garder <em>la matière</em>.</p>

<h3>Les yeux</h3>

<p>Un œil tapis rouge, c'est rarement un smoky. C'est plus souvent un trait précis — eye-liner ou ombre satinée — qui ouvre le regard sans alourdir. Le mascara est résistant à l'eau (les émotions, les flashs, les larmes de joie : tout y passe).</p>

<h3>La bouche</h3>

<p>Ma signature. Un rouge à lèvres mat ou semi-mat, dessiné au crayon ton sur ton, posé en deux passages avec une mouchoir entre les couches. Tient cinq heures sans retouche. Et reste photogénique — c'est-à-dire qu'il ne « brille » pas mal sous les flashs.</p>

<h2>Les retouches in-situ</h2>

<p>Je ne quitte jamais une talent au moment du tapis. J'ai toujours un kit minimal sur moi (poudre libre, baume, mouchoir, crayon yeux, rouge à lèvres exact). Trente secondes avant les marches : retouche bouche. À la sortie de la projection : matifiage léger. Avant l'after : changement complet possible si la robe change.</p>

<blockquote>
  <p>Un maquillage Cannes n'est jamais un produit fini. C'est un dialogue continu avec la talent et avec la lumière.</p>
</blockquote>

<h2>Cannes 2026 : bookings ouverts</h2>

<p>Le <strong>Festival de Cannes 2026</strong> se tiendra du 12 au 23 mai. Je suis disponible pour les préparations VIP en hôtel, les interviews, les premières et les after-parties. Je travaille seule ou en équipe avec un coiffeur, un styliste, un attaché de presse.</p>

<p>Pour les agents, attachées de presse et talents qui souhaitent réserver une session, écrivez à <a href="mailto:stella.ceriani.mua@gmail.com">stella.ceriani.mua@gmail.com</a> ou via la <a href="/contact">page contact</a>. Confidentialité absolue.</p>
`,
  },
  {
    slug: 'maquillage-mariee-luxe-less-is-more',
    title:
      'Maquillage de mariée : la philosophie « Less is more » pour un look intemporel',
    excerpt:
      'Une mariée, c\'est avant tout un visage. La signature minimaliste pour un maquillage qui dure, qui photographie et qui ne vieillit pas dans les albums.',
    category: 'Mariage',
    tags: [
      'maquillage mariée',
      'wedding makeup',
      'mariage de luxe',
      'bridal',
      'less is more',
    ],
    author: 'Claudia Stella Ceriani',
    publishedAt: '2026-05-03T09:30:00.000Z',
    coverImage:
      'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1800&q=85',
    metaTitle:
      'Maquillage de mariée à Paris · Luxe « Less is more » par Stella Ceriani',
    metaDescription:
      'Maquillage de mariée minimaliste, intemporel et résistant. Préparation en suite, essai préalable, retouches sur place. Pour mariages de luxe à Paris, Cannes et à l\'international.',
    content: `
<p>Une mariée, c'est d'abord un visage. Pas une couleur, pas une mode. Un visage qu'on retrouvera dans dix ans en tournant les pages de l'album, et qu'on espère reconnaître. C'est pour ça que je travaille toujours sous le même principe : <strong>« Less is more »</strong>.</p>

<h2>Valoriser, jamais transformer</h2>

<p>Le piège, en mariage, c'est de vouloir « faire trop » pour le grand jour. Un maquillage trop chargé fige le visage sur les photos, accentue les traits sous la chaleur de l'émotion, et — pire — vieillit. Une mariée maquillée comme en 2018 a déjà l'air datée en 2026.</p>

<p>Mon approche est différente. Je travaille un teint frais, un regard ouvert, une bouche dessinée. <strong>Tout ce qui valorise reste subtil.</strong> Tout ce qui distrait disparaît. Le résultat : on regarde la mariée, pas son maquillage.</p>

<h2>L'essai : un moment pivot</h2>

<p>L'essai n'est pas une formalité. C'est une vraie séance de travail, deux à quatre semaines avant le mariage, qui sert plusieurs choses.</p>

<h3>Le calendrier</h3>

<p>Je recommande l'essai <strong>quatre à six semaines avant</strong> la cérémonie. Cela laisse le temps de tester un autre look si besoin, de commander des produits spécifiques, et de coordonner avec le coiffeur si je n'assure pas la coiffure moi-même.</p>

<h3>Le brief beauté</h3>

<p>On échange sur la robe, le voile, les bijoux, le lieu, l'heure de la cérémonie. Une robe haute couture en plein soleil méditerranéen ne demande pas le même maquillage qu'une robe Empire dans une chapelle parisienne en hiver. La <strong>lumière</strong> et la <strong>matière</strong> dictent la palette.</p>

<h2>Le jour J : la préparation</h2>

<p>Je me déplace en suite (chez la mariée, à l'hôtel, dans la villa). La préparation dure entre 1h30 et 2h, selon le programme.</p>

<h3>La peau</h3>

<p>Tout commence par un soin court : nettoyage doux, sérum, crème adaptée. Le fond de teint est posé très progressivement, en couches micro-fines. La peau garde sa <strong>matière naturelle</strong> — c'est ce qui donnera la magie sur les photos pro et sur les vidéos téléphone des invités.</p>

<h3>Le regard</h3>

<p>Un regard de mariée, c'est un regard qui doit <strong>résister à l'émotion</strong>. Mascara waterproof, eye-liner discret, pas d'ombre lourde. Si on rajoute des cils, ils sont posés à l'unité, jamais en bandeau (qui se voit toujours sur les photos rapprochées).</p>

<h3>La bouche</h3>

<p>Ma signature, encore : un rouge ou un rose nude posé au pinceau, dessiné au crayon ton sur ton. Tient pendant la cérémonie, le cocktail, et les photos de groupe. <strong>Une retouche entre la cérémonie et le dîner suffit.</strong></p>

<h2>Le cortège : maman, demoiselles d'honneur</h2>

<p>Je propose un forfait <strong>cortège complet</strong>, avec préparation de la maman de la mariée et des témoins ou demoiselles d'honneur. Chaque maquillage est pensé en harmonie avec celui de la mariée — sans copier — pour que les photos de groupe soient cohérentes sans être répétitives.</p>

<h2>Les retouches sur place</h2>

<p>Je peux rester sur place pendant tout l'événement, ou repasser une à deux fois pour des retouches stratégiques (avant les photos officielles, avant l'ouverture du bal). C'est une option discrète mais précieuse pour les mariages internationaux ou les célébrations qui durent plusieurs jours.</p>

<blockquote>
  <p>Une mariée doit pouvoir pleurer, rire, danser, embrasser ses invités, et ressortir aussi belle qu'elle est entrée. C'est tout l'objectif.</p>
</blockquote>

<h2>Réserver pour 2026</h2>

<p>Je prends actuellement des bookings pour les <strong>mariages de la saison 2026</strong>, à Paris, sur la Côte d'Azur, en Italie et à l'international. Tarif sur devis, calendrier ouvert sur l'année.</p>

<p>Pour discuter de votre mariage et recevoir une proposition personnalisée, écrivez à <a href="mailto:stella.ceriani.mua@gmail.com">stella.ceriani.mua@gmail.com</a> ou utilisez le formulaire de la <a href="/contact">page contact</a>.</p>
`,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map((p) => p.category)))
}
