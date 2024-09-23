import Logo from "@/assets/Logo.webp";
import { memo } from "react";

const linkStyle = 'transition duration-500 hover:text-white text-base hover:bg-primary-500 rounded px-2 py-1 w-fit relative right-2';

const FooterLink = ({ href, children, title }: { href: string, title?: string, children: React.ReactNode }) => (
  <a href={href} title={title} className={linkStyle} aria-label={children?.toString()}>
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} width={113} height={24} loading="lazy" />
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quis consequuntur voluptatibus quas debitis quaerat, repellendus autem officiis id reprehenderit ipsa saepe eos odio quos mollitia assumenda laudantium, inventore dolor!
          </p>
          <p>© All Rights Reserved.</p>
        </div>
        <div className="flex flex-col mt-16 basis-1/4 md:mt-0 gap-4">
          <h4 className="font-bold text-2xl text-[#683220] mb-2">Links</h4>
          <FooterLink href="#no_scroll" title="test1Link">Link First</FooterLink>
          <FooterLink href="#no_scroll" title="test2Link">Link Second</FooterLink>
          <FooterLink href="#no_scroll" title="test3Link">Link Third</FooterLink>
        </div>
        <div className="flex flex-col mt-16 basis-1/4 md:mt-0 gap-4">
          <h4 className="font-bold text-2xl text-[#683220] mb-2">Contact Us</h4>
          <address className="flex flex-col basis-1/4 md:mt-0 gap-4">
            <FooterLink href="mailto:OurEmail@gmail.com">OurEmail@gmail.com</FooterLink>
            <FooterLink href="tel:2222222222">(222)&nbsp;222-22-22</FooterLink>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);