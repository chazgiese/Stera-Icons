import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleAcuteRegularProps = Omit<IconBaseProps, 'children'>;

const AngleAcuteRegular = memo(
  forwardRef<SVGSVGElement, AngleAcuteRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="angle-acute" {...props}>
      <path fill="currentColor" d="M11.35 4.7a.75.75 0 1 1 1.3.75L5.3 18.18H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.65-1.13z" />
        <path fill="currentColor" d="M19.63 15.4c.4-.06.8.2.87.62a.75.75 0 0 1-1.48.26c-.07-.41.2-.8.6-.87M18.78 12.75c.39-.15.82.06.96.44v.01a.75.75 0 0 1-1.4.52v-.01a.75.75 0 0 1 .44-.96M17.48 10.28a.75.75 0 0 1 1.02.27h.01a.75.75 0 0 1-1.3.76v-.01a.75.75 0 0 1 .27-1.02M15.77 8.07a.75.75 0 1 1-.09 1.06.75.75 0 0 1 .1-1.06M13.7 6.19a.75.75 0 0 1 1.06-.1l.01.01a.75.75 0 0 1-.97 1.15.75.75 0 0 1-.1-1.06" />
    </IconBase>
  ))
);

AngleAcuteRegular.displayName = 'AngleAcuteRegular';

// Triple export pattern (lucide-react style)
export { AngleAcuteRegular, AngleAcuteRegular as AngleAcuteRegularIcon, AngleAcuteRegular as SiAngleAcuteRegular };
export default AngleAcuteRegular;
export type { AngleAcuteRegularProps };
