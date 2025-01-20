import { TCard } from "@/types/card";

export const CardImage = (props: TCard) => {
  return ( props.image && <img src={props.image} className="card-img-top" alt="Card image"></img>);
};