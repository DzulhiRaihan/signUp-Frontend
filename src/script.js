function previewImage(event) {
    const input = event.target;
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById("preview-image").src = e.target.result;
        document.getElementById("preview-image").classList.remove("hidden");
        document.getElementById("upload-text").classList.add("hidden");
        document.getElementById("delete-photo").classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    }
  }

  function removeImage() {
    document.getElementById("upload-photo").value = "";
    document.getElementById("preview-image").src = "";
    document.getElementById("preview-image").classList.add("hidden");
    document.getElementById("upload-text").classList.remove("hidden");
    document.getElementById("delete-photo").classList.add("hidden");
  }

  function validatePasswords() {
  
    document.getElementById("password-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah refresh form

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const message = document.getElementById("message");

    if (password === "" || confirmPassword === "") {
      message.textContent = "Password fields cannot be empty!";
      message.className = "text-red-500 text-sm mt-1"; // Warna merah untuk error
    } else if (password !== confirmPassword) {
      message.textContent = "Passwords do not match!";
      message.className = "text-red-500 text-sm mt-1"; // Warna merah untuk error
    } else {
      message.textContent = "Passwords match! ✅";
      message.className = "text-green-500 text-sm mt-1"; // Warna hijau untuk sukses
    }
  });
  }