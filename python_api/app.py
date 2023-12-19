from dotenv import load_dotenv
import os
import asyncio
import aiohttp
import requests
import json

#load .env
load_dotenv()
base_pokes_url = os.getenv('BASE_URL_V2')

#save_results
file_results = os.getenv('FILENAME')

async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text()
    

async def main():
    #to call apis
    offset = 0
    add_offset = 20
    limit_offset = 1272
    with open(file_results, 'w') as file:
        async with aiohttp.ClientSession() as session:
            while offset <= limit_offset:
                url = f'{base_pokes_url}?offset={offset}&limit=20'
                try:
                    response = await fetch(session, url)
                    #response.raise_for_status()  # Exception 4xx,5xx
                    data = json.loads(response)
                    #data - info - results
                    file.write(json.dumps(data["results"]))
                    file.write('\n')
                except requests.exceptions.HTTPError as http_err:
                    print(f'Error HTTP: {http_err}')
                except requests.exceptions.RequestException as err:
                    print(f'Error: {err}')

                offset += add_offset
    
    
loop = asyncio.get_event_loop()
loop.run_until_complete(main())