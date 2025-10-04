# 🚀 Next.js Project Template — Core Setup with Shadcn/UI & TanStack Query

Một template khởi tạo sẵn dành cho các dự án Frontend hiện đại, sử dụng **Next.js**, **Shadcn/UI**, và **TanStack Query** làm core libraries. Template giúp bạn bắt đầu nhanh chóng với cấu trúc chuẩn, UI component thống nhất, và hệ thống data-fetching mạnh mẽ.

---

## 🧱 Tech Stack

| Công nghệ      | Mục đích                                                             |
|----------------|---------------------------------------------------------------------|
| **Next.js 15+** | Framework React hỗ trợ App Router, SSR, API Routes                  |
| **Shadcn/UI**   | Bộ UI components dựa trên Radix + Tailwind, dễ tùy biến             |
| **TanStack Query (React Query)** | Data fetching & caching hiệu quả với server state management |
| **TypeScript**  | Static typing giúp code an toàn hơn                                 |
| **ESLint + Prettier** (optional) | Định dạng và giữ quy tắc code nhất quán            |

---

## 📁 Cấu trúc Thư Mục

```bash
src/
 ├─ app/               # Next.js App Router
 ├─ components/        # UI Components
 ├─ hooks/             # Custom hooks
 ├─ lib/               # Helper utilities
 ├─ apis/              # API client setup 
 ├─ styles/            # Global styles
 └─ icons/             # SVG icons (SVGR support)
```

## ⚙️ Features Đã Cấu Hình Sẵn

-  ✅ Shadcn/UI với các thành phần cơ bản (Button, Input, Dialog, Table,...)
-  ✅ TanStack Query Provider cấu hình sẵn ở layout.tsx
-  ✅ API Client Wrapper với fetch/axios (nếu có)
-  ✅ Dark Mode Support (tuỳ chọn)
-  ✅ SVG Loader (@svgr/webpack) hỗ trợ import <Icon /> trực tiếp

## 🚀 Cách chạy dự án
```bash
# Cài dependencies
pnpm install

# Chạy dev
pnpm dev

# Build production
pnpm build && pnpm start
```