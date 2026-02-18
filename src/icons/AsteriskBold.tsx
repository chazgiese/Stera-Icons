import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskBoldProps = Omit<IconBaseProps, 'children'>;

const AsteriskBold = memo(
  forwardRef<SVGSVGElement, AsteriskBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="asterisk-bold" {...props}>
      <path d="M12 2a1 1 0 0 1 1 1v6.4c0 .38.42.62.75.43l5.55-3.2a1 1 0 0 1 1 1.73l-5.55 3.2a.5.5 0 0 0 0 .87l5.55 3.2a1 1 0 1 1-1 1.73l-5.55-3.2a.5.5 0 0 0-.75.43V21a1 1 0 0 1-2 0v-6.4a.5.5 0 0 0-.75-.44l-5.54 3.2a1 1 0 1 1-1-1.73l5.55-3.2a.5.5 0 0 0 0-.87L3.7 8.36a1 1 0 1 1 1-1.73l5.54 3.2a.5.5 0 0 0 .75-.44V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AsteriskBold.displayName = 'AsteriskBold';

// Triple export pattern (lucide-react style)
export { AsteriskBold, AsteriskBold as AsteriskBoldIcon, AsteriskBold as SiAsteriskBold };
export default AsteriskBold;
export type { AsteriskBoldProps };
