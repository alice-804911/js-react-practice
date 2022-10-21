import React, { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

const ProdBriefingSlogan = (props) => {
  const { sloganData } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current && ref.current.clientHeight < ref.current.scrollHeight) {
      setIsShowBtn(true);
    }
  }, [ref]);

  return (
    <div className="c-prodBriefing__slogan">
      <div className={`c-prodBriefing__sloganInfo ${isCollapsed ? 'is-expanded' : ''}`} ref={ref}>
        <div dangerouslySetInnerHTML={{ __html: sloganData }} />
      </div>
      {isShowBtn && !isCollapsed && (
        <button>查看付款說明"</button>
      )}
    </div>
  );
};

ProdBriefingSlogan.propTypes = {
  sloganData: PropTypes.string,
};
ProdBriefingSlogan.defaultProps = {
  sloganData:
    '<p>以忍冬為主調，添加頂級嚴選蜂蜜不含矽靈、無化學刺激成分無添加石化成分，純天然可自然分解</p><ul><li>加送1TB雲端空間 <a href="https://24h.pchome.com.tw/">https://24h.pchome.com.tw/</a></li><li>在訂閱期內免費更新最新版本</li><li>內含完整OFFICE應用程式（Publisher 和 Access 僅提供Windows 版本）</li><li>可供 1 位使用者，12 個月訂閱</li><li>可在多部 PC/Mac、平板電腦和手機( 包括 Windows、Apple® 和 Android™ 裝置上安裝 Office</li><li>安裝於Windows、MacOS、iOS、Android 不同平台的應用程式所提供的功能會有所差異)。</li><li>在訂閱期間，可線上交談或電話獲得Microsoft提供的免費技術支援。</li></ul><p>★注意：Office商品為產品金鑰卡，不包含光碟。</p><p>★注意：電腦與Windows平板需搭載Windows 10以上版本。</p>',
};

export default ProdBriefingSlogan;
