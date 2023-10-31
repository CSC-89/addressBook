let data = {};
const mainContentMain = document.getElementById("address-content-main");
const addressCreateButton = document.getElementById("add-new-address");
const newAddress = document.getElementById("new-address-block");
const editAddress = document.getElementById("edit-address-block");
const submitCreateButton = document.getElementById("submit-new-address");
const submitEditButton = document.getElementById("submit-edit-address");
const addAddressCancelButton = document.getElementById("cancel-new-address");
const editAddressCancelButton = document.getElementById("cancel-edit-address");
const deleteAddressButton = document.getElementById("delete-address");
const buildElements = (data) => {
    data.forEach((element) => {
        //Build
        const addressBox = document.createElement("div");
        const addressItems = document.createElement("ul");
        const name = document.createElement("li");
        const street = document.createElement("li");
        const city = document.createElement("li");
        const postcode = document.createElement("li");
        //Assign
        name.innerText = element.lastName + ", " + element.firstName;
        street.innerText = element.streetNo + " " + element.street;
        city.innerText = element.city;
        postcode.innerText = element.postCode;
        //Decorate
        addressBox.classList.add(
            "p-1",
            "m-3",
            "border-2",
            "border-black",
            "rounded-md",
            "cursor-pointer",
            "bg-slate-100",
            "hover:bg-slate-200"
        );
        addressBox.id = "address-box";
        addressItems.id = "address-id-" + element.id;
        street.classList.add("text-2xl");
        city.classList.add("text-2xl");
        postcode.classList.add("text-2xl");
        //Attach
        addressItems.appendChild(name);
        addressItems.appendChild(street);
        addressItems.appendChild(city);
        addressItems.appendChild(postcode);
        addressBox.appendChild(addressItems);
        mainContentMain.appendChild(addressBox);
        //Listeners
        addressBox.addEventListener("click", () => {
            console.log("clicked Address Box " + element.id);
            //Send data to box
            const idInput = document.getElementById("edit-id");
            const nameInput = document.getElementById("edit-name");
            const streetInput = document.getElementById("edit-street");
            const streetNoInput = document.getElementById("edit-streetNo");
            const cityInput = document.getElementById("edit-city");
            const postCodeInput = document.getElementById("edit-postCode");

            idInput.value = element.id;
            nameInput.value = element.firstName + " " + element.lastName;
            streetInput.value = element.street;
            streetNoInput.value = element.streetNo;
            cityInput.value = element.city;
            postCodeInput.value = element.postCode;

            //Make visible
            editAddress.classList.remove("hidden");
        });
    });
};

//Load full list of addresses
document.addEventListener("DOMContentLoaded", async () => {
    data = await fetch("http://localhost:5001/api/Addresses").then(
        (response) => {
            try {
                if (response) {
                    return response.json();
                } else {
                    throw new Error("Failure to fetch data..");
                }
            } catch (e) {
                console.log(e);
            }
        }
    );
    console.log(data);

    buildElements(data);
});

//Toggle create address creation form
addressCreateButton.addEventListener("click", () => {
    addressCreateButton.setAttribute("disabled", true);
    newAddress.classList.remove("hidden");
});

addAddressCancelButton.addEventListener("click", () => {
    addressCreateButton.removeAttribute("disabled");
    newAddress.classList.add("hidden");
});

editAddressCancelButton.addEventListener("click", () => {
    editAddress.classList.add("hidden");
});

// deleteAddressButton.addEventListener("click", () => {
//     editAddress.classList.add("hidden");
// })

//Filters
const allResults = document.getElementById("filter-none");
allResults.addEventListener("click", () => {
    mainContentMain.innerHTML = "";

    buildElements(data);
});

const filtersArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

filtersArr.forEach((letter) => {
    const element = document.getElementById("filter-" + letter);
    element.addEventListener("click", () => {
        mainContentMain.innerHTML = "";

        let filteredResults = data.filter((element) => {
            return element.lastName[0] === letter;
        });
        if (filteredResults.length) {
            buildElements(filteredResults);
        } else {
            const addressBox = document.createElement("div");
            const message1 = document.createElement("h1");
            const message2 = document.createElement("h2");
            //Assign
            message1.innerText = "SORRY";
            message2.innerText = "No results found";
            //Decorate
            addressBox.classList.add(
                "col-start-2",
                "p-8",
                "m-3",
                "border-2",
                "border-black",
                "rounded-md",
                "cursor-pointer",
                "bg-slate-100",
                "hover:bg-slate-200"
            );
            addressBox.id = "address-box";
            //Attach;
            addressBox.appendChild(message1);
            addressBox.appendChild(message2);
            mainContentMain.appendChild(addressBox);
        }
    });
});

submitCreateButton.addEventListener("click", () => {
    submitCreateButton.classList.remove("bg-blue-200");
    submitCreateButton.classList.add("bg-green-200");
    submitCreateButton.setAttribute("value", "Done!");
});

submitEditButton.addEventListener("click", () => {
    submitEditButton.classList.remove("bg-blue-200");
    submitEditButton.classList.add("bg-green-200");
    submitEditButton.setAttribute("value", "Done!");
});
