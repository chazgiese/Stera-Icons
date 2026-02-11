import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonStarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonStarFillDuotone = memo(
  forwardRef<SVGSVGElement, MoonStarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-star-fill-duotone" {...props}>
      <path d="M9.57 2.3a1 1 0 0 1 1.15 1.39 8 8 0 0 0 9.23 11.07 1 1 0 0 1 1.15 1.39A10 10 0 1 1 9.57 2.3" opacity={.4} />
        <path d="M17.02 3.57a.5.5 0 0 1 .96 0l.26.86a2 2 0 0 0 1.33 1.33l.86.26a.5.5 0 0 1 0 .96l-.86.26a2 2 0 0 0-1.33 1.33l-.26.86a.5.5 0 0 1-.96 0l-.26-.86a2 2 0 0 0-1.33-1.33l-.86-.26a.5.5 0 0 1 0-.96l.86-.26a2 2 0 0 0 1.33-1.33z" />
    </IconBase>
  ))
);

MoonStarFillDuotone.displayName = 'MoonStarFillDuotone';

// Triple export pattern (lucide-react style)
export { MoonStarFillDuotone, MoonStarFillDuotone as MoonStarFillDuotoneIcon, MoonStarFillDuotone as SiMoonStarFillDuotone };
export default MoonStarFillDuotone;
export type { MoonStarFillDuotoneProps };
