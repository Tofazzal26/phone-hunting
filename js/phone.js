

const loadData = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phone = data.data
    phoneData(phone);
}




const phoneData = (phones) => {
    const cardDiv = document.getElementById('card-container');
    cardDiv.innerText = '';

    


    phones.forEach( phoneCard => {
        
        const div = document.createElement('div');
        div.classList = `card border-2 border-gray-200`
        div.innerHTML = `
        <div>
            <figure class="px-10 pt-10">
                <img src="${phoneCard.image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center space-y-4">
                <h2 class="card-title text-2xl font-bold text-[#403f3f]">${phoneCard.phone_name}</h2>
                <p>Tap the version number. Contact your carrier for more details.</p>
                <div class="card-actions">
                <button class="btn px-6 bg-[#0d6efd] btn text-lg font-bold text-white">Show Details</button>
                </div>
            </div>
            </div>
        `;
        cardDiv.appendChild(div);
    })
}



const searchField = () => {
    const searchField = document.getElementById('searchField');
    const searchValue = searchField.value;
    loadData(searchValue);
}




