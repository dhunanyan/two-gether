"use server";

import slugify from "slugify";
import {
  convertToBase64FromLocalFilePath,
  parseServerActionResponse,
} from "../utils";
import { Error, Status } from "../constants";
import { writeClient } from "@/sanity";
import { auth } from "@/auth";
import { Local } from "@/sanity/types";

// ADD THIS FUNCTION ON SOME BUTTON CLICK:
// async () => {
//   try {
//     (await getParsedCafes()).forEach(async (local) => {
//       console.log(await local);
//       const result = await createCafe(await local);
//       console.log(result);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }

const CAFES = [
  {
    title: "Wesoła Cafe",
    description:
      "A cozy spot known for its specialty coffee and friendly atmosphere.",
    address: "Rakowicka 17, 31-511 Kraków",
    phone: "+48 514 930 930",
    imageURL: "images/cafes/wesola-cafe.jpeg",
    categories: ["green"],
  },
  {
    title: "NapNap Cafe",
    description:
      "A modern cafe offering a variety of coffee blends and pastries.",
    address: "Świętego Tomasza 31, 31-027 Kraków",
    phone: "+48 12 345 67 89",
    imageURL: "images/cafes/napnap-cafe.jpeg",
    categories: ["green"],
  },
  {
    title: "Karma",
    description:
      "A minimalist cafe focusing on organic coffee and healthy snacks.",
    address: "Krupnicza 12, 31-123 Kraków",
    phone: "+48 12 430 68 55",
    imageURL: "images/cafes/karma.jpeg",
    categories: ["green"],
  },
  {
    title: "Cheder Café",
    description:
      "A unique cafe with Middle Eastern influences, offering a cultural experience.",
    address: "Józefa 36, 31-056 Kraków",
    phone: "+48 12 397 07 41",
    imageURL: "images/cafes/cheder-cafe.jpg",
    categories: ["green"],
  },
  {
    title: "Eszeweria",
    description: "A charming, vintage-style cafe with a cozy garden area.",
    address: "Józefa 9, 31-056 Kraków",
    phone: "+48 12 422 25 54",
    imageURL: "images/cafes/eszeweria.jpeg",
    categories: ["green"],
  },
  {
    title: "Cafe Camelot",
    description:
      "A picturesque cafe known for its artistic interior and delicious desserts.",
    address: "Świętego Tomasza 17, 31-022 Kraków",
    phone: "+48 12 421 01 23",
    imageURL: "images/cafes/cafe-camelot.jpg",
    categories: ["green"],
  },
  {
    title: "Blossom Café",
    description:
      "A modern cafe offering specialty coffee and a variety of brunch options.",
    address: "Rakowicka 20, 31-510 Kraków",
    phone: "+48 12 312 53 54",
    imageURL: "images/cafes/cafe-blossom.jpg",
    categories: ["green"],
  },
  {
    title: "Cawa",
    description:
      "A stylish cafe with a wide selection of coffees and homemade cakes.",
    address: "Zwierzyniecka 20, 31-105 Kraków",
    phone: "+48 12 421 85 85",
    imageURL: "images/cafes/cawa-cafe.jpg",
    categories: ["green"],
  },
  {
    title: "Kaffe Bageri Stockholm",
    description:
      "A Swedish-inspired cafe and bakery offering fresh pastries and coffee.",
    address: "Meiselsa 6, 31-058 Kraków",
    phone: "+48 12 307 07 07",
    imageURL: "images/cafes/kaffe-bageri.jpg",
    categories: ["green"],
  },
  {
    title: "Cafe Manggha",
    description:
      "A serene cafe located within the Manggha Museum, offering Japanese teas and desserts.",
    address: "Marii Konopnickiej 26, 30-302 Kraków",
    phone: "+48 12 267 27 03",
    imageURL: "images/cafes/cafe-manggha.jpg",
    categories: ["green"],
  },
  {
    title: "Metrum Rooftop Café",
    description:
      "A rooftop cafe offering panoramic views of Krakow along with great coffee.",
    address: "Zacisze 5, 31-156 Kraków",
    phone: "+48 12 422 19 55",
    imageURL: "images/cafes/metrum-rooftop.jpg",
    categories: ["green"],
  },
  {
    title: "Cafe Szał",
    description:
      "A charming cafe located in the Cloth Hall, offering traditional Polish desserts.",
    address: "Rynek Główny 1/3, 31-042 Kraków",
    phone: "+48 12 422 08 55",
    imageURL: "images/cafes/cafe-shal.jpg",
    categories: ["green"],
  },
  {
    title: "Cytat Café",
    description:
      "A literary-themed cafe perfect for book lovers, offering a quiet atmosphere.",
    address: "Miodowa 23, 31-055 Kraków",
    phone: "+48 12 421 22 33",
    imageURL: "images/cafes/cytat-cafe.jpg",
    categories: ["green"],
  },
  {
    title: "Tektura",
    description:
      "A hip cafe known for its industrial design and specialty coffee.",
    address: "Krupnicza 7, 31-123 Kraków",
    phone: "+48 12 430 67 89",
    imageURL: "images/cafes/tektura-cafe.jpg",
    categories: ["green"],
  },
  {
    title: "Massolit Books & Café",
    description:
      "A cozy bookstore cafe offering a wide selection of English books and pastries.",
    address: "Felicjanek 4, 31-104 Kraków",
    phone: "+48 12 432 41 50",
    imageURL: "images/cafes/massolit-books.jpg",
    categories: ["green"],
  },
  {
    title: "Charlotte",
    description:
      "A French-style bakery and cafe known for its fresh bread and breakfast options.",
    address: "Plac Szczepański 2, 31-011 Kraków",
    phone: "+48 12 421 21 21",
    imageURL: "images/cafes/charlotte.jpg",
    categories: ["green"],
  },
  {
    title: "Café Szafé",
    description:
      "A quirky cafe with a unique wardrobe-themed interior and eclectic vibe.",
    address: "Felicjanek 10, 31-103 Kraków",
    phone: "+48 12 421 12 12",
    imageURL: "images/cafes/cafe-szafe.jpg",
    categories: ["green"],
  },
  {
    title: "The Garden of Art",
    description:
      "A cafe located inside the Bunkier Sztuki Gallery, known for its quiet ambiance and stunning art exhibitions.",
    address: "Pl. Szczepański 3a, 31-011 Kraków",
    phone: "+48 12 423 60 11",
    imageURL: "images/cafes/the-garden-of-art.jpg",
    categories: ["green"],
  },
  {
    title: "Piano Rouge",
    description:
      "A charming cafe offering coffee and cakes with live piano music in the evenings.",
    address: "Starowiślna 13, 31-032 Kraków",
    phone: "+48 12 422 62 43",
    imageURL: "images/cafes/piano-rouge.jpg",
    categories: ["green"],
  },
  {
    title: "Sisters Cafe",
    description:
      "A relaxed cafe offering great coffee, cakes, and a welcoming atmosphere.",
    address: "Józefa 9, 31-056 Kraków",
    phone: "+48 12 421 25 22",
    imageURL: "images/cafes/sisters-cafe.jpg",
    categories: ["green"],
  },
  {
    title: "Międzymiastowa Cafe",
    description:
      "A stylish cafe serving excellent coffee and cakes, with a minimalist design.",
    address: "Karmelicka 28, 31-128 Kraków",
    phone: "+48 12 431 52 15",
    imageURL: "images/cafes/miedzymiastowa-cafe.jpg",
    categories: ["green"],
  },
  {
    title: "Gorączka Złota",
    description:
      "A vintage-inspired cafe with a fantastic selection of coffee and vintage decor.",
    address: "Floriańska 10, 31-021 Kraków",
    phone: "+48 12 421 43 52",
    imageURL: "images/cafes/goraczka-zlota.jpg",
    categories: ["green"],
  },
  {
    title: "Bistro Smak",
    description:
      "A small cafe offering fresh, homemade pastries and a wide range of hot drinks.",
    address: "Plac Szczepański 6, 31-011 Kraków",
    phone: "+48 12 431 25 64",
    imageURL: "images/cafes/bistro-smak.jpeg",
    categories: ["green"],
  },
  {
    title: "Hush Cafe",
    description:
      "A tranquil cafe with a focus on high-quality coffee, perfect for relaxing or working.",
    address: "Piłsudskiego 12, 31-110 Kraków",
    phone: "+48 12 431 42 17",
    imageURL: "images/cafes/hush-cafe.jpg",
    categories: ["green"],
  },
  {
    title: "Lukullus Cafe",
    description:
      "A family-run cafe offering a selection of pastries and artisan coffee in a cozy atmosphere.",
    address: "Rynek Główny 5, 31-042 Kraków",
    phone: "+48 12 422 12 11",
    imageURL: "images/cafes/lukullus-cafe.jpg",
    categories: ["green"],
  },
  {
    title: "Café Bunkier",
    description:
      "A modern cafe attached to the Bunkier Sztuki Gallery, offering art-inspired surroundings.",
    address: "Pl. Szczepański 3a, 31-011 Kraków",
    phone: "+48 12 423 60 11",
    imageURL: "images/cafes/cafe-bunkier.jpg",
    categories: ["green"],
  },
  {
    title: "Pod Norenami",
    description:
      "A hidden gem offering delicious coffee and Asian-inspired desserts.",
    address: "Sławkowska 16, 31-014 Kraków",
    phone: "+48 12 422 82 83",
    imageURL: "images/cafes/pod-norenami.jpg",
    categories: ["green"],
  },
];

export const getParsedCafes = async () => {
  const session = await auth();

  return CAFES.map(
    async ({ title, description, imageURL, address, phone, categories }) => ({
      type: "cafe",
      title,
      description,
      image: await convertToBase64FromLocalFilePath(imageURL),
      slug: {
        _type: "slug",
        current: slugify(title as string, { lower: true, strict: true }),
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      address,
      phone: phone.replaceAll(" ", "").replaceAll("-", ""),
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

export const createCafe = async (local: Omit<Local, "_type">) => {
  try {
    const result = await writeClient.create({ _type: "local", ...local });
    return parseServerActionResponse({
      ...result,
      error: Error.EMPTY,
      status: Status.SUCCESS,
    });
  } catch (error) {
    console.log(error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: Status.ERROR,
    });
  }
};
