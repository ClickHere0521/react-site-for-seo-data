import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import {
  BarChart, Bar, Cell, ResponsiveContainer,
} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import { useSelector } from 'react-redux';

const data = [
  { id: 0, name: 'Page A', amt: 2400 },
  { id: 1, name: 'Page B', amt: 2210 },
  { id: 2, name: 'Page C', amt: 2290 },
  { id: 3, name: 'Page D', amt: 2000 },
  { id: 4, name: 'Page E', amt: 2181 },
  { id: 5, name: 'Page F', amt: 2500 },
  { id: 6, name: 'Page G', amt: 2100 },
  { id: 7, name: 'Page H', amt: 2290 },
  { id: 8, name: 'Page I', amt: 2000 },
  { id: 9, name: 'Page J', amt: 2181 },
];

const TotalCredits = () => {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];
  const credits = useSelector(state => state.credits.remaincredits);

  // const handleClick = (item) => {
  //   const index = data.indexOf(item.payload);
  //   setActiveIndex(index);
  // };

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="card__title">
            <h5 className="bold-text">{t('api_dashboard.total_credits')}</h5>
          </div>
          <div className="dashboard__total">
            <TrendingUpIcon className="dashboard__trend-icon" />
            <p className="dashboard__total-stat">
              {/* {activeItem.amt} */}
              {credits}
            </p>
            <div className="dashboard__chart-container">
              <ResponsiveContainer height={50}>
                <BarChart data={data}>
                  {/* <Bar dataKey="amt" onClick={handleClick}> */}
                  <Bar dataKey="amt">
                    {data.map((entry, index) => (
                      <Cell
                        key={entry.id}
                        cursor="pointer"
                        fill={index === activeIndex ? '#4ce1b6' : '#70bbfd'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalCredits;
