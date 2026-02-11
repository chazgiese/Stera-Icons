import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonStarBoldProps = Omit<IconBaseProps, 'children'>;

const MoonStarBold = memo(
  forwardRef<SVGSVGElement, MoonStarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-star-bold" {...props}>
      <path fillRule="evenodd" d="M9.57 2.3a1 1 0 0 1 1.15 1.39 8 8 0 0 0 9.23 11.07 1 1 0 0 1 1.15 1.39A10 10 0 1 1 9.57 2.3M8.2 4.95A8 8 0 1 0 18.24 17H18A10 10 0 0 1 8.21 4.95" clipRule="evenodd" />
        <path d="M17.02 3.57a.5.5 0 0 1 .96 0l.26.86a2 2 0 0 0 1.33 1.33l.86.26a.5.5 0 0 1 0 .96l-.86.26a2 2 0 0 0-1.33 1.33l-.26.86a.5.5 0 0 1-.96 0l-.26-.86a2 2 0 0 0-1.33-1.33l-.86-.26a.5.5 0 0 1 0-.96l.86-.26a2 2 0 0 0 1.33-1.33z" />
    </IconBase>
  ))
);

MoonStarBold.displayName = 'MoonStarBold';

// Triple export pattern (lucide-react style)
export { MoonStarBold, MoonStarBold as MoonStarBoldIcon, MoonStarBold as SiMoonStarBold };
export default MoonStarBold;
export type { MoonStarBoldProps };
