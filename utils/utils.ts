export const getMedal = (top: number) => top == 0 ? '🥇' : top == 1 ? '🥈' : top == 2 ? '🥉' : '';
export const formatAddress = (x: string) => x.slice(0, 6) + '...' + x.slice(38);

export const guessCompetitionName = (id: number) => {
    if (id == 0) { 
        return 'Mixbytes farm';
    } else if (id == 5) {
        return 'Lido contest';
    } else return '???';
};