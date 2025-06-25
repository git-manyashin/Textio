function getMonthlyPrice(tier) {
    switch (tier) {
        case "basic":
            return 100000;
        case "premium":
            return 15000;
        case "enterprise":
            return 50000;
        default:
            return 0;
    }
}

export { getMonthlyPrice };

//or
/*
function getMonthlyPrice(tier) {
    if (tier === "basic") {
        return 10000;
    } else if (tier === "premium") {
        return 15000;
    } else if (tier === "enterprise") {
        return 50000;
    } else {
        return 0;
    }
}
*/