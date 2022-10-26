type RequestData = Record<string, any>
export default async (url = '', data: RequestData = {}, type = 'GET') => {
  let baseUrl = ''
  if (import.meta.env.DEV) {
    baseUrl = "/api"
  } else {
    baseUrl = "http://110.40.153.135:8000"; // 基础路径
  }
  type = type.toUpperCase(); // 请求方式小写转换成大写
  url = baseUrl + url; // 请求地址的拼接

  if (type == 'GET') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }
  let requestConfig: any = {
    credentials: 'same-origin',
    method: type,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: "cors",
    cache: "force-cache" // 是否缓存请求资源 可选值有 default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached 。
  };

  if (type == 'POST') {
    Object.defineProperty(requestConfig, 'body', {
      value: JSON.stringify(data)
    });
  }
  try {
    const response = await fetch(url, requestConfig);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    throw new Error(error as any);
  }
}
