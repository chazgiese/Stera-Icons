import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleRegularProps = Omit<IconBaseProps, 'children'>;

const BubbleRegular = memo(
  forwardRef<SVGSVGElement, BubbleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bubble" {...props}>
      <path d="M10.74 5.4q.46-.11.83.15.38.28.47.76c.05.31-.02.63-.2.87q-.27.38-.73.43-.13 0-.26.03a4.5 4.5 0 0 0-3.61 3.41.8.8 0 0 1-.32.45.8.8 0 0 1-.54.13.7.7 0 0 1-.47-.3.8.8 0 0 1-.15-.53l.06-.38a6.4 6.4 0 0 1 4.92-5.03" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BubbleRegular.displayName = 'BubbleRegular';

// Triple export pattern (lucide-react style)
export { BubbleRegular, BubbleRegular as BubbleRegularIcon, BubbleRegular as SiBubbleRegular };
export default BubbleRegular;
export type { BubbleRegularProps };
