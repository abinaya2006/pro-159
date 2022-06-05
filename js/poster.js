AFRAME.registerComponent("comic-container-poster",{
    init:function(){
        this.posterContainer=this.el
        this.comicContainer()
    },

    comicContainer:function(){
        const posterRef=[
            {
                id:"captain-aero",
                title:"Captain Aero",
                url:"./assests/posters/captain-aero-poster.jpg"
            },
            {
                id:"outer-space",
                title:"Outer Space",
                url:"./assests/posters/outer-space-poster.jpg"
            },
            {
                id:"spiderman",
                title:"Spiderman",
                url:"./assests/posters/spiderman-poster.jpg"
            },
            {
                id:"superman",
                title:"Superman",
                url:"./assests/posters/superman-poster.jpg"
            }
        ]

        let preXpos=-60

        for (var item of posterRef){
            const posX=preXpos+25
            const posY=10
            const posZ=-40
            const position = { x: posX, y: posY, z: posZ };
            preXpos=posX  

            const borderEl = this.createBorder(position, item.id);

            
            const poster = this.createPoster(item);
            borderEl.appendChild(poster);

            this.posterContainer.appendChild(borderEl); 
        }
    },

    createBorder:function(pos,id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:22,
            height:40
        })
        entityEl.setAttribute("position", pos);
        entityEl.setAttribute("material", { color: "#fff" });
        entityEl.setAttribute("cursor-listener",{})

        return entityEl
    },

    createPoster:function(item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:20,
            height:28
        })
        entityEl.setAttribute("position",{x:0,y:5,z:0.1})
        entityEl.setAttribute("material",{
            src:item.url
        })
        return entityEl
    }

})