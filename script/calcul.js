function insert(num){
    document.form.screen.value=document.form.screen.value+num

}

function equal() {
document.form.screen.value=eval(document.form.screen.value)
}

function erase() {
document.form.screen.value=""
}

function delete1() {
document.form.screen.value=document.form.screen.value.substring(0,document.form.screen.value.length-1);
}