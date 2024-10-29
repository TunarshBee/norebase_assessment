import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Table from "../common/index";
import React from "react";

describe("Table Component", () => {
  const mockPaginationContext = {
    currentPage: 1,
  };

  beforeEach(() => {
    // Mock the PaginationContext to provide a currentPage value
    jest.spyOn(React, "useContext").mockReturnValue(mockPaginationContext);
  });

  it("renders table headers correctly when header data is provided", () => {
    const header = ["Name", "Price", "Total Supply"];
    const data: {
    [key: string]: string;
}[] = [];
    const isLoadingData = false;
    const totalPages = 0;

    render(
      <Table
        header={header}
        data={data}
        isLoadingData={isLoadingData}
        totalPages={totalPages}
      />
    );

    header.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("displays loading skeletons when data is loading", () => {
    const header = ["Name", "Price", "Total Supply"];
    const data: {
      [key: string]: string;
    }[] = [];
    const isLoadingData = true;
    const totalPages = 0;

    render(
      <Table
        header={header}
        data={data}
        isLoadingData={isLoadingData}
        totalPages={totalPages}
      />
    );

    const skeletonRows = screen.getAllByTestId("skeleton-row");
    expect(skeletonRows).toHaveLength(30);
  });

  it("renders CoinRow components correctly when data is available", () => {
    const header = ["Name"];
    const data = [
      { name: "Bitcoin" },
    ];
    const isLoadingData = false;
    const totalPages = 1;

    render(
      <Table
        header={header}
        data={data}
        isLoadingData={isLoadingData}
        totalPages={totalPages}
      />
    );

    // Check that the CoinRow component renders the data correctly
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
  });

  it("displays TablePagination when data is not loading", () => {
    const header = ["Name", "Price", "Total Supply"];
    const data = [
      { name: "Bitcoin", price_usd: "$50,000", tsupply: "$1 Trillion" },
    ];
    const isLoadingData = false;
    const totalPages = 20;

    render(
      <Table
        header={header}
        data={data}
        isLoadingData={isLoadingData}
        totalPages={totalPages}
      />
    );

    expect(screen.getByTestId("btnWrapper")).toBeInTheDocument();
  });

  it("does not render TablePagination when data is loading", () => {
    const header = ["Name", "Price", "Total Supply"];
    const data: {
      [key: string]: string;
    }[] = [];
    const isLoadingData = true;
    const totalPages = 20;

    render(
      <Table
        header={header}
        data={data}
        isLoadingData={isLoadingData}
        totalPages={totalPages}
      />
    );

    expect(screen.queryByTestId("btnWrapper")).not.toBeInTheDocument(); // Should not render pagination
  });
});
