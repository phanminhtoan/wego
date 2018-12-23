import React, { Component } from 'react';

class Answer extends Component {
    render() {
 return (
      <div style={{paddingBottom: '20px'}}>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Lab 1-HTML-Bài 4</title>
        <style dangerouslySetInnerHTML={{__html: "\n\ttable{\n\t\t\n\t\tmargin-left:200px;width:520px;\n\t\t\n\t\t\n\t}\n\t.button{\n\t\twidth: 100px;\nmargin-left:120px; height: 40px;\n\t\tfont-size:18px;\n\t\tborder:1px solid #000;\n\t}\n\t.text{\n\t\tborder:1px solid #000;\n\t\tfont-size:18px;\n\t\twidth:92%;\n\t\t\n\t}\n\t#td_1{\n\t\t\n\t\tfont-size:30px;text-transform:uppercase;\n\t\ttext-align:center;\n\t\t\n\t\tfont-weight:bold;\n\t\t\n\t}\n\tb{\n\t\tcolor: #F30;\n\t}\n\t\n\n\t" }} />
        <form action method="post">
          <table cellPadding={10} cellSpacing={0}>
            <tbody><tr>
                <td id="td_1" colSpan={2} style={{paddingTop: '20px', paddingBottom: '20px'}}> Liên hệ</td>
              </tr>
              <tr>
                <td style={{paddingBottom: '20px'}}><label> Loại dịch vụ </label></td>
                <td style={{paddingBottom: '20px'}}>
                  <select className="text" id="select">
                    <option value="volvo">Liên hệ thông tin tour</option>
                    <option value="saab">Liên hệ thông tin khách sạn</option>
                    <option value="opel">Liên hệ thông tin về máy bay</option>
                    <option value="audi">Liên hệ thông tin xe du lịch</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td style={{paddingBottom: '20px'}}><label> Họ Và Tên <b>*<b> </b></b></label></td>
                <td style={{paddingBottom: '20px'}}> <input type="text" className="text" /></td>
              </tr>
              <tr>
                <td style={{paddingBottom: '20px'}}><label> Tên Công Ty</label></td>
                <td style={{paddingBottom: '20px'}}> <input type="text" className="text" /></td>
              </tr>
              <tr>
                <td style={{paddingBottom: '20px'}}><label> Địa chỉ</label></td>
                <td style={{paddingBottom: '20px'}}> <input type="text" className="text" /></td>
              </tr>
              <tr>
                <td style={{paddingBottom: '20px'}}><label> Email <b>*<b> </b></b></label></td>
                <td style={{paddingBottom: '20px'}}> <input type="text" className="text" /></td>
              </tr>
              <tr>
                <td style={{paddingBottom: '20px'}}><label> Số điện thoại <b>*<b></b></b></label></td>
                <td style={{paddingBottom: '20px'}}> <input type="text" className="text" /></td>
              </tr>
              <tr>
                <td style={{paddingBottom: '20px'}}><label> Tiêu đề</label></td>
                <td style={{paddingBottom: '20px'}}> <input type="text" className="text" /></td>
              </tr>
              <tr>
                <td style={{paddingBottom: '20px'}}><label> Nội dung <b>*<b> </b></b></label></td>
                <td style={{paddingBottom: '20px'}}> <textarea rows={4} cols={64} defaultValue={"\t\t\n\t\t"} />
                </td>
              </tr>
              <tr>
                <td />
                <td style={{paddingTop: '0px'}}>
                  <input type="button" defaultValue="Gửi" className="button" />
                </td>
              </tr>
            </tbody></table>
        </form></div>
    );
    }
}

export default Answer;
