export type Lang = 'fr' | 'en'

export type Dict = Record<string, string>

export const translations: Record<Lang, Dict> = {
  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.bookMe': 'Me contacter',
    'nav.menu': 'Menu',
    'nav.bookSession': 'Réserver une session',
    'nav.directLine': 'Ligne directe',
    'nav.languages': 'Langue',

    // Hero
    'hero.issue': 'N°01 · Printemps/Été 26',
    'hero.location': 'Paris · Cannes · Worldwide',
    'hero.eyebrow': 'Maquilleuse Célébrités & Mode',
    'hero.title.line1': 'L\'art',
    'hero.title.line2': 'de la',
    'hero.title.italic': 'beauté',
    'hero.subtitle':
      'Maquilleuse et coiffeuse italienne basée à Paris. Du tapis rouge à l\'éditorial. Sculpter la lumière, la couleur et l\'émotion depuis 2019.',
    'hero.cta.book': 'Réserver une session',
    'hero.cta.portfolio': 'Voir le portfolio',
    'hero.nowShowing': 'À l\'affiche',
    'hero.scroll': 'Défiler',
    'hero.slide.1': 'Éditorial · Vogue China',
    'hero.slide.2': 'Beauté · Harcourt Paris',
    'hero.slide.3': 'Tapis Rouge · Cannes',
    'hero.slide.4': 'Mode · Givenchy',

    // Marquee
    'marquee.editorial': 'Éditorial',
    'marquee.redCarpet': 'Tapis Rouge',
    'marquee.beauty': 'Beauté',
    'marquee.couture': 'Couture',
    'marquee.fashionWeek': 'Fashion Week',
    'marquee.bridal': 'Mariée',
    'marquee.cinema': 'Cinéma',
    'marquee.vipEvents': 'Événements VIP',
    'marquee.magazine': 'Magazine',
    'marquee.backstage': 'Backstage',

    // Story
    'story.eyebrow': 'L\'Artiste',
    'story.title.line1': 'Un œil italien',
    'story.title.line2': 'pour l\'élégance',
    'story.title.italic': 'parisienne',
    'story.title.dot': '.',
    'story.p1':
      'Cinq éditions consécutives au Festival de Cannes. Travaux éditoriaux pour Vogue China, L\'Oréal Paris, Givenchy et Harcourt Magazine. Une signature : lèvres rouges, ligne parfaite, couleur et forme en pure harmonie.',
    'story.quote': '« Tout est question d\'harmonie de couleurs et de formes. »',
    'story.cta': 'Lire l\'histoire complète',
    'story.captionLeft': 'Œuvres sélectionnées · 2024 / 2025',
    'story.tagSince': 'Depuis 2019',
    'story.stat.1': 'Éditions Cannes',
    'story.stat.2': 'Couvertures éditoriales',
    'story.stat.3': 'Langues',
    'story.stat.4': 'Lèvres rouges',
    'story.shot.1': '01 · Portrait',
    'story.shot.2': '02 · Harcourt',
    'story.shot.3': '03 · Éditorial',
    'story.shot.4': '04 · Cannes',

    // Services preview
    'svc.eyebrow': 'Services',
    'svc.title.line1': 'Du backstage',
    'svc.title.line2': 'à la lumière.',
    'svc.title.italic': 'backstage',
    'svc.intro':
      'Quatre univers, une signature. Chaque prestation pensée comme une œuvre. Précision, élégance, intemporalité.',
    'svc.allServices': 'Tous les services',
    'svc.1.title': 'Tapis Rouge',
    'svc.1.subtitle': 'Premières & Festivals',
    'svc.1.desc':
      'Préparation VIP en hôtels de luxe pour le Festival de Cannes, premières et galas internationaux.',
    'svc.2.title': 'Éditorial',
    'svc.2.subtitle': 'Magazine & Campagnes',
    'svc.2.desc':
      'Direction beauté pour shootings éditoriaux, couvertures magazines et campagnes de mode.',
    'svc.3.title': 'Fashion Week',
    'svc.3.subtitle': 'Défilé & Backstage',
    'svc.3.desc':
      'Looks signature pour défilés et présentations couture à Paris, Milan et Londres.',
    'svc.4.title': 'VIP & Privé',
    'svc.4.subtitle': 'Événements & Mariages',
    'svc.4.desc':
      'Service privé pour événements VIP, mariages d\'exception et soirées sur-mesure.',

    // Gallery carousel
    'gal.eyebrow': 'Portfolio',
    'gal.title.line1': 'Moments',
    'gal.title.italic': 'choisis',
    'gal.cta': 'Voir le portfolio complet',

    // Testimonials
    'press.eyebrow': 'Vu dans',
    'press.title.line1': 'Choisie par',
    'press.title.line2': 'les plus belles',
    'press.title.italic': 'maisons',
    'press.title.line3': '',
    'test.1.quote':
      'Stella transforme un visage en histoire. Cinq années de tapis rouges ensemble, jamais un faux pas.',
    'test.1.author': 'Productrice',
    'test.1.role': 'Festival de Cannes',
    'test.2.quote':
      'Sa main est précise, son timing parfait. Elle comprend la lumière, la matière et l\'émotion en un instant.',
    'test.2.author': 'Rédactrice en chef',
    'test.2.role': 'Magazine de mode',
    'test.3.quote':
      'Le genre d\'artiste qu\'on appelle une fois et qu\'on garde précieusement. Élégance italienne, âme parisienne.',
    'test.3.author': 'Agent de talents',
    'test.3.role': 'Paris',

    // CTA
    'cta.eyebrow': 'Cannes 2026 · du 12 au 23 mai',
    'cta.title.line1': 'Réservations',
    'cta.title.italic': 'ouvertes',
    'cta.title.dot': '.',
    'cta.desc':
      'Réservez votre session pour le Festival de Cannes 2026 : préparation VIP, tapis rouge, shootings et interviews. Disponible également pour vos événements à Paris, Milan et à l\'international.',
    'cta.btn': 'Réserver une date',
    'cta.directLine': 'Ligne directe',
    'cta.languages': 'Langues',
    'cta.langValue': 'Anglais · Français · Italien',
    'cta.basedIn': 'Basée à',
    'cta.basedValue': 'Paris · disponible worldwide',

    // Footer
    'foot.available': 'Disponible worldwide',
    'foot.h.line1': 'Créons ensemble',
    'foot.h.line2': 'quelque chose de beau',
    'foot.h.dot': '.',
    'foot.book': 'Réserver une session',
    'foot.brandTagline':
      'Maquilleuse Célébrités & Mode. Artiste italienne basée à Paris, disponible worldwide pour l\'éditorial, le tapis rouge et les événements VIP.',
    'foot.col.pages': 'Pages',
    'foot.col.services': 'Services',
    'foot.col.locations': 'Destinations',
    'foot.svc.1': 'Tapis Rouge & Premières',
    'foot.svc.2': 'Éditorial & Mode',
    'foot.svc.3': 'Événements VIP',
    'foot.svc.4': 'Mariée Couture',
    'foot.svc.5': 'Sessions Beauté',
    'foot.rights': 'Tous droits réservés',
    'foot.legal.mentions': 'Mentions',
    'foot.legal.privacy': 'Confidentialité',
    'foot.crafted': 'Conçu par',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.bookMe': 'Book me',
    'nav.menu': 'Menu',
    'nav.bookSession': 'Book a session',
    'nav.directLine': 'Direct line',
    'nav.languages': 'Language',

    // Hero
    'hero.issue': 'Issue 01 · Spring/Summer 26',
    'hero.location': 'Paris · Cannes · Worldwide',
    'hero.eyebrow': 'Celebrity & Fashion Makeup Artist',
    'hero.title.line1': 'The art',
    'hero.title.line2': 'of',
    'hero.title.italic': 'beauty',
    'hero.subtitle':
      'Italian makeup & hair artist based in Paris. From red carpet to editorial. Sculpting light, color and emotion since 2019.',
    'hero.cta.book': 'Book a session',
    'hero.cta.portfolio': 'View portfolio',
    'hero.nowShowing': 'Now showing',
    'hero.scroll': 'Scroll',
    'hero.slide.1': 'Editorial · Vogue China',
    'hero.slide.2': 'Beauty · Harcourt Paris',
    'hero.slide.3': 'Red Carpet · Cannes',
    'hero.slide.4': 'Fashion · Givenchy',

    // Marquee
    'marquee.editorial': 'Editorial',
    'marquee.redCarpet': 'Red Carpet',
    'marquee.beauty': 'Beauty',
    'marquee.couture': 'Couture',
    'marquee.fashionWeek': 'Fashion Week',
    'marquee.bridal': 'Bridal',
    'marquee.cinema': 'Cinema',
    'marquee.vipEvents': 'VIP Events',
    'marquee.magazine': 'Magazine',
    'marquee.backstage': 'Backstage',

    // Story
    'story.eyebrow': 'The Artist',
    'story.title.line1': 'An Italian eye',
    'story.title.line2': 'for',
    'story.title.italic': 'Parisian',
    'story.title.dot': ' elegance.',
    'story.p1':
      'Five consecutive editions at the Festival de Cannes. Editorial work for Vogue China, L\'Oréal Paris, Givenchy, and Harcourt Magazine. A signature: red lips, perfect line, color and form in pure harmony.',
    'story.quote': '"It\'s all about harmony of colors and shapes."',
    'story.cta': 'Read the full story',
    'story.captionLeft': 'Selected works · 2024 / 2025',
    'story.tagSince': 'Since 2019',
    'story.stat.1': 'Cannes editions',
    'story.stat.2': 'Editorial covers',
    'story.stat.3': 'Languages',
    'story.stat.4': 'Red lips',
    'story.shot.1': '01 · Portrait',
    'story.shot.2': '02 · Harcourt',
    'story.shot.3': '03 · Editorial',
    'story.shot.4': '04 · Cannes',

    // Services preview
    'svc.eyebrow': 'Services',
    'svc.title.line1': 'From',
    'svc.title.line2': 'to spotlight.',
    'svc.title.italic': 'backstage',
    'svc.intro':
      'Four worlds, one signature. Every service is crafted as a piece of work. Precision, elegance, timelessness.',
    'svc.allServices': 'All services',
    'svc.1.title': 'Red Carpet',
    'svc.1.subtitle': 'Premieres & Festivals',
    'svc.1.desc':
      'VIP preparation in luxury hotels for Festival de Cannes, premieres and international galas.',
    'svc.2.title': 'Editorial',
    'svc.2.subtitle': 'Magazine & Campaigns',
    'svc.2.desc':
      'Beauty direction for editorial shoots, magazine covers and fashion campaigns.',
    'svc.3.title': 'Fashion Week',
    'svc.3.subtitle': 'Runway & Backstage',
    'svc.3.desc':
      'Signature looks for runway shows and couture presentations in Paris, Milan and London.',
    'svc.4.title': 'VIP & Private',
    'svc.4.subtitle': 'Events & Weddings',
    'svc.4.desc':
      'Private service for VIP events, exceptional weddings and bespoke evenings.',

    // Gallery carousel
    'gal.eyebrow': 'Portfolio',
    'gal.title.line1': 'Selected',
    'gal.title.italic': 'moments',
    'gal.cta': 'Open the full portfolio',

    // Testimonials
    'press.eyebrow': 'As seen in',
    'press.title.line1': 'Trusted by the',
    'press.title.italic': 'finest houses',
    'press.title.line3': '.',
    'press.title.line2': '',
    'test.1.quote':
      'Stella transforms a face into a story. Five years of red carpets together, never a misstep.',
    'test.1.author': 'Producer',
    'test.1.role': 'Festival de Cannes',
    'test.2.quote':
      'Her hand is precise, her timing perfect. She understands light, fabric and emotion at once.',
    'test.2.author': 'Editor in chief',
    'test.2.role': 'Fashion Magazine',
    'test.3.quote':
      'The kind of artist you book once and keep on speed dial. Italian elegance with Parisian soul.',
    'test.3.author': 'Talent agent',
    'test.3.role': 'Paris',

    // CTA
    'cta.eyebrow': 'Cannes 2026 · May 12 to 23',
    'cta.title.line1': 'Bookings',
    'cta.title.italic': 'are open',
    'cta.title.dot': '.',
    'cta.desc':
      'Reserve your session for the Festival de Cannes 2026 : VIP preparation, red carpet, shootings and interviews. Also available for events in Paris, Milan and worldwide.',
    'cta.btn': 'Reserve a date',
    'cta.directLine': 'Direct line',
    'cta.languages': 'Languages',
    'cta.langValue': 'English · Français · Italiano',
    'cta.basedIn': 'Based in',
    'cta.basedValue': 'Paris · available worldwide',

    // Footer
    'foot.available': 'Available worldwide',
    'foot.h.line1': "Let's create",
    'foot.h.line2': 'something beautiful',
    'foot.h.dot': '.',
    'foot.book': 'Book a session',
    'foot.brandTagline':
      'Celebrity & Fashion Makeup Artist. Italian artist based in Paris, available worldwide for editorial, red carpet and VIP events.',
    'foot.col.pages': 'Pages',
    'foot.col.services': 'Services',
    'foot.col.locations': 'Locations',
    'foot.svc.1': 'Red Carpet & Premieres',
    'foot.svc.2': 'Editorial & Fashion',
    'foot.svc.3': 'VIP Events',
    'foot.svc.4': 'Bridal Couture',
    'foot.svc.5': 'Beauty Sessions',
    'foot.rights': 'All rights reserved',
    'foot.legal.mentions': 'Legal',
    'foot.legal.privacy': 'Privacy',
    'foot.crafted': 'Crafted by',
  },
}
