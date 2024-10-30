import React from "react";

const CoinRow: React.FC<{
  header: string[];
  itemIdx: number;
  data: { [key: string]: string };
}> = ({ header, itemIdx, data }) => {

  const formattedTotalSupply = (Number(data["tsupply"]) || 0).toLocaleString(
    undefined,
    {
      notation: "compact",
      maximumFractionDigits: 2,
    }
  );
    
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
      value: `${formattedTotalSupply} ${data["symbol"]}`,
    },
  ];

  return (
    <>
      {data && (
        <tr
          className={`font-semibold text-sm min-w-fit ${
            +itemIdx % 2 === 0 ? "bg-[#ebebeb]" : "bg-white"
          }`}
        >
          {rowData.map(({ title, value }) => (
            <td key={title}>
              <h4 className="mobileHeader">{title}</h4>
              <p className="flex flex-wrap w-[100px] break-words">{value}</p>
            </td>
          ))}
        </tr>
      )}
    </>
  );
};

export default CoinRow;
