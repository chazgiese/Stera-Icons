import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BirdhouseBoldProps = Omit<IconBaseProps, 'children'>;

const BirdhouseBold = memo(
  forwardRef<SVGSVGElement, BirdhouseBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="birdhouse-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M10.34 3.14a2.5 2.5 0 0 1 3.32 0l8 7.11a1 1 0 0 1-1.32 1.5l-.64-.57L18.2 19h.8a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h.8l-1.5-7.82-.64.57a1 1 0 0 1-1.32-1.5zm2 1.5a.5.5 0 0 0-.67 0l-5.63 5L7.83 19h8.34l1.79-9.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

BirdhouseBold.displayName = 'BirdhouseBold';

// Triple export pattern (lucide-react style)
export { BirdhouseBold, BirdhouseBold as BirdhouseBoldIcon, BirdhouseBold as SiBirdhouseBold };
export default BirdhouseBold;
export type { BirdhouseBoldProps };
