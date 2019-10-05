FROM python:3.7-alpine
WORKDIR /lightnion
RUN apk update

EXPOSE 9001
EXPOSE 5000
EXPOSE 4990

# Install requirements
COPY requirements.txt requirements-proxy.txt LICENSE ./
# COPY js-client js-client/
COPY lightnion lightnion/
COPY tools tools/

RUN apk add openjdk10-jdk build-base libffi-dev openssl openssl-dev git bash ncurses
RUN pip install -r requirements.txt
RUN pip install -r requirements-proxy.txt
ENV PYTHONPATH=$PWD

# Build JS-Client
# RUN make -C js-client


# ENTRYPOINT /bin/sh

ENTRYPOINT python -m lightnion.proxy -s 86.59.21.38:443 -d 80 -c 9051

