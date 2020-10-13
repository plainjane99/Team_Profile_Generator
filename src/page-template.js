// generate manager html
const generateManager = (managerData) => {

    return `
    <!--Row 1 is Manager row-->
    <div class="cell row-wrapper">
        <div class="card card-wrapper">
            <div class="card-divider card-header manager">
                <h4>${managerData.fullname}</h4>
                <h5>${managerData.role}</h5>
            </div>
            <div class="card-section">
                <h6>Employee ID: ${managerData.id}</h6>
                <h6>Email: <a href="mailto:${managerData.email}">${managerData.email}</a></h6>
                <h6>Office Number: ${managerData.phone}</h6>
            </div>
        </div>
    </div>
    `
}

const generateEmployees = employeesArray => {

    // this actually works.  need to figure out how to go through entire array.
    return `
        ${employeesArray[0].fullname}
    `



    // return `
    //     ${employeesArray
    //         .filter(({ engineer }) => engineer)
    //         .map(({ fullname, id, email, gitHub, role }) => {
    //             return `
    //                 <div class="card card-wrapper">
    //                     <div class="card-divider card-header engineer">
    //                         <h4>${fullname}</h4>
    //                         <h5>${role}</h5>
    //                     </div>
    //                     <div class="card-section">
    //                         <h6>Employee ID: ${id}</h6>
    //                         <h6>Email: <a href="mailto:${email}">${email}</a> </h6>
    //                         <h6>GitHub: ${gitHub}</h6>
    //                     </div>
    //                 </div>
    //             `;
    //         })
    //         .join('')
        
    //     }
    // `
};

// generate page html
module.exports = templateData => {

    // console.log(templateData);
    const { employees, ...managerInfo } = templateData;
    // console.log(employees);
    // console.log(managerInfo);

    return `
        <!DOCTYPE html>
        <html lang="en">
        
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <!-- foundation styling-->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css"
                integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">
                <link rel="stylesheet" href="./src/style.css">
                <title>Team Profile</title>
            </head>
        
            <body>
                <header>
                    <h1>TEAM PROFILE</h1>
                </header>
        
                <main>
                    <!--Foundation grid for 2-row layout-->
                    <div class="grid-x container">
                        ${generateManager(managerInfo)}

                        <!--Row 2 will be Engineer/Intern Row-->
                        <div class="cell row-wrapper employees">
                            ${generateEmployees(employees)}
                        </div>
                    </div>
                </main>
        
                <footer>
                    <h6>&copy;2020 by Team Profile Generator</h6>
                </footer>
                
            </body>
        </html>        
    `
}