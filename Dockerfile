FROM alpine:latest
WORKDIR /app
COPY build/* ./
CMD ["/app/lotus"]
