import React from "react";
import PropTypes from "prop-types";
// import Button from "@components/Button/Button";
// import IconFonts from "@components/Object/IconFonts";
// import "../scss/prodBriefing.scss";

const ProdBriefingPayment = ({ paymentData }) => {
  const mobilePaymentToName = {
    LIP: "LINE Pay",
    APL: "APPLE Pay",
    GLP: "GOOGLE Pay",
    PI: "PI 錢包",
    SSP: "Samsung Pay",
    JKP: "街口支付",
    AFE: "AFTEE",
    UUP: "悠遊付",
    TWP: "台灣Pay",
  };
  const otherPaymentToName = {
    DEP: "PChome儲值",
    ATM: "ATM",
    COD: "貨到付款",
    IBO: "7-11 ibon",
  };
  const mobilePayments = Object.keys(mobilePaymentToName).filter((payment) => {
    return paymentData.some((data) => data.Payment === payment);
  });
  const otherPayments = Object.keys(otherPaymentToName).filter((payment) => {
    return paymentData.some((data) => data.Payment === payment);
  });

  return (
    <div className="c-prodBriefing__payment">
      <div className="c-prodBriefing__paymentTitle">付款方式</div>
      <div className="c-prodBriefing__paymentBody">
        {paymentData.some((data) => data.Payment === "CRD") && (
          <div className="c-prodBriefing__paymentList">
            <div className="c-prodBriefing__paymentSubTitle">信用卡</div>
            <ul className="c-prodBriefing__paymentItem">
              <li>
                <span>一次付清</span>
                {paymentData.some(
                  (data) => data.Payment === "CRD" && data.Durat > 1
                ) && (
                  <span>
                    分期
                    <span className="c-prodBriefing__checkPopUp">（查看）</span>
                  </span>
                )}
                <span>
                  紅利折抵
                  <span className="c-prodBriefing__checkPopUp">（查看）</span>
                </span>
              </li>
            </ul>
          </div>
        )}

        {paymentData.some(
          (data) =>
            (data.Payment === "FNP" || data.Payment === "PI") && data.Durat > 1
        ) && (
          <div className="c-prodBriefing__paymentList">
            <div className="c-prodBriefing__paymentSubTitle">無卡分期</div>
            <ul className="c-prodBriefing__paymentItem">
              {paymentData.some(
                (data) => data.Payment === "FNP" && data.Durat > 1
              ) && (
                <li>
                  分期趣｜無卡分期付款 0 利率，每月 $4541 起
                  {/* <IconFonts variant="actionQuestionCircle" /> */}
                </li>
              )}
              {paymentData.some(
                (data) => data.Payment === "PI" && data.Durat > 1
              ) && (
                <li>
                  Pi慢點付｜一次付5%回饋 0 利率，每月 $33333 起
                  {/* <IconFonts variant="actionQuestionCircle" /> */}
                </li>
              )}
            </ul>
          </div>
        )}

        {mobilePayments.length > 0 && (
          <div className="c-prodBriefing__paymentList">
            <div className="c-prodBriefing__paymentSubTitle">行動支付</div>
            <ul className="c-prodBriefing__paymentItem">
              <li>
                {mobilePayments.map((item) => (
                  <span>{mobilePaymentToName[item]}</span>
                ))}
              </li>
            </ul>
          </div>
        )}

        {otherPayments.length > 0 && (
          <div className="c-prodBriefing__paymentList">
            <div className="c-prodBriefing__paymentSubTitle">其他付款方式</div>
            <ul className="c-prodBriefing__paymentItem">
              <li>
                {otherPayments.map((item) => (
                  <span>{otherPaymentToName[item]}</span>
                ))}
              </li>
            </ul>
          </div>
        )}

        {/* <Button
          btnSize="md"
          btnShape="noFrame"
          btnColor="blue"
          endIcon="arrowSolidRight"
          text="查看付款說明"
          btnType="button"
        /> */}
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
      Payment: "CRD",
      Durat: 3,
      Ratio: 0,
      Name: "花旗,台新,聯邦,國泰世華,玉山,台北富邦,中信,永豐,遠東,星展銀行,新光,匯豐,兆豐,凱基(原萬泰),第一,上海,日盛,渣打,合庫,華南,元大,安泰,華泰,陽信,臺企,三信商銀,土銀,台中商銀,彰銀,台灣樂天,台銀",
    },
    {
      Payment: "CRD",
      Durat: 6,
      Ratio: 0,
      Name: "玉山,國泰世華,花旗,台北富邦,台新,聯邦,中信,永豐,遠東,星展銀行,新光,匯豐,第一,兆豐,華南,上海,日盛,渣打,合庫,元大,安泰,華泰,陽信,臺企,凱基(原萬泰),三信商銀,土銀,台中商銀,彰銀,台灣樂天,台銀",
    },
    {
      Payment: "CRD",
      Durat: 10,
      Ratio: 0,
      Name: "中信,玉山,台新,花旗,國泰世華,台北富邦,永豐,遠東,新光,星展銀行,匯豐,聯邦,兆豐,上海,第一,華南,日盛,安泰,凱基(原萬泰),陽信,台灣樂天,彰銀,台銀,台中商銀,渣打",
    },
    {
      Payment: "CRD",
      Durat: 12,
      Ratio: 0,
      Name: "花旗",
    },
    {
      Payment: "CRD",
      Durat: 18,
      Ratio: 0,
      Name: "國泰世華,玉山,台新,中信,台北富邦,花旗,永豐,兆豐,聯邦,遠東,星展銀行,第一,華南,日盛,上海,彰銀,凱基(原萬泰),台灣樂天",
    },
    {
      Payment: "CRD",
      Durat: 12,
      Ratio: 5.5,
      Name: "華泰,三信商銀,土銀",
    },
    {
      Payment: "AFE",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "APL",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "ATM",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "BONUS",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "CRD",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "DEP",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "FDP",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "FNP",
      Durat: 24,
      Ratio: 9,
      Name: "",
    },
    {
      Payment: "GLP",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "IBO",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "JKP",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "LIP",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "PI",
      Durat: 3,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "SMP",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "SSP",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "TWP",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
    {
      Payment: "UUP",
      Durat: 1,
      Ratio: 0,
      Name: "",
    },
  ],
};
export default ProdBriefingPayment;
