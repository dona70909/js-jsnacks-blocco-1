/* 
* Ogni nome e cognome devono avere la prima lettera maiuscola
* mini-bonus :  possiamo anche avere doppi nomi casuali
*
*/ 


let nomi = ["reckless","rectangular","ready","real","realistic","reasonable","red","reflecting","regal","regular","reliable","relieved","remarkable","remorseful","remote","repentant","required","respectful","responsible","repulsive","revolving","rewarding","rich","rigid","right","ringed","ripe","roasted","robust","rosy","rotating","rotten","rough","round","rowdy","royal","rubbery","spectavid","voluminous","wan","warlike","warm","warmhearted","warped","wary","wasteful","watchful","waterlogged","watery","wavy","wealthy","weak","weary","webbed","wee","weekly","weepy","weighty","weird","welcome","well-documented","well-groomed","well-informed","well-lit","well-made","well-off","well-to-do","well-worn","wet","which","whimsical","whirlwind","whispered","white","whole","whopping","wicked","wide","wide-eyed","wiggly","wild","willing","wilted","winding","windy","winged","wiry","wise","witty","wobbly","woeful","wonderful","wooden","woozy","wordy","worldly","worn","worried","worrisome","worse","worst","worthless","worthwhile","worthy","wrathful","wretched","writhing","wrong","wry","yawning","yearly","yellow","yellowish","young","youthful","yummy","zany","zealous","zesty","zigzag","rocky"];

let cognomi = ["people","history","way","art","world","information","map","family","government","health","system","computer","meat","year","thanks","music","person","reading","method","data","food","understanding","theory","law","bird","literature","problem","software","control","knowledge","power","ability","economics","love","internet","television","science","library","nature","fact","product","idea","temperature","investment","area","society","activity","story","magazine","newspaper","relationship","teaching","cell","dealer","debate","finding","lake","member","message","phone","scene","appearance","association","concept","customer","death","discussion","housing","inflation","insurance","mood","woman","advice","blood","effort","expression","importance","opinion","payment","reality","responsibility","situation","skill","statement","wealth","application","city","county","depth"];


const fakeList = [];

for(let i = 0; i < nomi.length; i++){
    nomi[i]=  nomi[i].charAt(0).toUpperCase() + nomi[i].substring(1);   
} 

for(let i = 0; i<cognomi.length; i++){
    cognomi[i] = cognomi[i].charAt(0).toUpperCase() + nomi[i].substring(1);
}


for(let i = 0; i < 10; i++){
    let indexRandomName = Math.floor(Math.random() * nomi.length);
    let indexRandomLastname = Math.floor(Math.random() * cognomi.length);
    let randomName= nomi[indexRandomName];
    let randomLastname = cognomi[indexRandomLastname];
    let nomeCognome = randomName + (" ") + randomLastname;
    fakeList.push(nomeCognome);
}

console.log(fakeList);