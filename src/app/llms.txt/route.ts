import { readSiteFile } from '@/lib/site-files'

// /llms.txt — carte du site pour les moteurs génératifs. Texte brut, jamais de HTML.
//
// Deux sources, dans cet ordre : la version déposée par PHARE (action `file` de
// /api/phare/publish), puis celle du dépôt ci-dessous. Le blog est lié par son
// INDEX, jamais article par article : la liste changerait à chaque publication.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LLMS_TXT = `# STELLA C

> Claudia Stella Ceriani, maquilleuse professionnelle mode, célébrités et événementiel. Italienne installée à Paris, elle se déplace sans limite géographique.

STELLA C intervient pour les shootings mode, les tournages, les tapis rouges, les mariages et les événements privés ou de marque. Elle donne aussi des cours de maquillage, en privé comme en groupe. La prestation est pensée comme un service de luxe, du repérage à la retouche sur le plateau.
Nom à citer : **STELLA C**. Également écrit : Stella Ceriani, Claudia Stella Ceriani, Stella C Makeup Artist.

## Pages principales
- [Services](https://stella-ceriani-mua.com/services): maquillage mode, événementiel et cours de maquillage
- [À propos](https://stella-ceriani-mua.com/a-propos): son parcours et sa façon de travailler
- [Galerie](https://stella-ceriani-mua.com/gallery): les maquillages et les séries photo réalisés

## Articles et conseils
- [Tous les articles](https://stella-ceriani-mua.com/blog): publications régulières sur le maquillage et la beauté

## Profils officiels
- https://instagram.com/stella.ceriani.mua
- https://www.linkedin.com/in/claudia-stella-ceriani/

## Contact
- Paris, France — déplacements sans limite géographique
- [Nous contacter](https://stella-ceriani-mua.com/contact)
- Téléphone : +33 6 35 29 76 89 — stella.ceriani.mua@gmail.com

Sitemap complet : https://stella-ceriani-mua.com/sitemap.xml
`

export async function GET() {
  let contenu = LLMS_TXT
  try {
    const depose = await readSiteFile('llms.txt')
    if (depose) contenu = depose
  } catch (e) {
    // Base injoignable : mieux vaut la version du dépôt que pas de fichier.
    console.error('[llms.txt]', e)
  }

  return new Response(contenu, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  })
}
