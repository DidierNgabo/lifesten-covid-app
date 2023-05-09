import axios from 'axios';
import { Table, Spin, Tag } from 'antd';
import { useQuery } from 'react-query';
import { ColumnType } from 'antd/es/table';

const fetchStatistics = async () => {
  const response = await axios.get(
    `https://${process.env.REACT_APP_BASE_URL}/statistics/`,
    {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      },
    }
  );
  return response.data?.response;
};

const fetchCountries = async () => {
  const response = await axios.get(
    `https://${process.env.REACT_APP_BASE_URL}/countries/`,
    {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      },
    }
  );
  return response.data?.response;
};

function CustomTable() {
  const { data, status } = useQuery<any[]>('statistics', fetchStatistics);
  const { data: countries } = useQuery<any[]>('countries', fetchCountries);

  const columns: ColumnType<any>[] = [
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      filters: countries?.map((country) => {
        return {
          text: country,
          value: country,
        };
      }),
      filterSearch: true,
      onFilter(value, record) {
        return record.country.includes(value);
      },
    },
    {
      title: 'Population',
      dataIndex: 'population',
      key: 'population',
    },
    {
      title: 'Active Cases',
      dataIndex: 'cases',
      key: 'ActiveCases',
      render: (cases: any) => (
        <>
          <Tag color="blue" key={cases}>
            {cases?.active}
          </Tag>
        </>
      ),
    },
    {
      title: 'Critical Cases',
      dataIndex: 'cases',
      key: 'CriticalCases',
      render: (cases: any) => (
        <>
          <Tag color="red" key={cases}>
            {cases?.critical}
          </Tag>
        </>
      ),
    },
    {
      title: 'Recovered Cases',
      dataIndex: 'cases',
      key: 'RecoveredCases',
      render: (cases: any) => (
        <>
          <Tag color="green" key={cases}>
            {cases?.recovered}
          </Tag>
        </>
      ),
    },
  ];
  return (
    <div className={`p-4`}>
      {status === 'loading' ? (
        <Spin size="large" className="h-32 w-32 mx-auto text-3xl" />
      ) : (
        <div>
          <h2 className="font-bold text-xl">Covid19 Statistics</h2>
          <Table
            className={`mt-4`}
            dataSource={data}
            size="middle"
            rowKey={(record: any) => record.country}
            columns={columns}
          />
        </div>
      )}
    </div>
  );
}

export default CustomTable;
