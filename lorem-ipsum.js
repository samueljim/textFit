// window.LoremIpsum.prototype={
export default function LoremIpsum () {
  this._words = [
    "a",
    "ac",
    "automation",
    "ad",
    "outfit",
    "io",
    "aenean",
    "aliquam",
    "aliquam",
    "client",
    "rgb",
    "ante",
    "aptent",
    "arcu",
    "at",
    "auctor",
    "augue",
    "cmyk",
    "filter",
    "amy",
    "lisa",
    "sonos",
    "screaming internally",
    "v60",
    "sexy",
    "blandit",
    "class",
    "commodo",
    "outfit",
    "congue",
    "consectetur",
    "consequat",
    "conubia",
    "convallis",
    "cras",
    "cubilia",
    "customer",
    "empower",
    "curae",
    "cursus",
    "dapibus",
    "diam",
    "platform",
    "dictumst",
    "dolor",
    "automation",
    "brand",
    "empowers",
    "duis",
    "content",
    "eget",
    "eleifend",
    "CMS",
    "elit",
    "enim",
    "outfit",
    "outfit",
    "outfit",
    "outfit",
    "erat",
    "eros",
    "est",
    "et",
    "etiam",
    "etiam",
    "eu",
    "euismod",
    "branding",
    "fames",
    "faucibus",
    "felis",
    "fermentum",
    "colour",
    "fusce",
    "gravida",
    "habitant",
    "habitasse",
    "hac",
    "hendrerit",
    "himenaeos",
    "alex",
    "font",
    "id",
    "css",
    "in",
    "inceptos",
    "integer",
    "shrek",
    "fast",
    "fit in",
    "stand out",
    "be free",
    "interdum",
    "ipsum",
    "justo",
    "software",
    "lacus",
    "laoreet",
    "lectus",
    "leo",
    "libero",
    "management",
    "enterprise",
    "lorem",
    "market",
    "maecenas",
    "magna",
    "margin",
    "production",
    "mattis",
    "josh",
    "matt",
    "mi",
    "crop",
    "mollis",
    "morbi",
    "nam",
    "nec",
    "neque",
    "jordan",
    "sam",
    "nisi",
    "nisl",
    "non",
    "ally",
    "nulla",
    "padding",
    "nunc",
    "odio",
    "orci",
    "size",
    "per",
    "pharetra",
    "farhaan",
    "placerat",
    "platea",
    "porta",
    "porttitor",
    "posuere",
    "shape",
    "type",
    "pretium",
    "primis",
    "proin",
    "sound",
    "purus",
    "quam",
    "free",
    "aseeset",
    "textfit",
    "conversion",
    "media",
    "organisations",
    "campaign",
    "support",
    "scelerisque",
    "email",
    "sem",
    "semper",
    "senectus",
    "sit",
    "daksh",
    "sodales",
    "nikhila",
    "suscipit",
    "stephanie",
    "taciti",
    "tellus",
    "tempor",
    "ben",
    "online",
    "print",
    "page",
    "outfit",
    "design",
    "choices",
    "ultrices",
    "coffee",
    "urna",
    "ut",
    "ut",
    "varius",
    "vehicula",
    "vel",
    "imagery",
    "venenatis",
    "liam",
    "vitae",
    "vivamus",
    "digital",
    "identity",
    "vulputate",
  ];

  this._random = function(x,y){
    var rnd=(Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1);
    return Math.round(Math.abs(rnd)*x+y);
  },

  this._count = function(min,max){
    var result;
    if(min&&max)result=Math.floor(Math.random()*(max-min+1)+min);
    else if(min)result=min;
    else if(max)result=max;
    else result=this._random(8,2);

    return result;
  },

  this.words = function(min,max){
    var result=[];
    var count=this._count(min,max);

    //getrandomwords
    while(result.length<count){
      var pos=Math.floor(Math.random()*this._words.length);
      var rnd=this._words[pos];

      //donotallowsamewordtwiceinarow
      if(result.length&&result[result.length-1]===rnd){
        continue;
      }

      result.push(rnd);
    }

    return result;
  },

  this.sentence = function(min,max){
    var words=this.words(min,max);

    //addcomma(s)tosentence
    var index=this._random(6,2);
    while(index<words.length-2){
      words[index]+=",";
      index+=this._random(6,2);
    }

    //appendpuctationonend
    var punct="...!?"
    words[words.length-1]+=punct.charAt(Math.floor(Math.random()*punct.length));

    //uppercasefirstletter
    words[0]=words[0].charAt(0).toUpperCase()+words[0].slice(1);

    return words.join(" ");
  },

  this.paragraph = function(min,max){
    if(!min&&!max){
      min=20;
      max=60;
    }

    var result="";
    var count= this._count(min,max);

    //appendsentencesuntillimitisreached
    while(result.slice(0,-1).split(" ").length<count){
      result += this.sentence() + " ";
    }
    result = result.slice(0,-1)
    //removewords
    if(result.split("").length>count){
      var punct=result.slice(-1);
      result=result.split(" ").slice(0,count).join(" ");
      result=result.replace(/,$/,"");
      result+=punct;
    }
    return result;
  }

}