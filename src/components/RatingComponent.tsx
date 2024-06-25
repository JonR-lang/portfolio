import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

type Digits = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const RatingComponent = ({
  className,
  value,
  items,
}: {
  className?: string;
  value: number;
  items: Digits;
}) => {
  return (
    <div className={className}>
      <Rating
        style={{ objectFit: "contain", width: "100%" }}
        value={value}
        items={items}
        readOnly={true}
      />
    </div>
  );
};

export default RatingComponent;
