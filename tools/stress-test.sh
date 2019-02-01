#!/bin/bash

NUM_PROCESS=1

clean() {
    echo "Kill processes..." >&2
    pkill -P $$
    sleep 3
    pkill -9 -P $$
    # This flask process start a child process not terminated with the above command.
    kill -9 $(ps aux | grep lightnion\\.proxy | awk '{print $2}')
}

abort() {
    echo "Abort!" >&2
    clean
    exit 1
}

trap abort INT TERM

if [[ -z "$VIRTUAL_ENV" ]]
then
    echo 'Please set correct Python path before running this script.' >&2
    echo 'i.e.: source ../venv/bin/activate && ./stress-test.sh' >&2
    exit 1
fi

# Q&D test to see if chutney is running.
if ! nc -w 0 localhost 9008 < /dev/null >/dev/null 2>&1
then
    echo 'No chutney process running.' >&2
    echo 'Please start chutney before starting this script.' >&2
    exit 1
fi

python3 loop.py &

sleep 2

CWD="$PWD"
cd ..

python -m lightnion.proxy -vvv --purge-cache --static ./js-client/demo/: ./js-client/evaluation/: &

cd "$CWD"

sleep 10

for i in $(seq $NUM_PROCESS)
do
    chromium --headless --disable-gpu --disable-software-rasterizer --hide-scrollbars --remote-debugging-port=9222 http://localhost:4990/loop.html &
done

echo "Press any key to quit..." >&2

read

clean
exit 0
