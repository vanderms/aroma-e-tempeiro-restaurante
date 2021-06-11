class Navbar {
  constructor(){
    this.root = document.querySelector('.navbar');
    this.menuBtn = this.root.querySelector('.menu-button');
    this.closeBtn = this.root.querySelector('.close-button');
    this.bar = this.root.querySelector('.background-bar'); 
    this.overlay = document.createElement('div');
    this.overlay.className = 'navbar-overlay hidden';
    this.root.parentNode.insertBefore(this.overlay, this.root);
    this.init = true;
    window.addEventListener('scroll', ()=>{ this.backgroundBarHandler(); });
    this.backgroundBarHandler();
    this.sidebarHandler();
    this.init = false;
  }

  static run(){
    new Navbar();
  }

  backgroundBarHandler(){  

    if(window.scrollY > 45){
      this.bar.classList.add('active');
      this.bar.classList.remove('inactive');
    } 
    else {
      this.bar.classList.add('inactive');
      this.bar.classList.remove('active');    
    }

    if(this.init){
      window.setTimeout(()=>{
        this.bar.classList.add('background-bar-transition');
      }, 1000);      
    }
  }

  sidebarHandler(){   
    this.menuBtn.addEventListener('click', ()=>this.openSideBar());
    this.closeBtn.addEventListener('click', ()=>this.closeSideBar());
    this.overlay.addEventListener('click', ()=>this.closeSideBar());
    const links = this.root.querySelectorAll('a');
    links.forEach(link => link.addEventListener('click', ()=>this.closeSideBar()));
  }

  openSideBar(){
    this.root.classList.remove('inactive');
    this.root.classList.add('active');
    this.menuBtn.classList.add('hidden');   
    this.overlay.classList.remove('hidden');
  }

  closeSideBar(){
    this.root.classList.remove('active');
    this.root.classList.add('inactive');
    this.menuBtn.classList.remove('hidden');    
    this.overlay.classList.add('hidden');
  }
}

Navbar.run();
