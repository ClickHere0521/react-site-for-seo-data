import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Button, ButtonToolbar, Modal } from 'reactstrap';
import classNames from 'classnames';
import { RTLProps } from '@/shared/prop-types/ReducerProps';
import { PayPalButton } from 'react-paypal-button-v2';
import { updateRemainCreditsActions, updateFundsActions } from '@/redux/actions/userInfoActions';
import firebase from 'firebase';

const ModalComponent = ({
  color, btn, title, colored, header, rtl, type,
}) => {
  const [modal, setModal] = useState(false);
  const { price, credits } = useSelector(state => state.credits);
  const creditsUpdateDispatch = useDispatch();
  const fundsUpdateDispatch = useDispatch();

  const toggle = () => {
    setModal(prevState => !prevState);
  };
  let totalAmount;
  let totalCredits;
  let Icon;

  switch (color) {
    case 'primary':
      Icon = <span className="lnr lnr-pushpin modal__title-icon" />;
      break;
    case 'success':
      Icon = <span className="lnr lnr-thumbs-up modal__title-icon" />;
      break;
    case 'warning':
      Icon = <span className="lnr lnr-flag modal__title-icon" />;
      break;
    case 'danger':
      Icon = <span className="lnr lnr-cross-circle modal__title-icon" />;
      break;
    default:
      break;
  }
  switch (type) {
    case 'basic': totalAmount = 50; totalCredits = 75; break;
    case 'premium': totalAmount = 100; totalCredits = 200; break;
    case 'pro': totalAmount = 150; totalCredits = 375; break;
    case 'special': totalAmount = 200; totalCredits = 500; break;
    case 'slider': totalAmount = price; totalCredits = credits; break;
    default: totalAmount = 100; break;
  }

  const modalClass = classNames({
    'modal-dialog--colored': colored,
    'modal-dialog--header': header,
  });

  return (
    <div>
      <Button className="pricing-card__button" color={color} onClick={toggle}>{btn}</Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        modalClassName={`${rtl.direction}-support`}
        className={`modal-dialog--${color} ${modalClass}`}
      >
        <div className="modal__header">
          <button
            className="lnr lnr-cross modal__close-btn"
            aria-label="modal__close-btn"
            type="button"
            onClick={toggle}
          />
          {header ? '' : Icon}
          <h4 className="text-modal  modal__title">{title}</h4>
          <h5 className="text-modal  modal__title"> Price: {totalAmount}$</h5>
          <h5 className="text-modal  modal__title"> Credits: {totalCredits}</h5>
        </div>
        <div className="modal__body">
          <PayPalButton
            amount={totalAmount}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={async (details, data) => {
              alert(`Transaction completed by ${ details.payer.name.given_name}`);
              // OPTIONAL: Call your server to save the transaction              
              const currentUid = await firebase.auth().currentUser.uid;
              let currentCredits;
              let totalFunds;
              const db = firebase.database().ref(`/users/${currentUid}`);  
              await db
              .once('value')
              .then((snapshot) => {
                currentCredits = snapshot.val().credits;
                totalFunds = snapshot.val().totalFunds;
              });
              db.update({
                credits: (currentCredits + totalCredits),
                totalFunds: (totalFunds + totalAmount), 
              })
              .then(() => {
                creditsUpdateDispatch(updateRemainCreditsActions((currentCredits + totalCredits)));
                fundsUpdateDispatch(updateFundsActions((totalFunds + totalAmount)));
                return fetch('/paypal-transaction-complete', {
                    method: 'post',
                    body: JSON.stringify({
                      orderID: data.orderID,
                    }),
                  });
                });
              }}
            onError={(error) => {
              console.log('------------------------', error);
            }}
          />
        </div> 
        <ButtonToolbar className="modal__footer">
          <Button className="modal_cancel" onClick={toggle}>Cancel</Button>{' '}
          <Button className="modal_ok" outline={colored} color={color} onClick={toggle}>Ok</Button>
        </ButtonToolbar>
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string.isRequired,
  colored: PropTypes.bool,
  header: PropTypes.bool,
  btn: PropTypes.string.isRequired,
  rtl: RTLProps.isRequired,
  type: PropTypes.string,
};

ModalComponent.defaultProps = {
  title: '',
  colored: false,
  header: false,
  type: '',
};

export default connect(state => ({
  rtl: state.rtl,
}))(ModalComponent);
