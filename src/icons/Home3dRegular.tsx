import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Home3dRegularProps = Omit<IconBaseProps, 'children'>;

const Home3dRegular = memo(
  forwardRef<SVGSVGElement, Home3dRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-3d" {...props}>
      <path fill="currentColor" d="M8.5 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-.9V14a1 1 0 0 1 1-1z" />
        <path fill="currentColor" fillRule="evenodd" d="M15.38 4.25c.6 0 1.17.24 1.59.66l4.12 4.12c.42.42.66 1 .66 1.6v6.87c0 1.24-1 2.25-2.25 2.25h-15c-1.24 0-2.25-1-2.25-2.25v-6.88c0-.6.24-1.17.66-1.59l4.12-4.12c.42-.42 1-.66 1.6-.66zM3.97 10.09a.8.8 0 0 0-.22.53v6.88c0 .41.34.75.75.75h7.75v-7.94L8 6.06zm9.78 8.16h5.75c.41 0 .75-.34.75-.75V11a.25.25 0 0 0-.25-.25h-6.25zm-.44-9h5.88L15.9 5.97a.8.8 0 0 0-.53-.22H9.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

Home3dRegular.displayName = 'Home3dRegular';

// Triple export pattern (lucide-react style)
export { Home3dRegular, Home3dRegular as Home3dRegularIcon, Home3dRegular as SiHome3dRegular };
export default Home3dRegular;
export type { Home3dRegularProps };
