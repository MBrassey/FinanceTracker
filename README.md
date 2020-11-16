## FinanceTracker

Full stack Financial application utilizing ORM with Sequelize and adhering to the Model-View-Controller paradigm. Handlebars Templating Engine was heavily utilized to modularize the views. On the back end, Express.js and SQL database are being used to provide robust REST API with multiple endpoints/routes. Authentication is required for the appropriate routes and user passwords are encrypted within the database using bcrypt. Test Driven Development has been demonstrated in this project using Jest.

![licensebadge](https://img.shields.io/badge/license-CC0_1.0_Universal-blue)

#### Issues

- [x] [setup server file](https://github.com/mbrassey/FinanceTracker/issues/1)
- [x] [feature/modelAssc](https://github.com/mbrassey/FinanceTracker/issues/2)
- [x] [added user route](https://github.com/mbrassey/FinanceTracker/issues/3)
- [x] [feature/apiRoutes mo](https://github.com/mbrassey/FinanceTracker/issues/4)
- [x] [Authentication & Initial Views](https://github.com/mbrassey/FinanceTracker/issues/5)
- [x] [Command Line Options & Readme File](https://github.com/mbrassey/FinanceTracker/issues/6)
- [x] [added hbs server & home-route reflects homepage](https://github.com/mbrassey/FinanceTracker/issues/7)
- [x] [fixed issue in utils/auth.js](https://github.com/mbrassey/FinanceTracker/issues/8)
- [x] [Redirects, Hashed User Seed & Responsiveness](https://github.com/mbrassey/FinanceTracker/issues/9)
- [x] [fixed logged in/out](https://github.com/mbrassey/FinanceTracker/issues/10)
- [x] [fixed userid](https://github.com/mbrassey/FinanceTracker/issues/11)
- [x] [Enable Helpers & Implement Tests](https://github.com/mbrassey/FinanceTracker/issues/12)
- [x] [Show Authenticated User & Fix /new Controller](https://github.com/mbrassey/FinanceTracker/issues/13)
- [x] [feature/chartJS](https://github.com/mbrassey/FinanceTracker/issues/14)
- [x] [develop](https://github.com/mbrassey/FinanceTracker/issues/15)
- [x] [Provide username & loggedIn: true to edit-bill](https://github.com/mbrassey/FinanceTracker/issues/16)
- [x] [Add Total monthly Income and bill Total](https://github.com/mbrassey/FinanceTracker/issues/17)
- [x] [dynamically added categories](https://github.com/mbrassey/FinanceTracker/issues/18)
- [x] [temporary](https://github.com/mbrassey/FinanceTracker/issues/19)
- [x] [Adjust Style & Finish Readme](https://github.com/mbrassey/FinanceTracker/issues/20)
- [x] [chart fix](https://github.com/mbrassey/FinanceTracker/issues/21)

#### Table of Contents

- [Requirements](#Requirements)
- [Installation](#Installation)
- [Usage](#Usage)
- [Screenshots](#Screenshots)
- [Developers](#Developers)
- [Questions](#Questions)
- [License](#License)

#### Requirements

    mysql or jawsdb
    node
    npm

#### Installation

    Create file: .env (in root directory)
        DB_NAME='<your_database_name>'
        DB_USER='<your_user_name>'
        DB_PW='<your_mysql_password>'
        SESS_SCRT='<random_generated_password>'

    npm i
    npm run migrate
    npm run seed

#### Usage

    Usage: node server.js [ -h | -v | -l | -a ]
    or: npm start

    [options]

           -h          Display this message.
           -v          Show version.
           -l          Show license info.
           -a          What is FinanceTracker?

<h6><p align="right">:cyclone: Click the image(s) below to view the live <a id="Screenshots" href="https://FinanceTracker-mbrassey.herokuapp.com/">webapplication</a></p></h6>

[<img src="img/Preview.png" align="center">](https://FinanceTracker-mbrassey.herokuapp.com/)

> Setup
> [<img src="img/Setup.gif">](https://FinanceTracker-mbrassey.herokuapp.com/)

> User Routes
> [<img src="img/Controller1.gif">](https://FinanceTracker-mbrassey.herokuapp.com/api/users)

> Bill Routes
> [<img src="img/Controller2.gif">](https://FinanceTracker-mbrassey.herokuapp.com/api/bills)

> Categories & Income Routes
> [<img src="img/Controller3.gif">](https://FinanceTracker-mbrassey.herokuapp.com/api/categories)

> Tests Passing
> [<img src="img/Tests.png">](https://FinanceTracker-mbrassey.herokuapp.com/)

<p id="Developers"></p>

#### Project Developers:

##### Matthew Ondrovic

> [View Contributions](https://github.com/mbrassey/FinanceTracker/commits?author=mbrassey)

##### Matt Brassey

> [View Contributions](https://github.com/mbrassey/FinanceTracker/commits?author=MBrassey)
> [<p align="left"><img src="img/Contributor.png">](https://github.com/mondrovic/finance-tracker/graphs/contributors)

##### Ryan Brown

> [View Contributions](https://github.com/mbrassey/FinanceTracker/commits?author=ryanabrown14)

##### Taylor Stern

> Project Advisor.

#### Questions

Contact me at [matt@brassey.io](mailto:matt@brassey.io) with any questions or comments.

#### License

`FinanceTracker` is published under the **CC0_1.0_Universal** license.

> The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach. As with the Unlicense and typical software licenses, CC0 disclaims warranties. CC0 is very similar to the Unlicense.
