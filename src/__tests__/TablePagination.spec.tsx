import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import TablePagination from "../common/TablePagination";

describe("Table Pagination", () => {

  // Does not render "Previous" button when current page is 1
  it('should not render "Previous" button on first page', () => {
    const { queryByText } = render(
      <TablePagination totalPages={5} currentPage={1} paginate={() => {}} />
    );
    expect(queryByText("prev")).toBeNull();
  });

  // Displays "Previous" button when current page is greater than 1
  it('should display "Previous" button when current page is greater than 1', () => {
    const { getAllByTestId } = render(
      <TablePagination totalPages={5} currentPage={3} paginate={() => {}} />
    );
    expect(getAllByTestId("prev")).toBeTruthy();
  });

  // Displays "Next" button when current page is less than total pages
  it('should display "Next" button when current page is less than total pages', () => {
    const { getAllByTestId } = render(
      <TablePagination totalPages={5} currentPage={3} paginate={() => {}} />
    );
    expect(getAllByTestId("next")).toBeTruthy();
  });

  // Calls paginate function with correct page number when "Previous" button is clicked
  it('should call paginate with correct page number when "Previous" button is clicked', () => {
    const mockPaginate = jest.fn();
    const { getByTestId } = render(
      <TablePagination totalPages={5} currentPage={3} paginate={mockPaginate} />
    );

    fireEvent.click(getByTestId("prev"));

    expect(mockPaginate).toHaveBeenCalledWith(2);
  });

  // Calls paginate function with correct page number when "Next" button is clicked
  it('should call paginate with incremented page number when "Next" button is clicked', () => {
    const mockPaginate = jest.fn();
    const { getByTestId } = render(
      <TablePagination totalPages={5} currentPage={2} paginate={mockPaginate} />
    );

    fireEvent.click(getByTestId("next"));

    expect(mockPaginate).toHaveBeenCalledWith(3);
  });

  // Renders without crashing when totalPages is zero
  it("should render without crashing when totalPages is zero", () => {
    render(<TablePagination totalPages={0} currentPage={0} paginate={() => {}} />);
  });
});
