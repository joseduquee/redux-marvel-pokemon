import { useEffect, useState } from "react";

export const Test = () => {
    
    const [page, setPage] = useState(0)
    const [user, setUsers] = useState([]);
    
    const getData = async ( page ) => {
        const USERS_URL = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`;
    const resp = await fetch(USERS_URL);
    return resp.json();
  };


  useEffect(() => {
    getData(page).then((resp) => {
      setUsers(resp.results);
    });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1)
  };
  const prevPage = () => {
    if( page === 0) return;
    setPage(() => setPage(page - 1))
  };

  const initialPage = () => {
    setPage(() => setPage(0))
  };
  const lastPage = () => {
    setPage(() => setPage(page + 1))
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {user.map((val) => (
            <tr key={val.url}>
              <td>{val.id}</td>
              <td>{val.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn" onClick={ () => initialPage() }>first</button>
        <button className="previous-page-btn" onClick={ () => prevPage() }>previous</button>
        <button className="next-page-btn" onClick={ () => nextPage() }>next</button>
        <button className="last-page-btn">last</button>
      </section>
    </div>
  );
};
