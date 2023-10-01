import Image from "next/image";
import Link from "next/link";

export default function HeaderImg({ img, metadata, alt }) {
  return (
    <>
      <div className="relative object-cover w-full h-72 sm:h-96 sm:w-4/5 mx-auto overflow-hidden">
        <Image
          src={img}
          alt={alt}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="/images/backgroundEffect.jpg"
          className="object-cover rounded-sm"
        />
      </div>
      <div className="attribute pt-1">
        <p className="text-xs text-center !m-0">
          Photo by{" "}
          <Link
            href={`${metadata[1]}/?utm_source=ramkrishn+rai&utm_medium=referral`}
          >
            {metadata[0]}
          </Link>{" "}
          on{" "}
          <Link
            href={`${metadata[3]}/?utm_source=ramkrishn+rai&utm_medium=referral`}
          >
            {metadata[2]}
          </Link>
        </p>
      </div>
    </>
  );
}
