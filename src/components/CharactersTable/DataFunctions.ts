export  const getName = (
    name: string,
    aliases: string[] | null
): string => {
    let nameRow = '';
    let fullName = [];

    if (name) {
        fullName.push(name);
    }

    if (aliases && aliases.length) {
        aliases.forEach((alias) => {
            fullName.push(alias);
        })
    }

    nameRow = fullName.join(', ');

    return nameRow;
}

export const getAlive = (
    born: string,
    died: string,
): string => {
    let isAlive = "";

    if (!born && !died) {
        isAlive = "Unknown";
    } else if (!born && died) {
        isAlive = "No";
    } else if (born && died) {
        const bornYear = born.match(/\d+/);
        const diedYear = died.match(/\d+/);

        if (bornYear && bornYear.length > 0 && diedYear && diedYear.length > 0) {
            const diedAge = parseInt(diedYear[0]) - parseInt(bornYear[0]);
            isAlive = `No, died at ${diedAge} years old`;
        }
    } else if (born && !died) {
        isAlive = "Yes";
    }

    return isAlive;
}