import requests 
import re
import json

payload = {'token':'3e30c795c4208bafafb20aec78f9ccc1',
           'url':  'https://www.buzzfeednews.com/article/davidmack/australia-on-fire-soon-whole-world-will-be'}
API_ENDPOINT = "https://api.diffbot.com/v3/article"
r = requests.get('https://api.diffbot.com/v3/article', params = payload) 
api_response = r.content

formatted = json.loads(api_response)["objects"][0]["html"]
clean = re.sub(r'<.+?>', '', formatted)
print(clean)