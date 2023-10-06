"use client";
import {
  FacebookShareButton,
  FacebookIcon,
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

export default function ShareOptions({ url }) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy!", err);
      alert("failed to copy!");
    }
  };

  return (
    <div className="flex gap-2">
      <FacebookShareButton url={url}>
        <FacebookIcon size={28} round />
      </FacebookShareButton>
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
    </div>
  );
}
