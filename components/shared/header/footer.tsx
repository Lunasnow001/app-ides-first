"use client";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 rounded-none w-full"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 w-4 h-4" />
          Back to top
        </Button>
        <div className="p-4">
          <div className="flex justify-center gap-3 text-sm">
            <Link href="/page/conditions-of-use">Conditions of Use</Link>
            <Link href="/page/privacy-policy">Privacy Notice</Link>
            <Link href="/page/help">Help</Link>
          </div>
          <div className="flex justify-center text-sm">
            <p>
              {" "}
              &copy; 2007-{new Date().getFullYear()}, {APP_NAME}, Inc. or its
              affiliates
            </p>
          </div>
          <div className="flex justify-center mt-8 text-gray-400 text-sm">
            123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890
          </div>
        </div>
      </div>
    </footer>
  );
}
