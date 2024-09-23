type Props = {
  name: string;
  description?: string;
  image: string;
};

const overlayStyles = `p-5 absolute z-[29] flex h-[338px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

const Class = ({ name, description, image }: Props) => {
  return (
    <li className="relative inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} width={450} height={338} loading="lazy" />
    </li>
  );
};

export default Class;