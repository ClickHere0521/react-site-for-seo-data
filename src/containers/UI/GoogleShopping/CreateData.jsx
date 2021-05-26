import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const CreateTableData = () => {
  const result = useSelector(state => state.api.result);
  console.log('result', result);
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
        Header: 'Domain',
        accessor: 'domain',
        disableGlobalFilter: true,
      },
      {
        Header: 'Product id',
        accessor: 'product_id',
        disableGlobalFilter: true,
      },
      {
        Header: 'Price',
        accessor: 'price',
        disableGlobalFilter: true,
      },
      {
        Header: 'Product rating',
        accessor: 'product_rating',
        disableGlobalFilter: true,
      },
      {
        Header: 'Shop rating',
        accessor: 'shop_rating',
        disableGlobalFilter: true,
      },
      {
        Header: 'Description',
        accessor: 'description',
        disableGlobalFilter: true,
        width: 200,
      },
      {
        Header: 'Reviews count',
        accessor: 'reviews_count',
        disableGlobalFilter: true,
      },
      {
        Header: 'Shop ad aclk',
        accessor: 'shop_ad_aclk',
        disableGlobalFilter: true,
      },
      {
        Header: 'Url',
        accessor: 'url',
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
    if (result.items) {
      result.items.forEach((value) => {        
        switch (value.type) {
          case 'google_shopping_serp': 
            data.push({
              id,
              type: 'Google shopping serp',
              currency: value.currency,
              description: value.description,
              domain: value.domain,
              price: value.price,
              rank_absolute: value.rank_absolute,
              rank_group: value.rank_group,
              shop_ad_aclk: value.shop_ad_aclk,
              product_id: value.product_id,
              product_rating: value.product_rating.value,
              reviews_count: value.reviews_count,
              shop_rating: value.shop_rating,
              url: value.shopping_url,
              title: value.title,
            });
            id += 1;
            break;
          case 'google_shopping_sponsored_carousel':
            data.push({
              id,
              type: 'Google shopping sponsored carousel',
              currency: value.currency,
              price: value.price,
              product_rating: value.product_rating,
              rank_absolute: value.rank_absolute,
              rank_group: value.rank_group,
              title: value.title,
            });
            id += 1;
            break;
          case 'google_shopping_paid':
            data.push({
              id,
              type: 'Google shopping paid',
              domain: value.domain,
              rank_absolute: value.rank_absolute,
              rank_group: value.rank_group,
              description: value.description,
              title: value.title,
              url: value.url,
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
