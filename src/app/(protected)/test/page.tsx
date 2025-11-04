"use client";
import PreviewImages from "@/components/common/preview-images";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const images = [
  {
    src: "https://plus.unsplash.com/premium_photo-1759468254881-4fdd421a770b?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    key: 1,
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1759171669032-beafad2287ee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    key: 2,
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1759528278887-71c168973ad1?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    key: 3,
    alt: "Image 3",
  },
];
const TestPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <Button onClick={() => setOpen(true)}>Open</Button>
      </div>
      <PreviewImages
        images={images}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default TestPage;
