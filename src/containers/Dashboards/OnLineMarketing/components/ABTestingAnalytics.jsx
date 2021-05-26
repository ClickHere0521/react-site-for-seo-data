import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';

const data = [{
 name: 'Mon', a: 590, b: 1400, c: 1400, 
},
  {
 name: 'Tue', a: 868, b: 1506, c: 1400, 
},
  {
 name: 'Wed', a: 1397, b: 989, c: 1400, 
},
  {
 name: 'Thu', a: 1480, b: 1228, c: 1400, 
},
  {
 name: 'Fri', a: 1520, b: 1100, c: 1400, 
},
  {
 name: 'Sat', a: 1520, b: 1100, c: 1400, 
},
  {
 name: 'Sun', a: 1400, b: 1700, c: 1400, 
}];

const ABTestingAnalytics = ({ dir, themeName }) => {
  const { t } = useTranslation('common');
  const dailyData = useSelector(state => state.credits.activity);

  return (
    <Panel md={12} lg={12} xl={12} title={t('api_dashboard.services_usage')}>
      <div dir="ltr">
        <ResponsiveContainer height={450} className="dashboard__area">
          <AreaChart data={dailyData} margin={{ top: 20, left: -15, bottom: 20 }}>
            <XAxis dataKey="date" tickLine={false} reversed={dir === 'rtl'} />
            <YAxis tickLine={false} orientation={dir === 'rtl' ? 'right' : 'left'} />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Legend />
            <CartesianGrid />
            <Area name="Fetched Data" type="monotone" dataKey="fetchedData" fill="#4ce1b6" stroke="#4ce1b6" fillOpacity={0.2} />            
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

ABTestingAnalytics.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(ABTestingAnalytics);
