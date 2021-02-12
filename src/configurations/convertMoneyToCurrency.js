export const convertMoneyToCurrency = (money) => {
    const ranges = [
        { divider: 1e9, suffix: ' billion ' },
        { divider: 1e6, suffix: ' million ' },
        { divider: 1e3, suffix: 'k' }
    ]

    for (let i = 0; i < ranges.length; i++) {
        if (money >= ranges[i].divider) {
            if (money >= 1e8) {
                let newMoney = Math.ceil(money/1e6)*1e6;
                let roundedMoney = (newMoney / ranges[i].divider).toString();
                return roundedMoney + ranges[i].suffix + 'USD';
            } else {
                let roundedMoney = (money / ranges[i].divider).toString();
                return roundedMoney + ranges[i].suffix + 'USD';
            }
        }
    }

    if (money == 0) {
        return "unavailable";
    }
}