import { Link } from "react-router-dom";

type Items = {
  path: string;
  label: string;
};

interface LinksListProps {
  items: Items[];
  className?: string;
  itemClassName?: string;
}

const LinksList = ({ items, className, itemClassName }: LinksListProps) => {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.path} className={itemClassName}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;