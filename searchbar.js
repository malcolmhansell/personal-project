var wrap = $("#wrap");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 10) {
    wrap.addClass("fix-search");
  } else {
    wrap.removeClass("fix-search");
  }
  
});


















body {
   background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(dark_embroidery.png);
}
img {
   width: 960px;
   border: 5px solid teal;
}
.photos {
   text-align: center;
}
.cats {
   text-align: center;
}
.text {
   text-align: center;
   color: #FF6699;
   text-decoration: none;
}
.hr hr {
   border-color: teal;
   border: 4px solid teal;
}
.heading {
   text-align: center;
}
.container {
   text-align: center;
   width: 960px;
   margin: 0px auto;
   background-image: url(dark_embroidery.png);
   
}
nav a {
   color: teal;
}
.a {
   text-decoration: none;
   color: teal;
}
.a:hover {
   color: #FF6699;
}
nav a:hover {
   color: #FF6699;
}
td a:hover {
   color: teal;
}
nav li {
   display: inline;
}
table {
   border: 5px solid teal;
   padding: 3px;
   border-collapse: collapse;
}
td {
   text-align: center;
   color: #FF6699;
   border-bottom:3px solid teal;
   border-left: 3px solid teal;
}
.table {
   margin: 0px auto;
}
.active {
   color: #FF6699;
}
.backtotop {
   border: 4px solid teal;
   background-color: teal;
   border-radius: 30%;
   color: #FF6699;
   font-weight: 900;
   margin-top: 15px;
}
tr:hover {
      background-color: teal;
}
h1:hover {
   color: white;
}
.tablelink {
   color: #FF6699;
}
.tablelink:hover {
   color: black;
}
.natgeocaption {
   color: #FF6699;
   text-decoration: none;
}
iframe {
   border: 10px solid teal;
   width: 100%;
   height: 580px;
   text-align: center;
}
.personalvid {
   width: 70%;
   border: 10px solid teal;
   position: relative;
}
.clearfix {
   border: 10px solid teal;
   padding: 0px;
   margin: 0px 37%;
   border-radius: 30%;
   background-color: teal;
   margin-bottom: 100px;
}
nav {
   position: absolute;
   margin:0px auto;
   margin-bottom: 100px;
   background-color: #1F1F5C;
   width: 450px;
   border-radius: 30px;
   padding: 0px;
}




