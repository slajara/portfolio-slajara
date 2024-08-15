export interface ProjectsProps {
  img: string;
  project: string;
  description: string;
  github: string;
  url: string;
}

export const projectsData: ProjectsProps[] = [
  {
    img: "/projects/marketplace.png",
    project: "Marketplace NFT Mr. Crypto",
    description:
      "An exclusive marketplace where users can buy, sell unique NFTs. It showcases linked NFTs, a proprietary standard of the collection (E7L). Developed with Next.js, Node.js, Hardhat and more.",
    github: "https://github.com/slajara/MarketplaceMrCrypto-TFG",
    url: "https://marketplace-mr-crypto.vercel.app/",
  },
  {
    img: "/projects/lusery.png",
    project: "Lusery Blog",
    description:
     "(Currently in development) Blog platform with backend powered by Ghost CMS deployed on Railway, and frontend built with Next.js and TypeScript.",
    github: "https://github.com/LuseryLabs/lusery",
    url: "https://luserylabs.up.railway.app/",
  },
  {
    img: "/projects/portfolio.png",
    project: "Personal Portfolio",
    description:
     "Responsive web portfolio built with Next.js and TypeScript.",
    github: "https://github.com/slajara/portfolio-slajara",
    url: "https://www.slajara.com/",
  },
  {
    img: "/projects/trello.png",
    project: "Trello 2.0",
    description:
      "A web application to create tasks and classify them as 'To Do', 'In Progress', and 'Done'. Developed using Next.js, TypeScript, and Tailwind CSS.",
    github: "https://github.com/slajara/trello-clone",
    url: "https://trello-clone-slajara.vercel.app/",
  },
  {
    img: "/projects/generator.png",
    project: "Generator Collections NFTs",
    description:
      "A generator for ERC721 and ERC1155 collections through web forms, applying the factory pattern for smart contracts using Next.js and Hardhat.",
    github: "https://github.com/slajara/generate-nft-collection",
    url: "https://ss-generate-nft-collection-front-89bk-ndw8ln2y6-samuel-sergio.vercel.app/",
  },
];
