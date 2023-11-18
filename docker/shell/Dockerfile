FROM alpine

# INSTALL UTILS
RUN apk update && apk add bash make postgresql-dev curl --no-cache

# INSTALL NODE
RUN apk add --update nodejs npm --no-cache
# INSTALL DENO
RUN curl -fsSL https://deno.land/x/install/install.sh | sh && mv /root/.deno/bin/deno /bin/deno