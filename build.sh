#/bin/sh
# build.sh --- builds bobhennessey.net and deploys to http://bobhennessey.net

# ensure dependencies are installed
npm install

# gulp-build the frontend
gulp --prod

# tarball the app
tar -cf build.tar ./app ./config ./public ./server.js

# backup and clean dest
#ssh -i /var/lib/jenkins/.ssh/id_rsa webadmin@bobhennessey.net '/var/www/scripts/prepare-build.sh'

# copy tarball to dest
#scp -i /var/lib/jenkins/.ssh/id_rsa ./build.tar webadmin@bobhennessey.net:/var/www/bobhennessey.net-STAGING
cp ./build.tar /var/www/bobhennessey.net-STAGING

# extract the app
cd /var/www/bobhennessey.net-STAGING
tar -xf ./build.tar

# restart web server
#ssh -i /var/lib/jenkins/.ssh/id_rsa webadmin@bobhennessey.net 'pm2 '
