document.body.innerHTML = `
<table id="card-container">
  <tbody>
    <tr>
      <td class="card">down</td>
      <td class="card">up</td>
    </tr>
    <tr>
      <td class="card">down</td>
      <td class="card">down</td>
    </tr>
  </tbody>
</table>`;

setup()
document.getElementByClassName('.card')[0].click()

// when the card is clicked the content should switch to 'up' and the other should be 'down'
function setup() {
    // Write your code here.
    const cards = document.querySelector('.card')
    for (let i = 0; i < cards.length; i++) {
        card[i].addEventListener('click', function () {
            card[i].textContent = 'up'
        })
    }
}