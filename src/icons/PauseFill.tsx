import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PauseFillProps = Omit<IconBaseProps, 'children'>;

const PauseFill = memo(
  forwardRef<SVGSVGElement, PauseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pause-fill" {...props}>
      <path fill="currentColor" d="M8 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM18 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" />
    </IconBase>
  ))
);

PauseFill.displayName = 'PauseFill';

// Triple export pattern (lucide-react style)
export { PauseFill, PauseFill as PauseFillIcon, PauseFill as SiPauseFill };
export default PauseFill;
export type { PauseFillProps };
