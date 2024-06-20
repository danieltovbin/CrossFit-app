import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import video from "../../assets/video.mp4";
import './style.scss';

const GettingStarted = () => {
  return (
    <>
      <div id='getting-started'>
        <div>
        <Tab.Container defaultActiveKey="first" style={{width: '50%', height: '100%'}}>
          <Nav style={{ fontSize: "30px" }}>
            <Nav.Link eventKey="first">What is CrossFit?</Nav.Link>
            <Nav.Link eventKey="second">What Can CrossFit Do For You?</Nav.Link>
          </Nav>
          <Tab.Content style={{ display: "flex", width: "50vw" }}>
            <Tab.Pane eventKey="first" style={{ width: '90%'}}>
              CrossFit is a strength, conditioning, and overall fitness program
              that combines different types of exercises. These include aerobic
              exercises (like running and rowing), bodyweight exercises (like
              push-ups and squats), and Olympic weightlifting. CrossFit
              describes its workouts as "constantly varied functional movements
              performed at high intensity." This means that each workout is
              different, using movements that help you in everyday life, and you
              work hard to get the most benefit. The goal of CrossFit is to
              improve ten areas of fitness: heart and lung endurance, stamina,
              strength, flexibility, power, speed, coordination, agility,
              balance, and accuracy. Workouts are usually not the same every day
              and can change in duration and content, keeping things interesting
              and challenging.
            </Tab.Pane>
            <Tab.Pane eventKey="second" style={{ width: '90%'}}>
              Participating in CrossFit can bring many benefits. Physically, it
              can help you get stronger, improve your endurance, and enhance
              your overall fitness. It can also help you lose fat and build
              muscle, leading to a better body shape. Beyond physical health,
              CrossFit can positively impact your mental well-being by boosting
              your mood and reducing stress. Additionally, the social aspect of
              CrossFit is significant; working out in a group can help you make
              new friends and feel part of a supportive community.
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        </div>
        <div className="images-carousel">
          <Carousel>
            <Carousel.Item>
              <img
                src="https://wodprep.com/wp-content/uploads/2023/05/Ultimate-Plan-To-A-Competitive-CrossFit-Athletes-Diet-1-scaled.jpg"
                className="d-block w-100"
                alt="CrossFit Img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://cdn.mos.cms.futurecdn.net/SRHfobqEogfcMYE5V5MF98-1200-80.jpg"
                className="d-block w-100"
                alt="CrossFit Img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://www.crossfit.com/wp-content/uploads/2023/11/13131232/crossfit-coach-led-fitness-training-adapted-for-you-handstand-hold.jpg"
                className="d-block w-100"
                alt="CrossFit Img"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div style={{height: "90vh", width: "100vw", marginTop: '20px'}}>
        <video style={{width: '100%', height: '100%', objectFit:'cover'}} src={video} autoPlay loop controls muted></video>
    </div>
    </>
  );
};

export default GettingStarted;
