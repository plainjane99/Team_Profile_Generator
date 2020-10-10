const generatePage = (data) => {
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
        
                        <!--Row 1 will be Manager row-->
                        <div class="cell row-wrapper">
                            <div class="card card-wrapper">
                                <div class="card-divider card-header">
                                    <h4>Jane Hsu</h4>
                                    <h5>Manager</h5>
                                </div>
                                <div class="card-section">
                                    <h6>Employee ID: 12345</h6>
                                    <h6>Email: <a href="mailto:abc@gmail.com">abc@gmail.com</a> </h6>
                                    <h6>Office Number: 123-456-7890</h6>
                                </div>
                            </div>
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