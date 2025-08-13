import React from "react";

function Table({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>No Data</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }

  const headings = Object.keys(data[0]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headings.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headings.map((key, cellIndex) => (
                <td key={cellIndex}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
