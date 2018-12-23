import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';
class TourCardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }


    URLStandardize = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    hanldeTourDetail = ()=>{
        return <NavLink to={"/chi-tiet"}></NavLink>
    }
    render() {

        return <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 d-flex align-items-stretch">
            <div className="card-deck padding-10 cardItem" onClick={() => this.hanldeTourDetail()}>
              <div className="card">
                <div className=" cardItemImage">
                  <NavLink to={'/chi-tiet'}>
                    <figure>
                      <img className="img-fluid" src={this.props.tourImg} alt="" />
                      <figcaption className="pr-2">
                          <i className="fa fa-map-marker m-2" data-original-title="Địa điểm" style={{color: 'orange'}} />
                        {this.props.tourPlace}
                      </figcaption>
                    </figure>
                    <div className="ribbon-wrapper-red">
                      <div className="ribbon-red">
                        {this.props.tourCategory}
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="cardItemContent card-body no-padding">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 v-margin-bottom-10 cardItemTourNameDiv">
                      <NavLink to={'/chi-tiet'}>
                        <span className="cardItemTourName align-items-stretch">
                          {this.props.tourTitle}
                        </span>
                      </NavLink>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding cardItemTourDetailDiv">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 v-margin-bottom-10">
                        <div className="row">
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <span>
                              <i className="fa fa-clock-o" data-toggle="tooltip" title="" data-original-title="Thời lượng tour" /> {this.props.tourTime}{' '}
                            </span>
                          </div>
                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right transportDiv">
                            <i className="fa fa-plane mr-2" data-toggle="tooltip" title="" data-original-title="Di chuyển bằng máy bay" />
                            <i className="fa fa-bus mr-2" data-toggle="tooltip" title="" data-original-title="Di chuyển bằng Ô tô" />
                            <i className="fa fa-ship" data-toggle="tooltip" title="" data-original-title="Di chuyển bằng Tàu thủy" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 v-margin-bottom-5 cardItemDepartDiv">
                        <span>
                          <i className="fa fa-calendar mr-2" />
                          {this.props.tourCalendar}
                        </span>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 cardItemPrice">
                        <span className="price vcolor-info">
                          {this.props.tourPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
    }
}

export default TourCardItem;