import { useState, useEffect, Fragment } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.webp';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  useEffect(() => {
    document.body.style.overflow = isMenuToggled ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuToggled]);

  const links = ["Home", "Benefits", "Our Classes", "Contact Us"];

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} width={113} height={24} loading="lazy" />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full gap-4`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {links.map(link => (
                    <Link 
                      key={link}
                      page={link} 
                      selectedPage={selectedPage} 
                      setSelectedPage={setSelectedPage} 
                    />
                  ))}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p className='text-nowrap'>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <Fragment>
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl flex flex-col justify-between md:block">
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMenuToggled(false)}>
                <XMarkIcon className="h-10 w-10 text-secondary-500 hover:text-gray-400" />
              </button>
            </div>
            <div className="px-[20%] flex flex-col gap-10 h-full py-8">
              {links.map(link => (
                <Link 
                  key={link}
                  page={link} 
                  selectedPage={selectedPage} 
                  setSelectedPage={setSelectedPage} 
                />
              ))}
            </div>
          </div>
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50"
            onClick={() => setIsMenuToggled(false)}
          ></div>
        </Fragment>
      )}
    </nav>
  );
};

export default NavBar;