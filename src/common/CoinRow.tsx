import React from "react";

const CoinRow: React.FC<{
  header: string[];
  itemIdx: number;
  data: { [key: string]: string };
}> = ({ header, itemIdx, data }) => {
    
  const rowData = [
    {
      title: header[0],
      value: data["name"],
    },
    {
        title: header[1],
      value: data["symbol"],
    },
    {
        title: header[2],
      value: `$${data["price_usd"]}`,
    },
    {
        title: header[3],
      value: `${data["tsupply"]} ${data["symbol"]}`,
    }
  ];

  return (
    <>
      {data && (
        <tr
          className={`font-semibold text-sm ${
            +itemIdx % 2 === 0 ? "bg-[#ebebeb]" : "bg-white"
          }`}
        >
          {rowData.map(({ title, value }) => (
            <td key={title}>
              <h4 className="mobileHeader">{title}</h4>
              <p>{value}</p>
            </td>
          ))}
        </tr>
      )}
    </>
  );
};

export default CoinRow;
