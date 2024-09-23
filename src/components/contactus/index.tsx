import { useForm } from 'react-hook-form';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUsImage from '@/assets/ContactUsPageGraphic.webp';
import HText from '@/shared/HText';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-7 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white text-white`;
  const { register, trigger, formState: { errors }, } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        <motion.div className="md:w-3/5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 },}}>
          <HText>
            <span className="text-secondary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div className="mt-10 basis-3/5 md:mt-0" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 },}}>
            <form target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/el/liyefi" method="POST">
              <input className={inputStyles} type="text" placeholder="NAME" {...register("name", { required: true, maxLength: 100, })} />
              {errors.name && (
                <p className="relative bottom-6 h-0 left-1 text-base text-secondary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 char."}
                </p>
              )}
              <input className={inputStyles} type="text" placeholder="EMAIL" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
              {errors.email && (
                <p className="relative bottom-6 h-0 left-1 text-base text-secondary-500">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <textarea className={inputStyles} placeholder="MESSAGE" rows={4} cols={50} {...register("message", { required: true, maxLength: 2000,})} />
              {errors.message && (
                <p className="relative bottom-6 h-0 left-1 text-base text-secondary-500">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 char."}
                </p>
              )}
              <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 text-white hover:text-white hover:bg-primary-500">SUBMIT</button>
            </form>
          </motion.div>
          <motion.div className="relative mt-16 basis-2/5 md:mt-0" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 }, }}>
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img className="w-full rounded-lg opacity-95 md:min-w-[387px] md:min-h-[420px]" alt="" src={ContactUsImage} loading="lazy" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;