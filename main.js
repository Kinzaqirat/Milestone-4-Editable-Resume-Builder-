var resume = document.querySelector("button");
resume === null || resume === void 0 ? void 0 : resume.addEventListener("click", function (even) {
    var _a;
    even.preventDefault();
    var Name = document.getElementById("name");
    var Email = document.getElementById("email");
    var Phone = document.getElementById("phone");
    var Company = document.getElementById("company");
    var CompanyDescrib = document.getElementById("companydescription");
    var Education = document.getElementById("Education");
    var Skills = document.getElementById("Skills");
    var createImageInput = document.getElementById("pic");
    if (Name &&
        Email &&
        Phone &&
        Company &&
        CompanyDescrib &&
        Education &&
        Skills &&
        createImageInput) {
        var NameValue_1 = Name.value;
        var EmailValue_1 = Email.value;
        var PhoneValue_1 = Phone.value;
        var CompanyValue_1 = Company.value;
        var CompanyDescribValue_1 = CompanyDescrib.value;
        var EducationValue_1 = Education.value;
        var SkillsValue_1 = Skills.value;
        // Handle image
        var imageURL_1 = "";
        var file = (_a = createImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                imageURL_1 = reader_1.result;
                // input
                var resumeOutput = "\n<h2>RESUME</h2>\n<br>\n<h3>INFORMATION</h3>\n<div style=\"display: flex; justify-content: center ;gap: 20px;\">\n<img src=\"".concat(imageURL_1, "\" alt=\"profile-image\" height=\"100\" width=\"100\" />\n<p>Name:").concat(NameValue_1, "  </p> \n<p>Email: ").concat(EmailValue_1, "</p> \n<p>Phone:").concat(PhoneValue_1, "  </p> \n</div>\n<br>\n\n<h3>EXPERIENCE</h3>\n<p>Company: ").concat(CompanyValue_1, "  </p>\n<p>Company Description: ").concat(CompanyDescribValue_1, "  </p>\n<br>\n<h3>EDUCATION</h3>\n<p>Education: ").concat(EducationValue_1, "  </p>\n\n\n\n<br>\n<h3>SKILLS</h3>\n<p>Skills: ").concat(SkillsValue_1, " </p>\n");
                var resumeOutputElement = document.getElementById('output-resume');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                    makeEditable();
                }
                else {
                    console.error('The resume output element is missing');
                }
            };
            reader_1.readAsDataURL(file); // Read file as Data URL
        }
        else {
            console.error("No image file selected.");
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
;
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (editableElement) {
        editableElement.addEventListener('click', function () {
            var _a;
            var currentElement = editableElement;
            var currentValue = currentElement.textContent || "";
            // Replace Contact
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
