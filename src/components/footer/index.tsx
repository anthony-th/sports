import Logo from "@/assets/Logo.webp";

const Footer = () => {
  const linkStyle = 'transition duration-500 hover:text-white text-base hover:bg-primary-500 rounded px-2 py-1 w-fit relative right-2';
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quis consequuntur voluptatibus quas debitis quaerat, repellendus autem officiis id reprehenderit ipsa saepe eos odio quos mollitia assumenda laudantium, inventore dolor!
          </p>
          <p>© All Rights Reserved.</p>
        </div>
        <div className="flex flex-col mt-16 basis-1/4 md:mt-0 gap-4">
          <h4 className="font-bold text-2xl text-[#683220] mb-2">Links</h4>
          <a href="#" className={linkStyle}>Link First</a>
          <a href="#" className={linkStyle}>Link Second</a>
          <a href="#" className={linkStyle}>Link Third</a>
        </div>
        <div className="flex flex-col mt-16 basis-1/4 md:mt-0 gap-4">
          <h4 className="font-bold text-2xl text-[#683220] mb-2">Contact Us</h4>
          <a className={linkStyle} href="mailto:OurEmail@gmail.com">OurEmail@gmail.com</a>
          <a className={linkStyle} href="tel:2222222222">(222)&nbsp;222-22-22</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;