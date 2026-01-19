import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoonStarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonStarFillDuotone = memo(
  forwardRef<SVGSVGElement, MoonStarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-star-fill-duotone" {...props}>
      <path fill="currentColor" d="M8.82 1.47A1 1 0 0 1 10 2.88a9 9 0 0 0 10.6 12.73 1 1 0 0 1 1.18 1.42A11 11 0 1 1 8.82 1.47" opacity={.4} />
        <path fill="currentColor" d="M18.21 1.94c.09-.28.5-.28.58 0l.14.47a4 4 0 0 0 2.66 2.66l.47.14a.3.3 0 0 1 0 .58l-.47.14a4 4 0 0 0-2.66 2.66l-.14.47a.3.3 0 0 1-.58 0l-.14-.47a4 4 0 0 0-2.66-2.66l-.47-.14c-.28-.09-.28-.49 0-.58l.47-.14a4 4 0 0 0 2.66-2.66z" />
    </IconBase>
  ))
);

MoonStarFillDuotone.displayName = 'MoonStarFillDuotone';

// Triple export pattern (lucide-react style)
export { MoonStarFillDuotone, MoonStarFillDuotone as MoonStarFillDuotoneIcon, MoonStarFillDuotone as SiMoonStarFillDuotone };
export type { MoonStarFillDuotoneProps };
