export const exerciesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f02ecd56efmsh6b96760a23de6f3p167fe3jsn9553e0c2312c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const YTOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f02ecd56efmsh6b96760a23de6f3p167fe3jsn9553e0c2312c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json()

  return data
}