import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoonStarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonStarBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoonStarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.82 1.47A1 1 0 0 1 10 2.88a9 9 0 0 0 10.6 12.73 1 1 0 0 1 1.18 1.42A11 11 0 1 1 8.82 1.47M7.33 4.3a9 9 0 1 0 11.4 13.67A10.97 10.97 0 0 1 7.32 4.3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18.21 1.94c.09-.28.5-.28.58 0l.14.47a4 4 0 0 0 2.66 2.66l.47.14a.3.3 0 0 1 0 .58l-.47.14a4 4 0 0 0-2.66 2.66l-.14.47a.3.3 0 0 1-.58 0l-.14-.47a4 4 0 0 0-2.66-2.66l-.47-.14c-.28-.09-.28-.49 0-.58l.47-.14a4 4 0 0 0 2.66-2.66z" />
    </IconBase>
  ))
);

MoonStarBoldDuotone.displayName = 'MoonStarBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoonStarBoldDuotone, MoonStarBoldDuotone as MoonStarBoldDuotoneIcon, MoonStarBoldDuotone as SiMoonStarBoldDuotone };
export type { MoonStarBoldDuotoneProps };
