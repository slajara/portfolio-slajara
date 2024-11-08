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
    img: "company/gainkode.png",
    position: "FullStack Web 3.0",
    company: "Gainkode",
    tech: [
      "skills/angular.svg", 
      "skills/nodejs.svg", 
      "skills/postgresql.svg",
      "skills/docker.svg",
    ],
    date: "NOV/2024 .. - ACT",
    functions: [
      "Developing dynamic, responsive web applications with Angular, leveraging RxJS and Angular Material.",
      "Building RESTful APIs and backend services with Node.js and Express.",
      "Implementing integrations with cryptocurrency exchanges like Kraken.",
      "Working with PostgreSQL for data storage solutions, optimizing queries and ensuring data integrity.",
    ],
  },

  {
    img: "company/mrcrypto.png",
    position: "FullStack Web 3.0",
    company: "Mr.Crypto NFT Community",
    tech: [
      "skills/hardhat.svg",
      "skills/solidity.svg",
      "skills/typescript.svg",
      "skills/nextjs.svg",
      "skills/nodejs.svg",
    ],
    date: "",
    functions: [
      "Developed an NFT marketplace in a SCRUM team, delivering features incrementally and improving team efficiency.",
      "Created ERC721 and E7L tokens, ensuring compatibility with Ethereum standards and popular wallets.",
      "Built a DApp for NFT collection creation with Next.js and Web3.js, supporting ERC721 and ERC1155 via factory smart contracts.",
      "Connected frontend with smart contracts for seamless NFT minting and management through a web interface.",
    ],
  },

  {
    img: "company/indra.svg",
    position: "Frontend Developer",
    company: "Indra",
    tech: ["skills/javascript.svg", "skills/react.svg", "skills/css.svg"],
    date: "FEB/2023 .. - JUN/2024",
    functions: [
      "Building modular and reusable components in React, leveraging hooks like useState and useEffect to manage state and lifecycle events effectively.",
      "Utilizing Context API to manage global state, ensuring consistent data flow and reducing the need for prop drilling across nested components.",
      "Integrating RESTful APIs to fetch and update data, creating smooth interactions between frontend and backend services.",
    ],
  },

  {
    img: "company/umh.png",
    position: "Studies",
    company: "University + Bootcamp",
    tech: ["/company/umh.png", "/company/disrup3.png", "/company/racks.jpg"],
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
    tech: ["skills/excel.svg"],
    date: "JUL/2018 .. - MAR/2020",
    functions: [
      "Communicated with customers and handled sales, ensuring a positive and engaging experience.",
      "Managed overall organization and logistics of the business, ensuring smooth operations and efficient service delivery.",
      "Prepared and organized materials for serving at events and nightclubs, maintaining high standards of service.",
    ],
  },
];
