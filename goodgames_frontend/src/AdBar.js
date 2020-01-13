import React, { Component } from 'react';
import cyberpunkAd from "./images/ad1.png"
import switchAd from "./images/ad2.jpeg"
import ps4Ad from "./images/ad3.jpeg"
import magFestAd from "./images/ad4.jpeg"
import chronoOrchestraAd from "./images/ad5.jpeg"
import "./AdBar.css"

class AdBar extends Component{

    state = {hasMountedOnce: false,
             ads: []}

                //  Ad1 points to object with 2 kv pairs
     adList = {     Ad0: {imgUrl: cyberpunkAd, link: "https://bit.ly/2lzzoKU"}, 
                    Ad1: {imgUrl: switchAd, link: "https://www.nintendo.com/switch/" },
                    Ad2: {imgUrl: ps4Ad, link: "https://bit.ly/2ksehcW" },
                    Ad3: {imgUrl: magFestAd, link: "https://super.magfest.org" },
                    Ad4: {imgUrl: chronoOrchestraAd, link: "https://www.procyon-studio.co.jp/special/cclive2019/faq/indexen.html" }
                }

                componentDidMount() {
                    this.setState({hasMountedOnce: true})
                }
    //  randomSelectedAd = () => {
    //     let randomNum = Math.floor(Math.random()*Object.keys(this.adList).length)
    //     return  <a href = {this.adList[`Ad${randomNum}`].link} target="_blank" >
    //                     <img src = {this.adList[`Ad${randomNum}`].imgUrl} alt={this.adList[`Ad${randomNum}`].link}></img>
    //                 </a>
    //     // return this.adList[`Ad${randomNum}`]
    //         //A way to make sure Ad# isn't drawn twice
    //         //throw whatever number into alreadyDrawn array, and see if alreadyDrawn.include(newDrawnNumber)
    //         //If it is, draw another number
    //         //If it isn't use that number
    //  }

    randomSelectedAdNoRepeats = ()=>{
       
        if (this.state.ads === undefined || this.state.ads.length ===0){
            var nums = [0,1,2,3,4],
            ranNums = [],
            i = nums.length,
            j = 0;
        
        while (i--) { //while i is true, although it will -1 every iteration
            j = Math.floor(Math.random() * (i+1)); //j = a random index of nums (i = 11 1st iteration, so it could be 1-10 product)
            ranNums.push(nums[j]); //push the number at index j to ranNums
            nums.splice(j,1); // This part ensures no repeats: remove the number at index j (1 means 1 element removed)
            //now nums is one element shorter, ex. if j was 2, that means the number remove from nums was 3(index-2 in nums)
            //If 3 was removed, nums = [1,2,4,5,6,7,8,9,10]
            //Next time we go through the 9-element nums array and do the same thing (get random num 1-9, use as /jindex, push number at j/index to ranNums, remove number at index j from nums)
            //eventually randomNums will be a random sorted number array
        }
        // this.setState({hasMountedOnce: true})
        this.setState({ads: ranNums.slice(0,3)})
            // return  (
            //         <div id="adBar">
            //             <p id="ad-banner">ADVERTISEMENT</p>
            //             <a href = {this.adList[`Ad${ranNums[0]}`].link} target="_blank" rel="noopener noreferrer" >
            //                 <img src = {this.adList[`Ad${ranNums[0]}`].imgUrl} alt={this.adList[`Ad${ranNums[0]}`].link}></img>
            //             </a>
            //             <a href = {this.adList[`Ad${ranNums[1]}`].link} target="_blank" rel="noopener noreferrer" >
            //                 <img src = {this.adList[`Ad${ranNums[1]}`].imgUrl} alt={this.adList[`Ad${ranNums[1]}`].link}></img>
            //             </a>
            //             <a href = {this.adList[`Ad${ranNums[2]}`].link} target="_blank" rel="noopener noreferrer" >
            //                 <img src = {this.adList[`Ad${ranNums[2]}`].imgUrl} alt={this.adList[`Ad${ranNums[2]}`].link}></img>
            //             </a>
            //         </div>
            // )
        }
    }
            


//Make this DRY
    render(){
            // console.log("AD",this.randomSelectedAd())
            // console.log("this", this.adList["Ad1"])
            // console.log("AD img",this.randomSelectedAd().imgUrl)
            // console.log("AD link",this.randomSelectedAd().link)
            this.randomSelectedAdNoRepeats()
        if (this.state.ads!== undefined && this.state.ads.length!== 0 ){
        return <div id="adBar">
        <p id="ad-banner">ADVERTISEMENT</p>
        <a href = {this.adList[`Ad${this.state.ads[0]}`].link} target="_blank" rel="noopener noreferrer" >
            <img src = {this.adList[`Ad${this.state.ads[0]}`].imgUrl} alt={this.adList[`Ad${this.state.ads[0]}`].link}></img>
        </a>
        <a href = {this.adList[`Ad${this.state.ads[1]}`].link} target="_blank" rel="noopener noreferrer" >
            <img src = {this.adList[`Ad${this.state.ads[1]}`].imgUrl} alt={this.adList[`Ad${this.state.ads[1]}`].link}></img>
        </a>
        <a href = {this.adList[`Ad${this.state.ads[2]}`].link} target="_blank" rel="noopener noreferrer" >
            <img src = {this.adList[`Ad${this.state.ads[2]}`].imgUrl} alt={this.adList[`Ad${this.state.ads[2]}`].link}></img>
        </a>
        </div>
        } else{
            return <h1>Loading...</h1>
        }
        
    }
}
//eslint-disable-next-line
{
    
    /* Old way, keep for reference
     <a href = {adList.cyberpunkAd.link} target="_blank">
    <img src = {adList.cyberpunkAd.imgUrl} alt={adList.cyberpunkAd.link}></img>
</a>
<a href = {adList.switchAd.link} target="_blank">
    <img src = {adList.switchAd.imgUrl}  alt={adList.switchAd.link}></img>
</a>
<a href = {adList.ps4Ad.link} target="_blank">
    <img src = {adList.ps4Ad.imgUrl}  alt={adList.ps4Ad.link}></img>
</a> */}
export default AdBar;