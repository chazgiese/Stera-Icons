import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AsteriskBoldDuotone = memo(
  forwardRef<SVGSVGElement, AsteriskBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="asterisk-bold-duotone" {...props}>
      <path d="M13 13.72V21a1 1 0 0 1-2 0v-7.28l1-.57zM3.35 7a1 1 0 0 1 1.36-.37L11 10.26v1.15L10 12 3.71 8.36A1 1 0 0 1 3.35 7M19.3 6.63a1 1 0 0 1 1 1.73L14 12l-1-.58v-1.15z" opacity={0.4} />
        <path d="M12 2a1 1 0 0 1 1 1v8.41l7.3 4.22a1 1 0 0 1-1 1.73L12 13.15l-7.29 4.21a1 1 0 0 1-1-1.73l7.3-4.22V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AsteriskBoldDuotone.displayName = 'AsteriskBoldDuotone';

// Triple export pattern (lucide-react style)
export { AsteriskBoldDuotone, AsteriskBoldDuotone as AsteriskBoldDuotoneIcon, AsteriskBoldDuotone as SiAsteriskBoldDuotone };
export default AsteriskBoldDuotone;
export type { AsteriskBoldDuotoneProps };
