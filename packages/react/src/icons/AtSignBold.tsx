import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtSignBoldProps = Omit<IconBaseProps, 'children'>;

const AtSignBold = memo(
  forwardRef<SVGSVGElement, AtSignBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 0 1 10.95 12.1c-.29 2.85-2.08 4.64-4.17 4.63a3.6 3.6 0 0 1-3.25-2.19A4.98 4.98 0 0 1 7 12a5 5 0 0 1 8-4 1 1 0 0 1 2 0v5c0 2.1 1.08 2.73 1.8 2.73.76 0 1.94-.68 2.16-2.83q.04-.45.04-.9a9 9 0 1 0-4.5 7.8 1 1 0 0 1 1 1.73A11 11 0 1 1 12 1m0 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignBold.displayName = 'AtSignBold';

// Triple export pattern (lucide-react style)
export { AtSignBold, AtSignBold as AtSignBoldIcon, AtSignBold as SiAtSignBold };
export type { AtSignBoldProps };
