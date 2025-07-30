# # Stage 1: Build
# FROM node:20 AS builder

# WORKDIR /repo
# COPY . .

# RUN corepack enable && corepack prepare pnpm@10.13.1 --activate
# RUN CI=true pnpm install --frozen-lockfile

# # Build all apps
# RUN pnpm build --filter project-a...
# RUN pnpm build --filter project-b...

# # Stage 2: Serve all apps with Nginx
# FROM nginx:alpine

# COPY --from=builder /repo/apps/project-a/dist /usr/share/nginx/html
# COPY --from=builder /repo/apps/project-b/dist /usr/share/nginx/html/about

# COPY ./nginx-multi.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
