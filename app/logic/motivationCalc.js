class MotivationalComplexData {
    constructor() {
        this.inMotivation = null;
        this.outterPositive = null;
        this.outterNegative = null;
        this.isComplexOptimal = null;
    }

    calculateInMotivation(workingProcSatisfaction, selfRealizationAbility) {

        let val = (workingProcSatisfaction + selfRealizationAbility) / 2;
        return (this.inMotivation = val);
    }

    calculateOutterPositive(moneyAward, selfDevelopDesire, socialPrestigeDemand) {
        let val = (moneyAward + selfDevelopDesire + socialPrestigeDemand) / 3
        return (this.outterPositive = val);
    }

    calculateOutterNegative(criticAvoidingAspiration, troubleAvoidingAspiration) {
        return (this.outterNegative = (criticAvoidingAspiration + troubleAvoidingAspiration) / 2);
    }

    checkIfComplexOptimal() {
        let optimalRelationA = (this.inMotivation > this.outterPositive) && (this.inMotivation > this.outterNegative);
        let optimalRelationB = (this.inMotivation == this.outterPositive) && (this.outterPositive > this.outterNegative);

        return (this.isComplexOptimal = (optimalRelationA || optimalRelationB));
    }
}

module.exports = MotivationalComplexData