import NewsItem from "./NewsItem";
import Finances from "./Finances";

/**
 * NewsPanel - родительский компонент блока баннера.
 *
 * @component
 * @example
 * const data = {news: [{link: "https://s3.neyandex.ru/news1", icon: "extra.svg", text: "Lorem ipsum, dolor sit amet"},
 *                      {link, icon, text}],
 *                       financial:{currencies: [{name:"USD", value: 50.00}, {name, value}, {name, value}],
 *                                  stocks: [{name:"NMX", value: 10.00}, {name:"LFI", value: 1.00}]}}
 * return (
 *   <NewsPanel data={data} />
 * )
 *
 * @param {Object} props - Пропсы компонента
 * @param {string} props.data - Данные для дочерних компонентов
 * @param {string} props.data.news - Данные для списка компонентов новостей NewsItem
 * @param {string} props.data.financial - Данные для компонента финансовой ифнормации Financial
 * @returns {React.ReactElement} Возвращает компонент.
 */

const NewsPanel = ({ data }) => {
  return (
    <div className="news">
      <ul className="news-list">
        {data.news.map((item) => {
          <NewsItem data={item} />;
        })}
      </ul>
      <Finances data={data.financial} />
    </div>
  );
};

export default NewsPanel;
