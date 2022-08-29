import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import renderSwitchTypeUrl from "../utils";

const ThemeGroup = ({ sections }) => {
  const [firstInfo, setFirstInfo] = useState({
    Link: { Text: "", Text2: "", Background: "" },
    Img: { Src: "", Text: "" },
  });

  const [currentSection, setCurrentSection] = useState([]);
  const [keyTags, setKeyTags] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [groupItems, setGroupItems] = useState([]);
  const [page, setPage] = useState(1);
  // 設定每次頁面切換數量
  const ITEMLIST_PER_PAGE = 6;
  // 計算總頁數
  const PAGETOTAL = groupItems.length / ITEMLIST_PER_PAGE;

  useEffect(() => {
    setCurrentSection(sections[0]);
  }, [sections]);

  useEffect(() => {
    // (?.) = Optional chaining
    if (currentSection?.Nodes === undefined) return;

    setKeyTags(currentSection.Nodes.filter(({ Id: id }) => id >= 2 && id <= 6));
    setGroupItems(currentSection.Nodes.filter(({ Id: id }) => id >= 7));
    setFirstInfo(...currentSection.Nodes.filter(({ Id: id }) => id === 1));
  }, [currentSection]);

  useEffect(() => {
    // page 起始點 : 頁數減掉 1 再 * 每頁的數量(ITEMLIST_PER_PAGE = 6)
    const startIndex = (page - 1) * ITEMLIST_PER_PAGE;
    // groupItems所有24 items做分割，從起始點startIndex開始加上每頁顯示items數量
    setItemList(groupItems.slice(startIndex, startIndex + ITEMLIST_PER_PAGE));
  }, [groupItems, page]);

  return (
    <section className="c-themeGroup">
      <div className="c-themeGroup__tabs">
        <ul className="c-themeGroup__tabsList">
          {sections.map((item, index) => (
            <li>
              <button
                type="button"
                className="c-themeGroup__tabsListTab is_active"
                onClick={() => setCurrentSection(sections[index])}
              >
                {item.Nodes[0].Link.Text}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="c-themeGroup__left"
        style={{ backgroundColor: firstInfo.Link.Background }}
      >
        <div className="c-themeGroup__tag">主題推薦</div>
        <div className="c-themeGroup__info">
          <h1 className="c-themeGroup__title">{firstInfo.Link.Text2}</h1>
          <ul className="o-keywords">
            {keyTags.map((item) => (
              <li className="o-keywords__tag" key={item.Key}>
                <a
                  href={
                    item.ExtraData.ElementType === "Url"
                      ? item.Link.Url
                      : renderSwitchTypeUrl(item.ExtraData.ElementType)
                  }
                >
                  #{item.Link.Text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="c-themeGroup__banner">
          <img
            src={`https://fs-a.ecimg.tw` + firstInfo.Img.Src}
            alt="主打推薦Banner"
          />
        </div>
      </div>
      <div className="c-themeGroup__right">
        <div className="c-listGroup">
          <ul className="c-listGroup__list">
            {itemList.map((item) => (
              <li className="c-listGroup__item" key={item.List}>
                <div className="o-productInfo">
                  <a
                    href={
                      item.ExtraData.ElementType === "Url"
                        ? item.Link.Url
                        : renderSwitchTypeUrl(item.ExtraData.ElementType) +
                          item.Link.Url
                    }
                    alt="prodlink"
                  >
                    <img
                      src={`https://cs-a.ecimg.tw` + item.Img.Src}
                      alt="商品圖"
                      className="o-productInfo__img"
                    />
                    <h3 className="o-productInfo__title">{item.Link.Text}</h3>
                    <div className="o-productInfo__price">
                      ${item.Link.Text1}
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="c-pagination">
          <div
            className="c-pagination__icon"
            onClick={() => setPage(page < 2 ? page : page - 1)}
          >
            <span className="o-icon o-icon__arrow o-icon__arrow--left"></span>
          </div>
          <div className="c-pagination__pages">
            <a href="http://" className="c-pagination__pages--active">
              {page}
            </a>{" "}
            / <a href="http://">{PAGETOTAL}</a>
          </div>
          <div
            className="c-pagination__icon"
            onClick={() => setPage(page > 2 ? page : page + 1)}
          >
            <span className="o-icon o-icon__arrow o-icon__arrow--right"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

ThemeGroup.propTypes = {
  sections: PropTypes.arrayOf(
    // .shape特定形式對象
    PropTypes.shape({
      ExtraData: PropTypes.shape({
        ElementType: PropTypes.string,
        Sort: PropTypes.number,
      }),
      Id: PropTypes.number,
      Img: PropTypes.shape({
        Src: PropTypes.string,
      }),
      Link: PropTypes.shape({
        Text: PropTypes.string,
        Text1: PropTypes.string,
        Url: PropTypes.string,
        Background: PropTypes.string,
      }),
    })
  ),
};

export default ThemeGroup;
