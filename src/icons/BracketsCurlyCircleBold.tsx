import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyCircleBoldProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleBold = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-circle-bold" {...props}>
      <path d="M10 7a1 1 0 1 1 0 2h-.5v1a3 3 0 0 1-.74 2c.46.55.74 1.25.74 2v1h.5a1 1 0 1 1 0 2h-.6a1.9 1.9 0 0 1-1.9-1.9V14c0-.48-.32-.9-.78-1.04a1 1 0 0 1 0-1.92c.46-.14.78-.56.78-1.05V8.9C7.5 7.85 8.35 7 9.4 7zM14.6 7c1.05 0 1.9.85 1.9 1.9V10c0 .48.32.9.78 1.04a1 1 0 0 1 0 1.92A1.1 1.1 0 0 0 16.5 14v1.1A1.9 1.9 0 0 1 14.6 17H14a1 1 0 1 1 0-2h.5v-1c0-.75.28-1.45.74-2a3 3 0 0 1-.74-2V9H14a1 1 0 1 1 0-2z" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsCurlyCircleBold.displayName = 'BracketsCurlyCircleBold';

// Triple export pattern (lucide-react style)
export { BracketsCurlyCircleBold, BracketsCurlyCircleBold as BracketsCurlyCircleBoldIcon, BracketsCurlyCircleBold as SiBracketsCurlyCircleBold };
export default BracketsCurlyCircleBold;
export type { BracketsCurlyCircleBoldProps };
