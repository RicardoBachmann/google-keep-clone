class App {
  constructor() {
    this.$form = document.querySelector('#form');
    this.$noteTitle = document.querySelector('#note-title');
    this.$fromButtons = document.querySelector('#form-buttons');

    this.addEventListener();
  }

  addEventListener() {
    document.body.addEventListener('click', event => {
      this.handleFormClick(event);
    });

  }

  handleFormClick(event) {
    const isFormClicked = this.$form.contains(event.target); 
    
    if (isFormClicked) {
      this.openForm();
    } else {
        // close form
    };
  }
    openForm() {
        this.$form.classList.add('form-open');
        this.$noteTitle.style.display = 'block';
        this.$formButtons.style.display = 'block';
    }
  }

new App();
