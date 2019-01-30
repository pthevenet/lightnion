#!/bin/bash

NUM_PROCESS=1

clean() {
    echo "Kill processes..." >&2
    pkill -P $$
    sleep 3
    pkill -9 -P $$
    kill -9 $(ps aux | grep lightnion\\.proxy | awk '{print $2}')
}

abort() {
    echo "Abort!" >&2
    clean
    exit 1
}

trap abort INT TERM

# Q&D test to see if chutney is running.
if ! nc -w 0 localhost 9008 < /dev/null >/dev/null 2>&1
then
    echo 'No chutney process running.'
    exit 1
fi

python3 tools/loop.py &

sleep 2

. venv/bin/activate

python -m lightnion.proxy -vvv --purge-cache --static ./js-client/demo/: ./js-client/evaluation/: &

sleep 10

for i in $(seq $NUM_PROCESS)
do
    chromium --headless --disable-gpu --disable-software-rasterizer --hide-scrollbars --remote-debugging-port=9222 http://localhost:4990/loop.html &
done

echo "Press any key to quit..." >&2

read

clean
exit 0
