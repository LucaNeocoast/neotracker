import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import Sidebar from 'Components/Sidebar';
import CustomTooltip from 'Components/CustomTooltip';
import privateRoute from 'Hocs/privateRoute';

import { ReactComponent as ArrowRight } from 'Assets/arrow-rigth.svg';
import { ReactComponent as ArrowLeft } from 'Assets/arrow-left.svg';

import './index.scss';

const reports = () => {
  const data = [
    {
      name: 'mon',
      complet_name: 'monday',
      date: '10/3',
      horas: 9,
    },
    {
      name: 'tue',
      complet_name: 'tuesday',
      date: '11/3',
      horas: 6,
    },
    {
      name: 'wed',
      complet_name: 'wednesday',
      date: '12/3',
      horas: 8,
    },
    {
      name: 'thu',
      complet_name: 'thursday',
      date: '13/3',
      horas: 3,
    },
    {
      name: 'fri',
      complet_name: 'friday',
      date: '14/3',
      horas: 5,
    },
    {
      name: 'sat',
      complet_name: 'saturday',
      date: '15/3',
      horas: 1,
    },
    {
      name: 'sun',
      complet_name: 'sunday',
      date: '16/3',
      horas: 3,
    },
  ];
  return (
    <div className="reports">
      <Sidebar />
      <div className="reports__content">
        <div className="reports__stats-weekly">
          <div className="reports__stats-weekly-title">
            <div className="reports__stats-weekly-arrows"><ArrowLeft /> <ArrowRight /></div>
            <div className="reports__stats-weekly-week">This week</div>
          </div>
          <ResponsiveContainer width="100%" height={300} margin={10}>
            <BarChart data={data}>
              <XAxis
                // eslint-disable-next-line no-sequences
                dataKey="name"
                axisLine={{ stroke: '#e1ebf7' }}
                tickLine={false}
                stroke="#3b475b"
                fontSize={16}
              />
              <YAxis
                domain={[0, 10]}
                unit="h"
                axisLine={false}
                tickLine={false}
                fontSize={15}
                ticks={[0, 2, 4, 6, 8, 10]}
              />
              <Tooltip cursor={{ fill: '#80caff', stroke: '#119cff', strokeWidth: 1 }} content={<CustomTooltip name={data.complet_name} hour={data.horas} />} />
              <Bar
                dataKey="horas"
                barSize={90}
                fill="#0763ff"
                radius={[10, 10, 0, 0]}
              // label={renderCustomBarLabel}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="reports__stats-box">
          <div className="reports__stats-tag">b</div>
          <div className="reports__stats-cake">c</div>
        </div>
        <div className="reports__stats-day">d</div>
      </div>
    </div>
  );
};

export default privateRoute(reports);
