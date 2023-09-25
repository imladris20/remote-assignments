document.getElementById('submitNumber').addEventListener('click', () => {
  const targetnumber = document.getElementById('targetnumber').value;
  fetch('/getData?number=' + targetnumber)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          const resultElement = document.getElementById('result');
          resultElement.innerHTML = `
            <h2>${data.status}</h2>
            <h2>${data.sum? `Result is: ${data.sum}`: "" }</h2>
            <p>${data.countingDescription}</p>
          `;
      })
      .catch(error => {
          console.error('Fetching calculating error:', error);
      });
});