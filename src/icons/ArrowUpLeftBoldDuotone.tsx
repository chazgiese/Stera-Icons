import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M18.7 17.3a1 1 0 0 1-1.4 1.4L7 8.42V7h1.41z" opacity={.4} />
        <path fill="currentColor" d="M16 5a1 1 0 0 1 0 2H7v9a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftBoldDuotone.displayName = 'ArrowUpLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftBoldDuotone, ArrowUpLeftBoldDuotone as ArrowUpLeftBoldDuotoneIcon, ArrowUpLeftBoldDuotone as SiArrowUpLeftBoldDuotone };
export type { ArrowUpLeftBoldDuotoneProps };
