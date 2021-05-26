import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { mapProps } from 'recompose';

const CreateTableData = () => {
  const result = useSelector(state => state.api.result);
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Average',
        accessor: 'average',
        disableGlobalFilter: true,
      },
      {
        Header: 'Date From',
        accessor: 'date_from',
        disableGlobalFilter: true,
      },
      {
        Header: 'Date to',
        accessor: 'date_to',
        disableGlobalFilter: true,
      },
      {
        Header: 'Timestamp',
        accessor: 'timestamp',
        disableGlobalFilter: true,
      },
      {
        Header: 'Value',
        accessor: 'value',
        disableGlobalFilter: true,
      },
      {
        Header: 'Geo id',
        accessor: 'geo_id',
        disableGlobalFilter: true,
      },
      {
        Header: 'Geo name',
        accessor: 'geo_name',
        disableGlobalFilter: true,
      },
      {
        Header: 'Max value index',
        accessor: 'max_value_index',
        disableGlobalFilter: true,
      },
      {
        Header: 'Rising',
        accessor: 'rising',
        disableGlobalFilter: true,
      },
      {
        Header: 'Top',
        accessor: 'top',
        disableGlobalFilter: true,
      },
    ],
    [],
  );

  // const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
  //   - start.getTime()))).toLocaleDateString();

  const data = [];  

  const rows = () => {
    let id = 1;
    let risingJson;
    let topJson;

    const risingFun = (array) => {
      let risings = '';
      if (array) {
        array.forEach((val) => {
          risings += `${val.query}(${val.value}), `;
        }); 
      }
      return risings;
    };
    const topFun = (array) => {
      let tops = '';
      if (array) {
        array.forEach((val) => {
          tops += `${val.query}(${val.value}), `;
        });
      }
      return tops;
    };
    // console.log('resultfdsfdsfdsfds', result);
    if (result.items) {
      result.items.forEach((value) => {  
        switch (value.type) {
          case 'google_trends_graph': 
            value.data.forEach((graphVal) => {
              data.push({
                id,
                type: 'Google trends graph',
                title: value.title,
                average: `${value.averages[0]}, ${value.averages[1]}`,
                date_from: graphVal.date_from,
                date_to: graphVal.date_to,
                timestamp: graphVal.timestamp,
                value: `${graphVal.values[0]}, ${graphVal.values[1]}`,
              });
              id += 1;
            });
          break;
          case 'google_trends_map': 
            value.data.forEach((mapVal) => {
              data.push({
                id,
                type: 'Google trends map',
                title: value.title,
                geo_id: mapVal.geo_id,
                geo_name: mapVal.geo_name,
                max_value_index: mapVal.max_value_index,
                value: `${mapVal.values[0]}, ${mapVal.values[1]}`,
              });
              id += 1;
            });
          break;
          case 'google_trends_queries_list': 
            risingJson = risingFun(value.data.rising);
            topJson = topFun(value.data.top);
            data.push({
              id,
              type: 'Google trends queries list',
              title: value.title,
              rising: risingJson,
              top: topJson,
            });
            id += 1;
          break;
          default: break;
        }
      });
    } 
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
