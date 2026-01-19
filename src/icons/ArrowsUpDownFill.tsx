import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowsUpDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownFill = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-up-down-fill" {...props}>
      <path fill="currentColor" d="M17 3a1 1 0 0 1 1 1v13h3a1 1 0 0 1 .7 1.7l-4 4a1 1 0 0 1-.54.29h-.14L17 23h-.07l-.1-.02h-.04l-.05-.02a1 1 0 0 1-.45-.25l-4-4A1 1 0 0 1 13 17h3V4a1 1 0 0 1 1-1M7.1 2l.06.01.04.01h.03l.06.02a1 1 0 0 1 .42.25l4 4A1 1 0 0 1 11 8H8v13a1 1 0 1 1-2 0V8H3a1 1 0 0 1-.7-1.7l4-4 .07-.07.13-.1h.01l.15-.07A1 1 0 0 1 7 2z" />
    </IconBase>
  ))
);

ArrowsUpDownFill.displayName = 'ArrowsUpDownFill';

// Triple export pattern (lucide-react style)
export { ArrowsUpDownFill, ArrowsUpDownFill as ArrowsUpDownFillIcon, ArrowsUpDownFill as SiArrowsUpDownFill };
export default ArrowsUpDownFill;
export type { ArrowsUpDownFillProps };
