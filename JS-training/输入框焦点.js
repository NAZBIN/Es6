window.onload = function(){
    let onInput = document.getElementById('input');
    let value = onInput.value;
    onInput.focus = () => {
        value = "";
    }
    onInput.onblur = () => {
        if(!value){
            this.value = value;
        }
    }
}