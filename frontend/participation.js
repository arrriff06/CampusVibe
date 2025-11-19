// frontend/js/participation.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("participationForm");

  if (!form) return; // Exit if form doesn't exist on the page

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

    // Basic front-end validation
    if (!formData.eventId || !formData.name || !formData.email || !formData.studentCode) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/participation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert("Your participation has been submitted successfully!");
        form.reset(); // Clear form after success
      } else {
        alert("Error: " + (data.message || "Unable to submit participation."));
      }
    } catch (err) {
      console.error("Participation submission error:", err);
      alert("Server error: Unable to submit participation.");
    }
  });
});
