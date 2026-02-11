import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonStarFillProps = Omit<IconBaseProps, 'children'>;

const MoonStarFill = memo(
  forwardRef<SVGSVGElement, MoonStarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-star-fill" {...props}>
      <path fillRule="evenodd" d="M9.57 2.3a1 1 0 0 1 1.15 1.39 8 8 0 0 0 9.23 11.07 1 1 0 0 1 1.15 1.39A10 10 0 1 1 9.57 2.3M8.2 4.95A8 8 0 1 0 18.24 17H18A10 10 0 0 1 8.21 4.95" clipRule="evenodd" />
        <path d="M17.02 3.57a.5.5 0 0 1 .96 0l.26.86a2 2 0 0 0 1.33 1.33l.86.26a.5.5 0 0 1 0 .96l-.86.26a2 2 0 0 0-1.33 1.33l-.26.86a.5.5 0 0 1-.96 0l-.26-.86a2 2 0 0 0-1.33-1.33l-.86-.26a.5.5 0 0 1 0-.96l.86-.26a2 2 0 0 0 1.33-1.33z" />
    </IconBase>
  ))
);

MoonStarFill.displayName = 'MoonStarFill';

// Triple export pattern (lucide-react style)
export { MoonStarFill, MoonStarFill as MoonStarFillIcon, MoonStarFill as SiMoonStarFill };
export default MoonStarFill;
export type { MoonStarFillProps };
