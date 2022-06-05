AFRAME.registerComponent("info-banner",{
    schema:{
        itemId:{default:"",type:"string"}

    },

    update:function(){
        this.createBanner()
    },

    createBanner:function(){
        postersInfo={
            superman:{
                banner_url:"./assests/posters/superman-banner.jpg",
                title:"Superman",
                released_year:"1983",
                description:"Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938). Superman has been adapted to a number of other media which includes radio serials, novels, movies, television shows and theatre.",


            },

            spiderman:{
                banner_url:"./assests/posters/spiderman-banner.png",
                title:"Spiderman",
                released_year:"1962",
                description:"Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko",

            },

            "captain-aero":{
                banner_url:"./assests/posters/captain-aero-banner.jpg",
                title:"Captain Aero",
                released_year:"1942",
                description:"Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942. Issue was published in December 1941, and it ran through issue (August 1946)."

            },

            "outer-space":{
                banner_url:"./assests/posters/outer-space-banner.jpg",
                title:"Outer Space",
                released_year:"1952",
                description:"This is the most vital subject of our times! Every American Man... and Woman... Child... owes it to his country and himself, to read this issue!!"

            }
        }

        const { itemId } = this.data;

        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `${itemId}-banner`);

        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.9,
          height: 1,
        });

        entityEl.setAttribute("material", { color: "#000" });
        entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

        const item = postersInfo[itemId];

        const imageEl = this.createImageEl(item);
        const titleEl = this.createTitleEl(item);
        const descriptionEl = this.createDescriptionEl(item);

        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);

        fadeBackgroundEl.appendChild(entityEl);
        },

    


    createImageEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.85,
          height: 0.4,
        });
        entityEl.setAttribute("material", {src:item.banner_url});
        entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
        return entityEl;
      },
      createTitleEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "dejavu",
          width: 1.2,
          height: 2,
          color: "#fff",
          value: `${item.title} (${item.released_year})`,
        });
        entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
        return entityEl;
      },
      createDescriptionEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 0.75,
          height: 2,
          color: "#fff",
          wrapCount: "40",
          value: item.description,
        });
        entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
        return entityEl;
      },
})