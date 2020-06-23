const express = require('express');
const app = express()

app.get('/', (req, res) =>{
    res.send('eu sunt ancuta')
})

let bani = 12003;

app.get('/secret', (req, res) =>{
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    table, th, td {
      border: 1px solid black;
    }
    </style>
    </head>
    <body>
    
    <h1>The table element</h1>
    
    <table>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$${bani}</td>
      </tr>
      <tr>
        <td>February</td>
        <td>$80</td>
      </tr>
    </table>
    
    </body>
    </html>
    `)
})

function eratostene(n){
    let accessed = {}; // accessed[2] = undefined
    let mystr = "";
    for ( let i = 2; i <= n; i++ ){
        if ( accessed[i] === undefined ){
            mystr += i + " ";
            for ( let j = i; j <= n; j+= i ){
                accessed[j] = "x";
            }
        }
    }
    return mystr;
}

app.get('/watch', (req, res) =>{
    console.log(req.query.videoid);
    let videoid = req.query.videoid
    res.send('Displaying an youtube video ' + videoid)
})

app.get('/primes', (req,res) => {
    n = req.query.n;
    n = parseInt(n,10);
    mystr = eratostene(n);
    res.send(mystr);
})

// localhost/add?a=100&b=50
// => 150

app.get('/add', (req,res) => {
  a = parseInt(req.query.a,10);
  b = parseInt(req.query.b,10);
  res.send(a+b + '');
});

// localhost/weirdtask?paramname=parma&parma=5
// => 25

// localhost/weirdtask?paramname=hello&hello=3
// => 9

// localhost/weirdtask?paramname=jelly&jelly=7
// => 49
app.get('/weirdtask', (req,res)=>{
  paramname = req.query.paramname; // parmname = "parma" / "hello" / "jelly"
  variable = parseInt(req.query[paramname],10);
  res.send(variable*variable + '');
})


app.listen(80, () => {console.log("real server booted")})