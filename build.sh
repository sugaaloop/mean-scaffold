#/bin/sh
# build.sh --- builds bobhennessey.net and deploys to http://bobhennessey.net

# ensure dependencies are installed
npm install
echo "updated npm"

# gulp-build the frontend
gulp --prod
echo "ran gulp --prod"

# tarball the app
tar -cf build.tar ./app ./config ./public ./server.js
echo "archived the app"

# backup and clean dest
#ssh -i /var/lib/jenkins/.ssh/id_rsa webadmin@bobhennessey.net '/var/www/scripts/prepare-build.sh'

# copy tarball to dest
#scp -i /var/lib/jenkins/.ssh/id_rsa ./build.tar webadmin@bobhennessey.net:/var/www/bobhennessey.net-STAGING
mkdir -p /var/www/bobhennessey.net-STAGING
cp ./build.tar /var/www/bobhennessey.net-STAGING/build.tar
echo "copied the app"

# extract the app
cd /var/www/bobhennessey.net-STAGING
tar -xf ./build.tar
echo "unarchived the app"

# restart web server
#ssh -i /var/lib/jenkins/.ssh/id_rsa webadmin@bobhennessey.net 'pm2 '
