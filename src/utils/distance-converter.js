export default class DistanceCoverter {

    constructor() {

        this.distanceRank = {
            mm : 1,
            cm : 10,
            m : 100,
            km : 1000
        };

        this.distanceFractor = [1, 10, 100, 1000];
    }
    
    convert(sourceUnits, sourceValue, destUnits, destValue) {

        let distanceRank = this.distanceRank;

        let needToggle = false;

        if(!sourceValue) {

            needToggle = true;

            let temp = sourceUnits;

            sourceValue = destValue;
            sourceUnits = destUnits;

            destValue = undefined;
            destUnits = temp;
        }

        let sourceRank = distanceRank[sourceUnits];
        let destRank = distanceRank[destUnits];

        let convertionFactor = this.calculateConvertionFactor(sourceRank, destRank);

        if(sourceRank < destRank) {
            destValue = sourceValue / convertionFactor;
        }
        else {
            destValue = sourceValue * convertionFactor;
        }

        if(needToggle) {
            needToggle = false;
            return {
                source_value : destValue,
                destination_value : sourceValue
            };
        }

        return {
            source_value : sourceValue,
            destination_value : destValue
        };
    }

    calculateConvertionFactor(sourceRank, destRank) {

        let distanceFractor = this.distanceFractor;

        let resultFactor = 1;

        let start = distanceFractor.indexOf(sourceRank);
        let end = distanceFractor.indexOf(destRank);

        if(start < 0 || end < 0) {
            return resultFactor;
        }

        if(start > end) {
            let temp = start;
            start = end;
            end = temp;
        }

        for(let i = start + 1; i <= end; i++) {
            resultFactor = resultFactor * distanceFractor[i];
        }

        return resultFactor;
    }
}