import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <div
          className="sidebar"
          style={{
            width: isCollapsed ? "40px" : "150px",
            background: "purple",
            color: "#fff",
            transition: "width 0.4s ease",
            padding: "2px",
          }}
        >
          <button
            onClick={toggleSidebar}
            style={{
              background: "none",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            {isCollapsed ? ">>" : "<<"}
          </button>
          {!isCollapsed ? (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li className="sidebar-items my-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Newsapp"
                >
                  <div
                    className="sidebar-item-container"
                    style={{
                      margin: "5px",
                      height: "30px",
                      width: "150px",
                    }}
                  >
                    <div
                      className="logo-newsapp"
                      style={{
                        marginRight: "20px",
                        height: "30px",
                        width: "30px",
                      }}
                    ></div>
                    NewsApp
                  </div>
                </Link>
              </li>
              <li className="sidebar-items my-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/TextUtils"
                >
                  <div
                    className="sidebar-item-container"
                    style={{
                      margin: "5px",
                      height: "30px",
                      width: "150px",
                    }}
                  >
                    <div
                      className="logo-textutlis"
                      style={{
                        marginRight: "20px",
                        height: "30px",
                        width: "30px",
                      }}
                    ></div>
                    TextUtils
                  </div>
                </Link>
              </li>
              <li className="sidebar-items my-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Todoapp"
                >
                  <div
                    className="sidebar-item-container"
                    style={{
                      margin: "5px",
                      height: "30px",
                      width: "150px",
                    }}
                  >
                    <div
                      className="logo-textutlis logo-todoapp"
                      style={{
                        marginRight: "20px",
                        height: "30px",
                        width: "30px",
                      }}
                    ></div>
                    TodoApp
                  </div>
                </Link>
              </li>
              <li className="sidebar-items my-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Collapse"
                >
                  <div
                    className="sidebar-item-container"
                    style={{
                      margin: "5px",
                      height: "30px",
                      width: "150px",
                    }}
                  >
                    <div
                      className="logo-textutlis logo-todoapp"
                      style={{
                        marginRight: "20px",
                        height: "30px",
                        width: "30px",
                      }}
                    ></div>
                    Collapse
                  </div>
                </Link>
              </li>
            </ul>
          ) : (
            //This is after collapse logic

            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li className="sidebar-items my-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Newsapp"
                >
                  <div
                    className="logo-newsapp"
                    style={{
                      marginTop: "15px",
                      padding: "2px",
                      marginLeft: "3px",
                      height: "30px",
                      width: "30px",
                    }}
                  ></div>
                </Link>
              </li>

              <li className="sidebar-items my-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Textutils"
                >
                  <div
                    className="logo-textutlis"
                    style={{
                      marginTop: "15px",
                      padding: "2px",
                      marginLeft: "3px",
                      height: "30px",
                      width: "30px",
                    }}
                  ></div>
                </Link>
              </li>

              <li className="sidebar-items my-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Todoapp"
                >
                  <div
                    className="logo-todoapp"
                    style={{
                      marginTop: "15px",
                      padding: "2px",
                      marginLeft: "3px",
                      height: "30px",
                      width: "30px",
                    }}
                  ></div>
                </Link>
              </li>
              <li className="sidebar-items my-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Collapse"
                >
                  <div
                    className="logo-todoapp"
                    style={{
                      marginTop: "15px",
                      padding: "2px",
                      marginLeft: "3px",
                      height: "30px",
                      width: "30px",
                    }}
                  ></div>
                </Link>
              </li>

            </ul>
          )}
        </div>
      </div>
    </>
  );
}
