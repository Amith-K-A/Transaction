import React from "react";
import moment from "moment";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: aliceblue;
  border: 2px solid #00bfff;
`;

const TableBody = styled.tbody`
  tr:hover {
    background-color: #eee;
  }

  td {
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
`;

const StyledThead = styled.thead`
  button {
    border: 0;
    border-radius: none;
    font-family: inherit;
    font-weight: 700;
    font-size: inherit;
    padding: 0.5em;
    margin-bottom: 1px;
    background: #00bfff;
  }

  button.ascending::after {
    content: "👇";
    display: inline-block;
    margin-left: 1em;
  }

  button.descending::after {
    content: "☝️";
    display: inline-block;
    margin-left: 1em;
  }
  th {
    background: #00bfff;
    border-right: 1px solid #ccc;
    padding: 3px;
  }
`;

const NoItem = styled.tr`
  width: 100%;
  height: 20vh;
  display: grid;
  place-items: center;
  padding-left: 85%;
`;

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const Table = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.items);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <th>
            <button type="button" className={getClassNamesFor("_id")}>
              Transaction ID
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("amount")}
              className={getClassNamesFor("amount")}
            >
              Amount <>&#8645;</>
            </button>
          </th>
          <th>
            <button type="button" className={getClassNamesFor("type")}>
              Type
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("date")}
              className={getClassNamesFor("date")}
            >
              Date <>&#8645;</>
            </button>
          </th>
        </tr>
      </StyledThead>
      <TableBody>
        {items.length ? (
          items.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>₹{item.amount}</td>
              <td>{item.type}</td>
              <td>{moment(item.date).format("MMMM Do YYYY, h:mm:ss a")}</td>
            </tr>
          ))
        ) : (
          <NoItem>No items</NoItem>
        )}
      </TableBody>
    </StyledTable>
  );
};

export default Table;
