import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Home3dBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Home3dBoldDuotone = memo(
  forwardRef<SVGSVGElement, Home3dBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-3d-bold-duotone" {...props}>
      <path d="M8.5 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-.9V14a1 1 0 0 1 1-1zM19.85 10.27q.15.15.15.35V11h-6v-1a1 1 0 0 0-.3-.7l-.29-.3h5.18z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.38 4c.66 0 1.3.26 1.77.73l4.12 4.12c.47.47.73 1.1.73 1.77v6.88a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-6.88c0-.66.26-1.3.73-1.77l4.12-4.12A2.5 2.5 0 0 1 8.62 4zM13.7 9.3q.3.3.29.7v8h5.5a.5.5 0 0 0 .5-.5v-6.88a.5.5 0 0 0-.15-.35l-4.12-4.12a.5.5 0 0 0-.35-.15H10.4zm-9.56.97a.5.5 0 0 0-.15.35v6.88c0 .28.22.5.5.5H12v-7.59l-4-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

Home3dBoldDuotone.displayName = 'Home3dBoldDuotone';

// Triple export pattern (lucide-react style)
export { Home3dBoldDuotone, Home3dBoldDuotone as Home3dBoldDuotoneIcon, Home3dBoldDuotone as SiHome3dBoldDuotone };
export type { Home3dBoldDuotoneProps };
