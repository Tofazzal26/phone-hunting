

const loadData = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phone = data.data
    phoneData(phone, isShowAll);
}




const phoneData = (phones, isShowAll) => {
    const cardDiv = document.getElementById('card-container');
    cardDiv.innerText = '';

    const showAll = document.getElementById('showAll');

    if (phones.length > 12 && !isShowAll) {
        showAll.classList.remove('hidden');
    } else {
        showAll.classList.add('hidden');
    }
    if(!isShowAll) {
        phones = phones.slice(0, 12);
    }
    


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
    toggleSpinner(false);
}



const searchField = (isShowAll) => {
    toggleSpinner(true);
    const searchField = document.getElementById('searchField');
    const searchValue = searchField.value;
    loadData(searchValue, isShowAll);
}

const toggleSpinner = (spinner) => {
    const toggleSpinners = document.getElementById('toggleSpinner');
    if(spinner) {
        toggleSpinners.classList.remove('hidden');
    } else {
        toggleSpinners.classList.add('hidden');
    }
}

const showAllBtn = () => {
    searchField(true);
    
}
