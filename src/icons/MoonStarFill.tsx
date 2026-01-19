import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoonStarFillProps = Omit<IconBaseProps, 'children'>;

const MoonStarFill = memo(
  forwardRef<SVGSVGElement, MoonStarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-star-fill" {...props}>
      <path fill="currentColor" d="M9.11 1.43A1 1 0 0 1 10 2.88a9 9 0 0 0 10.6 12.73 1 1 0 0 1 .3-.04l.14.01a1 1 0 0 1 .62.35c.26.31.3.75.12 1.1A11 11 0 0 1 12 23l-.57-.01a11 11 0 0 1-2.7-.48 11.01 11.01 0 0 1 .09-21.04 1 1 0 0 1 .29-.04M18.21 1.94a.3.3 0 0 1 .58 0l.14.47a4 4 0 0 0 2.66 2.66l.47.14a.3.3 0 0 1 0 .58l-.47.14a4 4 0 0 0-2.66 2.66l-.14.47c-.09.28-.5.28-.58 0l-.14-.47a4 4 0 0 0-2.66-2.66l-.47-.14c-.28-.09-.28-.49 0-.58l.47-.14a4 4 0 0 0 2.66-2.66z" />
    </IconBase>
  ))
);

MoonStarFill.displayName = 'MoonStarFill';

// Triple export pattern (lucide-react style)
export { MoonStarFill, MoonStarFill as MoonStarFillIcon, MoonStarFill as SiMoonStarFill };
export default MoonStarFill;
export type { MoonStarFillProps };
