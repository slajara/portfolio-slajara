export interface ExperiencesProps {
  img: string;
  position: string;
  business: string;
  tech: string[];
  date: string;
  functions: string[];
}

export const experiencesData: ExperiencesProps[] = [
  {
    img: "business/indra.svg",
    position: "Software Engineer",
    business: "Indra - Air Management Traffic",
    tech: [
      "skills/typescript.svg",
      "skills/react.svg",
      "skills/css.svg",
    ],
    date: "FEB/2023 .. - JUN/2024",
    functions: [
      "Generated and manipulated client data using Linux operating systems.",
      "Programmed extensively in Bash, ADA, and C++, managing data in XML format.",
      "Managed and controlled tasks using Jira and Excel, ensuring project deadlines and deliverables were met.",
      "Designed, implemented, and managed SQL databases to optimize data storage and retrieval.",
    ],
  },
  {
    img: "business/mrcrypto.png",
    position: "FullStack Developer",
    business: "MrCrypto Community",
    tech: [
      "skills/typescript.svg",
      "skills/react.svg",
      "skills/css.svg",
    ],
    date: "SEP/2023 .. - FEB/2024",
    functions: [
      "Developed an NFT marketplace as part of a collaborative team using SCRUM methodology, utilizing Next.JS, Node.JS, and Hardhat.",
      "Created a collection of ERC721 and E7L tokens, including smart contracts and frontend development.",
      "Built a DApp for creating NFT collections via web forms, supporting ERC721 and ERC1155 standards using factory smart contracts.",
      "Developed a Python bot to interpret candlestick data using the Binance API, providing real-time trading insights.",
    ],
  },
  {
    img: "/business/umh.png",
    position: "Studies",
    business: "University",
    tech: [
      "/business/umh.png",
      "/business/disrup3.png",
      "skills/css.svg",
    ],
    date: "ALWAYS LEARNING",
    functions: [
      "Software Engineer \u2192 Miguel Hernandez University \u2192 SEP/2018 .. - JUN/2023 JAJAJSJSJAJAJJAJAJAAJAJAJA AJAJJAJAJ AJAJAJAJ",
      "FullStack Web3 \u2192 Disrup3 \u2192 FEB/2023 .. - SEP/2023",
      "Artificial Intelligence \u2192  Racks Labs & Rey Juan Carlos University  \u2192 FEB/2024 .. - MAY/2024",
    ],
  },
  {
    img: "others/me.jpg",
    position: "Co-Funder",
    business: "Shisha Dark Lagend",
    tech: [
      "skills/typescript.svg",
      "skills/react.svg",
      "skills/css.svg",
    ],
    date: "SEP/2018 .. - MAR/2020",
    functions: [
      "Communicated with customers and handled sales, ensuring a positive and engaging experience.",
      "Managed overall organization and logistics of the business, ensuring smooth operations and efficient service delivery.",
      "Prepared and organized materials for serving at events and nightclubs, maintaining high standards of service.",
    ],
  },
];
