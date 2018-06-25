
module.exports = {

    adminTemplate : adminTemplate,
    userAcknowledge : userAcknowledge
};

function formObject(data) {

    var content = "<table>",
        rows = "",
        keys = Object.keys(data);

    for(var i = 0 ; i < keys.length; i++ ) {
        var col1 = "<td>" + keys[i] + "</td>",
            col2 = "<td>" + data[keys[i]] + "</td>";

        rows += "<tr>" + col1 + col2 + "</tr>";
    }

    content += content + rows + "</table>";
    
    return content;
}

function adminTemplate(data) {

    var header = "<div style='background:#db1174;padding:5px;color:white;'>Following user has requested an appointment</div><br/>";
    var container = "<br><img style='width:200px;height:80px;' src='https://naturalclinicmd.herokuapp.com/images/logo.png'/><br><b style='color:#db1174;'>Natural Clinic,MD<br/>Florida</b>";

    var table = formObject(data);

    return header + table + container;
}

function userAcknowledge(data) {
     var content = `
         <p> Dear ${data.Name}, </p>
         <p>
             Thank you very much for contacting our office.  Our representative will be in touch with you within
            the next 2 to 3 business days at your provided contact information ${data.Phone}. 
        </p>
         <br>
        <p>
            We look forward to provide compassionate care to you or your loved one. 
            We appreciate your business and we can be reached at 727 753 8861 for help during office hours.
        </p>
        <p>
            Please visit our 
                <a href="http://www.naturalclinicmd.com">Website</a>
            for more comprehensive information about medical cannabis.  
        </p>
        
         <p> <i> Sincerely, </i> </p>
        <a href="http://www.naturalclinicmd.com">
             <img style='width:200px;height:80px;' src='https://naturalclinicmd.herokuapp.com/images/logo.png'/>
         </a>
        <br>
         <b style='color:#db1174;'>
             <i>Organic medicine for Debilitating conditions</i>    
            <br/>        
             Natural Clinic MD
             <br/>
             Florida
            <br/><br/>
            <i>New Port Richey:</i>
            <br/> Phone   : (727) 753 8861 
            <br/> Address : 4766 Rowan Rd, New Port Richey FL 34653 
            <br/><br/>
            <i>Rockledge:</i>
            <br/> Phone   : (321) 405 2090 
            <br/> Address : 577 Barnes Blvd #400, Rockledge, FL 32955
            <br/>
            <br/> Fax     : (888) 849 6158 
            <br/> Email   : jalpa.dance.academy@gmail.com 
            
         </b>
     `;

     return content;
}