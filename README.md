# aws-s3-image-service
    This repo provides api to get and upload images against aws s3.
    you need a aws user's access key and secret key to access s3.
    when getting image you can indicate width and height to resize it.
    also support upload multi images with one request. 

---
## Requirements

For development, you will only need Node.js v12 npm installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.18.1

    $ npm --version
    6.14.5

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


---

## Install

    $ git clone git@github.com:shawnwz/aws-s3-image-service.git
    $ cd aws-s3-image-service
    $ npm install

## Configure app

create and open `.env` file in the root dir, then edit it with your settings. You will need:

    ACCESS_KEY_ID=xxxxxxxxxx
    SECRET_ACCESS_KEY=xxxxxxxxxx
    REGION=us-east-1
    BUCKET_NAME=xxxxxxxxxx
    PORT=3000

## Running the project

    $ npm run start

## Simple build for production

    $ npm run build

## Usage
    Get Image:
      GET  ->   localhost:3000/api/get/10001.png?width=200&height=100
    Upload Images:
      POST ->   localhost:3000/api/upload
      the body of the POST request should
      must has a key named folder, this is the folder under the s3 bucket.
      must has a key named image1, this is the file.
      optional has another key named image2, this is the second file. 
