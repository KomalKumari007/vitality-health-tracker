const btn = document.getElementById("checkBtn");

btn.addEventListener("click", calculateHealth);

function calculateHealth() {
    console.log("Function is running");
  let sleep = Number(document.getElementById("sleep").value);
  let water = Number(document.getElementById("water").value);
  let stress = Number(document.getElementById("stress").value);
  let canvas = document.getElementById("healthChart");

  // 🔒 Validation
  if (isNaN(sleep) || isNaN(water) || isNaN(stress)) {
    alert("Please enter all values correctly!");
    return;
  }

  if (sleep < 0 || sleep > 12 || water < 0 || water > 5 || stress < 1 || stress > 10) {
    alert("Enter values within valid range!");
    return;
  }

  // ⚙️ Scoring
  let score = 0;
  let suggestions = [];

  if (sleep >= 7) score += 40;
  else suggestions.push("Increase your sleep to at least 7 hours.");

  if (water >= 2) score += 30;
  else suggestions.push("Drink at least 2 litres of water.");

  if (stress <= 5) score += 30;
  else suggestions.push("Try reducing stress.");

  // 🧠 Message
  let message = "";

  if (score >= 80) {
    message = "Great job! You're maintaining a healthy lifestyle 👍";
  } else if (score >= 50) {
    message = "You're doing okay, but there’s room for improvement.";
  } else {
    message = "Your health habits need attention ⚠️";
  }

  if (suggestions.length > 0) {
    message += "\n\nSuggestions:\n- " + suggestions.join("\n- ");
  }

  // 🎯 UI Update
  document.getElementById("score").innerText = "Health Score: " + score;
  document.getElementById("suggestion").innerText = message;

  // 💾 Save data
  localStorage.setItem("sleep", sleep);
  localStorage.setItem("water", water);
  localStorage.setItem("stress", stress);

  // ⏳ UX
  btn.innerText = "Updated!";
  setTimeout(() => {
    btn.innerText = "Check Health";
  }, 1000);

  // 📊 Chart Logic
  let ctx = document.getElementById("healthChart").getContext("2d");

  if (window.healthChart && typeof window.healthChart.destroy === "function") {
    window.healthChart.destroy();
  }

  window.healthChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Sleep", "Water", "Stress"],
      datasets: [{
        label: "Health Metrics",
        data: [sleep, water, stress],
        backgroundColor: [
    "rgba(255, 99, 132, 0.6)",   // Sleep
    "rgba(54, 162, 235, 0.6)",   // Water
    "rgba(255, 206, 86, 0.6)"    // Stress
  ],

  borderColor: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)"
  ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
          ticks: {
            color: "black"
          }
        }
      }
    }
  });
}

// 🔄 Load saved data
window.onload = function () {
  document.getElementById("sleep").value = localStorage.getItem("sleep") || "";
  document.getElementById("water").value = localStorage.getItem("water") || "";
  document.getElementById("stress").value = localStorage.getItem("stress") || "";
};