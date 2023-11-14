type BoxLinkProps = {
  title: string;
  href: string;
  imgSrc: string;
  alt: string;
}

export const BoxLink = ({ title, href, imgSrc, alt }: BoxLinkProps) =>
  <a className="link" href={href}>
    <div className="container">
      <img className="image" src={imgSrc} alt={alt} />
      <div className="title">{title}</div>
    </div>
  </a>
