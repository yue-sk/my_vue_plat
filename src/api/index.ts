import request from '../utils/request';

// fetchData 函数的功能是获取本地 JSON 文件的数据，因此我们可以把它看作是从服务器端获取数据的过程。这个函数可以被其他模块引用和调用，以便在应用程序中获取数据并进行其他操作。
export const fetchData = () => {
    return request({
        url: './table.json',
        method: 'get'
    });
};

//从api中获取
export const fetchCommits = (startDate: string, endDate: string) => {
    const url = `https://www.fastmock.site/mock/6b6bab14f8dd4040d5d82be2508bca07/yue_api/api/get_data?startDate=${startDate}&endDate=${endDate}`;
    return request({
    url,
    method: 'get'
  });
};