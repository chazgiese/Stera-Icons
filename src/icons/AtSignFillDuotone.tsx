import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtSignFillDuotone = memo(
  forwardRef<SVGSVGElement, AtSignFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="at-sign-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 .5a11.5 11.5 0 0 1 11.44 12.65c-.28 2.88-2.04 4.88-4.32 5.07a1.5 1.5 0 0 0-.24-3c.44-.03 1.4-.5 1.58-2.37q.04-.42.04-.85a8.5 8.5 0 1 0-4.25 7.36 1.5 1.5 0 0 1 1.5 2.6A11.5 11.5 0 1 1 12 .5" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16 6.5c.83 0 1.5.67 1.5 1.5v5c0 1.01.29 1.59.55 1.87q.4.4.83.36a1.5 1.5 0 1 1 .24 2.99 4 4 0 0 1-3.73-1.9 5.5 5.5 0 1 1-.67-9.1A1.5 1.5 0 0 1 16 6.5m-4 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignFillDuotone.displayName = 'AtSignFillDuotone';

// Triple export pattern (lucide-react style)
export { AtSignFillDuotone, AtSignFillDuotone as AtSignFillDuotoneIcon, AtSignFillDuotone as SiAtSignFillDuotone };
export default AtSignFillDuotone;
export type { AtSignFillDuotoneProps };
