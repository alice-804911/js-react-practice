import React from 'react';
import PropTypes from 'prop-types';
import ProdInfoVertical from '@components/Object/ProdInfo/ProdInfoVertical';

const ProdBriefingCombine = ({ prodData }) => {
  return (
    <div className="c-prodBriefing__combine">
      <div className="c-prodBriefing__combineTitle">搭配組合</div>
      <ul className="c-prodBriefing__combineList">
        {prodData?.map((objData) => {
          return (
            <li className="c-prodBriefing__combineItem">
              <ProdInfoVertical {...objData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ProdBriefingCombine.propTypes = {
  prodData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

ProdBriefingCombine.defaultProps = {
  prodData: [
    {
      id: 'DICVJD-A900AX0YA-000',
      imageSrc: '/items/DICU6BA900AV16Q/000002_1599573354.jpg',
      imageAlt: '',
      title: 'A&F 大麋鹿紅 LOGO素色短袖棉T 黑色',
      link: 'https://24h.pchome.com.tw/',
    },
    {
      id: 'DICU6B-A900ASHW4-000',
      imageSrc: '/items/DICU6BA900ASHW4/000002_1596038389.jpg',
      imageAlt: '',
      title: '【KOSE 高絲】雪肌精（限量實惠瓶）500ml+雪肌精乳液 140ml',
      link: 'https://24h.pchome.com.tw/',
    },
    {
      id: 'DICU6B-A900BBC30-000',
      imageSrc: '/items/DICU6BA900ASHW2/000001_1596545470.jpg',
      imageAlt: '',
      title: 'Lenovo IdeaPad Slim 14吋輕薄',
      link: 'https://24h.pchome.com.tw/',
    },
    {
      id: 'DICU6E-A900BLJ4S-000',
      imageSrc: '/items/DICU6BA900ASHW2/000001_1596545470.jpg',
      imageAlt: '',
      title: 'Champion 美規高磅數純棉T恤-藏青(2入組)',
      link: 'https://24h.pchome.com.tw/',
    },
    {
      id: 'DICVJD-A900AX0YA-000',
      imageSrc: '/items/DICU6BA900AV16Q/000002_1599573354.jpg',
      imageAlt: '',
      title: 'A&F 大麋鹿紅 LOGO素色短袖棉T 黑色',
      link: 'https://24h.pchome.com.tw/',
    },
    {
      id: 'DICU6B-A900ASHW4-000',
      imageSrc: '/items/DICU6BA900ASHW4/000002_1596038389.jpg',
      imageAlt: '',
      title: '【KOSE 高絲】雪肌精',
      link: 'https://24h.pchome.com.tw/',
    },
    {
      id: 'DICU6B-A900BBC30-000',
      imageSrc: '/items/DICU6BA900ASHW2/000001_1596545470.jpg',
      imageAlt: '',
      title: 'Lenovo IdeaPad Slim 3i 82H701E5TW 14吋輕薄',
      link: 'https://24h.pchome.com.tw/',
    },
    {
      id: 'DICU6E-A900BLJ4S-000',
      imageSrc: '/items/DICU6BA900ASHW2/000001_1596545470.jpg',
      imageAlt: '',
      title: 'Champion 美規高磅數純棉T恤-藏青(2入組)',
      link: 'https://24h.pchome.com.tw/',
    },
  ],
};

export default ProdBriefingCombine;
