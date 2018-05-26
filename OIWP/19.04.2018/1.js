  class Counter extends HTMLElement { 
    constructor() {
      super();
      const shadow = this.attachShadow({mode: 'open'});
      this.style.cursor = 'pointer';
      this.val = this.getAttribute('val');
      const spanArrow = document.createElement('span');
      this.spanVal = document.createElement('span'); 
      
      spanArrow.appendChild(document.createTextNode('⬆︎'));
      this.spanVal.appendChild(document.createTextNode(this.val)); 
      shadow.appendChild(spanArrow);
      shadow.appendChild(this.spanVal);
      this.addEventListener('click', e => {
        this.val++;
        this.setAttribute('val', this.val);
      });
    }
      static get observedAttributes() {
        return ['val'];
      }
      attributeChangedCallback(attrName, oldVal, newVal) {
       this.spanVal.textContent = newVal;
      }
  }

  customElements.define('x-cntr', Counter);