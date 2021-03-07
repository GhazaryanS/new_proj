const cub = document.getElementsByClassName("cub")

let winPlayer = function win(xO) {
    //row
    if ((cub[0].innerHTML === xO && cub[1].innerHTML === xO && cub[2].innerHTML === xO) || (cub[3].innerHTML === xO && cub[4].innerHTML === xO && cub[5].innerHTML === xO) || (cub[6].innerHTML === xO && cub[7].innerHTML === xO && cub[8].innerHTML === xO)) {
        return true
    }

    //column
    if ((cub[0].innerHTML === xO && cub[3].innerHTML === xO && cub[6].innerHTML === xO) || (cub[1].innerHTML === xO && cub[4].innerHTML === xO && cub[7].innerHTML === xO) || (cub[2].innerHTML === xO && cub[5].innerHTML === xO && cub[8].innerHTML === xO)) {
        return true
    }

    //diaganal
    if ((cub[0].innerHTML === xO && cub[4].innerHTML === xO && cub[8].innerHTML === xO) || (cub[2].innerHTML === xO && cub[4].innerHTML === xO && cub[6].innerHTML === xO)) {
        return true
    }
}

let i = 0
let player = 'x'
while (i < cub.length) {
    cub[i].onclick = function myClick() {
        let xO = player
        if(this.innerHTML === '-') {
            this.innerHTML = player
            player = (player === 'x') ? 'o' : 'x'
        } else {
            alert('Duq xaxtumeq orenqner@!!!')
        }

        if (winPlayer(xO)) {
            alert (xO + ' Shnorhavor)))')
            location.reload()
        } else {
            let a = 0
            while(a < cub.length) {
                if(cub[a].innerHTML === '-') {
                    break
                } else if (cub[a].innerHTML !== '-' && a == (cub.length - 1)) {
                    alert('Voch voqi!!!!')
                    location.reload()
                }
                a ++
            }
        }
    }
    i ++
}