import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseFillProps = Omit<IconBaseProps, 'children'>;

const PauseFill = memo(
  forwardRef<SVGSVGElement, PauseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-fill" {...props}>
      <path d="M8.75 2.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25h-2.5c-1.24 0-2.25-1-2.25-2.25V4.75C4 3.51 5 2.5 6.25 2.5zM17.75 2.5c1.24 0 2.25 1 2.25 2.25v14.5c0 1.24-1 2.25-2.25 2.25h-2.5c-1.24 0-2.25-1-2.25-2.25V4.75c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

PauseFill.displayName = 'PauseFill';

// Triple export pattern (lucide-react style)
export { PauseFill, PauseFill as PauseFillIcon, PauseFill as SiPauseFill };
export default PauseFill;
export type { PauseFillProps };
