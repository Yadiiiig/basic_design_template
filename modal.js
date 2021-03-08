var modal = document.getElementById("code_modal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
function openModal(widget) {
  modal.style.display = "block";
  document.getElementById('html_code').innerHTML = items[widget][0]
  document.querySelectorAll("code").forEach(function(element) {
    element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    });
    hljs.highlightAll();
  document.getElementById('css_code').innerHTML = items[widget][1]
  hljs.highlightAll();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var items = {
    "v_navbar": [
        `<ul class="v_navbar">
    <li><a href="">Home</a></li>
    <li><a href="">News</a></li>
    <li><a href="">Contact</a></li>
    <li><a href="">About</a></li>
</ul>`, 
        `.v_navbar lu {
    margin: 0;
    padding: 0;
}

.v_navbar li {
    list-style-type: none;
    font-size: 20px;
    margin-bottom: 2px;
    font-weight: bold;
}

.v_navbar a {
    text-decoration: none;
    color: #45A29E;
}

.v_navbar a:hover{
    background-color: #e3e3e4;
    padding: 2px;
}`, ""
    ], 

    "h_nav": [
        `<div class="h_nav">
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
</div>`, 
        `.h_nav {
    overflow: hidden;
    background-color: #0B0B0B;
    border: 2px solid #45A29E
}
        
.h_nav a {
    float: left;
    color: #45A29E;
    font-weight: bold;
    text-align: center;
    padding: 10px 12px;
    text-decoration: none;
    font-size: 20px;
}
        
.h_nav a:hover {
    background-color: #1F2833;
}
        
.h_nav a.active {
    background-color: #4CAF50;
    color: white;
}`,
        ""
    ],
    "forms": [
        `<div class="form_login">
<label for="username_login">
    Username
</label>
<input type="text" placeholder="Username" id="username_login">
<br>
<label for="password_login">
    Password
</label>
<input type="password" placeholder="*******" id="password_login">
<br>
<input type="submit" value="Sign in" id="submit">
</div>`,
        `.form_login {
    margin-top: 20px;
    vertical-align: top;
    background-color: #1b1918;
    /* box-shadow: 0 1px 8px 0 #45A29E; */
    padding: 15px 35px 25px 35px;
    display: inline-block;
    border-radius: 15px;
}

.form_login h3 {
    text-align: center;
    margin-bottom: 20px;
}

.form_login input, label {
    font-size: 20px;
    display:block;
    margin-bottom: 5px;
    font-family: 'Inconsolata', monospace;
}

.form_login input[type=text], input[type=password] {
    background-color: #1b1918;
    margin: auto;
    border: 0;
    padding: 5px;
    outline: none;
    color: #e3e3e4;
    border: 1px solid #45A29E
}

.form_login input[type="submit"] {
    margin: auto;
    margin-top: 10px;
    cursor: pointer;
    border: 2px solid #45A29E;
    background-color: #1b1918;
    color: #45A29E;
    outline: none;
    padding: 0.5rem 0.8rem;
    font-family: 'Inconsolata', monospace;
}

.form_login input[type="submit"]:hover {
    background-color: #45A29E;
    color: #e3e3e4;
}`,
        ""
    ],
    "form_register": [
        `<div class="form_register">
<label for="email_reg">
    Email address
</label>
<input type="text" placeholder="Email" id="email_reg">
<br>
<label for="firstname_reg">
    First name
</label>
<input type="text" placeholder="First name" id="firstname_reg">
<br>
<label for="lastname_reg">
    Last name
</label>
<input type="text" placeholder="Last name" id="lastname_reg">
<br>
<label for="username_reg">
    Username
</label>
<input type="text" placeholder="Username" id="username_reg">
<br>
<label for="password_reg">
    Password
</label>
<input type="password" placeholder="*******" id="password_reg">
<br>
<input type="submit" value="Sign in" id="submit">
</div>`,
        `.form_register {
    margin-top: 20px;
    vertical-align: top;
    background-color: #1b1918;
    /* box-shadow: 0 1px 8px 0 #45A29E; */
    padding: 15px 35px 25px 35px;
    display: inline-block;
    border-radius: 15px;
}

.form_register h3 {
    text-align: center;
    margin-bottom: 20px;
}

.form_register input, label {
    font-size: 20px;
    display:block;
    margin-bottom: 5px;
    font-family: 'Inconsolata', monospace;
}

.form_register input[type=text], input[type=password] {
    background-color: #1b1918;
    margin: auto;
    border: 0;
    padding: 5px;
    outline: none;
    color: #e3e3e4;
    border: 1px solid #45A29E
}

.form_register input[type="submit"] {
    margin: auto;
    margin-top: 10px;
    cursor: pointer;
    border: 2px solid #45A29E;
    background-color: #1b1918;
    color: #45A29E;
    outline: none;
    padding: 0.5rem 0.8rem;
    font-family: 'Inconsolata', monospace;
}

.form_register input[type="submit"]:hover {
    background-color: #45A29E;
    color: #e3e3e4;
}`,
        ""
    ]
};
