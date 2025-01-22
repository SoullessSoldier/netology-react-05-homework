/**
 * Recomendation - дочерний компонент блока рекомендаций.
 *
 * @component
 * @example
 * const data = {сontent: [{},{},{}], title: {}}
 * return (
 *   <Recomendation data={data} />
 * )
 *
 * @param {Object} props - Пропсы компонента
 * @param {Object} props.data - Данные для компонента

 * @returns {React.ReactElement} Возвращает компонент.
 */

const Recomendation = ({ data }) => {
  return <>{data}</>;
};

export default Recomendation;
