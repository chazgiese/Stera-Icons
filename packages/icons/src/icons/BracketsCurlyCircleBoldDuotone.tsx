import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M10 7c.55 0 1 .45 1 1s-.45 1-1 1h-.5v1c0 .75-.28 1.45-.74 2 .46.55.74 1.25.74 2v1h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.6c-1.05 0-1.9-.85-1.9-1.9V14c0-.48-.32-.9-.78-1.04-.43-.13-.72-.52-.72-.96s.3-.83.72-.96c.46-.14.78-.56.78-1.05V8.9C7.5 7.85 8.35 7 9.4 7zM14.6 7c1.05 0 1.9.85 1.9 1.9V10c0 .48.32.9.78 1.04.43.13.72.52.72.96s-.3.83-.72.96c-.46.14-.78.56-.78 1.05v1.1c0 1.04-.85 1.89-1.9 1.89H14c-.55 0-1-.45-1-1s.45-1 1-1h.5v-1c0-.75.28-1.45.74-2-.46-.55-.74-1.25-.74-2V9H14c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

BracketsCurlyCircleBoldDuotone.displayName = 'BracketsCurlyCircleBoldDuotone';

// Triple export pattern
export { BracketsCurlyCircleBoldDuotone, BracketsCurlyCircleBoldDuotone as BracketsCurlyCircleBoldDuotoneIcon, BracketsCurlyCircleBoldDuotone as SiBracketsCurlyCircleBoldDuotone };
export default BracketsCurlyCircleBoldDuotone;
export type { BracketsCurlyCircleBoldDuotoneProps };
