import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CirclesThreeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclesThreeBoldDuotone = memo(
  forwardRef<SVGSVGElement, CirclesThreeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circles-three-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 11.53a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M17.5 11.53a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclesThreeBoldDuotone.displayName = 'CirclesThreeBoldDuotone';

// Triple export pattern (lucide-react style)
export { CirclesThreeBoldDuotone, CirclesThreeBoldDuotone as CirclesThreeBoldDuotoneIcon, CirclesThreeBoldDuotone as SiCirclesThreeBoldDuotone };
export type { CirclesThreeBoldDuotoneProps };
