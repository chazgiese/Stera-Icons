import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BirdhouseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BirdhouseBoldDuotone = memo(
  forwardRef<SVGSVGElement, BirdhouseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m5.8 19-1.5-7.82 1.74-1.55L7.83 19zM17.96 9.63l1.74 1.55L18.2 19h-2.03z" opacity={0.4} />
        <path fill="currentColor" d="M19 19a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fill="currentColor" d="M10.34 3.14a2.5 2.5 0 0 1 3.32 0l8 7.11a1 1 0 0 1-1.32 1.5l-8-7.12a.5.5 0 0 0-.67 0l-8 7.12a1 1 0 0 1-1.33-1.5z" />
    </IconBase>
  ))
);

BirdhouseBoldDuotone.displayName = 'BirdhouseBoldDuotone';

// Triple export pattern (lucide-react style)
export { BirdhouseBoldDuotone, BirdhouseBoldDuotone as BirdhouseBoldDuotoneIcon, BirdhouseBoldDuotone as SiBirdhouseBoldDuotone };
export type { BirdhouseBoldDuotoneProps };
