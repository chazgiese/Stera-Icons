import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BubbleBoldDuotone = memo(
  forwardRef<SVGSVGElement, BubbleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bubble-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.18 5.52c.38-.1.78-.03 1.1.2s.55.61.62 1.03c.08.42-.01.85-.24 1.18s-.59.51-.99.55l-.24.02A4.2 4.2 0 0 0 8 11.6q-.1.36-.44.58a1 1 0 0 1-.7.16 1 1 0 0 1-.62-.38q-.25-.31-.22-.7l.06-.4a6.7 6.7 0 0 1 5.1-5.34" />
    </IconBase>
  ))
);

BubbleBoldDuotone.displayName = 'BubbleBoldDuotone';

// Triple export pattern (lucide-react style)
export { BubbleBoldDuotone, BubbleBoldDuotone as BubbleBoldDuotoneIcon, BubbleBoldDuotone as SiBubbleBoldDuotone };
export default BubbleBoldDuotone;
export type { BubbleBoldDuotoneProps };
