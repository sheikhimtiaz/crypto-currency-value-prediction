



import urllib.request, json 
with urllib.request.urlopen("https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=10") as url:
    data = json.loads(url.read().decode())
    
print(data)