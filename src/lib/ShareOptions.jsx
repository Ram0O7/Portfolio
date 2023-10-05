"use client";
import { useThemeContext } from "@/context/ThemeContext";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";
import { AiOutlineLink } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

export default function ShareOptions({ url }) {
  const { mode } = useThemeContext();
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.info("link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy!", err);
      toast.error("failed to copy!");
    }
  };

  return (
    <div className="flex gap-2">
      <FacebookShareButton url={url}>
        <FacebookIcon size={28} round />
      </FacebookShareButton>
      <PinterestShareButton url={url}>
        <PinterestIcon size={28} round />
      </PinterestShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={28} round />
      </RedditShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={28} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={28} round />
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={28} round />
      </TelegramShareButton>
      <button
        className="rounded-full"
        title="copy link"
        onClick={copyToClipboard}
      >
        <AiOutlineLink className="text-2xl" />
      </button>
      <ToastContainer theme={mode} autoClose={2000} />
    </div>
  );
}
