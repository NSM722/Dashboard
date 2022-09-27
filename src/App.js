import React, { useState, useEffect } from 'react';  
import Customers from "../src/components/Customers/Customers";
import Pagination from "../src/components/Pagination/Pagination";
import Header from './components/Header/Header';

const App = () => {
  // State to get and set the customer details
  const [customers, setCustomers] = useState([]);

  // Acts like an indicator when fetching data from the API
  const [loading, setLoading] = useState(false);

  // User is currently on this page - starts at 1
  const [currentPage, setCurrentPage] = useState(1);

  // Number of Records to be displayed per page 
  const [customersPerPage] = useState(3);

  const [searchInput, setSearchInput] = useState('');
  // console.log(searchInput)

  // Function that fetches data from the API
  const fetchData = () => {
    const url = 'https://thawing-plains-90222.herokuapp.com/customers'
    fetch(url)
    .then(response => response.json())
    .then(data => setCustomers(data.customers))
    .catch(error => console.log(error))
  }

  // Making requests to the API while updating the component
  useEffect(() => {
    // In the process of fetching our request therefore loading is set to true
    setLoading(true)
    fetchData()
    // Request is already completed at this point therefore loading is set back to false
    setLoading(false)
  }, []);

  //console.log(customers);

  // Getting the Current Posts
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  
  /*slicing out the number of customers from the data to equal the number of customers required for display per page which is (3)
  */
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Function to change the page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  // listening for changes in the input element
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Function to clear input in the search bar
  const handleClearClick = () => {
    setSearchInput('');
  };

  // Boolean value for clear button to be displayed
  const displayClearButton = searchInput.length > 0;

  // Queries featured in the search filter
  const searchInputQueries = ['name', 'country_code', 'email', 'city'];

  // search filter function
  const search = data => {
    //console.log(data);
    return data.filter(
      item => searchInputQueries.some(searchInputQuery => {
        return item[searchInputQuery].toLowerCase().includes(searchInput.toLowerCase())
      })
      );
  };
  //console.log(searchInput)

  return (
    <>
      <main className="container">
        <Header />
        <section>
          <input
          type="text"
          placeholder="  Search here..."
          onChange={handleInputChange}
          value={searchInput}
          className="mt-2 mb-4"
          />
          {/** Conditionally rendering the clear button */}
          {displayClearButton && (
            <>
              <br />
              <button
                type="button"
                className="btn btn-outline-dark btn-sm mb-3"
                onClick={handleClearClick}
              >CLEAR
              </button>
            </>
          )}
        </section>
        <Customers
        loading={loading}
        customers={search(currentCustomers)}
        data-testid = 'Customers'
        />
        <br/>
        <Pagination 
        customersPerPage={customersPerPage}
        totalCustomers = {customers.length}
        paginate={paginate}
        data-testid = 'Pagination'
        />
      </main>
    </>
  );
}
export default App;