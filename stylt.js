
        window.onscroll = function() { stickyFunc() }

        let header = document.querySelector('header');
        let sticky = header.offsetTop;

        function stickyFunc(){
            if(window.pageXOffset > sticky) {
                header.classList.add('sticky');
            } 
            else {
                header.classList.remove('sticky');
            }
        }
 