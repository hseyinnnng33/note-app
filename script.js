const kartEkraniCikBtn = document.querySelector(".cik-ekran")
const baslikGirInput = document.querySelector(".kart-ekle")
const metinGirInput = document.querySelector(".kart-ekle-2")
const kartEkle = document.querySelector(".kart-ekle-btn")
const gosterBaslik = document.querySelector(".baslik")
const gosterYazi = document.querySelector(".yazi")
const butonSil = document.querySelector(".kartlari-temizle")
const geriBtn = document.querySelector(".geri-kart")
const ileriBtn = document.querySelector(".ileri-kart")
const kartEkrani = document.querySelector(".kart-ekrani")
const kartEkraniEkle = document.querySelector(".kart-ekle-ekrani-btn")
const kartYarat = document.querySelector(".kartlar");

let kartlar = []


function kartEkleFunc(){
    kartEkrani.classList.add("goster");
}

function silEkranGoster(){
    kartEkrani.classList.remove("goster")
    temizleInput()
}

function temizleInput(){
    baslikGirInput.value = "";
    metinGirInput.value = "";
}

kartEkle.addEventListener("click", kartEkleFunc)
kartEkraniCikBtn.addEventListener("click", silEkranGoster)

function inputlar(){
    const metinGirInputValue = metinGirInput.value;
    const baslikGirInputValue = baslikGirInput.value;
    
    
    if(metinGirInputValue.trim() !== "" && baslikGirInputValue.trim() !== ""){    
            let baslikH2 = document.createElement("h2")
            let yaziP = document.createElement("p")
            const checkbox1 = document.createElement("input");
            checkbox1.type = "checkbox";
            let yaratDiv = document.createElement("div")
            yaratDiv.classList.add("kart")

            if (kartlar.length > 0) {
                yaratDiv.classList.add("sil")
            }
            
            baslikH2.innerHTML = baslikGirInputValue;
            yaziP.innerHTML = metinGirInputValue;
            
            yaratDiv.appendChild(baslikH2)
            yaratDiv.appendChild(yaziP)
            yaratDiv.appendChild(checkbox1)
            kartYarat.appendChild(yaratDiv)
            kartlar.push(yaratDiv)
            
        kartEkrani.classList.remove("goster")
        temizleInput()
    }
    else{
        alert("Degerler Boş Bırakılamaz")
    }
}

kartEkraniEkle.addEventListener("click", inputlar)

let index = 0;

ileriBtn.addEventListener("click", function(){
    if(index < kartlar.length -1){
        index++;
        kartlar.forEach((item, sayac)=>{
            if(sayac !== index){
                item.classList.add("sil")
            }
            else{
                item.classList.remove("sil")
            }
        })
    }
});

geriBtn.addEventListener("click", function(){
    if(index > 0){
        index--;
        kartlar.forEach((item, sayac)=>{
            if(sayac !== index){
                item.classList.add("sil")
            }
            else{
                item.classList.remove("sil")
            }
        })
    }
})

butonSil.addEventListener("click", function(){
    kartYarat.innerHTML = ""
    kartlar = []
    index = 0;
})
