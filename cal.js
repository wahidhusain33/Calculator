var buttonX = document.getElementsByClassName('button1');
let screenValue = '';
var dis = 0;
var prev = 0;
var res = 0;
var op = '+'

function cal(val) {
    dis = dis + val;
    document.getElementById('box').value = dis;
}
function operation(arith) {
    switch (op) {
        case '+':
            res = parseFloat(parseFloat(prev) + parseFloat(dis));
            document.getElementById('box').value = res;
            break;
        case '-':
            res = parseFloat(parseFloat(prev) - parseFloat(dis));
            document.getElementById('box').value = res;
            break;
        case '*':
            res = parseFloat(parseFloat(prev) * parseFloat(dis));
            document.getElementById('box').value = res;
            break;
        case '/':
            res = parseFloat(parseFloat(prev) / parseFloat(dis));
            document.getElementById('box').value = res;
            break;
        case '=':
            document.getElementById('box').value = res;
            break;
    }
    prev = res;
    dis = 0;
    init = arith;

}
function clearIt(){
    res=0;
    dis=0;
    prev=0;
    init='+';
   document.getElementById('box').value=res;
}



