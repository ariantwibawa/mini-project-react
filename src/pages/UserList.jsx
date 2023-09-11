import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";
import "./UserList.css";

function UserList() {
  const [userdata, setUserdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const navigate = useNavigate();
  const getData = () => {
    axios
      .get(`https://api.mudoapi.tech/menus?perPage=6&page=${currentPage}`)
      .then((rest) => {
        setUserdata(rest.data.data.Data);
        setCurrentPage(rest?.data?.data?.currentPage);
        setNextPage(rest?.data?.data?.nextPage);
        console.log(rest);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetail = (id) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  console.log(userdata);

  return (
    <div className="login-first2">
      <div>
        <NavBar />
        {userdata.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <h1>{item.priceFormatted}</h1>
            <img src={item.imageUrl} style={{ width: "300px" }} />
            <button onClick={() => handleDetail(item.id)}>See more...</button>
          </div>
        ))}

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              {currentPage > 1 ? (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="btn btn-primary"
                >
                  Prev Page
                </button>
              ) : (
                <button className="btn btn-primary" disabled>
                  Prev Page
                </button>
              )}
            </li>
            <li class="page-item">
              {nextPage !== 0 ? (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="btn btn-primary"
                >
                  Next Page
                </button>
              ) : (
                <button className="btn btn-primary" disabled>
                  Next Page
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default UserList;
