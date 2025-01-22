import Recomendation from "./Recomendation";
/**
 * RecomendationsPanel - родительский компонент блока рекомендаций.
 *
 * @component
 * @example
 * const data = [{title: "title1", content: {}}, {title: "title2", content: {}} }
 * return (
 *   <RecomendationsPanel data={data} />
 * )
 *
 * @param {Object} props - Пропсы компонента
 * @param {string} props.data - Данные для дочерних компонентов
 * @returns {React.ReactElement} Возвращает компонент.
 */

const RecomendationsPanel = ({data}) => {
    return (
        data.map((item) => {
            <Recomendation data={data} />
        })
    )
}

export default RecomendationsPanel;