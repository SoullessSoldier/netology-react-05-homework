/**
 * Finances - дочерний компонент новостного блока.
 *
 * @component
 * @example
 * const data = {currencies: [{name:"USD", value: 50.00}, {name, value}, {name, value}],
 *               stocks: [{name:"NMX", value: 10.00}, {name:"LFI", value: 1.00}]}
 * return (
 *   <Finances data={data} />
 * )
 *
 * @param {Object} props - Пропсы компонента
 * @param {string} props.data - Данные для компонента
 * @param {string} props.data.currencies - Данные по курсам валют
 * @param {string} props.data.stocks - Данные по биржевым котировкам
 * @returns {React.ReactElement} Возвращает компонент.
 */

const Finances = ({ data }) => {
  return <>{data}</>;
};

export default Finances;
