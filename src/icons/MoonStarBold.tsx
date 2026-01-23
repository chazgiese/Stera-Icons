import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonStarBoldProps = Omit<IconBaseProps, 'children'>;

const MoonStarBold = memo(
  forwardRef<SVGSVGElement, MoonStarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-star-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.11 1.43A1 1 0 0 1 10 2.88a9 9 0 0 0 10.6 12.73 1 1 0 0 1 .3-.04l.14.01a1 1 0 0 1 .62.35c.26.31.3.75.12 1.1A11 11 0 0 1 12 23l-.57-.01a11 11 0 0 1-2.7-.48 11.01 11.01 0 0 1 .09-21.04 1 1 0 0 1 .29-.04M7.33 4.3A9 9 0 0 0 3 12a9 9 0 0 0 15.4 6.3l.32-.33L18 18l-.57-.01a11 11 0 0 1-2.7-.48 11 11 0 0 1-7.4-13.2" clipRule="evenodd" />
        <path fill="currentColor" d="M18.21 1.94a.3.3 0 0 1 .58 0l.14.47a4 4 0 0 0 2.66 2.66l.47.14a.3.3 0 0 1 0 .58l-.47.14a4 4 0 0 0-2.66 2.66l-.14.47c-.09.28-.5.28-.58 0l-.14-.47a4 4 0 0 0-2.66-2.66l-.47-.14c-.28-.09-.28-.49 0-.58l.47-.14a4 4 0 0 0 2.66-2.66z" />
    </IconBase>
  ))
);

MoonStarBold.displayName = 'MoonStarBold';

// Triple export pattern (lucide-react style)
export { MoonStarBold, MoonStarBold as MoonStarBoldIcon, MoonStarBold as SiMoonStarBold };
export default MoonStarBold;
export type { MoonStarBoldProps };
