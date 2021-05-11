document.addEventListener("DOMContentLoaded",()=>{
    console.log(200);
    let date, pub, article_section, stock_article, btn_article
        date = ({
            myDate : new Date().getFullYear(),
        })
        btn_article =document.querySelector(".btn-ajouter")
        console.log(typeof date)
        publication = [
            {
                titre: "Mantis",
                date: `04-05-${date.myDate}`,
                msg: "Mantis, née au Viêt Nam, est la fille d’une paysanne et de l’allemand Gustav Brandt (la Balance du Cartel du Zodiaque). Elle est élevée au temple de Pama, une secte de Kree qui pensait qu’elle deviendrait la Madonne Céleste et engendrerait avec le plus vieux Cotati, le Messie Céleste, l’être le plus important de l’univers. Elle y apprend les arts martiaux puis subit un lavage de cerveau et finit par être renvoyée vers la civilisation, où elle échoue comme prostituée puis serveuse dans un bar. Elle rencontre le Swordsman et les deux deviennent par la suite membres des Vengeurs.",
                image: "./assets/mantis-desktop-206691.jpg",
                emoji: "&#129439;"   
            },
            {
                titre: "Gamora",
                date: `01-05-${date.myDate}`,
                msg: "Gamora est une super-héroïne extraterrestre appartenant à l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste et dessinateur Jim Starlin, le personnage de fiction apparaît pour la première fois dans le comic book Strange Tales #180 de 1975. Gamora a principalement des aventures cosmiques et voyage dans tout l'univers. Elle est connue pour être la fille adoptive de Thanos et la femme la plus dangereuse de l'univers. Elle a eu des aventures amoureuses avec les super-héros Adam Warlock et Nova / Richard Rider. Dans l'Univers cinématographique Marvel, à partir du film Les Gardiens de la Galaxie (2014), Gamora est interprétée par Zoe Saldana.",
                image: "./assets/gamora-desktop-206689.jpg",
                emoji: "&#127776;"   
            },
            {
                titre: "Rocket Raccoon",
                date: `02-05-${date.myDate}`,
                msg: "Rocket Raccoon est à l'origine le « guardian du quadrant de Keystone » : une aire de l'espace scellée du reste de la galaxie par le Mur Galacian. Rocket en est le range et le capitaine d'un vaisseau appelé le Rack 'n' Ruin. Lui et son premier matelot Lem Orse ('Wal Rus'), un morse parlant, viennent de la planète du demi-monde. Celle-ci est une colonie abandonnée où des malades mentaux nommés les sinoques ont été laissés aux soins d'animaux parlants et de robots chargés de les assister. Tous vénèrent un livre nommée La Bible de Gidéon qu'ils n'arrivent pas à lire. Rocket y croise Hulk qui se retrouve sur sa planète par erreur. Toutefois, une guerre entre les deux fabricants de jouets, Judson Jakes et Lord Dyvyne, détruit l'équilibre dans le demi-monde. A l'occasion de ces événements le Rack 'n' Ruin y est détruit et les secrets de la Bible de Gidéon y sont révélés. Les sinoques finissent par redevenir mentalement sain, les deux fabricants sont tués et Rocket finit par partir voyager dans l'espace avec ses compagnons. Un peu plus tard, Rocket se retrouve captif du monde-laboratoire de l'Étranger, duquel il parvient à s'enfuir.",
                image: "./assets/media.jpg",
                emoji: "&#129437;"   
            }

        ]
        article_section = document.querySelector(".article_invi");
        stock_article = "";
        for(data of publication){
            stock_article += `
                            <figure>
                                <img src="${data.image}" alt="image">
                                <figcaption>
                                    <h2>${data.titre} ${data.emoji}</h2>
                                    <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                    <p>${data.msg}<span aria-hidden="true"></span></p>
                                </figcaption>
                            </figure>`
            }
     
        btn_article.addEventListener("click",()=>{
            article_section.innerHTML = stock_article;
            article_section.classList.toggle("article_affiche");
            btn_article.classList.toggle("btn-enlever");
        })




})