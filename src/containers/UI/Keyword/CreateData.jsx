import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const CreateTableData = () => {
  const result = useSelector(state => state.api.result);
  // console.log('result', result);
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        disableGlobalFilter: true,
        width: 65,
      },
      // {
      //   Header: 'Bing keyword info',
      //   accessor: 'bing_keyword_info',
      // },
      {
        Header: 'Bing keyword monthly searches',
        accessor: 'bing_keyword_monthly_searches',
      },
      {
        Header: 'Bing keyword update time',
        accessor: 'bing_keyword_update_time',
        disableGlobalFilter: true,
      },
      {
        Header: 'Ad position average',
        accessor: 'ad_position_average',
        disableGlobalFilter: true,
      },
      {
        Header: 'Ad position max',
        accessor: 'ad_position_max',
        disableGlobalFilter: true,
      },
      {
        Header: 'Ad position min',
        accessor: 'ad_position_min',
        disableGlobalFilter: true,
      },
      {
        Header: 'Bid',
        accessor: 'bid',
        disableGlobalFilter: true,
      },
      {
        Header: 'Cpc average',
        accessor: 'cpc_average',
        disableGlobalFilter: true,
      },
      {
        Header: 'Cpc max',
        accessor: 'cpc_max',
        disableGlobalFilter: true,
      },
      {
        Header: 'Cpc min',
        accessor: 'cpc_min',
        disableGlobalFilter: true,
      },
      {
        Header: 'Daily clicks average',
        accessor: 'daily_clicks_average',
        disableGlobalFilter: true,
        width: 200,
      },
      {
        Header: 'Reviews count',
        accessor: 'daily_clicks_max',
        disableGlobalFilter: true,
      },
      {
        Header: 'Daily clicks min',
        accessor: 'daily_clicks_min',
        disableGlobalFilter: true,
      },
      {
        Header: 'Daily cost average',
        accessor: 'daily_cost_average',
        disableGlobalFilter: true,
      },
      {
        Header: 'Daily cost max',
        accessor: 'daily_cost_max',
        disableGlobalFilter: true,
      },
      {
        Header: 'Daily cost min',
        accessor: 'daily_cost_min',
        disableGlobalFilter: true,
      },
      {
        Header: 'Daily impressions average',
        accessor: 'daily_impressions_average',
        disableGlobalFilter: true,
      },
      {
        Header: 'Daily impressions max',
        accessor: 'daily_impressions_max',
        disableGlobalFilter: true,
      },
      {
        Header: 'Daily impressions min',
        accessor: 'daily_impressions_min',
        disableGlobalFilter: true,
      },
      {
        Header: 'Impressions last updated time',
        accessor: 'impressions_last_updated_time',
        disableGlobalFilter: true,
      },
      {
        Header: 'Competition',
        accessor: 'competition',
        disableGlobalFilter: true,
      },
      {
        Header: 'Cpc',
        accessor: 'cpc',
        disableGlobalFilter: true,
      },
      {
        Header: 'Keyword last updated time',
        accessor: 'keyword_last_updated_time',
        disableGlobalFilter: true,
      },
      {
        Header: 'Keyword monthly searches',
        accessor: 'keyword_monthly_searches',
        disableGlobalFilter: true,
      },
      {
        Header: 'Keyword search volume',
        accessor: 'keyword_search_volume',
        disableGlobalFilter: true,
      },
      {
        Header: 'Related keywords',
        accessor: 'related_keywords',
        disableGlobalFilter: true,
      },
    ],
    [],
  );

  // const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
  //   - start.getTime()))).toLocaleDateString();

  const data = [];  

  const rows = () => {
    let bingKeywordMonthlySearchesJson;
    let KeywordMonthlySearchesJson;
    let relatedKeywordsJson;
    let id = 1;
    const bingKeywordMonthlySearchesFun = (array) => {
      let bingKeywordMonthlySearches = '';
      array.forEach((val) => {
        bingKeywordMonthlySearches += `${val.year}/${val.month} sv: ${val.search_volume}, `;
      });
      return bingKeywordMonthlySearches;
    };
    const relatedKeywordsFun = (array) => {
      let relatedKeywords = '';
      array.forEach((val) => {
        relatedKeywords += `${val}, `;
      });
      return relatedKeywords;
    };
    
    if (result.items) {
      result.items.forEach((value) => {
        bingKeywordMonthlySearchesJson = bingKeywordMonthlySearchesFun(value.keyword_data.bing_keyword_info.monthly_searches);    
        KeywordMonthlySearchesJson = bingKeywordMonthlySearchesFun(value.keyword_data.keyword_info.monthly_searches);    
        relatedKeywordsJson = relatedKeywordsFun(value.related_keywords);    
        console.log('bingkeywordmonthly', bingKeywordMonthlySearchesJson, KeywordMonthlySearchesJson, relatedKeywordsJson);
        data.push({
          id,
          // bing_keyword_info: value.keyword_data.bing_keyword_info.search_volume,
          bing_keyword_monthly_searches: bingKeywordMonthlySearchesJson,
          bing_keyword_update_time: value.keyword_data.bing_keyword_info.last_updated_time,
          ad_position_average: value.keyword_data.impressions_info.ad_position_average,
          ad_position_max: value.keyword_data.impressions_info.ad_position_max,
          ad_position_min: value.keyword_data.impressions_info.ad_position_min,
          bid: value.keyword_data.impressions_info.bid,
          cpc_average: value.keyword_data.impressions_info.cpc_average,
          cpc_max: value.keyword_data.impressions_info.cpc_max,
          cpc_min: value.keyword_data.impressions_info.cpc_min,
          daily_clicks_average: value.keyword_data.impressions_info.daily_clicks_average,
          daily_clicks_max: value.keyword_data.impressions_info.daily_clicks_max,
          daily_clicks_min: value.keyword_data.impressions_info.daily_clicks_min,
          daily_cost_average: value.keyword_data.impressions_info.daily_cost_average,
          daily_cost_max: value.keyword_data.impressions_info.daily_cost_max,
          daily_cost_min: value.keyword_data.impressions_info.daily_cost_min,
          daily_impressions_average: value.keyword_data.impressions_info.daily_impressions_average,
          daily_impressions_max: value.keyword_data.impressions_info.daily_impressions_max,
          daily_impressions_min: value.keyword_data.impressions_info.daily_impressions_min,
          impressions_last_updated_time: value.keyword_data.impressions_info.last_updated_time,
          competition: value.keyword_data.keyword_info.competition,
          cpc: value.keyword_data.keyword_info.cpc,
          keyword_last_updated_time: value.keyword_data.keyword_info.last_updated_time,
          keyword_monthly_searches: KeywordMonthlySearchesJson,
          keyword_search_volume: value.keyword_data.keyword_info.search_volume,
          related_keywords: relatedKeywordsJson,
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
