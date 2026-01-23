import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BirdhouseFillProps = Omit<IconBaseProps, 'children'>;

const BirdhouseFill = memo(
  forwardRef<SVGSVGElement, BirdhouseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="birdhouse-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.34 3.14a2.5 2.5 0 0 1 3.32 0l8 7.11a1 1 0 0 1-1.32 1.5l-.86-.76L17.95 19H19a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h1.05l-1.53-8.01-.86.76a1 1 0 0 1-1.32-1.5zM12 10a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

BirdhouseFill.displayName = 'BirdhouseFill';

// Triple export pattern (lucide-react style)
export { BirdhouseFill, BirdhouseFill as BirdhouseFillIcon, BirdhouseFill as SiBirdhouseFill };
export default BirdhouseFill;
export type { BirdhouseFillProps };
