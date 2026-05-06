export type Lang = 'fr' | 'en'

export type Dict = Record<string, string>

export const translations: Record<Lang, Dict> = {
  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.masterclass': 'Cours',
    'nav.contact': 'Contact',
    'nav.bookMe': 'Me contacter',
    'nav.menu': 'Menu',
    'nav.bookSession': 'Réserver une session',
    'nav.directLine': 'Ligne directe',
    'nav.languages': 'Langue',

    // Hero — style TWG
    'hero.headerLabel': 'Stella C. — Artist',
    'hero.location': 'Paris · Worldwide',
    'hero.eyebrow': 'Maquilleuse Mode, Célébrités & Événementiel',
    'hero.title.line1': 'Less',
    'hero.title.line2': 'is more',
    'hero.title.dot': '.',
    'hero.subtitle':
      'Maquilleuse de mode, célébrités et événementiel. Service de luxe, sans limite de déplacement. Une esthétique magnétique qui valorise sans transformer.',
    'hero.cta.book': 'Me contacter',
    'hero.cta.portfolio': 'Voir le portfolio',
    'hero.nowShowing': 'Sélection',
    'hero.scroll': 'Défiler',
    'hero.captionName': 'Claudia Stella',
    'hero.captionRole': 'Maquillage',
    'hero.slide.1.client': 'Vogue China',
    'hero.slide.1.role': 'Beauty Editorial',
    'hero.slide.2.client': 'Harcourt Paris',
    'hero.slide.2.role': 'Portrait',
    'hero.slide.3.client': 'Festival de Cannes',
    'hero.slide.3.role': 'Tapis Rouge',
    'hero.slide.4.client': 'Givenchy',
    'hero.slide.4.role': 'Beauty Campaign',

    // Signature "Less is more"
    'sig.eyebrow': 'Philosophie',
    'sig.title': 'Less is more.',
    'sig.body':
      'Un maquillage minimaliste, d\'impact, qui se fond dans la beauté naturelle. Le détail soigné qui valorise sans transformer. Une esthétique magnétique qui capture l\'attention, sans jamais l\'exagérer.',
    'sig.cite': '— Claudia Stella',

    // Selected Work (TWG-like)
    'work.eyebrow': 'Selected Work',
    'work.title': 'Travaux sélectionnés.',
    'work.cta': 'Voir le portfolio complet',
    'work.1.role': 'Maquillage',
    'work.1.client': 'Vogue China · Ritz Paris',
    'work.2.role': 'Beauty & Hair',
    'work.2.client': 'Harcourt Magazine',
    'work.3.role': 'Maquillage',
    'work.3.client': 'L\'Oréal Paris',
    'work.4.role': 'Beauty',
    'work.4.client': 'Givenchy',
    'work.5.role': 'Tapis Rouge',
    'work.5.client': 'Festival de Cannes',
    'work.6.role': 'Bridal Couture',
    'work.6.client': 'Wedding Paris',
    'work.7.role': 'Editorial',
    'work.7.client': 'Magazine — Spring 2025',
    'work.8.role': 'Backstage',
    'work.8.client': 'Fashion Week',

    // Marquee
    'marquee.editorial': 'Editorial',
    'marquee.redCarpet': 'Red Carpet',
    'marquee.beauty': 'Beauty',
    'marquee.couture': 'Couture',
    'marquee.fashionWeek': 'Fashion Week',
    'marquee.bridal': 'Bridal',
    'marquee.corporate': 'Corporate',
    'marquee.vipEvents': 'VIP Events',
    'marquee.masterclass': 'Masterclass',
    'marquee.backstage': 'Backstage',

    // Story
    'story.eyebrow': 'L\'Artiste',
    'story.title.line1': 'La technique',
    'story.title.line2': 'rencontre la',
    'story.title.italic': 'sensibilité',
    'story.title.dot': '.',
    'story.p1':
      'La bonne réussite réside dans l\'ensemble de la technique et de la personnalité. Avant chaque création, savoir écouter et observer, entrer en contact avec l\'univers du client.',
    'story.p2':
      'Italienne basée à Paris, Claudia conjugue exigence couture italienne et élégance parisienne. Cinq éditions consécutives au Festival de Cannes, des collaborations avec Vogue China, L\'Oréal, Givenchy et Harcourt.',
    'story.quote': '« Un team working entre moi et le client. Confiance, bonne humeur, précision. »',
    'story.cta': 'Lire l\'histoire complète',
    'story.captionLeft': 'Studio · Paris',
    'story.tagSince': 'Depuis 2019',
    'story.stat.1': 'Éditions Cannes',
    'story.stat.2': 'Couvertures éditoriales',
    'story.stat.3': 'Langues',
    'story.stat.4': 'Lèvres rouges',
    'story.shot.1': '01 · Portrait',
    'story.shot.2': '02 · Harcourt',
    'story.shot.3': '03 · Editorial',
    'story.shot.4': '04 · Cannes',

    // Values
    'val.eyebrow': 'Valeurs',
    'val.title': 'Cinq mots, une signature.',
    'val.1.title': 'Empathie',
    'val.1.desc': 'Écouter, observer, entrer dans l\'univers du client avant de créer.',
    'val.2.title': 'Qualité',
    'val.2.desc': 'Une exigence absolue, du choix des produits au geste final.',
    'val.3.title': 'Fiabilité',
    'val.3.desc': 'Ponctualité, discrétion, confidentialité — toujours.',
    'val.4.title': 'Élégance',
    'val.4.desc': 'Intemporelle. Une beauté qui ne se démode pas.',
    'val.5.title': 'Précision',
    'val.5.desc': 'Le rouge à lèvres parfait n\'est pas une couleur, c\'est une ligne.',

    // Services preview
    'svc.eyebrow': 'Services',
    'svc.title.line1': 'Cinq univers,',
    'svc.title.line2': 'une signature.',
    'svc.intro':
      'Maquillage et coiffure de luxe, sans limite de déplacement. Pour clients privés, marques, productions et futures maquilleuses.',
    'svc.allServices': 'Tous les services',
    'svc.1.title': 'Mode & Éditorial',
    'svc.1.subtitle': 'Magazines · Campagnes',
    'svc.1.desc':
      'Direction beauté pour shootings éditoriaux, couvertures et campagnes pour marques de luxe et magazines.',
    'svc.2.title': 'Célébrités & Tapis Rouge',
    'svc.2.subtitle': 'Festivals · Premières',
    'svc.2.desc':
      'Préparation VIP en hôtels de luxe pour le Festival de Cannes, premières et galas. Cinq éditions consécutives.',
    'svc.3.title': 'Événementiel & Corporate',
    'svc.3.subtitle': 'Galas · Marques · Privé',
    'svc.3.desc':
      'Service privé pour entreprises, marques, soirées de gala et clients particuliers.',
    'svc.4.title': 'Mariage Couture',
    'svc.4.subtitle': 'Brides · Cortège',
    'svc.4.desc':
      'Mariages d\'exception, mariées et cortège. Préparation en suite, retouches, coiffure intégrée.',
    'svc.5.title': 'Masterclass & Cours',
    'svc.5.subtitle': 'École · À domicile · En ligne',
    'svc.5.desc':
      'Cours privés ou collectifs pour futures maquilleuses. Transmission de la technique minimaliste signature Stella.',

    // Selected editorials (TWG-like grid)
    'ed.eyebrow': 'Latest Editorials',
    'ed.title': 'Derniers éditoriaux.',

    // Audience — "Pour qui ?"
    'aud.eyebrow': 'Clientèle',
    'aud.title': 'Pour qui.',
    'aud.intro':
      'Une clientèle de luxe, partout dans le monde. Du shooting éditorial au mariage couture, du board d\'entreprise au backstage Fashion Week.',
    'aud.1': 'Clients privés',
    'aud.2': 'Maisons & Marques',
    'aud.3': 'Mariages couture',
    'aud.4': 'Photographes & Productions',
    'aud.5': 'Agences (mode, pub, beauté)',
    'aud.6': 'PR & Marketing',
    'aud.7': 'Corporate & Entreprises',
    'aud.8': 'Futures maquilleuses',

    // Featured Campaign (TWG-style full-bleed)
    'feat.eyebrow': 'Featured Campaign',
    'feat.client': 'Vogue China',
    'feat.role': 'Maquillage Stella Ceriani',
    'feat.context': 'Beauty Editorial · Ritz Paris',

    // Press
    'press.eyebrow': 'Vu dans',
    'press.title.line1': 'Choisie par les',
    'press.title.italic': 'plus belles maisons',
    'press.title.dot': '.',
    'press.title.line2': '',
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
      'Réservez votre session pour le Festival de Cannes 2026 : préparation VIP, tapis rouge, shootings et interviews. Disponible également pour vos événements à Paris, Milan, Londres et à l\'international.',
    'cta.btn': 'Réserver une date',
    'cta.directLine': 'Ligne directe',
    'cta.languages': 'Langues',
    'cta.langValue': 'Anglais · Français · Italien',
    'cta.basedIn': 'Basée à',
    'cta.basedValue': 'Paris · disponible worldwide',

    // Footer
    'foot.available': 'Available worldwide',
    'foot.h.line1': 'Less is more.',
    'foot.h.line2': '',
    'foot.h.dot': '',
    'foot.book': 'Réserver une session',
    'foot.brandTagline':
      'Maquilleuse mode, célébrités et événementiel. Italienne basée à Paris, sans limite de déplacement.',
    'foot.col.pages': 'Navigation',
    'foot.col.services': 'Services',
    'foot.col.locations': 'Destinations',
    'foot.svc.1': 'Mode & Éditorial',
    'foot.svc.2': 'Tapis Rouge',
    'foot.svc.3': 'Événementiel',
    'foot.svc.4': 'Mariage',
    'foot.svc.5': 'Masterclass',
    'foot.rights': 'Tous droits réservés',
    'foot.legal.mentions': 'Mentions',
    'foot.legal.privacy': 'Confidentialité',
    'foot.crafted': 'Crafted by',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.masterclass': 'Masterclass',
    'nav.contact': 'Contact',
    'nav.bookMe': 'Book me',
    'nav.menu': 'Menu',
    'nav.bookSession': 'Book a session',
    'nav.directLine': 'Direct line',
    'nav.languages': 'Language',

    // Hero
    'hero.headerLabel': 'Stella C. · Artist',
    'hero.location': 'Paris · Worldwide',
    'hero.eyebrow': 'Fashion, Celebrity & Event Makeup Artist',
    'hero.title.line1': 'Less',
    'hero.title.line2': 'is more',
    'hero.title.dot': '.',
    'hero.subtitle':
      'Fashion, celebrity and event makeup artist. Luxury service, no travel limits. A magnetic aesthetic that elevates without transforming.',
    'hero.cta.book': 'Book me',
    'hero.cta.portfolio': 'View portfolio',
    'hero.nowShowing': 'Selection',
    'hero.scroll': 'Scroll',
    'hero.captionName': 'Claudia Stella',
    'hero.captionRole': 'Makeup',
    'hero.slide.1.client': 'Vogue China',
    'hero.slide.1.role': 'Beauty Editorial',
    'hero.slide.2.client': 'Harcourt Paris',
    'hero.slide.2.role': 'Portrait',
    'hero.slide.3.client': 'Festival de Cannes',
    'hero.slide.3.role': 'Red Carpet',
    'hero.slide.4.client': 'Givenchy',
    'hero.slide.4.role': 'Beauty Campaign',

    // Signature
    'sig.eyebrow': 'Philosophy',
    'sig.title': 'Less is more.',
    'sig.body':
      'A minimalist makeup with impact, blending into natural beauty. A detail of care that elevates without transforming. A magnetic aesthetic that captures attention, never overstates it.',
    'sig.cite': '— Claudia Stella',

    // Selected Work
    'work.eyebrow': 'Selected Work',
    'work.title': 'Selected work.',
    'work.cta': 'Open the full portfolio',
    'work.1.role': 'Makeup',
    'work.1.client': 'Vogue China · Ritz Paris',
    'work.2.role': 'Beauty & Hair',
    'work.2.client': 'Harcourt Magazine',
    'work.3.role': 'Makeup',
    'work.3.client': 'L\'Oréal Paris',
    'work.4.role': 'Beauty',
    'work.4.client': 'Givenchy',
    'work.5.role': 'Red Carpet',
    'work.5.client': 'Festival de Cannes',
    'work.6.role': 'Bridal Couture',
    'work.6.client': 'Wedding Paris',
    'work.7.role': 'Editorial',
    'work.7.client': 'Magazine · Spring 2025',
    'work.8.role': 'Backstage',
    'work.8.client': 'Fashion Week',

    // Marquee
    'marquee.editorial': 'Editorial',
    'marquee.redCarpet': 'Red Carpet',
    'marquee.beauty': 'Beauty',
    'marquee.couture': 'Couture',
    'marquee.fashionWeek': 'Fashion Week',
    'marquee.bridal': 'Bridal',
    'marquee.corporate': 'Corporate',
    'marquee.vipEvents': 'VIP Events',
    'marquee.masterclass': 'Masterclass',
    'marquee.backstage': 'Backstage',

    // Story
    'story.eyebrow': 'The Artist',
    'story.title.line1': 'Technique',
    'story.title.line2': 'meets',
    'story.title.italic': 'sensibility',
    'story.title.dot': '.',
    'story.p1':
      'True success lies in the balance of technique and personality. Before any creation, listening and observing, stepping into the client\'s universe.',
    'story.p2':
      'Italian, based in Paris, Claudia blends Italian couture rigour and Parisian elegance. Five consecutive editions at the Festival de Cannes, collaborations with Vogue China, L\'Oréal, Givenchy and Harcourt.',
    'story.quote': '"A team working between me and the client. Trust, good humour, precision."',
    'story.cta': 'Read the full story',
    'story.captionLeft': 'Studio · Paris',
    'story.tagSince': 'Since 2019',
    'story.stat.1': 'Cannes editions',
    'story.stat.2': 'Editorial covers',
    'story.stat.3': 'Languages',
    'story.stat.4': 'Red lips',
    'story.shot.1': '01 · Portrait',
    'story.shot.2': '02 · Harcourt',
    'story.shot.3': '03 · Editorial',
    'story.shot.4': '04 · Cannes',

    // Values
    'val.eyebrow': 'Values',
    'val.title': 'Five words, one signature.',
    'val.1.title': 'Empathy',
    'val.1.desc': 'Listen, observe, step into the client\'s universe before creating.',
    'val.2.title': 'Quality',
    'val.2.desc': 'Absolute standards, from product choice to the final gesture.',
    'val.3.title': 'Reliability',
    'val.3.desc': 'Punctuality, discretion, confidentiality — always.',
    'val.4.title': 'Elegance',
    'val.4.desc': 'Timeless. Beauty that doesn\'t age.',
    'val.5.title': 'Precision',
    'val.5.desc': 'A perfect red lip isn\'t a colour, it\'s a line.',

    // Services
    'svc.eyebrow': 'Services',
    'svc.title.line1': 'Five worlds,',
    'svc.title.line2': 'one signature.',
    'svc.intro':
      'Luxury makeup and hair, with no travel limits. For private clients, brands, productions and future makeup artists.',
    'svc.allServices': 'All services',
    'svc.1.title': 'Fashion & Editorial',
    'svc.1.subtitle': 'Magazines · Campaigns',
    'svc.1.desc':
      'Beauty direction for editorial shoots, magazine covers and campaigns for luxury brands.',
    'svc.2.title': 'Celebrity & Red Carpet',
    'svc.2.subtitle': 'Festivals · Premieres',
    'svc.2.desc':
      'VIP preparation in luxury hotels for Festival de Cannes, premieres and galas. Five consecutive editions.',
    'svc.3.title': 'Events & Corporate',
    'svc.3.subtitle': 'Galas · Brands · Private',
    'svc.3.desc':
      'Private service for companies, brands, gala evenings and private clients.',
    'svc.4.title': 'Bridal Couture',
    'svc.4.subtitle': 'Brides · Bridal Party',
    'svc.4.desc':
      'Exceptional weddings, brides and bridal party. In-suite preparation, touch-ups, integrated hair styling.',
    'svc.5.title': 'Masterclass & Lessons',
    'svc.5.subtitle': 'School · Home · Online',
    'svc.5.desc':
      'Private or group lessons for future makeup artists. Transmitting Stella\'s signature minimalist technique.',

    // Latest editorials
    'ed.eyebrow': 'Latest Editorials',
    'ed.title': 'Latest editorials.',

    // Audience
    'aud.eyebrow': 'Clientele',
    'aud.title': 'For whom.',
    'aud.intro':
      'Luxury clients, all over the world. From editorial shoots to couture weddings, from corporate boards to Fashion Week backstage.',
    'aud.1': 'Private clients',
    'aud.2': 'Houses & Brands',
    'aud.3': 'Couture weddings',
    'aud.4': 'Photographers & Productions',
    'aud.5': 'Agencies (fashion, ad, beauty)',
    'aud.6': 'PR & Marketing',
    'aud.7': 'Corporate',
    'aud.8': 'Future makeup artists',

    // Featured
    'feat.eyebrow': 'Featured Campaign',
    'feat.client': 'Vogue China',
    'feat.role': 'Makeup by Stella Ceriani',
    'feat.context': 'Beauty Editorial · Ritz Paris',

    // Press
    'press.eyebrow': 'As seen in',
    'press.title.line1': 'Trusted by the',
    'press.title.italic': 'finest houses',
    'press.title.dot': '.',
    'press.title.line2': '',
    'press.title.line3': '',
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
      'Reserve your session for the Festival de Cannes 2026 : VIP preparation, red carpet, shootings and interviews. Also available for events in Paris, Milan, London and worldwide.',
    'cta.btn': 'Reserve a date',
    'cta.directLine': 'Direct line',
    'cta.languages': 'Languages',
    'cta.langValue': 'English · Français · Italiano',
    'cta.basedIn': 'Based in',
    'cta.basedValue': 'Paris · available worldwide',

    // Footer
    'foot.available': 'Available worldwide',
    'foot.h.line1': 'Less is more.',
    'foot.h.line2': '',
    'foot.h.dot': '',
    'foot.book': 'Book a session',
    'foot.brandTagline':
      'Fashion, celebrity and event makeup artist. Italian, based in Paris, no travel limits.',
    'foot.col.pages': 'Navigation',
    'foot.col.services': 'Services',
    'foot.col.locations': 'Locations',
    'foot.svc.1': 'Fashion & Editorial',
    'foot.svc.2': 'Red Carpet',
    'foot.svc.3': 'Events',
    'foot.svc.4': 'Bridal',
    'foot.svc.5': 'Masterclass',
    'foot.rights': 'All rights reserved',
    'foot.legal.mentions': 'Legal',
    'foot.legal.privacy': 'Privacy',
    'foot.crafted': 'Crafted by',
  },
}
