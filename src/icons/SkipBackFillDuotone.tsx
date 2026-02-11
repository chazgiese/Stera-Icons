import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipBackFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SkipBackFillDuotone = memo(
  forwardRef<SVGSVGElement, SkipBackFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="skip-back-fill-duotone" {...props}>
      <path d="M18.62 3.87a2 2 0 0 1 1.48.8c.27.36.34.78.37 1.1q.04.51.03 1.22V17q0 .7-.03 1.22c-.03.32-.1.74-.37 1.1a2 2 0 0 1-1.48.8c-.46.03-.85-.15-1.13-.3q-.45-.25-1.03-.66L9.44 14.5q-.61-.4-1.03-.73c-.27-.22-.57-.5-.73-.9a2.3 2.3 0 0 1-.08-1.52l.08-.21.06-.15q.29-.49.67-.76.42-.33 1.03-.73l7.02-4.67q.58-.4 1.03-.65c.25-.14.58-.3.96-.3z" />
        <path d="M4.5 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

SkipBackFillDuotone.displayName = 'SkipBackFillDuotone';

// Triple export pattern (lucide-react style)
export { SkipBackFillDuotone, SkipBackFillDuotone as SkipBackFillDuotoneIcon, SkipBackFillDuotone as SiSkipBackFillDuotone };
export default SkipBackFillDuotone;
export type { SkipBackFillDuotoneProps };
