import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import TablePagination from "../common/TablePagination";
import React from "react";

describe("TablePagination", () => {
  it("should render pagination buttons and handle clicks", () => {
    // Mock context and function
    const mockPaginate = jest.fn();
    const contextValue = { paginate: mockPaginate };
    jest.spyOn(React, "useContext").mockImplementation(() => contextValue);

    const { getByText } = render(
      <TablePagination totalPages={5} currPage={3} />
    );

    // Test if buttons render
    expect(getByText("← Previous")).toBeInTheDocument();
    expect(getByText("Next →")).toBeInTheDocument();

    // Test button click
    fireEvent.click(getByText("← Previous"));
    expect(mockPaginate).toHaveBeenCalled();
  });

  it('should call context.paginate with currPage - 1 when "Previous" button is clicked', () => {
    const mockPaginate = jest.fn();
    const contextValue = { paginate: mockPaginate };
    jest.spyOn(React, "useContext").mockImplementation(() => contextValue);

    const { getByText } = render(
      <TablePagination totalPages={5} currPage={3} />
    );
    fireEvent.click(getByText("← Previous"));

    expect(mockPaginate).toHaveBeenCalledWith(2);
  });

  it('should not render "Previous" button when `currPage` is 1', () => {
    const mockPaginate = jest.fn();
    const contextValue = { paginate: mockPaginate };
    jest.spyOn(React, "useContext").mockImplementation(() => contextValue);

    const { queryByText } = render(
      <TablePagination totalPages={5} currPage={1} />
    );

    expect(queryByText("← Previous")).toBeNull();
  });

  it('should not render "Next" button when `currPage` is equal to `totalPages`', () => {
    const mockPaginate = jest.fn();
    const contextValue = { paginate: mockPaginate };
    jest.spyOn(React, "useContext").mockImplementation(() => contextValue);

    const { queryByText } = render(
      <TablePagination totalPages={5} currPage={5} />
    );

    expect(queryByText("Next →")).not.toBeInTheDocument();
  });
  it('should call context.paginate with currPage + 1 when "Next" button is clicked', () => {
    const mockPaginate = jest.fn();
    const contextValue = { paginate: mockPaginate };
    jest.spyOn(React, "useContext").mockImplementation(() => contextValue);

    const { getByText } = render(
      <TablePagination totalPages={5} currPage={3} />
    );
    fireEvent.click(getByText("Next →"));

    expect(mockPaginate).toHaveBeenCalledWith(4);
  });
});
