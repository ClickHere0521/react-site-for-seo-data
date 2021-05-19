import { useMemo } from 'react';
import { useSelector } from 'react-redux';

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
        disableGlobalFilter: true,
      },
      {
        Header: 'Rank Group',
        accessor: 'rank_group',
        disableGlobalFilter: true,
      },
      {
        Header: 'Rank Absolute',
        accessor: 'rank_absolute',
        disableGlobalFilter: true,
      },
      {
        Header: 'Url',
        accessor: 'url',
        disableGlobalFilter: true,
      },
      // {
      //   Header: 'Items',
      //   accessor: 'items',
      //   disableGlobalFilter: true,
      // },
      // {
      //   Header: 'Rating',
      //   accessor: 'rating',
      //   disableGlobalFilter: true,
      //   disableSortBy: true,
      // },
    ],
    [],
  );

  // const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
  //   - start.getTime()))).toLocaleDateString();

  const data = [];
  const rows = () => {
    if (result.items) {
      result.items.some((value, index) => {
        if (index > 90) return true;
        data.push({
          id: (index + 1),
          title: value.title,
          type: value.type,        
          rank_group: value.rank_group,
          rank_absolute: value.rank_absolute,
          url: value.url,
          // items: value.items,
          // rating: value.rating,
        });
        return false;
      }); 
      console.log(data);
    }

    // for (let i = 1; i < 36; i += 1) {
    //   dataTemp.push({
    //     id: i,
    //     first: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
    //     last: ['Morrison', 'Brown  ', 'Medinberg'][Math.floor((Math.random() * 3))],
    //     user: ['@dragon', '@hamster', '@cat'][Math.floor((Math.random() * 3))],
    //     age: Math.min(100, Math.round(Math.random() * 30) + 20),
    //     date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
    //     location: ['Melbourne', 'Tokio', 'Moscow', 'Rome'][Math.floor((Math.random() * 4))],
    //     work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
    //   });
    // }
    // console.log(dataTemp);
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
