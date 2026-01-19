import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BubbleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BubbleRegularDuotone = memo(
  forwardRef<SVGSVGElement, BubbleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bubble-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.81 4.97q.46-.09.84.17.37.27.46.76c.05.3-.02.62-.19.86-.17.25-.44.4-.73.43l-.3.04a5.1 5.1 0 0 0-4.07 3.9.76.76 0 0 1-.85.57.8.8 0 0 1-.48-.29.8.8 0 0 1-.15-.53l.07-.42a7 7 0 0 1 5.4-5.49" />
    </IconBase>
  ))
);

BubbleRegularDuotone.displayName = 'BubbleRegularDuotone';

// Triple export pattern (lucide-react style)
export { BubbleRegularDuotone, BubbleRegularDuotone as BubbleRegularDuotoneIcon, BubbleRegularDuotone as SiBubbleRegularDuotone };
export type { BubbleRegularDuotoneProps };
