#!/bin/bash

NUM_PROCESS=1

abort() {
    echo "Abort!"
    echo "Kill processes..." >&2
    pkill -P $$
    sleep 3
    pkill -9 -P $$
    exit 0
}

trap abort INT TERM

if ! nc -w 0 localhost 9008 < /dev/null >/dev/null 2>&1
then
    echo 'No chutney process running.'
    echo 'Exit!'
    exit 1
fi

python3 tools/loop.py &

sleep 2

. venv/bin/activate

python -m lightnion.proxy -vvv --purge-cache --static ./js-client/demo/: ./js-client/evaluation/: &

sleep 10

for i in $(seq 1 $NUM_PROCESS)
do
	chromium --headless --disable-gpu --disable-software-rasterizer --hide-scrollbars --remote-debugging-port=9222 http://localhost:4990/loop.html &
done

echo "Press any key to quit..." >&2

read

echo "Kill processes..." >&2

pkill -P $$
sleep 3
pkill -9 -P $$
