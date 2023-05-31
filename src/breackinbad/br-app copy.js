let counter = 1;

/**
 * @returns {Promise<Object>} quote information
 */
const fetchHeroe = async () => {
    
    const res = await fetch(`https://superheroapi.com/api/2455658854593317/${counter}`);
    const data = await res.json(); 
    
    console.log(data);
    return data;
    

}; 

/**
 * 
 * @param {HTMLDivElement} element 
*/
export const SuperheroAppAlt = async( element ) => { 
    
    document.querySelector('#app-title').innerHTML = 'SuperHeroes';
    element.innerHTML = 'Loading...';

    


    const nextHeroe = document.createElement('button')
    nextHeroe.innerText = 'Next Heroe'
    const backHeroe = document.createElement('button')
    backHeroe.innerText = 'Back Heroe'



    const renderHeroe = ( data ) => {
        const imgLabel = data.image.url;
        const idLabel = data.id;
        const nameLabel = data.name;
        const powerstatsLabel = data.powerstats;
        const universeLabel = data.biography.publisher;
        
        
        const html =`
            <div>
                <img src="${imgLabel}" width= 200px >
                <h3>Id Hereo: ${idLabel} </h3>
                <h3>Name Hero: ${nameLabel} </h3>
                <h3>Hero Powerstats: ${powerstatsLabel} </h3>
                <h3>Unvirse - Publisher: ${universeLabel} </h3>
            </div>
        `;

        const listHeroe = document.createElement('li')
        listHeroe.innerHTML = html;
        element.replaceChildren( backHeroe, nextHeroe, listHeroe );

    } 

    nextHeroe.addEventListener('click', () => {
        if(counter >= 732 ) return
        counter += 1;
        fetchHeroe()
        .then( renderHeroe );

    })

    backHeroe.addEventListener('click', () => {
        if(counter <= 1 ) return
        counter -= 1;
        fetchHeroe()
        .then( renderHeroe );

    })

    fetchHeroe()
        .then( renderHeroe );

}