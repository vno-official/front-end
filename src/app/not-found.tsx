import { HeroGeometric } from "@/components/decoraters/background/shape";
import React from "react";

const NotFoundPage = () => {
  return (
    <HeroGeometric
      badge="Error 404"
      title1="Oops!"
      title2="Page Not Found"
      description="Có vẻ như bạn đã truy cập vào một đường dẫn không tồn tại hoặc trang này đã được di chuyển. Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ để tiếp tục trải nghiệm."
    />
  );
};

export default NotFoundPage;
