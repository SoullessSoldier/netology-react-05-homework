/**
 * NewsItem - дочерний компонент новостного блока.
 *
 * @component
 * @example
 * const data = {link: "https://s3.neyandex.ru/news1", icon: "extra.svg", text: "Lorem ipsum, dolor sit amet"}
 * return (
 *   <NewsItem data={data} />
 * )
 *
 * @param {Object} props - Пропсы компонента
 * @param {Object} props.data - Данные для компонента
 * @param {Object} props.data.icon - Данные для иконки новости
 * @param {Object} props.data.link - Данные для ссылки новости
 * @param {Object} props.data.text - Данные для текста новости
 * @returns {React.ReactElement} Возвращает компонент.
 */

const NewsItem = ({ data }) => {
  return (
    <li className="newsitem">
      <div className="newsitem-icon">
        <img src={data.icon} />
      </div>
      <div className="newsitem-content">
        <a href={data.link}>{data.text}</a>
      </div>
    </li>
  );
};

export default NewsItem;
