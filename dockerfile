# BUILD STAGE
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --no-cache --ignore-scripts && npm cache clean --force

COPY . .

ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build:prod

# PRODUCTION STAGE
FROM node:22-alpine AS production

WORKDIR /production

COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

RUN npm ci --omit=dev --only=production --no-cache --ignore-scripts && \
    npm cache clean --force && \
    rm -rf /tmp/* /var/cache/apk/*

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

USER nodejs

ENV PORT=8070
EXPOSE 8070

CMD ["node", "dist/server/server.mjs"]