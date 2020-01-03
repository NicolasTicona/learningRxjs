const input = document.getElementById('input')

const oInput = rxjs.fromEvent(input, 'keyup')

const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')

oInput.subscribe(resp => {
    box1.innerHTML = `<p>${input.value}</p>`;
    console.log(input.value)
})
oInput.subscribe({
    next(event){
        console.log('2 - ' + input.value)
    },
    error(error){
        console.log('2 - error')
    },
    complete(){
        console.log('2 - complete')
    }
})

rxjs.fromEvent(box1,'click')
    .subscribe(resp => {
        box2.style.backgroundColor = 'red'
    })


let b = rxjs.fromEvent(box2,'mouseleave')
    .subscribe(resp => {
        resp.target.style.backgroundColor = 'green';
        return resp;
    })

rxjs.fromEvent(window, 'scroll')
    .subscribe(resp => {
        let scrollY = resp.target.defaultView.scrollY;
        console.log(scrollY)

        if(scrollY > 300){
            box1.classList.add('animated')
        }else{
            box1.classList.remove('animated')
        }
    })