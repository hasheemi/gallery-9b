let album = document.getElementById("album");
for (let i = 1; i <= 15; i++) {
  album.innerHTML += `
  <div class="item" key="${i}">
  <img src="./image/${i}image.jpg"/>
  </div>
  `;
}
let caption = [
  "upacara peringatan hut ri ke-76",
  "peringatan hari santri",
  "perpisahan kakak plp unesa senbud",
  "peringatan hari guru (1)",
  "peringatan hari guru (2)",
  "tugas kampanye dan orasi mapel ppkn",
  "panitia pilpres mapel ppkn",
  "kandidat capres cawapres (1-3-2)",
  "peserta pilpres (laki-laki)",
  "peserta pilpres (semua)",
  "suasana pilpres 9B",
  "kandidat dan tim sukses nomor urut 1",
  "kandidat dan tim sukses nomor urut 3",
  "kandidat dan tim sukses nomor urut 2",
  "para kandidat pilpres di ruangan",
];
let box = document.getElementById("box");
let item = document.querySelectorAll(".item");
item.forEach((e, i) => {
  e.onclick = () => {
    console.log("click" + i);
    box.innerHTML = `
    <div>
    <button class="close">x</button>
        <img src="./image/${i + 1}image.jpg" alt="" />
        <h3>${caption[i]}</h3>
        <a href="./image/${i + 1}image.jpg" download="${
      caption[i]
    }"><button class="download">download</button></a>
        
      </div>
    `;
    box.classList.value = "";
  };
});

// let close = document.getElementsByClassName("close")[0];
// close.onclick = () => {
//   box.classList.value = "hidden";
// };
box.onclick = (e) => {
  if (e.target.innerText == "x") {
    // console.log(box.classList);
    box.classList.value = "hidden";
  }
  //   else "";
};
