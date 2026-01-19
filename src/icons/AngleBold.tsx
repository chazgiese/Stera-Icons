import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AngleBoldProps = Omit<IconBaseProps, 'children'>;

const AngleBold = memo(
  forwardRef<SVGSVGElement, AngleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="angle-bold" {...props}>
      <path fill="currentColor" d="M6 4a1 1 0 0 1 1 1.1V18h13a1 1 0 0 1 1 1 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M19.43 14.9a1 1 0 1 1-.75 1.2 1 1 0 0 1 .75-1.2M18.18 12.02a1 1 0 0 1 1.33.46v.02a1 1 0 0 1-1.8.86 1 1 0 0 1 .47-1.34M16.32 9.49a1 1 0 0 1 1.4.15l.01.01a1 1 0 0 1-1.56 1.25 1 1 0 0 1 .15-1.41M13.94 7.43a1 1 0 0 1 1.4-.16h.02a1 1 0 1 1-1.25 1.57 1 1 0 0 1-.17-1.41M11.17 5.95a1 1 0 0 1 1.33-.47h.02a1 1 0 0 1-.87 1.8h-.01a1 1 0 0 1-.47-1.33M8.14 5.13a1 1 0 1 1 .76 1.2 1 1 0 0 1-.76-1.2" />
    </IconBase>
  ))
);

AngleBold.displayName = 'AngleBold';

// Triple export pattern (lucide-react style)
export { AngleBold, AngleBold as AngleBoldIcon, AngleBold as SiAngleBold };
export default AngleBold;
export type { AngleBoldProps };
