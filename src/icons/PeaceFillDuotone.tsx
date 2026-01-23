import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PeaceFillDuotone = memo(
  forwardRef<SVGSVGElement, PeaceFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace-fill-duotone" {...props}>
      <path d="M11 22.95a11 11 0 0 1-6.04-2.5L11 14.41zM19.04 20.45a11 11 0 0 1-6.04 2.5v-8.54zM4.58 20.12l.22.2-.2-.18zM19.4 20.14l-.2.17.22-.19zM11 11.59l-7.45 7.45a11 11 0 0 1 7.45-18zM13 1.05a11 11 0 0 1 7.45 17.99L13 11.59z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1q.5 0 1 .04V11.6l7.45 7.45q-.64.77-1.41 1.41L13 14.41v8.55a11 11 0 0 1-2 0V14.4l-6.04 6.04q-.77-.64-1.41-1.41L11 11.59V1.04Q11.5 1 12 1" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M13 1.04a11 11 0 0 0-2 0V11.6l-7.45 7.45q.64.77 1.41 1.41L11 14.41v8.55a11 11 0 0 0 2 0V14.4l6.04 6.04q.77-.64 1.41-1.41L13 11.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

PeaceFillDuotone.displayName = 'PeaceFillDuotone';

// Triple export pattern (lucide-react style)
export { PeaceFillDuotone, PeaceFillDuotone as PeaceFillDuotoneIcon, PeaceFillDuotone as SiPeaceFillDuotone };
export default PeaceFillDuotone;
export type { PeaceFillDuotoneProps };
