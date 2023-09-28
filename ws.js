// JavaScript to simulate the behavior described in the user story

const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const average = total / freelancers.length;
    document.getElementById("average-price").textContent = `$${average.toFixed(2)}`;
}

function addFreelancer(name, occupation, startingPrice) {
    const newFreelancer = { name, occupation, startingPrice };
    freelancers.push(newFreelancer);

    const freelancerElement = document.createElement("div");
    freelancerElement.classList.add("freelancer");
    freelancerElement.innerHTML = `
        <p>Name: ${name}</p>
        <p>Occupation: ${occupation}</p>
        <p>Starting Price: $${startingPrice}</p>
    `;

    document.querySelector(".freelancers").appendChild(freelancerElement);
    updateAveragePrice();
}

// Simulate the appearance of new freelancers over time
setTimeout(() => {
    addFreelancer("Carol", "Programmer", 70);
}, 5000); // Add Carol after 5 seconds

setTimeout(() => {
    addFreelancer("Dave", "Designer", 45);
}, 10000); // Add Dave after 10 seconds
