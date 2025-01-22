import NewsPanel from "../news/NewsPanel";
import PromoPanel from "../promo/PromoPanel";
import SearchPanel from "../search/SearchPanel";
import BannerPanel from "../banner/BannerPanel.tsx";
import RecomendationsPanel from "../recomendations/RecomendationsPanel";

/**
 * Neyandex - родительский компонент, который рендерит дочерние компоненты.
 *
 * @component
 * @example
 * const data = {
 *   newsData: {news: [{iconNews1, textNews1, linkNews1}, {iconNews2, textNews2, linkNews2}], financial:{currencies, stocks},...],
 *   promoData: {promoImage, promoText, promoLink},
 *   searchData: {tabs, logo, subtitle},
 *   bannerData: {bannerImage},
 *   recomendationsData: {recomendations, transport, tvprogram, podcasts},
 * }
 * return (
 *   <ParentComponent data={data} />
 * )
 *
 * @param {Object} props - Пропсы компонента
 * @param {Object} props.data - Данные для дочерних компонентов
 * @param {string} props.data.newsData - Данные для компонента NewsPanel
 * @param {string} props.data.promoData - Данные для компонента PromoPanel
 * @param {string} props.data.searchData - Данные для компонента SearchPanel
 * @param {string} props.data.bannerData - Данные для компонента BannerPanel
 * @param {string} props.data.recomendationsData - Данные для компонента RecomendationsPanel
 * @returns {React.ReactElement} Возвращает компонент.
 */

const Neyandex = ({ data }) => {
  return (
    <div>
      <NewsPanel data={data.newsData} />
      <PromoPanel data={data.promoData} />
      <SearchPanel data={data.searchData} />
      <BannerPanel data={data.bannerData} />
      <RecomendationsPanel data={data.recomendationsData} />
    </div>
  );
};

export default Neyandex;
