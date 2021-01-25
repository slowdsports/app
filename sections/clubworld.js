let ulsan = `
<figure class="figure">
<img class="figure img-fluid competition ulsan" width="48" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
<figcaption style="margin-bottom: -10%; margin-top: 8%; margin-right: 5px;" class="figure-caption">
Ulsan
</figcaption>
</figure>
`;
let duhail = `
<figure class="figure">
<img class="figure img-fluid competition duhail" width="48" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
<figcaption style="margin-bottom: -10%; margin-top: 8%; margin-right: 5px;" class="figure-caption">
Duhail
</figcaption>
</figure>
`;
let ahly = `
<figure class="figure">
<img class="figure img-fluid competition ahly" width="48" src="https://i.ibb.co/w0qg9JF/trans.png" alt="">
<figcaption style="margin-bottom: -10%; margin-top: 8%; margin-right: 5px;" class="figure-caption">
Ahly
</figcaption>
</figure>
`;

for (const ele of document.getElementsByClassName("club-ulsan")){ele.innerHTML=(ulsan)};
for (const ele of document.getElementsByClassName("club-duhail")){ele.innerHTML=(duhail)};
for (const ele of document.getElementsByClassName("club-ahly")){ele.innerHTML=(ahly)};
