import useOrderStore from "../store/useOrderStore.ts";
import { FaArrowsAltV, FaArrowDown, FaArrowUp } from "react-icons/fa";

interface Propss {
  titulo: string;
}

const TableHeader = ({ titulo }: Propss) => {
  const atribute = useOrderStore((s) => s.atribute);
  const order = useOrderStore((s) => s.order);
  const setOrder = useOrderStore((s) => s.setOrder);

  const rodaSeta = () => {
    if (!(atribute === titulo)) {
      setOrder(titulo, "desc");
    } else if (order === "desc") {
      setOrder(titulo, "asc");
    } else {
      setOrder(titulo, "desc");
    }
  };

  return (
    <th onClick={rodaSeta} style={{ cursor: "pointer" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
        <span>{titulo}</span>
        {atribute === titulo ? (
          order === "asc" ? (
            <FaArrowUp />
          ) : (
            <FaArrowDown />
          )
        ) : (
          <FaArrowsAltV />
        )}
      </div>
    </th>
  );
};

export default TableHeader;
