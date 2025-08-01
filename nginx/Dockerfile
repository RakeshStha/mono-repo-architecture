
FROM node:20 AS builder

WORKDIR /repo
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/project-a ./apps/project-a
COPY apps/project-b ./apps/project-b
COPY packages/common ./packages/common

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

WORKDIR /repo/apps/project-a
RUN pnpm build

WORKDIR /repo/apps/project-b
RUN pnpm build

FROM nginx:alpine
COPY --from=builder /repo/apps/project-a/dist /usr/share/nginx/html/project-a
COPY --from=builder /repo/apps/project-b/dist /usr/share/nginx/html/project-b
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
