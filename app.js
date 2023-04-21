class App {
  constructor() {
    this.$form = document.querySelector("#form")

    this.handleFormClick();
  }

  addEventListener() {
    document.body.addEventListener("click", (event) => {
      handleFormClick(event);
    });

    handleFormClick(event){
       const isFormClicked = this.$form.contains(event.target);
        if (isFormClicked) {
            // open form 
        } else {
            // close form 
        }
    }
  }
}
new App();
