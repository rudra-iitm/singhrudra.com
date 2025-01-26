#!/bin/bash
set -eux
cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup

cat <<EOL > /etc/nginx/sites-available/default
server {
    listen 3000;

    root /out;
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EOL

service nginx restart
service nginx status
tail -f /dev/null