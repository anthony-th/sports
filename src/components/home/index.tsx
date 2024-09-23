import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomeText from '@/assets/HomePageText.webp';
import HomeImage from '@/assets/HomePageGraphic.webp';
import SponsorWorbes from '@/assets/SponsorWorbes.webp';
import SponsorAmadon from '@/assets/SponsorAmadon.webp';
import SponsorMacro from '@/assets/SponsorMacro.webp';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="bg-gray-20 py-10 md:pb-0 flex flex-col justify-between">
      <motion.div className="flex flex-col md:flex-row mx-auto w-5/6 items-center justify-between gap-8 md:gap-0 py-24" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        <div className="z-10 md:basis-3/5 flex flex-col gap-8">
          <motion.div className="flex flex-col gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 },}}>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="" src={HomeText} loading="lazy" className='md:min-w-[489px] md:min-h-[163px]' />
              </div>
            </div>
            <p className="pl-1 text-sm">
              Run a little longer, add a little more weight, challenge yourself in a new class. We're going to crush it every day. Together.
            </p>
          </motion.div>
          <motion.div className="flex items-center gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{hidden: { opacity: 0, x: -50 },visible: { opacity: 1, x: 0 },}}>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p className="text-base">Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:justify-items-end">
          <img alt="home-pageGraphic" src={HomeImage} loading="lazy" className='md:min-w-[428px] md:min-h-[467px]'/>
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="Sponsor Worbes" src={SponsorWorbes} loading="lazy" />
              <img alt="Sponsor Amadon" src={SponsorAmadon} loading="lazy" />
              <img alt="Sponsor MacroSoft" src={SponsorMacro} loading="lazy" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;