Installez Flask :
python -m venv env
source env/bin/activate
pip install flask

Générez la clé SSH :
ssh-keygen -t rsa -b 4096 -C "covoitealps"

Installer autoSSH :
sudo apt-get install autossh


python server.py

autossh -i C:\Users\bastr\covoitealps -R covoitealps:80:localhost:8000 serveo.net