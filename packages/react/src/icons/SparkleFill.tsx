import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SparkleFillProps = Omit<IconBaseProps, 'children'>;

const SparkleFill = memo(
  forwardRef<SVGSVGElement, SparkleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1a1 1 0 0 1 .96.7l1.09 3.6a7 7 0 0 0 4.66 4.65l3.58 1.1a1 1 0 0 1 0 1.9l-3.58 1.1a7 7 0 0 0-4.66 4.66l-1.1 3.58a1 1 0 0 1-1.9 0l-1.1-3.58a7 7 0 0 0-4.66-4.66l-3.58-1.1a1 1 0 0 1 0-1.9l3.58-1.1A7 7 0 0 0 9.95 5.3l1.1-3.58A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

SparkleFill.displayName = 'SparkleFill';

// Triple export pattern (lucide-react style)
export { SparkleFill, SparkleFill as SparkleFillIcon, SparkleFill as SiSparkleFill };
export type { SparkleFillProps };
