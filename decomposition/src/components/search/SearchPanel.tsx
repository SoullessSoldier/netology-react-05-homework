/**
 * SearchPanel - родительский компонент блока баннера.
 *
 * @component
 * @example
 * const data = {tabs: [{name: "/tab1", link:"#"}, {}, {} ], logo: "logo.svg", subtitle: "Lorem ipsum, dolor sit amet"}
 * return (
 *   <SearchPanel data={data} />
 * )
 *
 * @param {Object} props - Пропсы компонента
 * @param {string} props.data - Данные для дочерних компонентов
 * @param {string} props.data.tabs - Данные для списка вкладок
 * @param {string} props.data.logo - Данные для логотипа
 * @param {string} props.data.subtitle - Данные для блока под строкой поиска
 * @returns {React.ReactElement} Возвращает компонент.
 */

const SearchPanel = ({ data }) => {
  return (
    <>
    {data}
    </>);
};

export default SearchPanel;
