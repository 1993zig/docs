# Setup

[Repository](https://github.com/c0mputern1k/Dobby)


## Docker
run the `docker-compose.yml` from this repository

```bash
docker-compose up -d
```

## Database

A mongodb is needed to store information like levels.

You can create a free [mongodb](https://www-cloud.mongodb.com) or run a local _(maybe also in docker)_
___

## Development

- install [git](http://git-scm.com/downloads)
- install [python3.8.10](https://www.python.org/downloads/)

```bash
#install need packages
pip install -r requirements.txt

#start the bot
python bot.py

#set codestyle to black
python -m black . --line-length=120
```
