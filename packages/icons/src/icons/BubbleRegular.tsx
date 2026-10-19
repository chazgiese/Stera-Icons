import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleRegularProps = Omit<IconBaseProps, 'children'>;

const BubbleRegular = memo(
  forwardRef<SVGSVGElement, BubbleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.74 5.4q.46-.11.83.15.38.28.47.76c.05.31-.02.63-.2.87q-.27.38-.73.43-.13 0-.26.03c-1.58.24-3.05 1.47-3.54 3.13l-.07.28q-.07.29-.32.45t-.54.13q-.28-.06-.47-.3-.17-.24-.15-.53l.06-.38C6.2 8.16 8 6.13 10.35 5.5z" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

BubbleRegular.displayName = 'BubbleRegular';

// Triple export pattern
export { BubbleRegular, BubbleRegular as BubbleRegularIcon, BubbleRegular as SiBubbleRegular };
export default BubbleRegular;
export type { BubbleRegularProps };
