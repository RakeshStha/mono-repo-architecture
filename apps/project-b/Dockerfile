FROM node:20 AS builder

WORKDIR /app
COPY ../../ ./
RUN corepack enable && corepack prepare pnpm@latest --activate
ENV CI=true
RUN pnpm install --frozen-lockfile
RUN pnpm build --filter ./apps/project-b...

FROM nginx:alpine
COPY --from=builder /app/apps/project-b/dist /usr/share/nginx/html
EXPOSE 80
