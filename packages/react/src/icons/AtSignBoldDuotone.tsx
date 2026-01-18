import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtSignBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtSignBoldDuotone = memo(
  forwardRef<SVGSVGElement, AtSignBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1a11 11 0 0 1 10.95 12.1c-.27 2.71-1.9 4.46-3.87 4.62a1 1 0 1 0-.16-2c.75-.06 1.83-.78 2.04-2.82q.04-.45.04-.9a9 9 0 1 0-4.5 7.8 1 1 0 0 1 1 1.73A11 11 0 1 1 12 1" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16 7a1 1 0 0 1 1 1v5c0 1.1.32 1.81.68 2.2q.56.59 1.24.53a1 1 0 0 1 .16 1.99 3.5 3.5 0 0 1-2.88-1.17q-.41-.45-.67-1A4.98 4.98 0 0 1 7 12a5 5 0 0 1 8-4 1 1 0 0 1 1-1m-4 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignBoldDuotone.displayName = 'AtSignBoldDuotone';

export { AtSignBoldDuotone };
export type { AtSignBoldDuotoneProps };
