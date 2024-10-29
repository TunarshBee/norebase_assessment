import { render } from "@testing-library/react";
import CoinRow from "../common/CoinRow";

describe("Rendering CoinRow", () => {
 
  // Handles empty data object gracefully without rendering
  it("should also render a table row when data object is empty", () => {
    const header = ["Name", "Symbol", "Price", "Total Supply"];
    const data = {};
    const { container } = render(
      <CoinRow header={header} itemIdx={1} data={data} />
    );
    const row = container.querySelector("tr");
    expect(row).not.toBeNull();
  });

  // Deals with missing data fields without crashing
  it("should render a table row without crashing when data fields are missing", () => {
    const header = ["Name", "Symbol", "Price", "Total Supply"];
    const data = { name: "Bitcoin", symbol: "BTC" };
    const { container } = render(
      <CoinRow header={header} itemIdx={2} data={data} />
    );
    const row = container.querySelector("tr");
    expect(row).not.toBeNull();
  });

  // Ensures correct rendering when header array is shorter than expected
  it("should render correctly when header array is shorter than expected", () => {
    const header = ["Name", "Symbol"];
    const data = { name: "Ethereum", symbol: "ETH" };
    const { container } = render(
      <CoinRow header={header} itemIdx={0} data={data} />
    );
    const row = container.querySelector("tr");
    expect(row).toBeTruthy();
  });
});
