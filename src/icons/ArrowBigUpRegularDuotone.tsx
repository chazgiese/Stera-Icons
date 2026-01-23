import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-up-duotone" {...props}>
      <path fill="currentColor" d="M15.25 13.5c0 .41.34.75.75.75h.75v4.25c0 1.24-1 2.25-2.25 2.25h-5c-1.24 0-2.25-1-2.25-2.25v-4.25H8c.41 0 .75-.34.75-.75v5c0 .41.34.75.75.75h5c.41 0 .75-.34.75-.75z" opacity={.4} />
        <path fill="currentColor" d="M10.59 3.85a2 2 0 0 1 2.82 0l8.27 8.27c.78.78.23 2.13-.89 2.13H16a.75.75 0 0 1 0-1.5h4.19l-7.84-7.84a.5.5 0 0 0-.7 0L3.8 12.75H8a.75.75 0 0 1 0 1.5H3.2a1.25 1.25 0 0 1-.88-2.13z" />
    </IconBase>
  ))
);

ArrowBigUpRegularDuotone.displayName = 'ArrowBigUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigUpRegularDuotone, ArrowBigUpRegularDuotone as ArrowBigUpRegularDuotoneIcon, ArrowBigUpRegularDuotone as SiArrowBigUpRegularDuotone };
export default ArrowBigUpRegularDuotone;
export type { ArrowBigUpRegularDuotoneProps };
