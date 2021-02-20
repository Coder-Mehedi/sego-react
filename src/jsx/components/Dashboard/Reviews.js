import React from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";

//** Import Image */
// import customers04 from "../../../images/customers/4.jpg";
// import customers03 from "../../../images/customers/3.jpg";
// import customers02 from "../../../images/customers/2.jpg";
// import customers05 from "../../../images/customers/5.jpg";

function Reviews() {
  return (
    <>
      <div className="modal fade" id="addOrderModalside">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Menus</h5>
          <button type="button" className="close" data-dismiss="modal"><span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label className="text-black font-w500">Food Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="text-black font-w500">Order Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label className="text-black font-w500">Food Price</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
      <div className="d-sm-flex d-block align-items-end">
    <div className="card-action card-tabs mb-sm-4 mb-3 mr-auto">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#All" role="tab" aria-selected="true">
            All
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#Published" role="tab" aria-selected="false">
            Published
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#Today" role="tab" aria-selected="false">
            Deleted
          </a>
        </li>
      </ul>
    </div>
    <div className="dropdown custom-dropdown mb-4">
      <div className="btn btn-sm btn-primary light d-flex align-items-center svg-btn" role="button" data-toggle="dropdown" aria-expanded="false">
        <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M22.4281 2.856H21.8681V1.428C21.8681 0.56 21.2801 0 20.4401 0C19.6001 0 19.0121 0.56 19.0121 1.428V2.856H9.71606V1.428C9.71606 0.56 9.15606 0 8.28806 0C7.42006 0 6.86006 0.56 6.86006 1.428V2.856H5.57206C2.85606 2.856 0.560059 5.152 0.560059 7.868V23.016C0.560059 25.732 2.85606 28.028 5.57206 28.028H22.4281C25.1441 28.028 27.4401 25.732 27.4401 23.016V7.868C27.4401 5.152 25.1441 2.856 22.4281 2.856ZM5.57206 5.712H22.4281C23.5761 5.712 24.5841 6.72 24.5841 7.868V9.856H3.41606V7.868C3.41606 6.72 4.42406 5.712 5.57206 5.712ZM22.4281 25.144H5.57206C4.42406 25.144 3.41606 24.136 3.41606 22.988V12.712H24.5561V22.988C24.5841 24.136 23.5761 25.144 22.4281 25.144Z" fill="#2F4CDD" /></g></svg>
        <div className="text-left ml-3">
          <span className="d-block fs-16">Filter Periode</span>
          <small className="d-block fs-13">4 June 2020 - 4 July 2020</small>
        </div>
        <i className="fa fa-angle-down scale5 ml-3" />
      </div>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="#">4 June 2020 - 4 July 2020</a>
        <a className="dropdown-item" href="#">5 july 2020 - 4 Aug 2020</a>
      </div>
    </div>
  </div>
      <div className="row">
    <div className="col-xl-9 col-xxl-8">
      <div className="row">
        <div className="col-xl-12">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="All">
              <div className="card">
                <div className="card-header border-0 pb-0 d-sm-flex d-block">
                  <div>
                    <h4 className="card-title mb-1 fs-28 font-w600">Recent Review</h4>
                    <p className="mb-0">Here is customer review about your restaurant </p>
                  </div>
                  <div className="dropdown mt-sm-0 mt-3">
                    <button type="button" className="btn btn-primary dropdown-toggle light fs-14" data-toggle="dropdown" aria-expanded="false">
                      Latest
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Latest</a>
                      <a className="dropdown-item" href="#">OLD</a>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/1.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Glee Smiley</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto"><span className="badge badge-rounded text-warning light font-w500">Excelent</span></li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">4.5</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/2.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Samuel Hawkins</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto">
                          <span className="badge badge-rounded text-warning light font-w500">Recomended</span> 
                          <span className="badge badge-rounded text-warning light font-w500 ml-1">Great</span>
                        </li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">4.8</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/3.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Dicky Sitompul</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto"><span className="badge badge-rounded text-warning light font-w500">Excelent</span></li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">4.0</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/4.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Dracule Mihawk</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">2.0</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/5.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Samuel Hawkins</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto">
                          <span className="badge badge-rounded text-warning light font-w500">Delcious</span> 
                          <span className="badge badge-rounded text-warning light font-w500 ml-1">Excelent</span>
                          <span className="badge badge-rounded text-warning light font-w500 ml-1">Good Services</span>
                        </li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">3.0</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/1.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Sanji Lee</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto"><span className="badge badge-rounded text-warning light font-w500">Excelent</span></li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">1.0</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-0 text-center">
                  <nav>
                    <ul className="pagination style-1 mb-0">
                      <li className="page-item page-indicator">
                        <a className="page-link" href="javascript:void(0)">
                          <i className="la la-angle-left" />
                        </a>
                      </li>
                      <li>
                        <ul>
                          <li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                        </ul>
                      </li>
                      <li className="page-item page-indicator">
                        <a className="page-link" href="javascript:void(0)">
                          <i className="la la-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="Published">
              <div className="card">
                <div className="card-header border-0 pb-0 d-sm-flex d-block">
                  <div>
                    <h4 className="card-title mb-1 fs-28 font-w600">Published</h4>
                    <p className="mb-0">Here is customer review about your restaurant </p>
                  </div>
                  <div className="dropdown mt-sm-0 mt-3">
                    <button type="button" className="btn btn-primary dropdown-toggle light fs-14" data-toggle="dropdown" aria-expanded="false">
                      Latest
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Latest</a>
                      <a className="dropdown-item" href="#">OLD</a>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/1.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Glee Smiley</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto"><span className="badge badge-rounded text-warning light font-w500">Excelent</span></li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">4.5</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/2.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Samuel Hawkins</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto">
                          <span className="badge badge-rounded text-warning light font-w500">Recomended</span> 
                          <span className="badge badge-rounded text-warning light font-w500 ml-1">Great</span>
                        </li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">4.8</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/3.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Dicky Sitompul</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto"><span className="badge badge-rounded text-warning light font-w500">Excelent</span></li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">4.0</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/1.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Sanji Lee</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto"><span className="badge badge-rounded text-warning light font-w500">Excelent</span></li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">1.0</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-0 text-center py-4">
                  <nav>
                    <ul className="pagination style-1 mb-0">
                      <li className="page-item page-indicator">
                        <a className="page-link" href="javascript:void(0)">
                          <i className="la la-angle-left" />
                        </a>
                      </li>
                      <li>
                        <ul>
                          <li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                        </ul>
                      </li>
                      <li className="page-item page-indicator">
                        <a className="page-link" href="javascript:void(0)">
                          <i className="la la-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="Today">
              <div className="card">
                <div className="card-header border-0 pb-0 d-sm-flex d-block">
                  <div>
                    <h4 className="card-title mb-1 fs-28 font-w600">Today</h4>
                    <p className="mb-0">Here is customer review about your restaurant </p>
                  </div>
                  <div className="dropdown mt-sm-0 mt-3">
                    <button type="button" className="btn btn-primary dropdown-toggle light fs-14" data-toggle="dropdown" aria-expanded="false">
                      Latest
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Latest</a>
                      <a className="dropdown-item" href="#">OLD</a>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/1.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Glee Smiley</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto"><span className="badge badge-rounded text-warning light font-w500">Excelent</span></li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">4.5</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/2.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Samuel Hawkins</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto">
                          <span className="badge badge-rounded text-warning light font-w500">Recomended</span> 
                          <span className="badge badge-rounded text-warning light font-w500 ml-1">Great</span>
                        </li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">4.8</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                  <div className="media review-box">
                    <img className="mr-3 img-fluid btn-rounded" width={55} src="./images/avatar/1.jpg" alt="DexignZone" />
                    <div className="media-body">
                      <h4 className="mt-0 mb-0 text-black">Sanji Lee</h4>
                      <ul className="review-meta mb-3 d-block d-sm-flex align-items-center">
                        <li className="mr-3"><small>Head Marketing</small></li>
                        <li className="mr-3"><small>24 June 2020</small></li>
                        <li className="ml-auto"><span className="badge badge-rounded text-warning light font-w500">Excelent</span></li>
                      </ul>
                      <p className="mb-3 text-secondary">We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back!</p>
                    </div>
                    <div className="media-footer align-self-center">
                      <div className="star-review text-md-center">
                        <span className="text-secondary">1.0</span>
                        <i className="fa fa-star text-primary" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                        <i className="fa fa-star text-gray" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-0 text-center py-4">
                  <nav>
                    <ul className="pagination style-1 mb-0">
                      <li className="page-item page-indicator">
                        <a className="page-link" href="javascript:void(0)">
                          <i className="la la-angle-left" />
                        </a>
                      </li>
                      <li>
                        <ul>
                          <li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                          <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                        </ul>
                      </li>
                      <li className="page-item page-indicator">
                        <a className="page-link" href="javascript:void(0)">
                          <i className="la la-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-xxl-4">
      <div className="row">
        <div className="col-xl-12">	
          <div className="card h-auto sticky">
            <div className="card-header border-0 pb-0 ">
              <div>
                <h3 className="card-title mb-1 fs-28 font-w600">🔥 Newest</h3>
              </div>
              <div className="testimonial-one-navigation owl-clienr-btn pull-left">
                <span id="next-slide" className="prev mr-3"><i className="fa fa-chevron-left" /></span>
                <span id="prev-slide" className="next"><i className="fa fa-chevron-right" /></span>
              </div>
            </div>
            <div className="card-body">
              <div className="testimonial-one owl-carousel">
                <div className="items">
                  <div className>
                    <p className="mb-3">“This was not just great cooking but exceptional cooking using only the best ingredients.</p>
                    <p className="mb-3">Fast, professional and friendly service, we ordered the six course tasting menu and every dish was spectacular”</p>
                    <div className="media align-items-center mb-3">
                      <img className="mr-3 img-fluid rounded-circle" width={50} src="./images/avatar/1.jpg" alt="DexignZone" />
                      <div className="media-body">
                        <h4 className="mt-0 mb-1 text-black">James Kowalski</h4>
                        <small className="mb-0">Head Marketing</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items">
                  <div className>
                    <p className="mb-3">“This was not just great cooking but exceptional cooking using only the best ingredients.</p>
                    <p className="mb-3">Fast, professional and friendly service, we ordered the six course tasting menu and every dish was spectacular”</p>
                    <div className="media align-items-center mb-3">
                      <img className="mr-3 img-fluid rounded-circle" width={50} src="./images/avatar/2.jpg" alt="DexignZone" />
                      <div className="media-body">
                        <h4 className="mt-0 mb-1 text-black">James Kowalski</h4>
                        <small className="mb-0">Head Marketing</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer border-0 text-center py-4 gradient-bg rounded-xl">
              <div className="star-review text-md-center d-flex justify-content-center align-items-center">
                <span className="text-white fs-32 font-w600 mr-3">4.0</span>
                <i className="fa fa-star fs-22 mx-1 text-white" />
                <i className="fa fa-star fs-22 mx-1 text-white" />
                <i className="fa fa-star fs-22 mx-1 text-white" />
                <i className="fa fa-star fs-22 mx-1 text-white" />
                <i className="fa fa-star fs-22 mx-1 text-white op3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default Reviews;
