import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwatchBookFillProps = Omit<IconBaseProps, 'children'>;

const SwatchBookFill = memo(
  forwardRef<SVGSVGElement, SwatchBookFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="swatch-book-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.5 2A2.5 2.5 0 0 1 12 4.5v.43a3 3 0 0 1 4.2.05l2.82 2.83a3 3 0 0 1 .05 4.2A3 3 0 0 1 22 15v4a3 3 0 0 1-3 3H6.8a5 5 0 0 1-.87-.12h-.05l-.43-.13-.06-.02-.39-.15h-.03l-.03-.02a5 5 0 0 1-1.15-.73l-.02-.02-.07-.05q-.4-.36-.73-.8l-.03-.04a5 5 0 0 1-.43-.71v-.03l-.05-.1L2.4 19l-.06-.14a5 5 0 0 1-.22-.72v-.03A5 5 0 0 1 2 17V4.5A2.5 2.5 0 0 1 4.5 2zm1.57 18H19a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.93zM7 15.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m7.78-9.36a1 1 0 0 0-1.42 0L12 7.76v8.48l5.6-5.6a1 1 0 0 0 0-1.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookFill.displayName = 'SwatchBookFill';

// Triple export pattern (lucide-react style)
export { SwatchBookFill, SwatchBookFill as SwatchBookFillIcon, SwatchBookFill as SiSwatchBookFill };
export default SwatchBookFill;
export type { SwatchBookFillProps };
