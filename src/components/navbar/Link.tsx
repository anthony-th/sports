import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({
  page,
  selectedPage,
  setSelectedPage,
}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-white text-base hover:bg-primary-500 rounded px-2 py-1 w-fit text-nowrap`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;