import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleFillProps = Omit<IconBaseProps, 'children'>;

const BubbleFill = memo(
  forwardRef<SVGSVGElement, BubbleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bubble-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.21 3.22c-.33-.23-.73-.3-1.11-.2l-.42.1a6.7 6.7 0 0 0-4.75 5.64q-.03.39.22.7a1 1 0 0 0 .62.38 1 1 0 0 0 .7-.16q.34-.22.44-.59l.07-.26a4.2 4.2 0 0 1 3.61-2.85c.4-.04.76-.23.99-.55s.32-.76.24-1.18c-.07-.42-.29-.8-.61-1.03" clipRule="evenodd" />
    </IconBase>
  ))
);

BubbleFill.displayName = 'BubbleFill';

// Triple export pattern (lucide-react style)
export { BubbleFill, BubbleFill as BubbleFillIcon, BubbleFill as SiBubbleFill };
export default BubbleFill;
export type { BubbleFillProps };
