class ProductBlock extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const productId = this.getAttribute('data-product-id');
      const imageSrc = this.getAttribute('image-src');
      const title = this.getAttribute('title');
      const price = this.getAttribute('price');
  
      this.innerHTML = `
        <img src="${imageSrc}">
        <div class="block__panel">
          <h3 class="block__title">${title}</h3>
          <button data-product-id="${productId}" class="btn">Add to cart - ${price}</button>
        </div>
      `;
    }
  }
  
  window.customElements.define('product-block', ProductBlock);