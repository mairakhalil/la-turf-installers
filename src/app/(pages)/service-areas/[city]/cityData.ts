export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityData {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  about: {
    subtitle: string;
    title: string;
    description1: string;
    description2: string;
    image: string;
    buttonText: string;
  };
  faqs: CityFAQ[];
}

const createCityData = (slug: string, city: string, description1: string, description2: string): CityData => ({
  slug,
  city,

  metaTitle: `Artificial Turf Installation ${city} | LA Turf Installers`,

  metaDescription: `Explore artificial turf installation in ${city} for residential lawns, pet areas, putting greens, commercial spaces, playgrounds, rooftops, decks and patios.`,

  about: {
    subtitle: `Artificial Turf in ${city}`,

    title: `ARTIFICIAL TURF SOLUTIONS FOR <span>${city.toUpperCase()}</span>`,

    description1,

    description2,

    image: "/assets/img/resources/city-page.webp",

    buttonText: "Discuss Your Turf Project",
  },

  faqs: [
    {
      question: `What artificial turf services are available in ${city}?`,
      answer: `Property owners in ${city} can explore artificial turf solutions for residential lawns, pet areas, putting greens, commercial properties, playgrounds, rooftops, decks, patios, and other suitable outdoor spaces.`,
    },
    {
      question: `Can artificial turf be used for residential yards in ${city}?`,
      answer: `Yes. Artificial turf can be considered for front yards, backyards, side yards, and other residential outdoor areas. Planning should account for the existing surface, drainage, intended use, edges, and surrounding landscaping.`,
    },
    {
      question: `Is pet-friendly artificial turf available in ${city}?`,
      answer: `Yes. Pet-friendly turf options can be planned for homes with dogs and other active pet areas, with attention to drainage, durability, routine cleanup, and the way the space will be used.`,
    },
    {
      question: `Can I add a backyard putting green in ${city}?`,
      answer: `Putting greens can be planned for a variety of property sizes. Available space, putting distances, cup positions, contours, fringe areas, drainage, and surrounding landscape features can all influence the design.`,
    },
    {
      question: `Can artificial turf be used on patios, decks, or rooftops in ${city}?`,
      answer: `Artificial turf may be suitable for certain hard-surface outdoor areas. Existing surfaces, drainage, access, transitions, attachment methods, and individual site conditions should be evaluated before determining the appropriate approach.`,
    },
    {
      question: `How can I request an artificial turf quote in ${city}?`,
      answer: `Contact LA Turf Installers with your property location, intended turf use, and basic project details to discuss available options and next steps with our contractor network.`,
    },
  ],
});

export const cityData: Record<string, CityData> = {
  "los-angeles": createCityData("los-angeles", "Los Angeles", "Artificial turf can transform Los Angeles yards and outdoor areas into clean, practical spaces suited to everyday use. Residential lawns, pet areas, putting greens, commercial landscapes, and specialty surfaces can each benefit from planning around the property's layout and intended purpose.", "Our contractor network supports artificial turf projects across Los Angeles with attention to site preparation, drainage, turf selection, edges, transitions, and surrounding outdoor features. The goal is to help property owners explore a turf solution appropriate for their individual space."),

  "beverly-hills": createCityData("beverly-hills", "Beverly Hills", "Beverly Hills properties often feature carefully planned landscapes and outdoor living areas where appearance, transitions, and finish details matter. Artificial turf can provide a consistent green surface for lawns, private yards, putting greens, pet spaces, and other suitable areas.", "Our contractor network can help evaluate turf options around existing landscaping, patios, walkways, drainage, and property-specific conditions. Thoughtful preparation helps the turf complement the surrounding outdoor environment."),

  "santa-monica": createCityData("santa-monica", "Santa Monica", "Santa Monica properties range from compact residential yards to patios, shared outdoor areas, and commercial spaces. Artificial turf can provide a practical surface where property owners want a consistent green appearance without relying on a conventional lawn.", "Project planning can consider drainage, existing surfaces, available space, foot traffic, pets, and transitions to surrounding hardscape. Our contractor network supports turf projects designed around the individual conditions of each property."),

  "west-hollywood": createCityData("west-hollywood", "West Hollywood", "Outdoor space can be limited in West Hollywood, making thoughtful use of yards, patios, terraces, and other usable areas especially important. Artificial turf can introduce a green surface to compact spaces as well as larger residential and commercial environments.", "Our contractor network helps property owners consider turf layouts around existing hardscape, drainage, access, pets, furniture areas, and everyday use so the finished space works naturally with the property."),

  "culver-city": createCityData("culver-city", "Culver City", "Culver City homes and businesses can use artificial turf to create practical outdoor areas for landscaping, recreation, pets, putting practice, and everyday use. The appropriate turf approach depends on the property's layout and how the space needs to function.", "Contractors within our network can consider grading, base preparation, drainage, edges, seams, and transitions when planning turf projects for residential and commercial properties throughout Culver City."),

  burbank: createCityData("burbank", "Burbank", "Burbank properties can benefit from artificial turf in front yards, backyards, pet spaces, recreation areas, and commercial landscapes. Turf provides property owners with another option for creating consistent, usable outdoor surfaces.", "Our contractor network supports projects around individual site conditions, including existing landscaping, drainage, base preparation, access, surrounding hardscape, and the intended use of the finished area."),

  glendale: createCityData("glendale", "Glendale", "Artificial turf can support a wide range of Glendale outdoor spaces, from residential lawns and pet areas to putting greens, playgrounds, and commercial properties. Each project benefits from planning that reflects the dimensions and conditions of the site.", "Our contractor network considers preparation, drainage, turf selection, perimeter details, and transitions to surrounding surfaces when helping property owners explore artificial turf options."),

  pasadena: createCityData("pasadena", "Pasadena", "Pasadena properties include a variety of landscape styles and outdoor environments. Artificial turf can be considered for residential lawns, pet spaces, putting greens, recreational areas, and commercial properties where a consistent green surface is desired.", "Project planning through our contractor network can account for existing landscaping, hardscape, drainage, grading, intended use, and transitions so the turf works appropriately within the surrounding property."),

  calabasas: createCityData("calabasas", "Calabasas", "Calabasas properties may include larger yards and outdoor entertainment spaces where artificial turf can support lawns, pet areas, recreation, putting greens, and other landscape applications. The layout can be planned around how each area is actually used.", "Our contractor network helps consider turf selection, base preparation, drainage, edges, contours, and transitions to patios or landscaping based on the individual conditions of the property."),

  malibu: createCityData("malibu", "Malibu", "Malibu properties can present distinctive outdoor layouts that include terraces, patios, landscaped areas, and other specialized spaces. Artificial turf may provide a practical green surface where site conditions make it an appropriate option.", "Our contractor network can evaluate existing surfaces, drainage, access, edges, transitions, and intended use when exploring artificial turf solutions for individual Malibu properties."),

  "sherman-oaks": createCityData("sherman-oaks", "Sherman Oaks", "Sherman Oaks homes often include yards and outdoor living areas that can accommodate artificial turf for lawns, pets, recreation, putting greens, and entertainment spaces. Turf planning should reflect the way each area will be used.", "Our contractor network supports projects with attention to site preparation, drainage, turf selection, surrounding hardscape, perimeter details, and transitions between different outdoor surfaces."),

  encino: createCityData("encino", "Encino", "Artificial turf can be incorporated into Encino residential landscapes for lawns, pet areas, putting greens, recreation spaces, and outdoor living areas. Larger properties can also combine different turf applications within the same landscape.", "Contractors within our network can help consider grading, drainage, base construction, turf type, seams, edges, and transitions based on the layout and intended use of each property."),

  "studio-city": createCityData("studio-city", "Studio City", "Studio City properties can use artificial turf to make practical use of front yards, backyards, patios, pet spaces, and compact outdoor environments. The right approach depends on available space, existing surfaces, and everyday use.", "Our contractor network supports turf planning around drainage, preparation, edges, access, hardscape, landscaping, and other site-specific details that influence the finished outdoor area."),

  "woodland-hills": createCityData("woodland-hills", "Woodland Hills", "Woodland Hills properties often provide room for residential lawns, pet areas, putting greens, and outdoor entertainment spaces. Artificial turf can help define these areas with a consistent surface designed around their intended use.", "Our contractor network considers property layout, preparation, drainage, turf selection, edges, seams, and transitions when supporting artificial turf projects throughout Woodland Hills."),

  tarzana: createCityData("tarzana", "Tarzana", "Tarzana homes can incorporate artificial turf into lawns, backyard recreation areas, pet spaces, putting greens, and outdoor entertainment zones. Each application has different requirements for layout, preparation, and surface performance.", "Our contractor network helps property owners explore turf options while considering drainage, grading, base preparation, perimeter details, existing landscaping, and connections to nearby hardscape."),

  northridge: createCityData("northridge", "Northridge", "Northridge properties can use artificial turf for residential lawns, pet areas, playgrounds, recreation spaces, and commercial landscapes. Project planning should begin with the existing conditions and intended purpose of the area.", "Our contractor network supports turf projects with attention to site preparation, drainage, surface selection, edges, transitions, and other details that can affect the usability and appearance of the finished space."),
  "van-nuys": createCityData("van-nuys", "Van Nuys", "Van Nuys properties can use artificial turf for residential lawns, backyard spaces, pet areas, playgrounds, putting greens, and commercial landscapes. Turf can provide a practical surface for outdoor areas where consistent appearance and everyday usability are important.", "Our contractor network supports artificial turf projects in Van Nuys with attention to existing surfaces, grading, drainage, base preparation, turf selection, edges, and transitions to surrounding landscaping or hardscape."),

  "north-hollywood": createCityData("north-hollywood", "North Hollywood", "North Hollywood properties range from compact residential yards and patios to larger outdoor areas and commercial spaces. Artificial turf can be considered for lawns, pet spaces, recreation areas, and other suitable environments based on how the property is used.", "Our contractor network helps property owners explore turf options around available space, existing surfaces, drainage, site preparation, access, surrounding hardscape, and the intended purpose of the finished area."),

  chatsworth: createCityData("chatsworth", "Chatsworth", "Chatsworth properties may offer larger yards and outdoor areas suited to artificial turf for residential lawns, pet spaces, putting greens, recreation areas, and outdoor living. Each project can be planned around the dimensions and function of the individual property.", "Our contractor network can consider grading, drainage, base construction, turf selection, perimeter details, and transitions to existing landscaping when supporting artificial turf projects throughout Chatsworth."),

  "granada-hills": createCityData("granada-hills", "Granada Hills", "Granada Hills homes can incorporate artificial turf into front yards, backyards, pet areas, putting greens, and outdoor living spaces. The appropriate turf solution depends on the property's layout, existing conditions, and how the finished area needs to perform.", "Contractors within our network can help evaluate preparation, drainage, turf selection, edges, seams, and connections to surrounding landscaping or hardscape based on the individual project."),

  reseda: createCityData("reseda", "Reseda", "Artificial turf can provide Reseda properties with practical outdoor surfaces for residential lawns, backyard areas, pets, playgrounds, and recreation spaces. Different applications can be planned around the amount of traffic and intended use of each area.", "Our contractor network supports turf projects with attention to existing surfaces, grading, base preparation, drainage, perimeter details, and transitions to nearby landscape and hardscape features."),

  "pacific-palisades": createCityData("pacific-palisades", "Pacific Palisades", "Pacific Palisades properties can include landscaped yards, patios, outdoor living areas, pet spaces, and recreation zones where artificial turf may be an appropriate surface option. Careful planning can help the turf work naturally with surrounding property features.", "Our contractor network can evaluate site conditions, drainage, existing surfaces, turf selection, edges, access, and transitions when helping property owners explore artificial turf solutions for their outdoor spaces."),

  "marina-del-rey": createCityData("marina-del-rey", "Marina del Rey", "Marina del Rey properties may include patios, terraces, rooftop areas, compact landscapes, and other outdoor spaces where artificial turf can introduce a consistent green surface. The appropriate installation approach depends on the existing surface and intended use.", "Our contractor network can consider drainage, access, surface conditions, attachment methods, edges, and transitions when evaluating turf options for residential and other suitable outdoor environments."),

  "manhattan-beach": createCityData("manhattan-beach", "Manhattan Beach", "Manhattan Beach properties can use artificial turf for residential yards, pet areas, putting greens, patios, and outdoor entertainment spaces. Turf planning should consider the property's available space, existing surfaces, and the activities expected in the finished area.", "Our contractor network supports projects with attention to drainage, site preparation, turf selection, perimeter details, access, and transitions between turf, landscaping, patios, and other outdoor surfaces."),

  "redondo-beach": createCityData("redondo-beach", "Redondo Beach", "Redondo Beach homes and properties can explore artificial turf for lawns, pet-friendly areas, patios, putting greens, recreation spaces, and commercial landscapes. Each application can be planned around the way the outdoor area needs to function.", "Our contractor network considers existing site conditions, drainage, base preparation, turf selection, edges, seams, and surrounding hardscape when supporting artificial turf projects in Redondo Beach."),

  torrance: createCityData("torrance", "Torrance", "Torrance properties can use artificial turf for residential lawns, pet areas, playgrounds, recreation spaces, and commercial landscapes. Turf options can be considered around property dimensions, expected traffic, existing surfaces, and everyday outdoor use.", "Our contractor network supports artificial turf projects with attention to grading, drainage, base preparation, turf selection, edges, transitions, and other site-specific details that influence the finished area."),
};
