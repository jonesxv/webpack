import _ from 'lodash';
import './styles/style.css';
import logo from './images/webpack.png';
import Data from './data/data.xml';


function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = logo;

  element.appendChild(myImage);

  console.log(Data);

  return element;
}

document.body.appendChild(component());