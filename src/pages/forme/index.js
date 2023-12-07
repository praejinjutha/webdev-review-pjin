import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataforme,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const Ratebyp = () => {
  return (
    <HelmetProvider>
      <Container className="Ratebyp-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> For me | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">For me</h1>    {/* ตรง section หลัก*/}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataforme.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataforme.formeonly}</p>
            </div>
          </Col>
          <img src="https://www.toyotakan.com/wp-content/uploads/2018/01/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B8%84%E0%B8%AD%E0%B8%9F%E0%B8%9F%E0%B8%B5%E0%B9%88-06.jpg" alt="Image 1"  style={{ width: '47%', height: 'auto' }}
          title="One tea cafe at Kanchanaburi"/>

          <img src="  https://www.zolitic.com/media/65794978496a6f314c434979496a6f794f5463344e5377694d7949364d5377694e5349364d5449344d4377694e6949364e7a497766513d3d.png" alt="Image 2"  style={{ width: '53%', height: 'auto' }}
          title="BaanBam บ้านแบม Cafe & Bistro | Tha Maka"/>
        </Row>


        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Cheap and delicious food</h3> {/* title สำหรับ for me*/}
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td dangerouslySetInnerHTML={{ __html: data.link }} /> {/* ขอใส่ link แบบ html*/}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Cafe atmosphere</h3>   {/* title สำหรับ for me*/}
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Popular cafes</h3>   {/* title สำหรับ for me*/}
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>

          <img src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/172216485_964525984322524_4689054534621517531_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeGYLqloR8fvu9vRBSoS-Zw9wP3y5piEOlnA_fLmmIQ6WScae1eD8NW8DJSXk6P3nf4zAnu_Zmp6AE5rSEWWeLwl&_nc_ohc=m_hUV8xmpzMAX-7ZfQL&_nc_ht=scontent.fbkk17-1.fna&oh=00_AfBzZ97VC6jy8hB3LcKb24XOuntB28B8V8cioeM0aTA9gQ&oe=6597353D" 
          alt="Image 4"  
          style={{ width: '30%', height: '10%' }}
          title="Mulberry Mellow"/>

          <img src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/91292799_689145995193859_6795054212674748416_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeF5A0MU5uTQ1etnfSpobyCZv9rqNGxxyqq_2uo0bHHKqhLpDoQT5i5SNYz0aNVzowDUktL2VirKDHToSuhCUTqP&_nc_ohc=GwK-NsHwr-EAX9GmKQg&_nc_ht=scontent.fbkk17-1.fna&oh=00_AfDU7pPzErsdl-PwkyxvS21-2pJFM6gLt8VY9DBxWw3mbA&oe=65971B51" 
          alt="Image 5"  
          style={{ width: '50%', height: 'auto' }}
          title="Meena Cafe"/>

          <img src="  https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/105568285_745735809534877_7249085091075484162_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeEE0dwEOpFYkCA8fpz4wjRJN1HHJo5VJEo3UccmjlUkSuaHP8WFQUFRnCV5kdBmcOrN-IkhlLFG8-L5yZG-wUT9&_nc_ohc=0FnewY1ea8AAX8Wci86&_nc_ht=scontent.fbkk17-1.fna&oh=00_AfAzGgQDVX2f8UNvSTq3l2-iGgFOcHw7LYQ5jmpq0VOZNw&oe=65971FA0" 
          alt="Image 6"  
          style={{ width: '50%', height: 'auto' }}
          title="Kan Machi Café"/>

        </Row>

        

      </Container>
    </HelmetProvider>
  );
};
