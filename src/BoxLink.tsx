type BoxLinkProps = {
  title: string;
  href: string;
  imgSrc: string;
  alt: string;
}

export const BoxLink = ({title, href, imgSrc, alt}:BoxLinkProps) => 
<div style={styles.container}>
  <a style={styles.link} href={href}>
    <img style={styles.image} src={imgSrc} alt={alt} />
  </a>
  <div>{title}</div>
</div>

const styles = {
  container: {
    display: "flex",
    flexDirection: 'column',
    gap: 15,
  },
  link: {
    height: '20vw',
    width: '20vw',
    border: '1px solid black'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 50%'
  }
} as const;