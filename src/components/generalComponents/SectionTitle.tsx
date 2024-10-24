interface TitleProps {
  title_bold: string;
  title_regular?: string;
}

export default function SectionTitle({
  title_bold,
  title_regular,
}: TitleProps) {
  return (
    <h3 className="font-poppins text-[48px]/[58px] text-azulOrg w-full flex flex-row justify-center">
      <p className="font-bold inline mr-4">{title_bold} </p>
      <p className="inline">{title_regular}</p>
    </h3>
  );
}
