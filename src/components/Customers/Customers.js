import React from 'react';

const Customers = ({ customers, loading }) => {
  //console.log(customers)
  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {customers.map((customer) => (
            <div className="col-sm-6" key={customer.id}>
              <div className="card border-dark">
                <div className="card-body">
                  <h5 className="card-title">{customer.name}</h5>
                  <p className="card-text">{customer.email}</p>
                  <p className="card-text">
                    <span
                      className={`flag-icon 
                      flag-icon-squared 
                      flag-icon-${customer.country_code.toLowerCase()}`}
                    ></span>
                    &nbsp;
                    {customer.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Customers;