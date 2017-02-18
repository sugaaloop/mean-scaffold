#/bin/sh
# build.sh --- builds bobhennessey.net and deploys to http://bobhennessey.net

# tarball the app
tar -cf build.tar ./app ./config ./public ./server.js ./node_modules
echo "archived the app"

# backup and clean dest
ssh -i /.ssh/id_rsa webadmin@bobhennessey.net '/var/www/scripts/prepare-build.sh'
echo "backed up and cleaned destination"

# copy tarball to dest
scp -i /.ssh/id_rsa ./build.tar webadmin@bobhennessey.net:/var/www/bobhennessey.net/build.tar
echo "copied the app"

# extract at target
ssh -i /var/lib/jenkins/.ssh/id_rsa webadmin@bobhennessey.net '/var/www/scripts/extract-build.sh'
echo "unarchived the app"
