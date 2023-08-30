import React from "react"
const PasswordStrength=(password="")=>{
    // const [passwordStrength,setPasswordStrength]=useState("");
    const length=password.length
    const checkPasswordStrength=(length)=>{
        if(length<1){
            return ""
        }
        if(length<=5){
            return "Not Good"
        }
        else if(length>5 && length <=10){
            return "Good"
        }
        else if(length>10 && length <=15){
            return "Medium"
        }
        else{
            return "Great"
        }
    }

    const passwordStrength = checkPasswordStrength(length);

    if (!passwordStrength) return <React.Fragment />;
  
    return (
      <div className="password-strength">
        Strength: <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
      </div>
    );

    
}

export default PasswordStrength