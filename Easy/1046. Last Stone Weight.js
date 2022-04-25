// You are given an array of integers stones where stones[i] is the weight of the ith stone.
//
// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together.
// Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
//
// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.
//
// Return the smallest possible weight of the left stone. If there are no stones left, return 0.

// Мы играем в игру с камнями. На каждом ходу мы выбираем два самых тяжелых камня и сталкиваем их вместе.
// Предположим, что два самых тяжелых камня имеют веса x и y, причем x <= y.
// Результат этого удара: Если x == y, оба камня разрушаются, а If x != y, камень веса x уничтожается,
// а камень веса y имеет новый вес y - x. В конце игры остается не более одного камня.
// Верните наименьший возможный вес левого камня.
// Если камней не осталось, вернуть 0.


function lastStoneWeight(stones) {

    function compareNumbers(a, b) {
        return b - a;//по убыванию (a-b - по возрастанию)
    }

    while (stones.length >= 1) {
        if (stones.length === 1) return stones[0]
        if (stones.length === 0) return 0
        stones.sort(compareNumbers)
        if (stones[0] === stones[1]) {
            stones.splice(0, 2)
        } else {
            let newWeight = stones[0] - stones[1]
            stones.splice(0, 2)
            stones.unshift(newWeight)
        }
    }
    return 0
}

console.log(lastStoneWeight([2,7,4,1,8,1]))