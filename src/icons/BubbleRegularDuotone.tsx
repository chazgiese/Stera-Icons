import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BubbleRegularDuotone = memo(
  forwardRef<SVGSVGElement, BubbleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bubble-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.74 5.4q.45-.11.83.15.38.28.46.76c.06.31-.01.63-.18.87q-.28.38-.74.43-.13 0-.26.03a4.5 4.5 0 0 0-3.61 3.41.8.8 0 0 1-.32.45.8.8 0 0 1-.54.13.8.8 0 0 1-.47-.3.8.8 0 0 1-.15-.53l.06-.38a6.4 6.4 0 0 1 4.92-5.03" />
    </IconBase>
  ))
);

BubbleRegularDuotone.displayName = 'BubbleRegularDuotone';

// Triple export pattern (lucide-react style)
export { BubbleRegularDuotone, BubbleRegularDuotone as BubbleRegularDuotoneIcon, BubbleRegularDuotone as SiBubbleRegularDuotone };
export default BubbleRegularDuotone;
export type { BubbleRegularDuotoneProps };
