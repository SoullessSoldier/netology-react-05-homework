/**
 * PromoPanel - родительский компонент блока промо-информации.
 *
 * @component
 * @example
 * const data = {promoImage: "https://s3.neyandex.ru/promo1.webp",
 *               promoText: "Lorem ipsum, dolor sit amet",
 *               promoLink: "#"};
 * return (
 *   <PromoPanel data={data} />
 * )
 *
 * @param {Object} props - Пропсы компонента
 * @param {string} props.data - Данные для дочерних компонентов
 * @param {string} props.data.promoImage - Данные для промо-изображения
 * @param {string} props.data.promoText - Данные для промо-текста
 * @param {string} props.data.promoLink - Данные для промо-ссылки
 * @returns {React.ReactElement} Возвращает компонент.
 */

const PromoPanel = ({ data }) => {
  return (
    <div className="promo">
      <a href={data.promoLink}>
        <img src={data.promoImage} className="promo-image" />
        <p className="promo-text">{data.promoText}</p>
      </a>
    </div>
  );
};

export default PromoPanel;
