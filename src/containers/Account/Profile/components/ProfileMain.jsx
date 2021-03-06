import React from 'react';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import { useSelector } from 'react-redux';

const Ava = `${process.env.PUBLIC_URL}/img/userDefault.png`;

const ProfileMain = () => {
  const {
 uid, email, password, remaincredits, username, visits, totalFunds,
} = useSelector(state => state.credits);
  console.log(`userinfo${uid}${email}${password}${remaincredits}${username}`);
  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <CardBody className="profile__card">
          <div className="profile__information">
            <div className="profile__avatar">
              <img src={Ava} alt="avatar" />
            </div>
            <div className="profile__data">
              <p className="profile__name">{username}</p>
              <p className="profile__work">{' '}</p>
              <p className="profile__contact">{email}</p>
              <p className="profile__contact">Remain Credits: {remaincredits}</p>
              {/* <p className="profile__contact" dir="ltr">{phone}</p> */}
              {/* <Button color="primary" className="icon profile__btn"><p><MessageTextOutlineIcon /> Message</p></Button> */}
            </div>
          </div>
          <div className="profile__stats">
            <div className="profile__stat">
              <p className="profile__stat-number">{visits}</p>
              <p className="profile__stat-title">Visits</p>
            </div>
            <div className="profile__stat">
              <p className="profile__stat-number">{remaincredits}</p>
              <p className="profile__stat-title">Credits</p>
            </div>
            <div className="profile__stat">
              <p className="profile__stat-number">{totalFunds}</p>
              <p className="profile__stat-title">Funds</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileMain;
