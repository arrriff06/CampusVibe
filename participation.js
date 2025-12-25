document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You must log in first to participate!");
    window.location.href = "sign-in.html";
    return;
  }

  const form = document.getElementById("participationForm");
  if (!form) return;

  const BACKEND_URL = "http://localhost:5000"; // adjust if your backend runs elsewhere

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      eventId: form.eventId.value,
      name: form.name.value,
      email: form.email.value,
      studentCode: form.studentCode.value,
      phone: form.phone.value,
      remarks: form.remarks.value
    };

    try {
      const response = await fetch(`${BACKEND_URL}/api/participation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert("Your participation has been submitted successfully!");
        form.reset();
      } 
    } catch (err) {
      console.error("Participation submission error:", err);
      alert("Server error: Unable to submit participation.");
    }
  });
});
