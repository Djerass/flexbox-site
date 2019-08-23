class ArrowUp {
  constructor() {
    this.fix = document.createElement("div");
    this.fix.id = "fix";
    document.body.appendChild(this.fix);
    this.fix.addEventListener("click", () => scroll(0, 0));
    window.addEventListener("scroll", () => {
      this.fix.style.display = window.pageYOffset > 300 ? "block" : "none";
    });
  }
}
new ArrowUp();
