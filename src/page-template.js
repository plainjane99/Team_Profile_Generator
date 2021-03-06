// this js file generates the html for each employee

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
                    <h6>Office Number: ${managerData.officeNumber}</h6>
                </div>
            </div>
        </div>
    `
}

// generate engineer and intern html
const generateEmployees = employeesArray => {

    return `
        <!--Row 2 will be Engineer/Intern Row-->
        <div class="cell row-wrapper employees">
            ${employeesArray
                .filter(employee => employee.role === 'Engineer')
                .map(({ fullname, id, email, gitHub, role }) => {
                    return `
                        <div class="card card-wrapper">
                            <div class="card-divider card-header engineer">
                                <h4>${fullname}</h4>
                                <h5>${role}</h5>
                            </div>
                            <div class="card-section">
                                <h6>Employee ID: ${id}</h6>
                                <h6>Email: <a href="mailto:${email}">${email}</a></h6>
                                <h6>GitHub: <a target="_blank" href="https://github.com/${gitHub}">${gitHub}</a></h6>
                            </div>
                        </div>
                    `
                })
                .join('')
            }
            ${employeesArray
                .filter(employee => employee.role === 'Intern')
                .map(({ fullname, id, email, school, role }) => {
                    return `
                        <div class="card card-wrapper">
                            <div class="card-divider card-header intern">
                                <h4>${fullname}</h4>
                                <h5>${role}</h5>
                            </div>
                            <div class="card-section">
                                <h6>Employee ID: ${id}</h6>
                                <h6>Email: <a href="mailto:${email}">${email}</a></h6>
                                <h6>School: ${school}</h6>
                            </div>
                        </div>
                    `
                })
                .join('')
            }
        </div>
    `
};

// generate overall page html
module.exports = templateData => {

    const { employees, ...managerInfo } = templateData;

    return `
        <!DOCTYPE html>
        <html lang="en">
        
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <!-- foundation styling-->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css"
                integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">
                <link rel="stylesheet" href="style.css">
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
                        ${generateEmployees(employees)}
                    </div>
                </main>
                        
            </body>
        </html>        
    `
}