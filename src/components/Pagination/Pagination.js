import React from 'react';

const Pagination = ({ customersPerPage, totalCustomers, paginate }) => {
  // Holds the number of pages which will later be on display in buttons
  const pageNumbers = [];

  /**
   * Loop to calculate the total number of pages and push them onto the above array
   */
  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  //console.log(pageNumbers)

  return (
    <>
      <section>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-end">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a
                  onClick={() => paginate(number)}
                  href="!#"
                  className="page-link link-dark"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Pagination;