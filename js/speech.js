function openModal(name, position, speech) {
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-position').textContent = position;
    document.getElementById('modal-speech').textContent = speech;
    toggleModal();
  }

  function toggleModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
  }