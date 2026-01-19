import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WrenchRegularProps = Omit<IconBaseProps, 'children'>;

const WrenchRegular = memo(
  forwardRef<SVGSVGElement, WrenchRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrench" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.63 4.33a7.1 7.1 0 0 1 6.61-1.9c1.04.24 1.2 1.45.57 2.08l-2.83 2.83.52 2.16 2.16.52 2.83-2.83c.59-.59 1.7-.48 2.03.38l.05.19.09.43a7.1 7.1 0 0 1-9.01 7.96l-4.6 4.6a3.4 3.4 0 0 1-4.8-4.8l4.6-4.6a7.1 7.1 0 0 1 1.78-7.02m5.77-.53a5.6 5.6 0 0 0-6 7.5c.1.27.04.58-.17.79L4.3 17.02a1.9 1.9 0 0 0 2.68 2.68l4.93-4.93.08-.07c.2-.15.47-.2.71-.1a5.6 5.6 0 0 0 7.5-6l-2.77 2.77a.8.8 0 0 1-.7.2l-3.03-.71a.8.8 0 0 1-.56-.56l-.71-3.02a.8.8 0 0 1 .2-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

WrenchRegular.displayName = 'WrenchRegular';

// Triple export pattern (lucide-react style)
export { WrenchRegular, WrenchRegular as WrenchRegularIcon, WrenchRegular as SiWrenchRegular };
export type { WrenchRegularProps };
