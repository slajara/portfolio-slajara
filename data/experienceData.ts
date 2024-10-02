export interface ExperiencesProps {
  img: string;
  position: string;
  company: string;
  tech: string[];
  date: string;
  functions: string[];
}

export const experiencesData: ExperiencesProps[] = [
  {
    img: "company/indra.svg",
    position: "Frontend Developer",
    company: "Indra",
    tech: [
      "skills/javascript.svg",
      "skills/react.svg",
      "skills/css.svg",
    ],
    date: "FEB/2023 .. - JUN/2024",
    functions: [
      "Implementation of reusable and efficient components using React, improving development speed and efficiency.",
      "Consuming RESTful APIs to interact with backend services, ensuring seamless communication between frontend and backend.",
      "Developing responsive user interfaces using CSS3 and Bootstrap.",
    ],
  },
  {
    img: "company/mrcrypto.png",
    position: "FullStack Web 3.0",
    company: "Mr.Crypto NFT",
    tech: [
      "skills/typescript.svg",
      "skills/nextjs.svg",
      "skills/nodejs.svg",
      "skills/solidity.svg",
    ],
    date: "",
    functions: [
      "Developed an NFT marketplace as part of a collaborative team using SCRUM methodology",
      "Created a mock collection of ERC721 and E7L tokens.",
      "Built a DApp for creating NFT collections via web forms, supporting ERC721 and ERC1155 standards using factory smart contracts.",
    ],
  },
  {
    img: "company/umh.png",
    position: "Studies",
    company: "University + Bootcamp",
    tech: [
      "/company/umh.png",
      "/company/disrup3.png",
      "/company/racks.jpg",
    ],
    date: "ALWAYS LEARNING",
    functions: [
      "Computer engineering in information technology \u2192 Miguel Hernandez University.",
      "Bootcamp FullStack Web 3.0 \u2192 Disrup3",
      "Artificial Intelligence tools \u2192  Racks Labs & Rey Juan Carlos University",
    ],
  },
  {
    img: "company/shisha.png",
    position: "Co Funder",
    company: "Shisha Dark Lagend",
    tech: [
      "skills/excel.svg",
    ],
    date: "JUL/2018 .. - MAR/2020",
    functions: [
      "Communicated with customers and handled sales, ensuring a positive and engaging experience.",
      "Managed overall organization and logistics of the business, ensuring smooth operations and efficient service delivery.",
      "Prepared and organized materials for serving at events and nightclubs, maintaining high standards of service.",
    ],
  },
];
