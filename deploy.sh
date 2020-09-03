#!/bin/bash
ssh $deploy_user@$deploy_host /home/$deploy_user/deploy-jekyll.sh $1
exit $?