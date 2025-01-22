import Banner from "./Banner";

/**
 * BannerPanel - родительский компонент блока баннера.
 *
 * @component
 * @example
 * const bannerImage = "https://s3.neyandex.ru/banner01.webp"
 * return (
 *   <BannerPanel bannerImage={bannerImage} />
 * )
 *
 * @param {Object} props - Пропсы компонента
 * @param {string} props.data - Данные для компонента
 */
const BannerPanel = ({ data }) => {
  return <>
    <Banner image={data.bannerImage}/>
  </>;
};


export default BannerPanel;
