import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignBoldProps = Omit<IconBaseProps, 'children'>;

const AtSignBold = memo(
  forwardRef<SVGSVGElement, AtSignBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="at-sign-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 0 1 9.95 11c-.26 2.6-1.9 4.27-3.84 4.26a3.3 3.3 0 0 1-2.96-1.9A4.58 4.58 0 0 1 7.4 12a4.6 4.6 0 0 1 7.22-3.78 1 1 0 0 1 1.98.18v4.5c0 1.85.94 2.36 1.52 2.36.62 0 1.65-.56 1.84-2.46q.04-.4.04-.8a8 8 0 1 0-4 6.93 1 1 0 0 1 1 1.73A10 10 0 1 1 12 2m0 7.4a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignBold.displayName = 'AtSignBold';

// Triple export pattern (lucide-react style)
export { AtSignBold, AtSignBold as AtSignBoldIcon, AtSignBold as SiAtSignBold };
export default AtSignBold;
export type { AtSignBoldProps };
