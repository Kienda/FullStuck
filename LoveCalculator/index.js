const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");

function getNames() {
  const first = firstName.value;
  const second = secondName.value;
  const loveScore = Math.floor(Math.random() * 100) + 1;
  if (loveScore > 70) {
    alert(
      "Your love " +
      first +
      " and " +
      second +
      " is: " +
      loveScore +
      "% it is perfect"
    );
  } else if (loveScore > 30 && loveScore <= 70) {
    alert("Your love " + first + " and " + second + " is: " + loveScore + "%");
  } else {
    alert(
      "Your love " +
      first +
      " and " +
      second +
      " is: " +
      loveScore +
      "% you go together like oil and wate. "
    );
  }
}
