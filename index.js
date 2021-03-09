import textFit, * as testFit from './textFit.js'
import LoremIpsum from './lorem-ipsum.js'
console.log(LoremIpsum)
console.log('hello world')

function countLines(target) {
    // let textFitted = target.querySelector('.textFitted')
    let style = window.getComputedStyle(target, null);
    let height = parseInt(style.getPropertyValue("height"));
    let font_size = parseInt(style.getPropertyValue("font-size"));
    let line_height = parseInt(style.getPropertyValue("line-height"));
    let box_sizing = style.getPropertyValue("box-sizing");
    
    if(isNaN(line_height)) line_height = font_size * 1.2;
   
    if(box_sizing=='border-box')
    {
      let padding_top = parseInt(style.getPropertyValue("padding-top"));
      let padding_bottom = parseInt(style.getPropertyValue("padding-bottom"));
      let border_top = parseInt(style.getPropertyValue("border-top-width"));
      let border_bottom = parseInt(style.getPropertyValue("border-bottom-width"));
      height = height - padding_top - padding_bottom - border_top - border_bottom
    }
    // console.log(height, line_height,font_size);
    // console.log(height / line_height);
    let lines = Math.ceil(height / line_height);
    // alert("Lines: " + lines);
    return lines;
  }
  function getHeight(target) {
    let style = window.getComputedStyle(target, null);
    let box_sizing = style.getPropertyValue("box-sizing");
    let height = parseFloat(style.getPropertyValue("height"));
    console.log(style.getPropertyValue("height"))
    if(box_sizing=='border-box')
    {
      let padding_top = parseInt(style.getPropertyValue("padding-top"));
      let padding_bottom = parseInt(style.getPropertyValue("padding-bottom"));
      let border_top = parseInt(style.getPropertyValue("border-top-width"));
      let border_bottom = parseInt(style.getPropertyValue("border-bottom-width"));
      height = height - padding_top - padding_bottom - border_top - border_bottom
    }
    return height;
  }


  function countLinesAdvanced(target) {
    let originalHTML = target.innerHTML;
    let originalText = target.innerText;
    let words = originalText.split(' ');
    let lines = 0;
    let text = '';
    let height = 0;
    target.innerText = '';
    words.forEach((w) => {
      text += w + ' ';
      target.innerText = text;
      if (getHeight(target) != height) {
        height = getHeight(target);
        console.log('height',height)
        lines += 1;
      }
    });
    target.innerHTML = originalHTML
    console.log('lines',lines)
    return lines;
  }

  function countLinesAdvanced2(target) {
    var testBox = document.createElement("span")
    testBox.setAttribute('style', target.getAttribute('style'));
    testBox.innerText = '⠀';
    target.appendChild(testBox);
    var oneLineHeight = getHeight(testBox)
    testBox.remove();
    var lines = getHeight(target) / oneLineHeight;
    return lines;
  }

  var ipsum = new LoremIpsum();
  const run = (text) => {
    document.querySelectorAll('.textFit p').forEach((item) => {
      item.innerText = ipsum.paragraph(1,20) || 'error making text';
    })
    textFit(document.querySelectorAll('.textFit p'), { alignVert: true });

    document.querySelectorAll('.body .card').forEach((item) => {
      let style = window.getComputedStyle(item.querySelector('.textFitted'), null);
      item.querySelector('.fontSize').innerText = style.getPropertyValue("font-size");
      let lines =  countLinesAdvanced2(item.querySelector('.textFitted'));
      item.querySelector('.lines').innerText = lines;
      // console.table({ "countLines": lines })
    });

    document.querySelector('.body2 .card p').innerHTML = ipsum.paragraph(2,2);
    textFit(document.querySelector('.body2-container'), { minFontSize: 1, maxFontSize: 100, fontUnit:'%', fontChangeSize: 0.01 });
  }
// setInterval(()=>run(),2500)
run()
// document.querySelector('.textInput').addEventListener('change', (e) => {
//   let text = e.target.value;
//   run(text);
// })
