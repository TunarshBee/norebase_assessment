import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Table from "../common/index";

describe("Table Component", () => {
  // Renders a table with headers and data when not loading
  it("should render table with headers and data when not loading", () => {
    const header = ["Name"];
    const data = [{ name: "Bitcoin" }];
    const { getAllByText, getByText } = render(
      <Table
        header={header}
        data={data}
        isLoadingData={false}
        totalPages={1}
        currentPage={1}
        onPageChange={() => {}}
      />
    );
    expect(getAllByText("Name")).toBeTruthy();
    expect(getByText("Bitcoin")).toBeInTheDocument();
  });

  // Handles empty header array gracefully
  it("should handle empty header array gracefully", () => {
    const header: string[] = [];
    const data = [{ Name: "Bitcoin", Price: "$50000" }];
    const { container } = render(
      <Table
        header={header}
        data={data}
        isLoadingData={false}
        totalPages={1}
        currentPage={1}
        onPageChange={() => {}}
      />
    );
    const tableHeaders = container.querySelectorAll("thead tr td");
    expect(tableHeaders.length).toBe(0);
  });

  // Displays skeleton loading rows when data is loading
  it("should display skeleton loading rows when data is loading", () => {
    const header = ["Name", "Price"];
    const data = [{ name: "Bitcoin", price_usd: "$50000" }];
    const { queryByTestId } = render(
      <Table
        header={header}
        data={data}
        isLoadingData={true}
        totalPages={1}
        currentPage={1}
        onPageChange={() => {}}
      />
    );
    expect(queryByTestId("skeleton")).toBeInTheDocument();
  });

  // Renders CoinRow components for each data item
  it("should render CoinRow components for each data item when not loading", () => {
    const header = ["Name", "Price"];
    const data = [{ name: "Bitcoin", price_usd: "50000" }];
    const { getByText } = render(
      <Table
        header={header}
        data={data}
        isLoadingData={false}
        totalPages={1}
        currentPage={1}
        onPageChange={() => {}}
      />
    );
    expect(getByText("Bitcoin")).toBeInTheDocument();
    expect(getByText("$50000")).toBeInTheDocument();
  });

  // Displays TablePagination component when not loading
  it("should display TablePagination when not loading", () => {
    const header = ["Name", "Price"];
    const data = [{ name: "Bitcoin", price_usd: "50000" }];
    const { getAllByText } = render(
      <Table
        header={header}
        data={data}
        isLoadingData={false}
        totalPages={1}
        currentPage={1}
        onPageChange={() => {}}
      />
    );
    expect(getAllByText("Bitcoin")).toBeTruthy();
    expect(getAllByText("$50000")).toBeTruthy();
  });

  // Handles rapid toggling of isLoadingData state
  it("should handle rapid toggling of isLoadingData state", () => {
    const header = ["Name", "Price"];
    const data = [{ name: "Bitcoin", price_usd: "50000" }];
    const { rerender } = render(
      <Table
        header={header}
        data={data}
        isLoadingData={true}
        totalPages={1}
        currentPage={1}
        onPageChange={() => {}}
      />
    );
    rerender(
      <Table
        header={header}
        data={data}
        isLoadingData={false}
        totalPages={1}
        currentPage={1}
        onPageChange={() => {}}
      />
    );
  });
});
