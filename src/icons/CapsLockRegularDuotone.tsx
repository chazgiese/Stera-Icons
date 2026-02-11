import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CapsLockRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CapsLockRegularDuotone = memo(
  forwardRef<SVGSVGElement, CapsLockRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="caps-lock-duotone" {...props}>
      <path fillRule="evenodd" d="M10.59 1.85a2 2 0 0 1 2.82 0l8.27 8.27c.78.78.23 2.13-.89 2.13h-4.04v1.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-1.5H3.21a1.25 1.25 0 0 1-.89-2.13zm1.76 1.06a.5.5 0 0 0-.7 0L3.8 10.75H8c.41 0 .75.34.75.75v2.25c0 .28.22.5.5.5h5.5a.5.5 0 0 0 .5-.5V11.5c0-.41.34-.75.75-.75h4.19z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M14.75 17.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-1.5c0-1.1.9-2 2-2zm-5.5 1.5a.5.5 0 0 0-.5.5v1.5c0 .28.22.5.5.5h5.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

CapsLockRegularDuotone.displayName = 'CapsLockRegularDuotone';

// Triple export pattern (lucide-react style)
export { CapsLockRegularDuotone, CapsLockRegularDuotone as CapsLockRegularDuotoneIcon, CapsLockRegularDuotone as SiCapsLockRegularDuotone };
export default CapsLockRegularDuotone;
export type { CapsLockRegularDuotoneProps };
