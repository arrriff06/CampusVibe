// frontend/js/participation.js

document.addEventListener("DOMContentLoaded", () => {
  // 🔐 Check login first
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You must log in first to participate in events!");
    window.location.href = "sign-in.html";
    return;
  }

  const form = document.getElementById("participationForm");
  if (!form) return;

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
      const response = await fetch("/api/participation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token  // <-- send token to backend
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert("Your participation has been submitted successfully!");
        form.reset();
      } else {
        alert("Error: " + (data.message || "Unable to submit participation."));
      }
    } catch (err) {
      console.error("Participation submission error:", err);
      alert("Server error: Unable to submit participation.");
    }
  });
});
