function platformHandler() {
    
    function rangeBuild(beginning, end) {
        let range = []
        for (var i = beginning; i< end+1; i++) {
        range.push(i)
        }
        return range
        }

//Numbers with no corresponding platform == 1,2,10,17,28,31,40,43,54,76,81,83,168


    platformTranslate = (platform) =>{
        let oneToFifty = rangeBuild(1,50)
        let fiftyoneToOneHundred = rangeBuild(51,100)
        let oneHunderedOneToOneHundredSeventy = rangeBuild(101,170)
        if (oneToFifty.includes(platform)){
            switch (platform){
            case 1:
                return ""
                break;
            case 2:
                return ""
                break;
            case 3:
                return "Linux"
                break;
            case 4:
                return "Nintendo 64"
                break;
            case 5:
                return "Wii"
                break;
            case 6:
                return "PC (Microsoft Windows)"
                break;
            case 7:
                return "PlayStation"
                break;
            case 8:
                return "PlayStation 2"
                break;
            case 9:
                return "PlayStation 3"
                break;
            case 10:
                return ""
                break;
            case 11:
                return "Xbox"
                break;
            case 12:
                return "Xbox 360"
                break;
            case 13:
                return "PC DOS"
                break;
            case 14:
                return "Mac"
                break;
            case 15:
                return "Commodore C64/128"
                break;
            case 16:
                return "Amiga"
                break;
            case 17:
                return ""
                break;
            case 18:
                return "Nintendo Entertainment System (NES)"
                break;
            case 19:
                return "Super Nintendo Entertainment System (SNES)"
                break;
            case 20:
                return "pass"
                break;
            case 21:
                return "pass"
                break;
            case 22:
                return "pass"
                break;
            case 23:
                return "pass"
                break;
            }
                                    
        } else if (fiftyoneToOneHundred.includes(platform)){
            return "It was between 51-100"
        } else if (oneHunderedOneToOneHundredSeventy.includes(platform)){
            return "101-170"
    }   
    
}

export default platformHandler;