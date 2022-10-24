import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button/Button';
import IconFonts from '@components/Object/IconFonts';
import './prodBriefing.scss';

// console.log(paymentData);
const ProdBriefingPayment = ({ paymentData }) => {
  return (
    <div className="c-prodBriefing__payment">
      <div className="c-prodBriefing__paymentTitle">付款方式</div>
      <div className="c-prodBriefing__paymentList">
        <dl className="c-prodBriefing__paymentItem">
          <dt>信用卡</dt>
          <dd>
            一次付清／分期
            <span className="c-prodBriefing__checkPopUp">（查看）</span>
            ／紅利折抵
            <span className="c-prodBriefing__checkPopUp">（查看）</span>
          </dd>
        </dl>
        <dl className="c-prodBriefing__paymentItem">
          <dt>無卡分期</dt>
          <dd>
            <ul>
              <li>
                <span>分期趣｜</span>
                無卡分期付款 0 利率，每月 $4541 起
                <IconFonts variant="actionQuestionCircle" />
              </li>
              <li>
                <span>Pi慢點付｜</span>
                一次付5%回饋 0 利率，每月 $33333 起
                <IconFonts variant="actionQuestionCircle" />
              </li>
            </ul>
          </dd>
        </dl>

        <dl className="c-prodBriefing__paymentItem">
          <dt>行動支付</dt>
          <dd>
            {paymentData?.map((item) => {
              return (
                <>
                  {item.Payment === 'LIP' && <span>{item.Name}</span>}
                  {item.Payment === 'APL' && <span>{item.Name}</span>}
                  {item.Payment === 'GLP' && <span>{item.Name}</span>}
                  {item.Payment === 'PI' && <span>{item.Name}</span>}
                  {item.Payment === 'SSP' && <span>{item.Name}</span>}
                  {item.Payment === 'JKP' && <span>{item.Name}</span>}
                  {item.Payment === 'AFE' && <span>{item.Name}</span>}
                  {item.Payment === 'UUP' && <span>{item.Name}</span>}
                  {item.Payment === 'TWP' && <span>{item.Name}</span>}
                </>
              );
            })}
          </dd>
        </dl>

        <dl className="c-prodBriefing__paymentItem">
          <dt>其他付款方式</dt>
          <dd>
            {paymentData?.map((item) => {
              return (
                <>
                  {item.Payment === 'DEP' && <span>{item.Name}</span>}
                  {item.Payment === 'ATM' && <span>{item.Name}</span>}
                  {item.Payment === 'IBO' && <span>{item.Name}</span>}
                </>
              );
            })}
            <span>貨到付款</span>
          </dd>
        </dl>

        <Button
          btnSize="md"
          btnShape="noFrame"
          btnColor="blue"
          endIcon="arrowSolidRight"
          text="查看付款說明"
          btnType="button"
        />
      </div>
    </div>
  );
};
ProdBriefingPayment.propTypes = {
  paymentData: PropTypes.arrayOf(
    PropTypes.shape({
      Payment: PropTypes.string.isRequired,
      Durat: PropTypes.number.isRequired,
      Ratio: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired,
    })
  ),
};
ProdBriefingPayment.defaultProps = {
  paymentData: [
    {
      Payment: 'CRD',
      Durat: 3,
      Ratio: 0,
      Name: '花旗,台新,聯邦,國泰世華,玉山,台北富邦,中信,永豐,遠東,星展銀行,新光,匯豐,兆豐,凱基(原萬泰),第一,上海,日盛,渣打,合庫,華南,元大,安泰,華泰,陽信,臺企,三信商銀,土銀,台中商銀,彰銀,台灣樂天,台銀',
    },
    {
      Payment: 'CRD',
      Durat: 6,
      Ratio: 0,
      Name: '玉山,國泰世華,花旗,台北富邦,台新,聯邦,中信,永豐,遠東,星展銀行,新光,匯豐,第一,兆豐,華南,上海,日盛,渣打,合庫,元大,安泰,華泰,陽信,臺企,凱基(原萬泰),三信商銀,土銀,台中商銀,彰銀,台灣樂天,台銀',
    },
    {
      Payment: 'CRD',
      Durat: 10,
      Ratio: 0,
      Name: '中信,玉山,台新,花旗,國泰世華,台北富邦,永豐,遠東,新光,星展銀行,匯豐,聯邦,兆豐,上海,第一,華南,日盛,安泰,凱基(原萬泰),陽信,台灣樂天,彰銀,台銀,台中商銀,渣打',
    },
    {
      Payment: 'CRD',
      Durat: 12,
      Ratio: 0,
      Name: '花旗',
    },
    {
      Payment: 'CRD',
      Durat: 18,
      Ratio: 0,
      Name: '國泰世華,玉山,台新,中信,台北富邦,花旗,永豐,兆豐,聯邦,遠東,星展銀行,第一,華南,日盛,上海,彰銀,凱基(原萬泰),台灣樂天',
    },
    {
      Payment: 'CRD',
      Durat: 12,
      Ratio: 5.5,
      Name: '華泰,三信商銀,土銀',
    },
    {
      Payment: 'AFE',
      Durat: 1,
      Ratio: 0,
      Name: 'AFTEE',
    },
    {
      Payment: 'APL',
      Durat: 1,
      Ratio: 0,
      Name: 'APPLE Pay',
    },
    {
      Payment: 'ATM',
      Durat: 1,
      Ratio: 0,
      Name: 'ATM',
    },
    {
      Payment: 'BONUS',
      Durat: 1,
      Ratio: 0,
      Name: '',
    },
    {
      Payment: 'CRD',
      Durat: 1,
      Ratio: 0,
      Name: '一次付清',
    },
    {
      Payment: 'DEP',
      Durat: 1,
      Ratio: 0,
      Name: 'PChome儲值',
    },
    {
      Payment: 'FDP',
      Durat: 1,
      Ratio: 0,
      Name: '',
    },
    {
      Payment: 'FNP',
      Durat: 24,
      Ratio: 9,
      Name: '分期趣',
    },
    {
      Payment: 'GLP',
      Durat: 1,
      Ratio: 0,
      Name: 'GOOGLE Pay',
    },
    {
      Payment: 'IBO',
      Durat: 1,
      Ratio: 0,
      Name: '7-11 ibon',
    },
    {
      Payment: 'JKP',
      Durat: 1,
      Ratio: 0,
      Name: '街口支付',
    },
    {
      Payment: 'LIP',
      Durat: 1,
      Ratio: 0,
      Name: 'LINE Pay',
    },
    {
      Payment: 'PI',
      Durat: 3,
      Ratio: 0,
      Name: 'Pi 錢包',
    },
    {
      Payment: 'SMP',
      Durat: 1,
      Ratio: 0,
      Name: '',
    },
    {
      Payment: 'SSP',
      Durat: 1,
      Ratio: 0,
      Name: 'Samsung Pay',
    },
    {
      Payment: 'TWP',
      Durat: 1,
      Ratio: 0,
      Name: '台灣Pay',
    },
    {
      Payment: 'UUP',
      Durat: 1,
      Ratio: 0,
      Name: '悠遊付',
    },
  ],
};
export default ProdBriefingPayment;
