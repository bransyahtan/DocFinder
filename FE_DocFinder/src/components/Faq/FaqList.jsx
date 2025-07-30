import { faqs } from "../../assets/data/faqs";
import { FaqItem } from "./FaqItem";

export const FaqList = () => {
  return (
    <ul>
      {faqs.map((item, index) => (
        <FaqItem key={index} item={item} />
      ))}
    </ul>
  );
};
