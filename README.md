 # Zadání

Cílem tohoto zadání je prověřit si základní znalosti vývoje responsivních webových aplikací v Reactu.
Tento projekt slouží jako kostra zadání a doporučujeme tento repozitář forknout a nakonec nám poslat Váš repozitář pro kontrolu.

Jedná se o stránku se seznamem produktů v našem případě jde o karavany.
Stránka musí obsahovat:
    
- Hlavičku
- Filtry
  - Slider na cenu - cena od do, výběr knihovny pro slider je na Vás. [100 - 10000] Kč
  - Typ karavanu - je možné vybrat více typů pro filtrovaní [Campervan, Intergrated, BuiltIn , Alcove]
  - Okamžitá rezervace - jednoduchý toggle [true / false]
- Seznam karavanů
- Tlačítko pro načtení dalších karavanů

## Technologický stack

Celá kostra zadaní je postavena na [Next.js](https://nextjs.org/docs/getting-started), nicméně znalost Next.js není nutná,
pokud jste s Next.js ještě nepracovali projekt už je připraven a není nutné nic nastavovat.  

Stránku najdete ve složce `/pages/index.js` a na zbytek komponent pak použijte složku `src`

Pro stylování doporučujeme [Styled Components](https://styled-components.com/), opět není nutné nic nastavovat. 
Web by měl být responsivní, breakpoint pro mobil použijte 400px, design pro tablet není třeba.

React pište ve formátu [hooks](https://reactjs.org/docs/hooks-intro.html), class based componentům se vyvarujte.

Použítí Typescriptu je dobrovolné.

Zbytek UI knihoven je čistě na Vás.

## Bonusové objectives

Tyto věci jsou navíc, pokud Vám zbyde extra čas a budete chtít ukázat vaše zkušenosti:

 - TypeScript
 - Carousel pro obrázky karavanů
 - NextImage pro obrázky karavanů
 - OG tags pomocí NextHead

## Data

Data o karavanech najdete na EP [localhost:3000/api/data](http://localhost:3000/api/data).
EP neumožňuje filtrování, veškeré zpracování filtrů tedy bude probíhat na straně klienta.

## Grafické podklady

Veškerou grafiku jak pro desktop layout tak mobile layout najdete v 
[Adobe XD](https://xd.adobe.com/view/8df4afb8-74e0-48d5-b24b-a66cddfa07e7-d8a7/flow/).

## Jak spustit projekt

Nainstalovat dependencies:

```bash
npm install
# nebo
yarn install
```

Dev prostředí poběží na portu 3000 se zapne pomocí příkazu:

```bash
npm run dev
# nebo
yarn dev
```

# Řešení a komentáře

## Struktura projektu
Vývoj projektu probíhal ve složce **src**. 

Struktura src složky: 

- theme-styles.js (nastavení společného tématu obecné pro projekt)
- const.js (konstanty použité v projektu)
- components (všechny soubory)
    * **blocks** - bloky, které lze znovu použít v nových součástech
    * **layout** - části layout 
    * **sections** - velké části projektu (layout + blocks + ui)
    * **ui** - malé části ui prvků (tlačítka, inputs, logo)

Pro stylování jsem použivala [Styled Components](https://styled-components.com/) + [Material-UI](https://mui.com/).  

Hlavni pozadavky:
- Hlavička ✅
- Filtry
  - Slider na cenu - cena od do, výběr knihovny pro slider je na Vás. [100 - 10000] Kč ✅
  - Typ karavanu - je možné vybrat více typů pro filtrovaní [Campervan, Intergrated, BuiltIn , Alcove] ✅
  - Okamžitá rezervace - jednoduchý toggle [true / false] ✅
- Seznam karavanů ✅
- Tlačítko pro načtení dalších karavanů ✅

Bonusové objectives:
- TypeScript ❌ **zatím studuji**
- Carousel pro obrázky karavanů ✅ **obecně používám [swiper.js](https://swiperjs.com/react), ale tu jsem měla použít [react-responsive-carousel](https://github.com/leandrowd/react-responsive-carousel) aby byla responzivni**
- NextImage pro obrázky karavanů ⚠️ **seznamila jsem se s next/image a zkusila jsem ho pouzit**
- OG tags pomocí NextHead ❌