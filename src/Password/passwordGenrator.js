import {useState} from "react";


const PasswordGenrator=()=>{
    const [error , setError]=useState(" ");
    const [password , setPassword]=useState("");
    const generatePassword=(length, checkBoxData)=>{
        let charset ="",
         generate="";
        const selectedValue=checkBoxData.filter((item)=>item.status)
       if(selectedValue.length===0){
        setError("not a good length")
        setPassword("")
        return
       }
        selectedValue.forEach((option)=>{
            switch(option.title){
                case "LowerCase":
                    charset+="abcdeqwrtyuiopsfghjklzxcbnmv";
                    break;
                case "UpperCase":
                    charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Numbers":
                    charset+="1234567890"
                    break;
                case "Include Symbols":
                    charset+="~!@#$%^&*()?/><,.;':{}]["
                    break;
                default:
                    break;
            }
        })
        for(let i=0;i<length;i++){
            const randomIndex= Math.floor(Math.random()*charset.length);
            console.log(randomIndex,"ran")
            generate+=charset[randomIndex]
        }
        setPassword(generate)
        setError("")
    }

    return {password , error , generatePassword};

}


export default PasswordGenrator