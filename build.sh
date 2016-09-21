#/bin/sh
# build.sh --- builds bobhennessey.net and deploys to http://bobhennessey.net

# gulp-build the frontend
gulp --prod

# tarball the app
tar -cf build.tar ./app ./config ./node_modules ./public ./server.js

# backup and clean dest
ssh -i /var/lib/jenkins/.ssh/id_rsa webadmin@bobhennessey.net '/var/www/scripts/prepare-build.sh'

# copy tarball to dest
scp -i /var/lib/jenkins/.ssh/id_rsa ./build.tar webadmin@bobhennessey.net:/var/www/bobhennessey.net-STAGING

# restart web server
#ssh -i /var/lib/jenkins/.ssh/id_rsa webadmin@bobhennessey.net 'pm2 '

