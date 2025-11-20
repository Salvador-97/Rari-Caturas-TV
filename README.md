# Rari-Caturas-TV
Sitio web para ver diferentes series del canal Adult Swim entre otros canales.

# Descripción
La página cuenta con un carrusel en el cual se muestran las series recomendadas con la 
opción de ir a verla. 

![Series Recomendadas](/src/public/images/readme/Banner.PNG)

Tambien cuenta con una sección donde se muestran las demás series con las que cuenta la página.

![Series](/src/public/images/readme/Series.PNG)

Cada una de las series cuenta con su propia página en donde se encuentran las temporadas y capitulos disponibles. 

![Serie página](/src/public/images/readme/Serie-Banner.PNG)

Como se puede observar se tiene una sección de las temporadas y la opción de "Información" la cual muestra todo lo relevante a la serie, desde la resolución, idioma y peso de cada capitulo. Asimismo, tiene un botón para descargar la temporada seleccionada.

![Temporadas](/src/public/images/readme/Temporada.gif)
```
Rari-Caturas-TV
├─ app.js
├─ lib
│  ├─ css
│  │  ├─ bootstrap.css
│  │  └─ bootstrap.min.css
│  └─ js
│     ├─ bootstrap.js
│     └─ bootstrap.min.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   ├─ controllers
   │  ├─ controladorPrincipal.js
   │  ├─ controllerSerie.js
   │  └─ controllerSeries.js
   ├─ public
   │  ├─ images
   │  │  ├─ 2.png
   │  │  ├─ banners
   │  │  │  ├─ Aqua-Teen-Banner-2.jpg
   │  │  │  ├─ Aqua-Teen-Banner.jpg
   │  │  │  ├─ Aqua-Teen-Banner.jpg.bak
   │  │  │  ├─ Archer-Banner.jpg
   │  │  │  ├─ Axe-Cop-Banner.jpg
   │  │  │  ├─ Beavis-Butthead-Banner.jpg
   │  │  │  ├─ Black-Dynamite-Banner.jpg
   │  │  │  ├─ Daria-Banner.jpg
   │  │  │  ├─ Dilbert-Banner.jpg
   │  │  │  ├─ Drawn-Together-Banner.jpg
   │  │  │  ├─ Dream-Corp-Banner.jpg
   │  │  │  ├─ Duckman-Banner.png
   │  │  │  ├─ e4d9f083-0c26-4850-b461-ddf9c8aa1978.pdf
   │  │  │  ├─ Eric-Andre-Banner.jpg
   │  │  │  ├─ Fallout-Banner.jpg
   │  │  │  ├─ Fallout-Banner.jpg.bak
   │  │  │  ├─ Frankenhole-Banner.jpg
   │  │  │  ├─ Halo-Banner.jpg
   │  │  │  ├─ Hazbin-Logo.jpg
   │  │  │  ├─ Jhon-Wilson-Banner.jpg
   │  │  │  ├─ King-of-Hill-Banner.jpg
   │  │  │  ├─ Mr.Pickles-Banner.jpg
   │  │  │  ├─ Mythic-Quest-Banner.jpg
   │  │  │  ├─ Robot-Chicken-Banner.jpg
   │  │  │  ├─ Robot-Chicken-Banner2.jpg.bak
   │  │  │  ├─ Sealab-2021-Banner.jpg
   │  │  │  ├─ Stroker-Hooper-Banner.jpg
   │  │  │  ├─ Superjail-Banner.jpg
   │  │  │  ├─ The-Venture-Bros-Banner-Mobile.png
   │  │  │  ├─ The-Venture-Bros-Banner.png
   │  │  │  └─ Tuca-Bertie-Banner.jpg
   │  │  ├─ clapperboard-solid.png
   │  │  ├─ clapperboard-solid.svg
   │  │  ├─ covers
   │  │  │  ├─ aqua_teen
   │  │  │  │  ├─ 1
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 12.png
   │  │  │  │  │  ├─ 13.png
   │  │  │  │  │  ├─ 14.png
   │  │  │  │  │  ├─ 15.png
   │  │  │  │  │  ├─ 16.png
   │  │  │  │  │  ├─ 17.png
   │  │  │  │  │  ├─ 18.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  ├─ 2
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 12.png
   │  │  │  │  │  ├─ 13.png
   │  │  │  │  │  ├─ 14.png
   │  │  │  │  │  ├─ 15.png
   │  │  │  │  │  ├─ 16.png
   │  │  │  │  │  ├─ 17.png
   │  │  │  │  │  ├─ 18.png
   │  │  │  │  │  ├─ 19.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 20.png
   │  │  │  │  │  ├─ 21.png
   │  │  │  │  │  ├─ 22.png
   │  │  │  │  │  ├─ 23.png
   │  │  │  │  │  ├─ 24.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  ├─ 3
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 12.png
   │  │  │  │  │  ├─ 13.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  └─ 4
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 10.png
   │  │  │  │     ├─ 11.png
   │  │  │  │     ├─ 12.png
   │  │  │  │     ├─ 13.png
   │  │  │  │     ├─ 14.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     ├─ 6.png
   │  │  │  │     ├─ 7.png
   │  │  │  │     ├─ 8.png
   │  │  │  │     └─ 9.png
   │  │  │  ├─ axe_cop
   │  │  │  │  ├─ 1
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 12.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  └─ 2
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 10.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 4.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     ├─ 6.png
   │  │  │  │     ├─ 7.png
   │  │  │  │     ├─ 8.png
   │  │  │  │     └─ 9.png
   │  │  │  ├─ drawn
   │  │  │  │  ├─ 1
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  └─ 7.png
   │  │  │  │  ├─ 2
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 12.png
   │  │  │  │  │  ├─ 13.png
   │  │  │  │  │  ├─ 14.png
   │  │  │  │  │  ├─ 15.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  └─ 3
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 10.png
   │  │  │  │     ├─ 11.png
   │  │  │  │     ├─ 12.png
   │  │  │  │     ├─ 13.png
   │  │  │  │     ├─ 14.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 4.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     ├─ 6.png
   │  │  │  │     ├─ 7.png
   │  │  │  │     ├─ 8.png
   │  │  │  │     └─ 9.png
   │  │  │  ├─ dream_corp
   │  │  │  │  ├─ 1
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  └─ 6.png
   │  │  │  │  ├─ 2
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 12.png
   │  │  │  │  │  ├─ 13.png
   │  │  │  │  │  ├─ 14.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  └─ 3
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 4.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     ├─ 6.png
   │  │  │  │     ├─ 7.png
   │  │  │  │     └─ 8.png
   │  │  │  ├─ eric_andre
   │  │  │  │  ├─ 1
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  └─ 2
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 10.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 4.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     ├─ 6.png
   │  │  │  │     ├─ 7.png
   │  │  │  │     ├─ 8.png
   │  │  │  │     └─ 9.png
   │  │  │  ├─ fallout
   │  │  │  │  └─ 1
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 4.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     ├─ 6.png
   │  │  │  │     ├─ 7.png
   │  │  │  │     └─ 8.png
   │  │  │  ├─ halo
   │  │  │  │  └─ 2
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 4.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     ├─ 6.png
   │  │  │  │     ├─ 7.png
   │  │  │  │     └─ 8.png
   │  │  │  ├─ hazbin
   │  │  │  │  └─ 1
   │  │  │  │     ├─ 0.png
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 4.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     ├─ 6.png
   │  │  │  │     ├─ 7.png
   │  │  │  │     ├─ 8.png
   │  │  │  │     └─ M.png
   │  │  │  ├─ pickles
   │  │  │  │  ├─ 1
   │  │  │  │  │  ├─ 0.png
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  ├─ 2
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  ├─ 3
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  └─ 4
   │  │  │  │     └─ 1.png
   │  │  │  ├─ robot_chicken
   │  │  │  │  ├─ 1
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 12.png
   │  │  │  │  │  ├─ 13.png
   │  │  │  │  │  ├─ 14.png
   │  │  │  │  │  ├─ 15.png
   │  │  │  │  │  ├─ 16.png
   │  │  │  │  │  ├─ 17.png
   │  │  │  │  │  ├─ 18.png
   │  │  │  │  │  ├─ 19.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 20.png
   │  │  │  │  │  ├─ 21.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  ├─ 2
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 12.png
   │  │  │  │  │  ├─ 13.png
   │  │  │  │  │  ├─ 14.png
   │  │  │  │  │  ├─ 15.png
   │  │  │  │  │  ├─ 16.png
   │  │  │  │  │  ├─ 17.png
   │  │  │  │  │  ├─ 18.png
   │  │  │  │  │  ├─ 19.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 20.png
   │  │  │  │  │  ├─ 21.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  └─ 3
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 10.png
   │  │  │  │     ├─ 11.png
   │  │  │  │     ├─ 12.png
   │  │  │  │     ├─ 13.png
   │  │  │  │     ├─ 14.png
   │  │  │  │     ├─ 15.png
   │  │  │  │     ├─ 16.png
   │  │  │  │     ├─ 17.png
   │  │  │  │     ├─ 18.png
   │  │  │  │     ├─ 19.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 20.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 4.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     ├─ 6.png
   │  │  │  │     ├─ 7.png
   │  │  │  │     ├─ 8.png
   │  │  │  │     └─ 9.png
   │  │  │  ├─ sealab
   │  │  │  │  ├─ 1
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  ├─ 2
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  ├─ 3
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 12.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  ├─ 4
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 11.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  └─ 5
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 4.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     ├─ 6.png
   │  │  │  │     ├─ 7.png
   │  │  │  │     └─ 8.png
   │  │  │  ├─ superjail
   │  │  │  │  ├─ 1
   │  │  │  │  │  ├─ 0.png
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  ├─ 2
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  ├─ 3
   │  │  │  │  │  ├─ 1.png
   │  │  │  │  │  ├─ 10.png
   │  │  │  │  │  ├─ 2.png
   │  │  │  │  │  ├─ 3.png
   │  │  │  │  │  ├─ 4.png
   │  │  │  │  │  ├─ 5.png
   │  │  │  │  │  ├─ 6.png
   │  │  │  │  │  ├─ 7.png
   │  │  │  │  │  ├─ 8.png
   │  │  │  │  │  └─ 9.png
   │  │  │  │  └─ 4
   │  │  │  │     ├─ 1.png
   │  │  │  │     ├─ 2.png
   │  │  │  │     ├─ 3.png
   │  │  │  │     ├─ 4.png
   │  │  │  │     ├─ 5.png
   │  │  │  │     └─ 6.png
   │  │  │  └─ venture_bros
   │  │  │     ├─ 1
   │  │  │     │  ├─ 0.png
   │  │  │     │  ├─ 1.png
   │  │  │     │  ├─ 10.png
   │  │  │     │  ├─ 11.png
   │  │  │     │  ├─ 12.png
   │  │  │     │  ├─ 13.png
   │  │  │     │  ├─ 14.png
   │  │  │     │  ├─ 2.png
   │  │  │     │  ├─ 3.png
   │  │  │     │  ├─ 4.png
   │  │  │     │  ├─ 5.png
   │  │  │     │  ├─ 6.png
   │  │  │     │  ├─ 7.png
   │  │  │     │  ├─ 8.png
   │  │  │     │  └─ 9.png
   │  │  │     ├─ 2
   │  │  │     │  ├─ 1.png
   │  │  │     │  ├─ 10.png
   │  │  │     │  ├─ 11.png
   │  │  │     │  ├─ 12.png
   │  │  │     │  ├─ 13.png
   │  │  │     │  ├─ 2.png
   │  │  │     │  ├─ 3.png
   │  │  │     │  ├─ 4.png
   │  │  │     │  ├─ 5.png
   │  │  │     │  ├─ 6.png
   │  │  │     │  ├─ 7.png
   │  │  │     │  ├─ 8.png
   │  │  │     │  └─ 9.png
   │  │  │     ├─ 3
   │  │  │     │  ├─ 1.png
   │  │  │     │  ├─ 10.png
   │  │  │     │  ├─ 11.png
   │  │  │     │  ├─ 12.png
   │  │  │     │  ├─ 13.png
   │  │  │     │  ├─ 2.png
   │  │  │     │  ├─ 3.png
   │  │  │     │  ├─ 4.png
   │  │  │     │  ├─ 5.png
   │  │  │     │  ├─ 6.png
   │  │  │     │  ├─ 7.png
   │  │  │     │  ├─ 8.png
   │  │  │     │  └─ 9.png
   │  │  │     ├─ 4
   │  │  │     │  ├─ 1.png
   │  │  │     │  ├─ 10.png
   │  │  │     │  ├─ 11.png
   │  │  │     │  ├─ 12.png
   │  │  │     │  ├─ 13.png
   │  │  │     │  ├─ 14.png
   │  │  │     │  ├─ 15.png
   │  │  │     │  ├─ 16.png
   │  │  │     │  ├─ 2.png
   │  │  │     │  ├─ 3.png
   │  │  │     │  ├─ 4.png
   │  │  │     │  ├─ 5.png
   │  │  │     │  ├─ 6.png
   │  │  │     │  ├─ 7.png
   │  │  │     │  ├─ 8.png
   │  │  │     │  └─ 9.png
   │  │  │     └─ 7
   │  │  │        ├─ 1.png
   │  │  │        ├─ 10.png
   │  │  │        ├─ 2.png
   │  │  │        ├─ 3.png
   │  │  │        ├─ 4.png
   │  │  │        ├─ 5.png
   │  │  │        ├─ 6.png
   │  │  │        ├─ 7.png
   │  │  │        ├─ 8.png
   │  │  │        └─ 9.png
   │  │  ├─ error
   │  │  │  ├─ 404.png
   │  │  │  ├─ 404.svg
   │  │  │  ├─ archivo.png
   │  │  │  ├─ background(copiar).PNG
   │  │  │  ├─ background.PNG
   │  │  │  ├─ cerca.png
   │  │  │  ├─ editable_404.png
   │  │  │  └─ error-404.png
   │  │  ├─ Fondo.png
   │  │  ├─ logos
   │  │  │  ├─ Aqua-Teen-Logo.png
   │  │  │  ├─ Archer.png
   │  │  │  ├─ Axe-Cop-Logo.png
   │  │  │  ├─ Beavis-Butthead-Logo.png
   │  │  │  ├─ Black-Dynamite-Logo.png
   │  │  │  ├─ Daria-Logo.png
   │  │  │  ├─ Dilbert-Logo.png
   │  │  │  ├─ Drawn-Together-Logo.png
   │  │  │  ├─ Dream-Corp.png
   │  │  │  ├─ drive_logo.png
   │  │  │  ├─ Duckman-Logo.png
   │  │  │  ├─ Eric-Andre-Logo.png
   │  │  │  ├─ Fallout-Logo.png
   │  │  │  ├─ Frankenhole-Logo.png
   │  │  │  ├─ Halo-Logo.png
   │  │  │  ├─ Hazbin-Hotel-Logo.png
   │  │  │  ├─ Jhon-Wilson-Logo.png
   │  │  │  ├─ King-of-Hill-Logo.png
   │  │  │  ├─ mediafire_logo.png
   │  │  │  ├─ Mr.Pickles.png
   │  │  │  ├─ Mythic-Quest-Logo.png
   │  │  │  ├─ Robot-Chicken-Logo.png
   │  │  │  ├─ Sealab--2021-Logo.png
   │  │  │  ├─ Stroker-Hooper-Logo.png
   │  │  │  ├─ Superjail-Logo.png
   │  │  │  ├─ The_Venture_Bros_Logo.png
   │  │  │  ├─ The_Venture_Bros_logo.svg
   │  │  │  └─ Tuca-Bertie-Logo.png
   │  │  ├─ Logo_Pagina.png
   │  │  ├─ Logo_Pagina_Black.png
   │  │  ├─ Logo_Pagina_Color_2.png
   │  │  ├─ palomitas-de-maiz.png
   │  │  ├─ posters
   │  │  │  ├─ Aqua-Teen-Poster-Small.jpg
   │  │  │  ├─ Aqua-Teen-Poster.jpg
   │  │  │  ├─ Archer-Poster-Small.jpg
   │  │  │  ├─ Archer-Poster.jpg
   │  │  │  ├─ Axe-Cop-Poster-Small.jpg
   │  │  │  ├─ Axe-Cop-Poster.jpg
   │  │  │  ├─ Beavis-Butthead-Poster-Small.jpg
   │  │  │  ├─ Beavis-Butthead-Poster.jpg
   │  │  │  ├─ Black-Dynamite-Poster-Small.jpg
   │  │  │  ├─ Black-Dynamite-Poster.jpg
   │  │  │  ├─ Daria-Poster-Small.jpg
   │  │  │  ├─ Daria-Poster.jpg
   │  │  │  ├─ Dilbert-Poster-Small.jpg
   │  │  │  ├─ Dilbert-Poster.jpg
   │  │  │  ├─ Drawn-Together-Poster-Banner.jpg
   │  │  │  ├─ Drawn-Together-Poster-Small.jpg
   │  │  │  ├─ Drawn-Together-Poster.jpg
   │  │  │  ├─ Drawn.jpeg
   │  │  │  ├─ Dream-Corp-Poster-Small.jpg
   │  │  │  ├─ Dream-Corp-Poster.jpg
   │  │  │  ├─ drem.webp
   │  │  │  ├─ Duckman-Poster.jpg
   │  │  │  ├─ Eric-Andre-Show-Poster-Small.jpg
   │  │  │  ├─ Eric-Andre-Show-Poster.png
   │  │  │  ├─ Fallout-Poster-Small.jpg
   │  │  │  ├─ Fallout-Poster.png
   │  │  │  ├─ Frankenhole-Poster-Small.jpg
   │  │  │  ├─ Frankenhole-Poster.jpg
   │  │  │  ├─ Habin-Hotel-Poster-Small.jpg
   │  │  │  ├─ Habin-Hotel-Poster.png
   │  │  │  ├─ Halo-Poster-Small.jpg
   │  │  │  ├─ Halo-Poster.jpg
   │  │  │  ├─ Jhon-Wilson-Poster-Small.jpg
   │  │  │  ├─ Jhon-Wilson-Poster.jpg
   │  │  │  ├─ King-of-Hill-Poster-Small.jpg
   │  │  │  ├─ King-of-Hill-Poster.jpg
   │  │  │  ├─ Mr-Pickles-Poster-Small.jpg
   │  │  │  ├─ Mr-Pickles-Poster.jpg
   │  │  │  ├─ Mythic-Quest-Poster-2.jpg
   │  │  │  ├─ Mythic-Quest-Poster-Small.jpg
   │  │  │  ├─ Mythic-Quest-Poster.jpg
   │  │  │  ├─ Robot-Chicken-Poster-2.jpg
   │  │  │  ├─ Robot-Chicken-Poster-Small.jpg
   │  │  │  ├─ Robot-Chicken-Poster.jpg
   │  │  │  ├─ Sealab-2021-Poster-Small.jpg
   │  │  │  ├─ Sealab-2021-Poster.png
   │  │  │  ├─ Stroker-Hooper-Poster-Small.jpg
   │  │  │  ├─ Stroker-Hooper-Poster.jpg
   │  │  │  ├─ SuperJail-Poster-Small.jpg
   │  │  │  ├─ SuperJail-Poster.jpg
   │  │  │  ├─ The-Venture-Bros-Poster-Small.jpg
   │  │  │  ├─ The-Venture-Bros-Poster.jpg
   │  │  │  ├─ Tuca-Bertie-Poster-Small.jpg
   │  │  │  └─ Tuca-Bertie-Poster.jpg
   │  │  ├─ readme
   │  │  │  ├─ Banner.PNG
   │  │  │  ├─ Capitulos.PNG
   │  │  │  ├─ Serie-Banner.PNG
   │  │  │  ├─ Series.PNG
   │  │  │  ├─ Temporada.gif
   │  │  │  └─ Temporadas.PNG
   │  │  └─ television-vieja.png
   │  ├─ pages
   │  │  └─ 404.html
   │  ├─ scripts
   │  │  ├─ modal.js
   │  │  ├─ navbar.js
   │  │  └─ temporada.js
   │  └─ styles
   │     ├─ base
   │     │  ├─ reset.css
   │     │  └─ variables.css
   │     └─ layouts
   │        ├─ episodio.css
   │        ├─ error-style.css
   │        ├─ footer.css
   │        ├─ header.css
   │        ├─ home.css
   │        └─ serie.css
   ├─ routes
   │  └─ index.js
   ├─ styles
   │  ├─ base
   │  │  ├─ reset.css
   │  │  └─ variables.css
   │  └─ layouts
   │     ├─ episodio.css
   │     ├─ error-style.css
   │     ├─ footer.css
   │     ├─ header.css
   │     ├─ home.css
   │     └─ serie.css
   └─ views
      ├─ episode-page.ejs
      ├─ error.ejs
      ├─ index.ejs
      ├─ index.html
      ├─ proximamente.ejs
      ├─ templates
      │  ├─ _footer.ejs
      │  └─ _header.ejs
      └─ watch.ejs

```