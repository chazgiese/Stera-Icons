import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceFillProps = Omit<IconBaseProps, 'children'>;

const PeaceFill = memo(
  forwardRef<SVGSVGElement, PeaceFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace-fill" {...props}>
      <path d="M11 21.95c-2.01-.2-3.85-1-5.33-2.21l.04-.03L11 14.4zM18.3 19.7q0 .03.03.04a10 10 0 0 1-5.33 2.2v-7.53zM11 11.59l-6.7 6.7-.04.04A10 10 0 0 1 11 2.05zM13 2.05a10 10 0 0 1 6.74 16.28l-.03-.04L13 11.6z" />
    </IconBase>
  ))
);

PeaceFill.displayName = 'PeaceFill';

// Triple export pattern (lucide-react style)
export { PeaceFill, PeaceFill as PeaceFillIcon, PeaceFill as SiPeaceFill };
export default PeaceFill;
export type { PeaceFillProps };
