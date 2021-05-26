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
        Header: 'Keyword',
        accessor: 'keyword',
      },
      {
        Header: 'Competition',
        accessor: 'competition',
      },
      {
        Header: 'Cpc',
        accessor: 'cpc',
        disableGlobalFilter: true,
      },
      {
        Header: 'Search Volume',
        accessor: 'search_volume',
        disableGlobalFilter: true,
      },
      {
        Header: 'Categories',
        accessor: 'categories',
        disableGlobalFilter: true,
      },
      {
        Header: 'Monthly searches',
        accessor: 'monthly_searches',
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
    let categoriesJson;
    let monthlySearchesJson;

    const categoriesFun = (array) => {
      let categories = '';
      if (array) {
        array.forEach((val) => {
          categories += `${val}, `;
        }); 
      }
      return categories;
    };
    const monthlySearchesFun = (array) => {
      let monthlySearches = '';
      if (array) {
        array.forEach((val) => {
          monthlySearches += `${val.year}/${val.month} sv: ${val.search_volume}, `;
        });
      }
      return monthlySearches;
    };
    // console.log('resultfdsfdsfdsfds', result);
    if (result.result) {
      result.result.forEach((value) => {    
        categoriesJson = categoriesFun(value.categories);    
        monthlySearchesJson = monthlySearchesFun(value.monthly_searches);    
        data.push({
          id,
          keyword: value.keyword,
          competition: value.competition,
          cpc: value.cpc,
          search_volume: value.search_volume,
          categories: categoriesJson,
          monthly_searches: monthlySearchesJson,
        });
        id += 1; 
      });
    } 
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
