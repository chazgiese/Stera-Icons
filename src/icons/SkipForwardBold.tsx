import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SkipForwardBoldProps = Omit<IconBaseProps, 'children'>;

const SkipForwardBold = memo(
  forwardRef<SVGSVGElement, SkipForwardBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="skip-forward-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.86 2.84c.45-.04.84.13 1.12.28q.45.24 1.03.62l9.44 6.07q.51.32.87.6c.23.18.51.43.67.81a2 2 0 0 1 0 1.56c-.16.38-.44.63-.67.81q-.36.28-.87.6L7 20.26q-.59.38-1.03.62c-.28.15-.67.32-1.12.28a2 2 0 0 1-1.46-.8 2 2 0 0 1-.37-1.1q-.04-.49-.03-1.2V5.94q0-.7.03-1.2c.03-.32.1-.74.37-1.1a2 2 0 0 1 1.46-.8m.16 2.07C5 5.13 5 5.43 5 5.93v12.14c0 .5 0 .8.02 1.01v.04l.04-.01c.19-.1.45-.27.86-.54l9.45-6.07q.53-.33.72-.48l.02-.02-.02-.02q-.2-.15-.72-.49L5.92 5.44c-.41-.27-.67-.44-.86-.54l-.03-.01z" clipRule="evenodd" />
        <path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SkipForwardBold.displayName = 'SkipForwardBold';

// Triple export pattern (lucide-react style)
export { SkipForwardBold, SkipForwardBold as SkipForwardBoldIcon, SkipForwardBold as SiSkipForwardBold };
export type { SkipForwardBoldProps };
