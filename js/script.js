//global variables
const subTypeElement = document.querySelector("#subscription");
const subDurationElement = document.querySelector("#months");
const result = document.querySelector(".result");
let subType = "basic"; //default subscription
let subDuration = 1; //default for duration, 1 month


subTypeElement.addEventListener ("change",function(e) {
    subType = e.target.value;
    updateSubscriptionDiv();
});

subDurationElement.addEventListener ("change", function(e){
    subDuration = Number(e.target.value);
    updateSubscriptionDiv();
});

const updateSubscriptionDiv = function () {
    let monthlyCost = 5; //cost of default (basic) monthly subscription

    if (subType === "standard") {
        monthlyCost = 7;
    } else if (subType === "premium") {
        monthlyCost = 10;
    }

    const total = subDuration * monthlyCost;

    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
