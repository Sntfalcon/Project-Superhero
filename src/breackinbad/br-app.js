
// let idCounter = 0
/**
 * @returns {Promise<Object>} quote information
 */
const fetchHeroe = async () => {
    
    const res = await fetch(`https://superheroapi.com/api/2455658854593317/231`);
    const data = await res.json(); 
    
    console.log(data);
    return data;
    
}; 


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const SuperheroApp = async( element ) => { 

    document.querySelector('#app-title').innerHTML = 'SuperHeroes';
    element.innerHTML = 'Loading...';

    const imgLabel = document.createElement('img')
    const idLabel = document.createElement('h3')
    const nameLabel = document.createElement('h3')
    const powerstatsLabel = document.createElement('h3')
    const nextHeroe = document.createElement('button')
    nextHeroe.innerText = 'Next Heroe'

    const renderHeroe = ( data ) => {
        imgLabel.innerHTML = data.image.url;
        idLabel.innerHTML = data.id;
        nameLabel.innerHTML = data.name;
        powerstatsLabel.innerHTML = data.powerstats.combat;
        element.replaceChildren( imgLabel, idLabel, nameLabel, powerstatsLabel,nextHeroe);
    } 

    fetchHeroe()
        .then( renderHeroe );

}