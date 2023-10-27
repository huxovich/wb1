  const widget = document.getElementById('widget');
  const apiKey = '698b63a4698b63a4698b63a4b56a9d6ae06698b698b63a40cb8d0d02b98c9cb1f41b84a';
  const ownerId = '193675952';
  const postsPerPage = 20;
  let offset = 0;
  let postsCache = [];
  let storageSize = 0;
  const maxStorageSize = 4242880;
  // Функция для загрузки постов с помощью API VK
  function loadPosts() {
    const script = document.createElement('script');
    script.src = `https://api.vk.com/method/wall.get?owner_id=-${ownerId}&count=${postsPerPage}&offset=${offset}&access_token=${apiKey}&v=5.130&callback=handlePostsResponse`;
    document.body.appendChild(script);
  }
  // Функция для обработки ответа от API VK
  function handlePostsResponse(response) {
    if (response.error) {
      console.error(response.error);
      return;
    }
    const newPosts = response.response.items;
    if (newPosts.length === 0) {
      return;
    }
    postsCache = postsCache.concat(newPosts);
    if (postsCache.length >= postsPerPage) {
      postsCache.shift();
    }
    renderPosts();
  }
  // Функция для отрисовки постов в виджете
  function renderPosts() {
    widget.innerHTML = '';
    for (const post of postsCache) {
      const postElement = document.createElement('div');
      const postText = document.createElement('p');
      postElement.classList.add('widget__item');
      postText.classList.add('widget__text');
      postText.textContent = post.text;
      postElement.appendChild(postText);
      if (post.attachments && post.attachments.length > 0) {
        for (const attachment of post.attachments) {
          if (attachment.type === 'photo') {
            const photo_url = attachment.photo.sizes[attachment.photo.sizes.length - 1].url;
            const postImg = document.createElement('img');
            postImg.classList.add('widget__img');
            postImg.src = photo_url;
            postElement.appendChild(postImg);
          }
        }
      }
      widget.appendChild(postElement);
    }
    calculateStorageSize();
  }
  // Функция для вычисления размера хранилища localStorage
  function calculateStorageSize() {
    const data = JSON.stringify(localStorage);
    const dataSize = data.length * 2;
    storageSize = dataSize;
    console.log(`Объем занятой памяти: ${storageSize} байт / ${maxStorageSize} байт`);
  }
  window.addEventListener('storage', calculateStorageSize);

  loadPosts();