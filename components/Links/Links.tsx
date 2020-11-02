import Image from 'next/image';

function Links(props) {
  const { links } = props;
  return (
  <div>
      {
          links.map((link, index) => (
            <div key={index}>
              <a href={link.url}>
                <Image
                    src={link.logo}
                    alt={link.name}
                    width={50}
                    height={50}
                />
            </a>
            </div>
          ))
      }
  </div>
  )
}

export default Links;