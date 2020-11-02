import { Typography } from '@material-ui/core';
import Image from 'next/image';

function Info(props) {
  const { title } = props;
  return (
  <div>
      <Typography variant="h1">{title}</Typography>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={200}
        height={300}
      />
  </div>
  )
}

export default Info