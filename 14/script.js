function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      // Вызываем функцию resolve для возвращения объекта с информацией о загруженном изображении
      resolve({
        src: url,
        width: image.width,
        height: image.height
      });
    };
    // Объявляем функцию, которая будет вызвана в случае ошибки при загрузке изображения
    image.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    image.src = url;
  });
}
// Вызываем функцию loadImage, передавая в качестве параметра ссылку на изображение
loadImage('https://shutniks.com/wp-content/uploads/2020/03/smeshnoy_kot_foto_6_27100051.jpg')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });