import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import TablePagination from "../common/TablePagination";

describe("Table Pagination", () => {
  // Renders pagination component with correct current and total pages
  it("should render correct current and total pages", () => {
    const { getByText } = render(
      <TablePagination totalPages={5} currPage={3} paginate={() => {}} />
    );
    expect(getByText("Page 3 of 5")).toBeInTheDocument();
  });

  // Does not render "Previous" button when current page is 1
  it('should not render "Previous" button on first page', () => {
    const { queryByText } = render(
      <TablePagination totalPages={5} currPage={1} paginate={() => {}} />
    );
    expect(queryByText("← Previous")).toBeNull();
  });

  // Displays "Previous" button when current page is greater than 1
  it('should display "Previous" button when current page is greater than 1', () => {
    const { getByText } = render(
      <TablePagination totalPages={5} currPage={3} paginate={() => {}} />
    );
    expect(getByText("← Previous")).toBeInTheDocument();
  });

  // Displays "Next" button when current page is less than total pages
  it('should display "Next" button when current page is less than total pages', () => {
    const { getByText } = render(
      <TablePagination totalPages={5} currPage={3} paginate={() => {}} />
    );
    expect(getByText("Next →")).toBeInTheDocument();
  });

  // Calls paginate function with correct page number when "Previous" button is clicked
  it('should call paginate with correct page number when "Previous" button is clicked', () => {
    const mockPaginate = jest.fn();
    const { getByText } = render(
      <TablePagination totalPages={5} currPage={3} paginate={mockPaginate} />
    );

    fireEvent.click(getByText("← Previous"));

    expect(mockPaginate).toHaveBeenCalledWith(2);
  });

  // Calls paginate function with correct page number when "Next" button is clicked
  it('should call paginate with incremented page number when "Next" button is clicked', () => {
    const mockPaginate = jest.fn();
    const { getByText } = render(
      <TablePagination totalPages={5} currPage={2} paginate={mockPaginate} />
    );

    fireEvent.click(getByText("Next →"));

    expect(mockPaginate).toHaveBeenCalledWith(3);
  });

  // Does not render "Next" button when current page equals total pages
  it('should not render "Next" button when current page equals total pages', () => {
    const { queryByText } = render(
      <TablePagination totalPages={5} currPage={5} paginate={() => {}} />
    );
    expect(queryByText("Next →")).not.toBeInTheDocument();
  });

  // Renders without crashing when totalPages is zero
  it("should render without crashing when totalPages is zero", () => {
    render(<TablePagination totalPages={0} currPage={0} paginate={() => {}} />);
  });
});
