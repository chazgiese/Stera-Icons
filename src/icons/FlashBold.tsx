import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlashBoldProps = Omit<IconBaseProps, 'children'>;

const FlashBold = memo(
  forwardRef<SVGSVGElement, FlashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flash-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.71 1.25a1 1 0 0 1 1.62 1.06L15 9.56l4.33 1.5a1 1 0 0 1 .33 1.7l-11.37 10a1 1 0 0 1-1.62-1.07L9 14.44l-4.33-1.5a1 1 0 0 1-.33-1.7zM6.95 11.62l3.63 1.25a1 1 0 0 1 .62 1.25l-1.52 4.74 7.37-6.48-3.63-1.25a1 1 0 0 1-.62-1.25l1.52-4.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashBold.displayName = 'FlashBold';

// Triple export pattern (lucide-react style)
export { FlashBold, FlashBold as FlashBoldIcon, FlashBold as SiFlashBold };
export type { FlashBoldProps };
