import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BubbleFillDuotone = memo(
  forwardRef<SVGSVGElement, BubbleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bubble-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.21 3.22c-.33-.23-.73-.3-1.11-.2l-.42.1a6.7 6.7 0 0 0-4.75 5.64q-.03.39.22.7a1 1 0 0 0 .62.38 1 1 0 0 0 .7-.16q.34-.22.44-.59l.07-.26a4.2 4.2 0 0 1 3.61-2.85c.4-.04.76-.23.99-.55s.31-.76.24-1.18-.29-.8-.61-1.03" clipRule="evenodd" opacity={.4} />
        <path d="M10.68 5.02c.38-.1.78-.03 1.1.2s.55.61.62 1.03c.08.42-.01.85-.24 1.18s-.59.51-.99.55l-.24.02a4.2 4.2 0 0 0-3.44 3.1q-.1.36-.44.58a1 1 0 0 1-.7.16 1 1 0 0 1-.62-.38q-.25-.31-.22-.7l.06-.4a6.7 6.7 0 0 1 5.1-5.34" />
    </IconBase>
  ))
);

BubbleFillDuotone.displayName = 'BubbleFillDuotone';

// Triple export pattern (lucide-react style)
export { BubbleFillDuotone, BubbleFillDuotone as BubbleFillDuotoneIcon, BubbleFillDuotone as SiBubbleFillDuotone };
export default BubbleFillDuotone;
export type { BubbleFillDuotoneProps };
