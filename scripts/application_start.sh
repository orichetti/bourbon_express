#!bin/bash
chmod -R 777 /home/ec2-user/bourbon_express

#navigate into of working directory that stores github files
cd home/ec2-user/bourbon_express

#add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && "$NVM_DIR/bash_Completion"

#install node modules
npm install

#start server.js
nose server.js > app.out.log 2> app.err.log < /dev/null &