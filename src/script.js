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
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
      errorMessage.classList.remove("hidden");
    } else {
      errorMessage.classList.add("hidden");
    }
  }