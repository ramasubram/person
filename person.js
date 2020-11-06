var person = {
    firstName: "Rama",
    lastName: "Subrahmanien",
    address: "Ladugatan 37",
    city: "Helsingborg",
    postalCode: "25448",
    country: "Sweden",
    phoneNumber: "764553812",
    mailID: "muraliv_ramas@yahoo.com",
    maritalStatus: "Married",
    partnerName: "Murali Venkatasalam",
    children: ["Hari Murali", "Ram Murali"],
    parents: ["K.P.Subrahmanien", "Gnanasoundari"],
    contactList: [{ contact: "Murali Venkatasalam", contactPhone: "764553811", relation: "Husband" },
    { contact: "Hari Murali", contactPhone: "764555536", relation: "Son" },
    { contact: "Ram Murali", contactPhone: "764551232", relation: "Son" },
    { contact: "Subrahmanien K P", contactPhone: "09145125776", relation: "Father" },
    { contact: "Gnanasoundari S", contactPhone: "09443356432", relation: "Mother" },
    { contact: "Shobana Sivaram", contactPhone: "09845609887", relation: "Friend" },
    { contact: "Malar Dinesh", contactPhone: "767349875", relation: "Friend" },
    { contact: "Flora Morison", contactPhone: "763498675", relation: "Friend" }],
    hobbies: ["Listen to Music", "Watch TV", "Walk in forests", "Gardening", "Watch Cricket", "Play Games"],
    eduQualification: [{ education: "Master of Science in Comp Sc", institute: "PSG College of Arts and Science", place: "Coimbatore, India" },
    { education: "Svenska For Invandrare, KURS D", institute: "KOMVUX", place: "Helsingborg, Sweden" },
    { education: "Svenska For Invandrare, KURS C", institute: "KOMVUX", place: "Helsingborg, Sweden" },
    { education: "Grundläggande Programmering", institute: "KOMVUX", place: "Helsingborg, Sweden" }],
    workHistory: [{ company: "SIT Consulting, California, USA", workFrom: "July, 2000", workTo: "March 2002" },
    { company: "Golden Gate Technologies, California, USA", workFrom: "May, 1998", workTo: "June, 2000" },
    { company: "Global Software consultancy, Tennesse, USA", workFrom: "June, 1997", workTo: " April 1998" },
    { company: "White House Ltd, Chennai, India", workFrom: "May 1993", workTo: "November 1996" },
    { company: "Orbit Computer Consultancy, Dindigul, India", workFrom: "May 1992", workTo: "April 1993" }],
    rolesPlayed: ["Technical Lead", "Software Architect", "Developer"]
};

    const container = document.getElementById('root');
    const myInfo = document.createElement('div');
    myInfo.setAttribute('class', 'main_container');
    container.appendChild(myInfo);

    const fullname = document.createElement('p');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const mailid = document.createElement('p');
    const married = document.createElement('p');
    const spouse = document.createElement('p');

    fullname.setAttribute('class','details-container');
    address.setAttribute('class','details-container');
    phone.setAttribute('class','details-container');
    mailid.setAttribute('class','details-container');
    married.setAttribute('class','details-container');
    spouse.setAttribute('class','details-container');

    fullname.innerText = "Name : " + person.firstName + " " + person.lastName;
    address.innerText = "Address : " + person.address + ", " + person.city + " " + person.postalCode + " " + person.country;
    phone.innerText = "Phone : " + person.phoneNumber;
    married.innerText = "Marital Status : " + person.maritalStatus;
    spouse.innerText = "Spouse : " + person.partnerName;
    
    myInfo.appendChild(fullname);
    myInfo.appendChild(address);
    myInfo.appendChild(phone);
    myInfo.appendChild(married);
    myInfo.appendChild(spouse);

    // Create a <button> elements for more info
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var btn3 = document.createElement("button");
    var btn4 = document.createElement("button");

    btn1.innerHTML = "Hobbies";
    btn2.innerHTML = "Work Experience";
    btn3.innerHTML = "Contacts";
    btn4.innerHTML = "Education";
    const moreInfo = document.createElement('p');
    moreInfo.setAttribute('class','moreinfo-container');
    myInfo.appendChild(moreInfo);

    // start - define event for button
    btn1.addEventListener("click", () => {
        moreInfo.innerHTML = getHobbies();
    });
    btn2.addEventListener("click", () => {
        moreInfo.innerHTML = getWorkInfo();
    });
    btn3.addEventListener("click", () => {
        moreInfo.innerHTML = getContacts();
    });
    btn4.addEventListener("click", () => {
        moreInfo.innerHTML = getEducation();
    });
    myInfo.appendChild(btn1);
    myInfo.appendChild(btn2);
    myInfo.appendChild(btn3);
    myInfo.appendChild(btn4);
    
    function getHobbies() {
        var text =  "<table width=auto; border='1'>"
        text += "Hobbies";
        person.hobbies.forEach(record => {
            text += "<tr><td>"+record +"</td></tr>";
        });
        text += "</table>"    
        return text;
     };
    function getContacts() {
        var text =  "<table width=auto; border='1'>"
        text +="<tr><td>Name</td><td>Phone</td><td>Relation</td></tr>";
        person.contactList.forEach(record => {
            text += "<tr><td>" + record.contact + "</td><td>" + record.contactPhone+"</td><td>"+record.relation + "</td></tr>";
        });
        text += "</table>"    
        return text;
     };
 
    function getWorkInfo() {
        var text =  "<table width=auto; border='1'>"
        text +="<tr><td>Company Name</td><td>Start Date</td><td>End Date</td></tr>";
        person.workHistory.forEach(record => {
            text += "<tr><td>" + record.company + "</td><td>" + record.workFrom+"</td><td>"+record.workTo + "</td></tr>";
        });
        text += "</table>"    
        return text;
     };
 
     function getEducation() {
        var text =  "<table width=auto; border='1'>"
        text +="<tr><td>Education</td><td>Institute</td><td>Place</td></tr>";
        person.eduQualification.forEach(record => {
            text += "<tr><td>" + record.education + "</td><td>" + record.institute+"</td><td>"+record.place + "</td></tr>";
        });
        text += "</table>"    
        return text;
     };
