import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonStarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonStarRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoonStarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-star-duotone" {...props}>
      <path fillRule="evenodd" d="M9.63 2.54a.75.75 0 0 1 .86 1.04A8.25 8.25 0 0 0 20.01 15a.75.75 0 0 1 .86 1.04A9.75 9.75 0 1 1 9.63 2.54M8.58 4.5a8.25 8.25 0 1 0 10.18 12.23A9.72 9.72 0 0 1 8.58 4.49" clipRule="evenodd" opacity={.4} />
        <path d="M17.02 3.57a.5.5 0 0 1 .96 0l.26.86a2 2 0 0 0 1.33 1.33l.86.26a.5.5 0 0 1 0 .96l-.86.26a2 2 0 0 0-1.33 1.33l-.26.86a.5.5 0 0 1-.96 0l-.26-.86a2 2 0 0 0-1.33-1.33l-.86-.26a.5.5 0 0 1 0-.96l.86-.26a2 2 0 0 0 1.33-1.33z" />
    </IconBase>
  ))
);

MoonStarRegularDuotone.displayName = 'MoonStarRegularDuotone';

// Triple export pattern (lucide-react style)
export { MoonStarRegularDuotone, MoonStarRegularDuotone as MoonStarRegularDuotoneIcon, MoonStarRegularDuotone as SiMoonStarRegularDuotone };
export default MoonStarRegularDuotone;
export type { MoonStarRegularDuotoneProps };
