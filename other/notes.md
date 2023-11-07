# Notes

## GitHub
- GitHub is a very useful tool. The cli and the ui are very helpful, I will try to learn them and not want to use WebStorm ;)

## AWS
- EC2 instances are small bite-sized allocations of computer space where you can run web applications.
- To access my EC2: ssh -i [path to key] ubuntu@[public dns]
- Elastic IP: 3.221.30.186
- Route 53 is AWS's DNS management service. You can purchase a domain name and then a DNS record (A to IPs and CNAME to other domains) to point to your the IP of your EC2 instance.

## Caddy
- Caddy is a web server that can be used to serve static files and reverse proxy to other services.
- It automates the web certificate process with Let's Encrypt.
- You should use it for all your web applications.

## CSS
- CSS is very important. Things like flexbox and grid will be really cool in my application. I need to learn it better and use them for my log pages and friend pages. 


In the following code, what does the link element do?

In the following code, what does a div tag do?

In the following code, what is the difference between the #title and .grid selector?

In the following code, what is the difference between padding and margin?
![box model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

Given this HTML and this CSS how will the images be displayed using flex?
![css flex](https://marina-ferreira.github.io/img/tutorials/css/flexbox/digest.png)

What does the following padding CSS do?

What does the following code using arrow syntax function declaration do?

What does the following code using map with an array output?
![array functions](https://miro.medium.com/v2/resize:fit:786/format:webp/1*_OEuDzX-ZGmvRB1eYUok2Q.png)

What does the following code output using getElementByID and addEventListener?

What does the following line of Javascript do using a # selector?

Which of the following are true? (mark all that are true about the DOM)

By default, the HTML span element has a default CSS display property value of:
Span elements are inline elements, and by default, they do not have a width or height.

How would you use CSS to change all the div elements to have a background color of red?
div {
    background-color: red;
}

How would you display an image with a hyperlink in HTML?
<img src>

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Content, padding, border, margin

Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

What will the following code output when executed using a for loop and console.log?


How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
#byu {
    color: green;
}

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
p, ol, ul, h2, h1, h3

How do you declare the document type to be html?
!DOCTYPE html

What is valid javascript syntax for if, else, for, while, switch statements?
if(){

} else if(){

} else {

}

for(){

}

while(){

}

What is the correct syntax for creating a javascript object?
The correct syntax for creating a javascript array is: 
object = {
    "name": "John",
    "age": 30,
    "cars": [
        "Ford",
        "BMW",
        "Fiat"
    ]
}

Is is possible to add new properties to javascript objects?
Yes

If you want to include JavaScript on an HTML page, which tag do you use?
script

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?


Which of the following correctly describes JSON?
JSON: {“name”: “John”, “age”: 30, “car”: null}

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
chmod: change permissions
pwd: print working directory
cd: change directory
ls: list files
vim: edit files
nano: edit files
mkdir: make directory
mv: move files
rm: remove files
man: manual
ssh: secure shell
ps: process status
wget: web get
sudo: super user do
do: 

Which of the following console command creates a remote shell session?
ssh -i [path to key] ubuntu@[public dns] ???

Which of the following is true when the -la parameter is specified for the ls console command?
ls -la: list all files, even hidden ones

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a 
root domain?
banana: subdomain
fruit: subdomain
bozo: root domain
click: top level domain

Is a web certificate is necessary to use HTTPS.
True

Can a DNS A record can point to an IP address or another A record.
A DNS A record can point to an IP address or another A record.

Port 443, 80, 22 is reserved for which protocol?
HTTPS, HTTP, SSH

What will the following code using Promises output when executed?
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 1000);
});

promise.then((value) => {
    console.log(value); // First
})
.catch((err) => {
    console.log(err); // Second (Maybe)
})
.finally(() => {
    console.log('done'); // Last
});