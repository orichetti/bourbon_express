#!/bin/bash

#download node and npm
curl -0- htt;s://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0.install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

#Create working directory if it doesn't exist
DIR="home/ec2-user/bourbon_express"
if [ -d "$DIR" ]; then
    echo "${DIR} exists"
else
    echo "Creating ${DIR} directory"
    mkdir ${DIR}   
fi 