import React from "react";

function Paginator() {
  const [pageItems, setPageItems] = React.useState([]);
  const [nameItems, setNameItems] = React.useState([]);
  const [paginatorItems, setPaginatorItems] = React.useState([]);
  const [totalItems, setTotalItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const itemsPerPage = 10;

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.statusText}`);
      }

      const data = await response.json();
      setNameItems(data);
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  };

  async function fetchDat() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const items = await response.json();
      setTotalItems(items);
      renderPage(1, items);
    } catch (error) {}
  }

  function renderPage(page, items) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);
    setPageItems(currentItems);

    updatePagination(items);
  }

  function updatePagination(items) {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const arrayOfDigits = [];

    for (let i = 1; i <= totalPages; i++) {
      arrayOfDigits.push(i);
    }

    setPaginatorItems(arrayOfDigits);
  }

  function handlePaginator(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = totalItems.slice(startIndex, endIndex);
    setCurrentPage(page);
    setPageItems(currentItems);
  }

  React.useEffect(() => {
    fetchDat();
    fetchData();
  }, []);

  return (
    <>
      <h2 class="js_test">
        <span class="js_name">list of</span> names
      </h2>
      <div class="name_test">
        {nameItems.map(function (item, i) {
          return <li key={i}>{item.name}</li>;
        })}
      </div>
      <h2 class="title_pag">
        <span class="pg_s">Paginator</span> with Fetch
      </h2>
      <div>
        <div class="container">
          <div id="content" class="content">
            {pageItems.map(function (item, i) {
              return <li key={i}>{item.title}</li>;
            })}
          </div>
          <div id="pagination" class="pagination">
            {paginatorItems.map((item, i) => {
              return (
                <button
                  className={i + 1 === currentPage ? "active" : ""}
                  onClick={() => handlePaginator(i + 1)}
                  key={i}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Paginator;
