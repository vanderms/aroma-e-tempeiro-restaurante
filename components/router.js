class Router{
  constructor(){
    this.target = 0; 
   
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link =>{
      if(link.href.search('#home') != -1){
        link.addEventListener('click', (e)=>{
          e.preventDefault();
          this.scrollToHome();
        });
      }
      else if(link.href.search('#menu') != -1){
        link.addEventListener('click', (e)=>{
          e.preventDefault();
          this.scrollToMenu();
        });
      }
      else if(link.href.search('#reserva') != -1){
        link.addEventListener('click', (e)=>{
          e.preventDefault();
          this.scrollToReserva();
        });
      }
    });
  }

  static run(){
    new Router();
  }

  scrollToHome(){
    this.target = 0;    
    this.scroll();
  }

  scrollToMenu(){
    const menu = document.getElementById('menu');
    this.target = menu.offsetTop;    
    this.scroll();
  }

  scrollToReserva(){
    const reserva = document.getElementById('reserva');
    this.target = reserva.offsetTop;   
    this.scroll();
  }

  scroll(){     
      const step = 100;
      if(window.scrollY > this.target + step){
        window.scrollTo(0, window.scrollY - (Math.random() * step));
        window.requestAnimationFrame(()=>this.scroll());
      }
      else if(window.scrollY < this.target - step){
        window.scrollTo(0, window.scrollY + (Math.random() * step));
        window.requestAnimationFrame(()=>this.scroll());
      }
      else{
        window.scrollTo(0, this.target);        
      }
  }
}
Router.run();