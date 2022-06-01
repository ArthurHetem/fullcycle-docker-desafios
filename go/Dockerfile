FROM golang:alpine3.16 as build

WORKDIR /src/rocks

COPY . .

RUN go mod init main

RUN go build -o /main main.go


FROM scratch
WORKDIR /
COPY --from=build /main /main

EXPOSE 3000

ENTRYPOINT ["/main"]