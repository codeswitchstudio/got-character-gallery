import React from "react";
import "./style.css";

function MyFooter() {
  return (
      <div className="container text-center">
         <footer className="py-3 my-4 footer-basic">
         <p className="justify-content-center"><a href="https://creativecommons.org/licenses/by-nc/4.0/">🄯</a> Indira Endaya 2024</p>
            <ul className="nav justify-content-center pb-3 mb-3 social">
              <li className="ms-3"><a href="https://github.com/codeswitchstudio"><i className="fa-brands fa-github"></i></a></li>
              <li className="ms-3"><a href="https://www.instagram.com/indicodeswitch/"><i className="fa-brands fa-instagram"></i></a></li>
              <li className="ms-3"> <a href="https://mastodon.social/@indicodeswitch"><i className="fa-brands fa-mastodon"></i></a></li>
            </ul>
          </footer>
        </div>

  );

}

export default MyFooter;

