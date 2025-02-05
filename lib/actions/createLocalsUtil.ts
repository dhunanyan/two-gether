import slugify from "slugify";
import { convertToBase64FromLocalFilePath } from "../utils";
import { Session } from "next-auth";

const DATA = [
  {
    title: "Wesoła Cafe",
    description:
      "A cozy spot known for its specialty coffee and friendly atmosphere.",
    address: "Rakowicka 17, 31-511 Kraków",
    phone: "+48 514 930 930",
    imageURL: "https://example.com/images/wesola_cafe.jpg",
    categories: [""],
  },
  {
    title: "NapNap Cafe",
    description:
      "A modern cafe offering a variety of coffee blends and pastries.",
    address: "Świętego Tomasza 31, 31-027 Kraków",
    phone: "+48 12 345 67 89",
    imageURL: "https://example.com/images/napnap_cafe.jpg",
    categories: [""],
  },
  {
    title: "Karma",
    description:
      "A minimalist cafe focusing on organic coffee and healthy snacks.",
    address: "Krupnicza 12, 31-123 Kraków",
    phone: "+48 12 430 68 55",
    imageURL: "https://example.com/images/karma.jpg",
    categories: [""],
  },
  {
    title: "Cheder Café",
    description:
      "A unique cafe with Middle Eastern influences, offering a cultural experience.",
    address: "Józefa 36, 31-056 Kraków",
    phone: "+48 12 397 07 41",
    imageURL: "https://example.com/images/cheder_cafe.jpg",
    categories: [""],
  },
  {
    title: "Eszeweria",
    description: "A charming, vintage-style cafe with a cozy garden area.",
    address: "Józefa 9, 31-056 Kraków",
    phone: "+48 12 422 25 54",
    imageURL: "https://example.com/images/eszeweria.jpg",
    categories: [""],
  },
  {
    title: "Cafe Camelot",
    description:
      "A picturesque cafe known for its artistic interior and delicious desserts.",
    address: "Świętego Tomasza 17, 31-022 Kraków",
    phone: "+48 12 421 01 23",
    imageURL: "https://example.com/images/cafe_camelot.jpg",
    categories: [""],
  },
  {
    title: "Blossom Café",
    description:
      "A modern cafe offering specialty coffee and a variety of brunch options.",
    address: "Rakowicka 20, 31-510 Kraków",
    phone: "+48 12 312 53 54",
    imageURL: "https://example.com/images/blossom_cafe.jpg",
    categories: [""],
  },
  {
    title: "Cawa",
    description:
      "A stylish cafe with a wide selection of coffees and homemade cakes.",
    address: "Zwierzyniecka 20, 31-105 Kraków",
    phone: "+48 12 421 85 85",
    imageURL: "https://example.com/images/cawa.jpg",
    categories: [""],
  },
  {
    title: "Kaffe Bageri Stockholm",
    description:
      "A Swedish-inspired cafe and bakery offering fresh pastries and coffee.",
    address: "Meiselsa 6, 31-058 Kraków",
    phone: "+48 12 307 07 07",
    imageURL: "https://example.com/images/kaffe_bageri.jpg",
    categories: [""],
  },
  {
    title: "Cafe Manggha",
    description:
      "A serene cafe located within the Manggha Museum, offering Japanese teas and desserts.",
    address: "Marii Konopnickiej 26, 30-302 Kraków",
    phone: "+48 12 267 27 03",
    imageURL: "https://example.com/images/cafe_manggha.jpg",
    categories: [""],
  },
  {
    title: "Metrum Rooftop Café",
    description:
      "A rooftop cafe offering panoramic views of Krakow along with great coffee.",
    address: "Zacisze 5, 31-156 Kraków",
    phone: "+48 12 422 19 55",
    imageURL: "https://example.com/images/metrum_rooftop_cafe.jpg",
    categories: [""],
  },
  {
    title: "Cafe Szał",
    description:
      "A charming cafe located in the Cloth Hall, offering traditional Polish desserts.",
    address: "Rynek Główny 1/3, 31-042 Kraków",
    phone: "+48 12 422 08 55",
    imageURL: "https://example.com/images/cafe_szal.jpg",
    categories: [""],
  },
  {
    title: "Cytat Café",
    description:
      "A literary-themed cafe perfect for book lovers, offering a quiet atmosphere.",
    address: "Miodowa 23, 31-055 Kraków",
    phone: "+48 12 421 22 33",
    imageURL: "https://example.com/images/cytat_cafe.jpg",
    categories: [""],
  },
  {
    title: "Tektura",
    description:
      "A hip cafe known for its industrial design and specialty coffee.",
    address: "Krupnicza 7, 31-123 Kraków",
    phone: "+48 12 430 67 89",
    imageURL: "https://example.com/images/tektura.jpg",
    categories: [""],
  },
  {
    title: "Massolit Books & Café",
    description:
      "A cozy bookstore cafe offering a wide selection of English books and pastries.",
    address: "Felicjanek 4, 31-104 Kraków",
    phone: "+48 12 432 41 50",
    imageURL: "https://example.com/images/massolit_books_cafe.jpg",
    categories: [""],
  },
  {
    title: "Charlotte",
    description:
      "A French-style bakery and cafe known for its fresh bread and breakfast options.",
    address: "Plac Szczepański 2, 31-011 Kraków",
    phone: "+48 12 421 21 21",
    imageURL: "https://example.com/images/charlotte.jpg",
    categories: [""],
  },
  {
    title: "Café Szafé",
    description:
      "A quirky cafe with a unique wardrobe-themed interior and eclectic vibe.",
    address: "Felicjanek 10, 31-103 Kraków",
    phone: "+48 12 421 12 12",
    imageURL: "https://example.com/images/cafe_szafe.jpg",
    categories: [""],
  },
  {
    title: "Metrum Rooftop Café",
    description:
      "A rooftop cafe offering panoramic views of Krakow along with great coffee.",
    address: "Zacisze 5, 31-156 Kraków",
    phone: "+48 12 422 19 55",
    imageURL: "https://example.com/images/metrum_rooftop_cafe.jpg",
    categories: [""],
  },
  {
    title: "Cafe Szał",
    description:
      "A charming cafe located in the Cloth Hall, offering traditional Polish desserts.",
    address: "Rynek Główny 1/3, 31-042 Kraków",
    phone: "+48 12 422 08 55",
    imageURL: "https://example.com/images/cafe_szal.jpg",
    categories: [""],
  },
  {
    title: "Cytat Café",
    description:
      "A literary-themed cafe perfect for book lovers, offering a quiet atmosphere.",
    address: "Miodowa 23, 31-055 Kraków",
    phone: "+48 12 421 22 33",
    imageURL: "https://example.com/images/cytat_cafe.jpg",
    categories: [""],
  },
  {
    title: "Tektura",
    description:
      "A hip cafe known for its industrial design and specialty coffee.",
    address: "Krupnicza 7, 31-123 Kraków",
    phone: "+48 12 430 67 89",
    imageURL: "https://example.com/images/tektura.jpg",
    categories: [""],
  },
  {
    title: "Massolit Books & Café",
    description:
      "A cozy bookstore cafe offering a wide selection of English books and pastries.",
    address: "Felicjanek 4, 31-104 Kraków",
    phone: "+48 12 432 41 50",
    imageURL: "https://example.com/images/massolit_books_cafe.jpg",
    categories: [""],
  },
  {
    title: "Charlotte",
    description:
      "A French-style bakery and cafe known for its fresh bread and breakfast options.",
    address: "Plac Szczepański 2, 31-011 Kraków",
    phone: "+48 12 421 21 21",
    imageURL: "https://example.com/images/charlotte.jpg",
    categories: [""],
  },
  {
    title: "Café Szafé",
    description:
      "A quirky cafe with a unique wardrobe-themed interior and eclectic vibe.",
    address: "Felicjanek 10, 31-103 Kraków",
    phone: "+48 12 421 12 12",
    imageURL: "https://example.com/images/cafe_szafe.jpg",
    categories: [""],
  },
  {
    title: "The Garden of Art",
    description:
      "A cafe located inside the Bunkier Sztuki Gallery, known for its quiet ambiance and stunning art exhibitions.",
    address: "Pl. Szczepański 3a, 31-011 Kraków",
    phone: "+48 12 423 60 11",
    imageURL: "https://example.com/images/garden_of_art.jpg",
    categories: [""],
  },
  {
    title: "Piano Rouge",
    description:
      "A charming cafe offering coffee and cakes with live piano music in the evenings.",
    address: "Starowiślna 13, 31-032 Kraków",
    phone: "+48 12 422 62 43",
    imageURL: "https://example.com/images/piano_rouge.jpg",
    categories: [""],
  },
  {
    title: "Cafe Szafe",
    description:
      "A cozy and eclectic cafe with a unique interior and a wide selection of drinks and desserts.",
    address: "Felicjanek 10, 31-103 Kraków",
    phone: "+48 12 421 12 12",
    imageURL: "https://example.com/images/cafe_szafe.jpg",
    categories: [""],
  },
  {
    title: "Sisters Cafe",
    description:
      "A relaxed cafe offering great coffee, cakes, and a welcoming atmosphere.",
    address: "Józefa 9, 31-056 Kraków",
    phone: "+48 12 421 25 22",
    imageURL: "https://example.com/images/sisters_cafe.jpg",
    categories: [""],
  },
  {
    title: "Międzymiastowa Cafe",
    description:
      "A stylish cafe serving excellent coffee and cakes, with a minimalist design.",
    address: "Karmelicka 28, 31-128 Kraków",
    phone: "+48 12 431 52 15",
    imageURL: "https://example.com/images/miedzymiastowa_cafe.jpg",
    categories: [""],
  },
  {
    title: "Gorączka Złota",
    description:
      "A vintage-inspired cafe with a fantastic selection of coffee and vintage decor.",
    address: "Floriańska 10, 31-021 Kraków",
    phone: "+48 12 421 43 52",
    imageURL: "https://example.com/images/goraczka_zlota.jpg",
    categories: [""],
  },
  {
    title: "Bistro Smak",
    description:
      "A small cafe offering fresh, homemade pastries and a wide range of hot drinks.",
    address: "Plac Szczepański 6, 31-011 Kraków",
    phone: "+48 12 431 25 64",
    imageURL: "https://example.com/images/bistro_smak.jpg",
    categories: [""],
  },
  {
    title: "Hush Cafe",
    description:
      "A tranquil cafe with a focus on high-quality coffee, perfect for relaxing or working.",
    address: "Piłsudskiego 12, 31-110 Kraków",
    phone: "+48 12 431 42 17",
    imageURL: "https://example.com/images/hush_cafe.jpg",
    categories: [""],
  },
  {
    title: "Lukullus Cafe",
    description:
      "A family-run cafe offering a selection of pastries and artisan coffee in a cozy atmosphere.",
    address: "Rynek Główny 5, 31-042 Kraków",
    phone: "+48 12 422 12 11",
    imageURL: "https://example.com/images/lukullus_cafe.jpg",
    categories: [""],
  },
  {
    title: "Café Bunkier",
    description:
      "A modern cafe attached to the Bunkier Sztuki Gallery, offering art-inspired surroundings.",
    address: "Pl. Szczepański 3a, 31-011 Kraków",
    phone: "+48 12 423 60 11",
    imageURL: "https://example.com/images/cafe_bunkier.jpg",
    categories: [""],
  },
  {
    title: "Pod Norenami",
    description:
      "A hidden gem offering delicious coffee and Asian-inspired desserts.",
    address: "Sławkowska 16, 31-014 Kraków",
    phone: "+48 12 422 82 83",
    imageURL: "https://example.com/images/pod_norenami.jpg",
    categories: [""],
  },
  {
    title: "Lajkonik Cafe",
    description:
      "A lovely cafe offering traditional Polish coffee and pastries in the heart of Kraków.",
    address: "Rynek Główny 29, 31-010 Kraków",
    phone: "+48 12 430 15 99",
    imageURL: "https://example.com/images/lajkonik_cafe.jpg",
    categories: [""],
  },
  {
    title: "Bunkier Cafe",
    description:
      "A cozy cafe located in the Bunkier Sztuki art gallery, offering coffee and pastries in a creative environment.",
    address: "Pl. Szczepański 3a, 31-011 Kraków",
    phone: "+48 12 423 60 11",
    imageURL: "https://example.com/images/bunkier_cafe.jpg",
    categories: [""],
  },
  {
    title: "The Garden of Art",
    description:
      "A cafe located inside the Bunkier Sztuki Gallery, known for its quiet ambiance and stunning art exhibitions.",
    address: "Pl. Szczepański 3a, 31-011 Kraków",
    phone: "+48 12 423 60 11",
    imageURL: "https://example.com/images/garden_of_art.jpg",
    categories: [""],
  },
  {
    title: "Piano Rouge",
    description:
      "A charming cafe offering coffee and cakes with live piano music in the evenings.",
    address: "Starowiślna 13, 31-032 Kraków",
    phone: "+48 12 422 62 43",
    imageURL: "https://example.com/images/piano_rouge.jpg",
    categories: [""],
  },
  {
    title: "Cafe Szafe",
    description:
      "A cozy and eclectic cafe with a unique interior and a wide selection of drinks and desserts.",
    address: "Felicjanek 10, 31-103 Kraków",
    phone: "+48 12 421 12 12",
    imageURL: "https://example.com/images/cafe_szafe.jpg",
    categories: [""],
  },
  {
    title: "Sisters Cafe",
    description:
      "A relaxed cafe offering great coffee, cakes, and a welcoming atmosphere.",
    address: "Józefa 9, 31-056 Kraków",
    phone: "+48 12 421 25 22",
    imageURL: "https://example.com/images/sisters_cafe.jpg",
    categories: [""],
  },
  {
    title: "Międzymiastowa Cafe",
    description:
      "A stylish cafe serving excellent coffee and cakes, with a minimalist design.",
    address: "Karmelicka 28, 31-128 Kraków",
    phone: "+48 12 431 52 15",
    imageURL: "https://example.com/images/miedzymiastowa_cafe.jpg",
    categories: [""],
  },
  {
    title: "Gorączka Złota",
    description:
      "A vintage-inspired cafe with a fantastic selection of coffee and vintage decor.",
    address: "Floriańska 10, 31-021 Kraków",
    phone: "+48 12 421 43 52",
    imageURL: "https://example.com/images/goraczka_zlota.jpg",
    categories: [""],
  },
  {
    title: "Bistro Smak",
    description:
      "A small cafe offering fresh, homemade pastries and a wide range of hot drinks.",
    address: "Plac Szczepański 6, 31-011 Kraków",
    phone: "+48 12 431 25 64",
    imageURL: "https://example.com/images/bistro_smak.jpg",
    categories: [""],
  },
  {
    title: "Hush Cafe",
    description:
      "A tranquil cafe with a focus on high-quality coffee, perfect for relaxing or working.",
    address: "Piłsudskiego 12, 31-110 Kraków",
    phone: "+48 12 431 42 17",
    imageURL: "https://example.com/images/hush_cafe.jpg",
    categories: [""],
  },
  {
    title: "Lukullus Cafe",
    description:
      "A family-run cafe offering a selection of pastries and artisan coffee in a cozy atmosphere.",
    address: "Rynek Główny 5, 31-042 Kraków",
    phone: "+48 12 422 12 11",
    imageURL: "https://example.com/images/lukullus_cafe.jpg",
    categories: [""],
  },
];

export const createCafes = (session: Session) => {
  return DATA.map(
    ({ title, description, imageURL, address, phone, categories }) => ({
      type: "cafe",
      title,
      description,
      image: convertToBase64FromLocalFilePath(`cafes/${imageURL}`),
      slug: {
        _type: "slug",
        current: slugify(title as string, { lower: true, strict: true }),
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      address,
      phone: phone.replace(" ", "").replace("-", ""),
      categories,
      rating: [
        {
          userEmail: session?.user?.email,
          value: 0,
        },
      ],
      isVisited: [
        {
          userEmail: session?.user?.email,
          value: false,
        },
      ],
    })
  );
};
