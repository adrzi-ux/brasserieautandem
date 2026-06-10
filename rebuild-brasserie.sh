#!/bin/bash
set -e
LOG=/var/log/brasserie-rebuild.log
echo "--- $(date) ---" >> $LOG
cd /opt/brasserieautandem-astro
npm run build >> $LOG 2>&1
rsync -a --delete dist/ /var/www/brasserieautandem/
chown -R www-data:www-data /var/www/brasserieautandem/
echo "rebuild OK $(date)" >> $LOG
