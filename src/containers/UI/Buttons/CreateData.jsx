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
        Header: 'Currency',
        accessor: 'currency',
        disableGlobalFilter: true,
      },
      {
        Header: 'Data asin',
        accessor: 'data_asin',
        disableGlobalFilter: true,
      },
      {
        Header: 'Domain',
        accessor: 'domain',
        disableGlobalFilter: true,
      },
      {
        Header: 'Old price',
        accessor: 'price_from',
        disableGlobalFilter: true,
      },
      {
        Header: 'New price',
        accessor: 'price_to',
        disableGlobalFilter: true,
      },
      {
        Header: 'Rating',
        accessor: 'rating',
        disableGlobalFilter: true,
      },
      {
        Header: 'Image url',
        accessor: 'image_url',
        disableGlobalFilter: true,
      },
      {
        Header: 'Image alt',
        accessor: 'image_alt',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
    ],
    [],
  );

  // const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
  //   - start.getTime()))).toLocaleDateString();

  const data = [];  

  const rows = () => {
    let id = 1;
    if (result.items) {
      result.items.forEach((value) => {        
        switch (value.type) {
          case 'amazon_paid': 
            data.push({
              id,
              type: 'Amazon paid',
              currency: value.currency,
              data_asin: value.data_asin,
              domain: value.domain,
              price_from: value.price_from,
              price_to: value.price_to,
              rank_absolute: value.rank_absolute,
              rank_group: value.rank_group,
              rating: value.rating.value,
              title: value.title,
              url: value.url,
            });
            id += 1;
            break;
          case 'editorial_recommendations':
            value.items.forEach((serpVal) => {
              data.push({
                id,
                type: 'Editorial recommendations',
                currency: serpVal.currency,
                data_asin: serpVal.data_asin,
                image_url: serpVal.image_url,
                domain: serpVal.domain,
                price_from: serpVal.price_from,
                price_to: serpVal.price_to,
                rank_absolute: value.rank_absolute,
                rank_group: value.rank_group,
                rating: serpVal.rating.value,
                title: serpVal.title,
                url: serpVal.url,
              });
              id += 1;
            });
            break;
          case 'amazon_serp':
            data.push({
              id,
              type: 'Amazon serp',
              currency: value.currency,
              data_asin: value.data_asin,
              image_url: value.image_url,
              domain: value.domain,
              price_from: value.price_from,
              price_to: value.price_to,
              rank_absolute: value.rank_absolute,
              rank_group: value.rank_group,
              rating: value.rating.value,
              title: value.title,
              url: value.url,
            });
            id += 1;
            break;  
          case 'related_searches':
            value.items.forEach((searchVal) => {
              data.push({
                id,
                type: 'Related Searches',
                title: searchVal.title,
                url: searchVal.url,
                image_alt: searchVal.image_alt,
                image_url: searchVal.image_url,
                rank_absolute: value.rank_absolute,
                rank_group: value.rank_group,
              });
              id += 1;
            });
            break;
          case 'top_rated_from_our_brands':
            value.items.forEach((topVal) => {
              data.push({
                id,
                type: 'top_rated_from_our_brands',
                currency: topVal.currency,
                data_asin: topVal.data_asin,
                image_url: topVal.image_url,
                domain: topVal.domain,
                price_from: topVal.price_from,
                price_to: topVal.price_to,
                rank_absolute: value.rank_absolute,
                rank_group: value.rank_group,
                rating: topVal.rating.value,
                title: topVal.title,
                url: topVal.url,
              });
              id += 1;
            });
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
