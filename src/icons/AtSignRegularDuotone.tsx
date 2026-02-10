import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtSignRegularDuotone = memo(
  forwardRef<SVGSVGElement, AtSignRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="at-sign-duotone" {...props}>
      <path fill="currentColor" d="M12 2.25a9.75 9.75 0 0 1 9.7 10.72 4.6 4.6 0 0 1-1.8 3.47c-.96.66-2.14.75-3.14.23a.75.75 0 0 0 .69-1.33c.47.25 1.07.23 1.6-.14.52-.36 1.03-1.11 1.16-2.37q.04-.42.04-.83a8.25 8.25 0 1 0-4.13 7.15.75.75 0 0 1 .76 1.3A9.75 9.75 0 1 1 12 2.25" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.6 7.65c.41 0 .75.34.75.75v4.5c0 1.42.56 2.15 1.1 2.44a.75.75 0 0 1-.71 1.32 3.4 3.4 0 0 1-1.52-1.74A4.34 4.34 0 0 1 7.65 12a4.35 4.35 0 0 1 7.2-3.29V8.4c0-.41.34-.75.75-.75M12 9.15a2.85 2.85 0 1 0 2.84 3.14l.01-.29-.01-.3A2.85 2.85 0 0 0 12 9.16" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignRegularDuotone.displayName = 'AtSignRegularDuotone';

// Triple export pattern (lucide-react style)
export { AtSignRegularDuotone, AtSignRegularDuotone as AtSignRegularDuotoneIcon, AtSignRegularDuotone as SiAtSignRegularDuotone };
export default AtSignRegularDuotone;
export type { AtSignRegularDuotoneProps };
