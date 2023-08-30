const loadPhone = async (searchText="iphone") =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    
    displayPhone(phones);
}

const displayPhone = phones => {
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';



    // show all btn
    // const showAllContainer = document.getElementById('show-all-btn')
    // if (phones.length > 12) {
    //     showAllContainer.classList.remove('hidden')    
    // }
    // else{
    //     showAllContainer.classList.add('hidden')
    // }
    // phones = phones.slice(0,12)




    phones.forEach(phone => {
        // console.log(phone)
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`
        phoneCard.innerHTML =` 
        <figure class="px-10 pt-10">
                  <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                  </figure>
                  <div class="card-body items-center text-center">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>There are many variations of passages of available, but the majority have suffered</p>
                  <h6 class="text-2xl font-bold">$500</h6>
                  <div class="card-actions">
                  <button onclick = "handleShowDetails('${phone.slug}') " class="btn btn-primary">Show details</button>
                  </div>
                  </div>

        `
        phoneContainer.appendChild(phoneCard);
    });
}


//handle button search
const handleSearch = () =>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText);
}

// handleShowDetails BTN
const handleShowDetails = async (id) =>{
    console.log(id)
    const res = await fetch (` https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const phone = data.data;

    showPhoneDetails(phone)
}

const showPhoneDetails = (phone) =>{
    console.log(phone)
    const phoneName = document.getElementById('show-phone-name')
     phoneName.innerText = phone.name;
    const showDetailContainer = document.getElementById('show-details-container')
    showDetailContainer.innerHTML = `
    <img  src="${phone.image}" alt="" class="mt-5 mx-auto mb-5">
    <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
        <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information '}</p>
        <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information'}</p>
        <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'no sensor'}</p>
    
    `
    show_details.showModal();
}

loadPhone();