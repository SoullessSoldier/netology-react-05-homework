import { TCard } from "@/types/card";
import { ReactNode } from "react";

export const CardBody = (props: TCard): ReactNode => {
    return (
      <div className="card-body">
        {props.title && <h5 className="card-title">{ props.title }</h5>}
        {props.text && <p className="card-text">{ props.text }</p>}
        {props.buttonTitle && <a href="#" className="btn btn-primary">{ props.buttonTitle }</a>}
      </div>
    );
}