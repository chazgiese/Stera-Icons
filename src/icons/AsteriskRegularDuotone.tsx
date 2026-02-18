import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AsteriskRegularDuotone = memo(
  forwardRef<SVGSVGElement, AsteriskRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="asterisk-duotone" {...props}>
      <path d="M12.75 13.29V21a.75.75 0 0 1-1.5 0v-7.71l.75-.43zM3.56 7.12a.75.75 0 0 1 1.03-.27l6.66 3.84v.87l-.75.43-6.66-3.85a.75.75 0 0 1-.28-1.02M19.42 6.85a.75.75 0 0 1 .75 1.3l-6.67 3.84-.75-.43v-.87z" opacity={0.4} />
        <path d="M12 2.25c.41 0 .75.34.75.75v8.56l7.43 4.29a.75.75 0 0 1-.75 1.3L12 12.85l-7.42 4.3a.75.75 0 1 1-.75-1.3l7.42-4.3V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AsteriskRegularDuotone.displayName = 'AsteriskRegularDuotone';

// Triple export pattern (lucide-react style)
export { AsteriskRegularDuotone, AsteriskRegularDuotone as AsteriskRegularDuotoneIcon, AsteriskRegularDuotone as SiAsteriskRegularDuotone };
export default AsteriskRegularDuotone;
export type { AsteriskRegularDuotoneProps };
