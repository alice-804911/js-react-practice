import React from 'react';
import PropTypes from 'prop-types';

const ProdBriefingPayment = (props) => {
  const { isCrd, isDurant, isMobile, isOthers } = props;
  return (
    <div className="c-prodBriefing__payment">
      <div className="c-prodBriefing__paymentTitle">付款方式</div>
      <div className="c-prodBriefing__paymentList">
        {isCrd && (
          <dl className="c-prodBriefing__paymentItem">
            <dt>信用卡</dt>
            <dd>
              一次付清／分期
              <span className="c-prodBriefing__checkPopUp">（查看）</span>
              ／紅利折抵
              <span className="c-prodBriefing__checkPopUp">（查看）</span>
            </dd>
          </dl>
        )}
        {isDurant && (
          <dl className="c-prodBriefing__paymentItem">
            <dt>無卡分期</dt>
            <dd>
              <ul>
                <li>
                  <span>分期趣｜</span>
                  無卡分期付款 0 利率，每月 $4541 起

                </li>
                <li>
                  <span>Pi慢點付｜</span>
                  一次付5%回饋 0 利率，每月 $33333 起

                </li>
              </ul>
            </dd>
          </dl>
        )}
        {isMobile && (
          <dl className="c-prodBriefing__paymentItem">
            <dt>行動支付</dt>
            <dd>
              Line Pay／Apple Pay／Google Pay／Pi 錢包／Samsung pay／街口支付／AFTEE／悠遊付／
              台灣Pay
            </dd>
          </dl>
        )}
        {isOthers && (
          <dl className="c-prodBriefing__paymentItem">
            <dt>其他付款方式</dt>
            <dd>PChome儲值／ATM／貨到付款／7-11 ibon</dd>
          </dl>
        )}
        <button>查看付款說明"</button>
      </div>
    </div>
  );
};

export default ProdBriefingPayment;
