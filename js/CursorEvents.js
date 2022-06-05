AFRAME.registerComponent("cursor-listener",{

    schema:{
        selectedItemId:{default:"",type:"string"}
        },

    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvents()
    },

    update: function () {
        const fadeBackgroundEl = document.querySelector("#fadeBackground");
    
        
        c = fadeBackgroundEl.children;
        if (c.length > 0) {
          var i;
          for (i = 0; i <= c.length; i++) {
            fadeBackgroundEl.removeChild(c[i]);
          }
        } else {
          this.handleMouseClickEvents();
        }
      },


    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            const id=this.el.getAttribute("id")
            const postersId=["captain-aero","outer-space","spiderman","superman"]

            if(postersId.includes(id)){
                const comicContainer=document.querySelector("#posterContainer")
                comicContainer.setAttribute("cursor-listener",{
                    selectedItemId:id
                })
                this.el.setAttribute("material",{
                    color:"blue",
                })
            }
        })
    },

    handleMouseLeaveEvents: function () {
        // Mouse Leave Events
        this.el.addEventListener("mouseleave", () => {
          const { selectedItemId } = this.data;
          if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`);
            const id = el.getAttribute("id");
            if (id == selectedItemId) {
              el.setAttribute("material", { color: "#fff" });
            }
          }
        });
      },

    handleMouseClickEvents:function(){
        this.el.addEventListener("click",()=>{
            const {selectedItemId}=this.data;
            
            const fadeBackgroundEl=document.querySelector("#fadeBackground")
            const titleEl = document.querySelector("#app-title");
            const cursorEl = document.querySelector("#camera-cursor");

            //display fadebg
            if (selectedItemId) {
                fadeBackgroundEl.setAttribute("visible", true);
                fadeBackgroundEl.setAttribute("info-banner", {
                  itemId: selectedItemId,
                });
                titleEl.setAttribute("visible", false);
                cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
                cursorEl.setAttribute("geometry", {
                  radiusInner: 0.027,
                  radiusOuter: 0.04,
                })}
            
            else {
                
                fadeBackgroundEl.setAttribute("visible", false);
                titleEl.setAttribute("visible", true);
                cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
                cursorEl.setAttribute("geometry", {
                    radiusInner: 0.08,
                    radiusOuter: 0.12,
                });
            }
        })
    }
})