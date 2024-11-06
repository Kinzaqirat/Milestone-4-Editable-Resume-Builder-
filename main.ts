let resume =document.querySelector("button");
resume?.addEventListener( "click",(even)=>{
even.preventDefault();
let Name=document.getElementById("name") as HTMLInputElement;
let Email=document.getElementById("email") as HTMLInputElement;
let Phone=document.getElementById("phone") as HTMLInputElement;
let Company=document.getElementById("company") as HTMLInputElement;
let CompanyDescrib=document.getElementById("companydescription") as HTMLInputElement;
let Education=document.getElementById("Education") as HTMLInputElement;
let Skills=document.getElementById("Skills") as HTMLInputElement;
let createImageInput = document.getElementById("pic") as HTMLInputElement;

if(
Name&&
Email&&
Phone&&
Company&&
CompanyDescrib&&
Education&&
Skills&&
createImageInput

){
let NameValue=Name.value;
let EmailValue=Email.value;
let PhoneValue=Phone.value;
let CompanyValue=Company.value;
let CompanyDescribValue=CompanyDescrib.value;
let EducationValue=Education.value;
let SkillsValue=Skills.value



    // Handle image
    let imageURL = "";
    const file = createImageInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        imageURL = reader.result as string;



// input
let resumeOutput=`
<h2>RESUME</h2>
<br>
<h3>INFORMATION</h3>
<div style="display: flex; justify-content: center ;gap: 20px;">
<img src="${imageURL}" alt="profile-image" height="100" width="100" />
<p>Name:${NameValue}  </p> 
<p>Email: ${EmailValue}</p> 
<p>Phone:${PhoneValue}  </p> 
</div>
<br>

<h3>EXPERIENCE</h3>
<p>Company: ${CompanyValue}  </p>
<p>Company Description: ${CompanyDescribValue}  </p>
<br>
<h3>EDUCATION</h3>
<p>Education: ${EducationValue}  </p>



<br>
<h3>SKILLS</h3>
<p>Skills: ${SkillsValue} </p>
`
let resumeOutputElement = document.getElementById('output-resume');
if (resumeOutputElement) {
  resumeOutputElement.innerHTML = resumeOutput;

  makeEditable();
} else {
  console.error('The resume output element is missing');
}
};
reader.readAsDataURL(file); // Read file as Data URL
} else {
console.error("No image file selected.");
}
} else {
console.error('One or more form elements are missing');
}
});;    
function makeEditable() {
    let editableElements = document.querySelectorAll('.editable');
    editableElements.forEach((editableElement) =>{
        editableElement.addEventListener('click',function(){
            let currentElement = editableElement as  HTMLElement;
            let currentValue = currentElement.textContent || "";
  
            // Replace Contact
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                let input = document.createElement('input');
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing input')
  
  
                input.addEventListener('blur', function(){
                    currentElement.textContent =  input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })
                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
  }