<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet">
  <header>
    <div class="header">
      <div class="logo">BLOG IA</div>
      <div class="header2">
        <ul class="navigation">
          <a><li>Blog</li></a>
          <a><li>Tag</li></a>
          <a><li>About</li></a>
        </ul>
      </div>
    </div>
  </header>
  <body>

  </body>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
    
    <!-- <div class="header">
      <div class="header">
        <div class="logo">BLOG IA</div>
        <div class="header2">
          <ul class="navigation">
            <a><li>Blog</li></a>
            <a><li>Tag</li></a>
            <a><li>About</li></a>
          </ul>
        </div>
      </div>
    </div> -->
    
    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div class="fakeimg" style="height:200px;">Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
        <div class="card">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div class="fakeimg" style="height:200px;">Image</div>
        </div>
      </div>
      <div class="rightcolumn">
        <div class="card">
          <h2>About Me</h2>
          <div class="fakeimg" style="height:100px;">Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </div>
        <div class="card">
          <h3>Popular Post</h3>
          <div class="fakeimg">Image</div><br>
          <div class="fakeimg">Image</div><br>
          <div class="fakeimg">Image</div>
        </div>
        <div class="card">
          <h3>Follow Me</h3>
          <p>Some text..</p>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <h2>Footer</h2>
    </div>
    
    </body>
    <!-- </html> -->
</template>
<style>
    * {
      box-sizing: border-box;
    }
    
    /* Add a gray background color with some padding */
    body {
      font-family: Arial;
      padding: 20px;
      background: #f1f1f1;
    }
    
    /* Header/Blog Title */
    .header {
      padding: 30px;
      font-size: 40px;
      text-align: center;
      background: white;
    }
    
    /* Create two unequal columns that floats next to each other */
    /* Left column */
    .leftcolumn {   
      float: left;
      width: 75%;
    }
    
    /* Right column */
    .rightcolumn {
      float: left;
      width: 25%;
      padding-left: 20px;
    }
    
    /* Fake image */
    .fakeimg {
      background-color: #aaa;
      width: 100%;
      padding: 20px;
    }
    
    /* Add a card effect for articles */
    .card {
       background-color: white;
       padding: 20px;
       margin-top: 20px;
    }
    
    /* Clear floats after the columns */
    .row:after {
      content: "";
      display: table;
      clear: both;
    }
    
    /* Footer */
    .footer {
      padding: 20px;
      text-align: center;
      background: #ddd;
      margin-top: 20px;
    }

    .header {
      width: 100%;
      height: 90px;
      display: block;
      background-color: white;
    }
  
    .header2 {
      width: 1000px;
      height: 100%;
      display: block;
      margin: 0 auto;
    }
    .logo {
      /*font-family: 'Acme', sans-serif;*/
      font-family: 'Acme';
      font-size: 50px;
      padding-top: 10px;
      /*font-family: "Russo One", sans-serif;*/
    }
    .navigation {
      float: right;
      height: 100%;
    }
  
    .navigation a{
      /*height: 100%;*/
      font-size: 40px;
      display: table;
      float: left;
      padding: 0px 20px;
    }
    
    /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 800px) {
      .leftcolumn, .rightcolumn {   
        width: 100%;
        padding: 0;
      }
    }
    </style>
<!-- <style>
  .header {
    width: 100%;
    height: 90px;
    display: block;
    background-color: white;
  }

  .header2 {
    width: 1000px;
    height: 100%;
    display: block;
    margin: 0 auto;
  }
  .logo {
    /*font-family: 'Acme', sans-serif;*/
    font-family: 'Acme';
    font-size: 50px;
    padding-top: 10px;
    /*font-family: "Russo One", sans-serif;*/
  }
  .navigation {
    float: right;
    height: 100%;
  }

  .navigation a{
    /*height: 100%;*/
    font-size: 40px;
    display: table;
    float: left;
    padding: 0px 20px;
  }
</style> -->
<script>
export default {
  name: "Header",
  methods: {},
  data() {
    return {};
  },
};
</script>
