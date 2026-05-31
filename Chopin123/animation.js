function animation_trigger(btnnum,id){
    const Pages = document.querySelectorAll(".titlez");

    Pages.forEach((page) => {
        page.classList.remove("tracking-in-expand-fwd")
    });

    
        document.getElementById(id).classList.add("tracking-in-expand-fwd")
    
}

