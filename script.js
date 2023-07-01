const form = document.forms[0];
const figure = document.querySelector('figure');

form.onsubmit = (e) => {
  e.preventDefault();
  if (figure.innerHTML) {
    alert('Please reset your avatar');
    return;
  }

  figure.innerHTML = '';
  const fileName = e.target[0].value.trim().split(' ').join('_');
  const extension = e.target[1].value;
  const url = `https://robohash.org/${fileName}.${extension}`;

  if (fileName === '') {
    alert('File name must exist');
    return;
  }

  if (extension === '') {
    alert('Extention name must exist');
    return;
  }

  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.append(url);

  const button = document.createElement('button');
  button.setAttribute('type', 'reset');
  const resetText = document.createTextNode('reset');
  button.append(resetText);

  const img = document.createElement('img');
  img.setAttribute('src', url);

  const figcaption = document.createElement('figcaption');
  const captionText = document.createTextNode('image url : ');
  figcaption.append(captionText);
  figcaption.append(a);
  figcaption.append(' ');
  figcaption.append(button);

  figure.append(img);
  figure.append(figcaption);

  e.target[0].value = '';
  e.target[1].value = '';
};

document.body.onclick = (e) => {
  if (e.target.type === 'reset') {
    figure.innerHTML = '';
  }
};
