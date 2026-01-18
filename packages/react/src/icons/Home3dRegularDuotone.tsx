import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Home3dRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Home3dRegularDuotone = memo(
  forwardRef<SVGSVGElement, Home3dRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-.9V14a1 1 0 0 1 1-1zM20.03 10.1q.22.2.22.52v.13h-6.5V10q0-.3-.22-.53l-.22-.22h5.88z" />
        <path fill="currentColor" fillRule="evenodd" d="M15.38 4.25c.6 0 1.17.24 1.59.66l4.12 4.12c.42.42.66 1 .66 1.6v6.87c0 1.24-1 2.25-2.25 2.25h-15c-1.24 0-2.25-1-2.25-2.25v-6.88c0-.6.24-1.17.66-1.59l4.12-4.12c.42-.42 1-.66 1.6-.66zm-1.85 5.22q.22.23.22.53v8.25h5.75c.41 0 .75-.34.75-.75v-6.88q0-.31-.22-.53l-4.12-4.12a.8.8 0 0 0-.53-.22H9.8zm-9.56.62a.8.8 0 0 0-.22.53v6.88c0 .41.34.75.75.75h7.75v-7.94L8 6.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

Home3dRegularDuotone.displayName = 'Home3dRegularDuotone';

export { Home3dRegularDuotone };
export type { Home3dRegularDuotoneProps };
