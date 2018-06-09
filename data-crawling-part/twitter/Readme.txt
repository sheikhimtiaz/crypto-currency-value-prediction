

CREATE DIRECTORY mkdir FOLDER_NAME
RUN 		python twitter_stream.py -q SEARCH -d FOLDER_NAME

recuirement: 		Python , Tweepy
tweepy install:		pip install tweepy==3.3.0