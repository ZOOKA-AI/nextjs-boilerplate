#!/usr/bin/env python3
import requests

def get_joke(allow_offensive=False):
    blacklist = '' if allow_offensive else '&blacklistFlags=nsfw,religious,political,racist,sexist'
    url = f'https://v2.jokeapi.dev/joke/Any?type=single,twopart{blacklist}'
    r = requests.get(url, timeout=5)
    r.raise_for_status()
    return r.json()

def print_joke(data):
    if data.get('type') == 'single':
        print(data.get('joke'))
    elif data.get('type') == 'twopart':
        print(data.get('setup'))
        input("\n(Press Enter for the punchline...)")
        print(data.get('delivery'))
    else:
        print('No joke received.')

if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='Random Joke CLI using JokeAPI')
    parser.add_argument('--allow-offensive', action='store_true', help='Allow offensive categories')
    args = parser.parse_args()
    joke = get_joke(allow_offensive=args.allow_offensive)
    print_joke(joke)
