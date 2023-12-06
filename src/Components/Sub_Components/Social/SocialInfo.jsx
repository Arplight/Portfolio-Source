export default function SocialInfo() {
  return (
    <div className="social-info m-auto hidden md:flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-8 ">
      <span>
        <p className="inline text-xs">E-MAIL&nbsp;&nbsp;</p>
        <a
          className="link text-base"
          href="mailto:muhammad96osama@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          muhammad96osama@gmail.com
        </a>
      </span>
      <span>
        <p className="inline text-xs">PHONE&nbsp;&nbsp;</p>
        <a
          className="link"
          href="tel:+201003793140"
          target="_blank"
          rel="noopener noreferrer"
        >
          +2 (010) 0379 3140
        </a>
      </span>
    </div>
  );
}
