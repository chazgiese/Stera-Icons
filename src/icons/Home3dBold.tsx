import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Home3dBoldProps = Omit<IconBaseProps, 'children'>;

const Home3dBold = memo(
  forwardRef<SVGSVGElement, Home3dBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-3d-bold" {...props}>
      <path fill="currentColor" d="M8.5 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-.9V14a1 1 0 0 1 1-1z" />
        <path fill="currentColor" fillRule="evenodd" d="M15.38 4c.66 0 1.3.26 1.77.73l4.12 4.12c.47.47.73 1.1.73 1.77v6.88a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-6.88c0-.66.26-1.3.73-1.77l4.12-4.12A2.5 2.5 0 0 1 8.62 4zM4.15 10.27a.5.5 0 0 0-.15.35v6.88c0 .28.22.5.5.5H12v-7.59l-4-4zM14 18h5.5a.5.5 0 0 0 .5-.5V11h-6zm-.59-9h5.18l-2.86-2.85a.5.5 0 0 0-.35-.15H10.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

Home3dBold.displayName = 'Home3dBold';

// Triple export pattern (lucide-react style)
export { Home3dBold, Home3dBold as Home3dBoldIcon, Home3dBold as SiHome3dBold };
export default Home3dBold;
export type { Home3dBoldProps };
