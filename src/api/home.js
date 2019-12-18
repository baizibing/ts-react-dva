export function getcarouselList () {
  const url = 'http://39.105.98.45/api/v1/banners/bannerList';
  return fetch(url).then(res => {
    return res.json();
  })
}
