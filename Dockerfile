FROM mhart/alpine-node AS builder
WORKDIR /app
COPY . .
RUN yarn run build

FROM node
EXPOSE 80
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]