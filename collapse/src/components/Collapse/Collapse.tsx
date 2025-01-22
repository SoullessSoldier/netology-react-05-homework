import { PropsWithChildren, FC, useState } from "react";
import "./collapse.css";

type TCollapseProps = {
  collapsedLabel?: string;
  expandedLabel?: string;
};

/**
 *
 * Collapse - компонент , сворачивающий свое полезное содержимое.
 *
 * @component
 * @example
 *    <Collapse collapsedLabel="Открыть" expandedLabel="Закрыть">
 *       <p>
 *         Lorem ipsum sit dolor amet.
 *       </p>
 *     </Collapse>
 *
 * @param collapsedLabel - (опционально) надпись на кнопке для развернутого состояния
 * @param expandedLabel - (опционально) надпись на кнопке для развернутого состояния
 * @returns React.ReactElement
 */

const Collapse: FC<PropsWithChildren<TCollapseProps>> = ({
  collapsedLabel = "Развернуть",
  expandedLabel = "Свернуть",
  children,
}) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className="collapse bordered">
      <div className="collapse-control">
        <button
          className="collapse-button"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? collapsedLabel : expandedLabel}
        </button>
      </div>
      <div
        className={`collapse-body bordered ${
          collapsed ? "" : "collapse-body-expanded"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
