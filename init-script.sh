#!/bin/bash
apt-get --yes update
apt-get --yes install \
	vim \
	openssh-server \
	yarn
echo "root:hammer" | chpasswd
cp system-config/sshd_config /etc/ssh/
cp system-config/.pythonrc ~/.pythonrc
cp system-config/.bashrc ~/.bashrc
npm install && npm start
