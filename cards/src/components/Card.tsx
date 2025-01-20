import React, { PropsWithChildren } from "react";
import { cloneElement, FC } from "react";
import type { TCard } from "@/types/card";


const Card: FC<PropsWithChildren<{props: TCard}>> = ({ children, props }): React.ReactNode => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return cloneElement(child, {...props})
        }
      })}
    </div>
  );
};

export default Card;
