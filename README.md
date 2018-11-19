Prayer Request Network API
==========================

The Prayer Request Network API serves as an endpoint for the Prayer Request Network. This is a service that allows users to post anonymous prayer requests. 

_Version: 1.0.0_

_Travis Build: TBD_

_Deployment URL: TBD_

---
## Table of Contents: 

* [Getting Started](#getting-started)

---
<a id="getting-started"></a>

### Getting Started

1. Start by cloning the Repo onto your local machine.

2. Run `npm i` to install necessary dependencies.

3. Run `npm run initDB` in order to initialize your database.

    - The database template is controlled by `prayer_request_network_db` file located in the root directory. 

4. You then need to make sure you have a proper `.env` file with the following variables:
    
    - `PORT`
    - `DATABASE_URL`

5. You can then run `npm start` or `npm run watch`.

