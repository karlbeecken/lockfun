const key = "102"

function unlock () {
  const f1 = document.getElementById('f1').value
  const f2 = document.getElementById('f2').value
  const f3 = document.getElementById('f3').value

  const input = f1.toString() + f2.toString() + f3.toString()

  if (input === key) {
    document.getElementById('lock').classList.remove('fa-lock')
    document.getElementById('lock').classList.add('fa-lock-open')
    document.getElementById('lock').style.color = '#28a745'

    document.getElementById('status').innerText = 'Richtig!'

    const audio = new Audio('assets/unlock.mp3');
    audio.play();
  } else {
    document.getElementById('lock').classList.remove('fa-lock-open')
    document.getElementById('lock').classList.add('fa-lock')
    document.getElementById('lock').style.color = '#dc3545'

    document.getElementById('status').innerText = 'Falsch!'

    const audio = new Audio('assets/buzzer.mp3');
    audio.play();

  }

}
