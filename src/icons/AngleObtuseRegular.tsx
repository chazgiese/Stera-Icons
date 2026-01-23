import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleObtuseRegularProps = Omit<IconBaseProps, 'children'>;

const AngleObtuseRegular = memo(
  forwardRef<SVGSVGElement, AngleObtuseRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="angle-obtuse" {...props}>
      <path fill="currentColor" d="M21.4 14.16c.4-.1.81.13.92.53v.02a.75.75 0 0 1-1.45.38c-.1-.4.13-.82.53-.93M20.02 11.35a.75.75 0 1 1-.27 1.03v-.01a.75.75 0 0 1 .27-1.02M17.95 8.98c.3-.3.77-.3 1.06 0a.75.75 0 1 1-1.05 1.07.75.75 0 0 1 0-1.07M15.35 7.23a.75.75 0 0 1 1.02-.28l.01.01a.75.75 0 0 1-.75 1.3.75.75 0 0 1-.28-1.03M4.04 6.72a.75.75 0 0 1 .7 1.33.75.75 0 1 1-.7-1.32M12.38 6.21c.1-.4.51-.64.91-.53h.02a.75.75 0 0 1-.4 1.45.75.75 0 0 1-.53-.92M6.93 5.62a.75.75 0 0 1 .36 1.46.75.75 0 0 1-.37-1.46zM10 5.25a.75.75 0 0 1 0 1.5.75.75 0 0 1 0-1.5M1.5 8.5a.75.75 0 0 1 1.06.05l7.77 8.7H22a.75.75 0 0 1 0 1.5H10a.8.8 0 0 1-.56-.25l-8-8.95A.75.75 0 0 1 1.5 8.5" />
    </IconBase>
  ))
);

AngleObtuseRegular.displayName = 'AngleObtuseRegular';

// Triple export pattern (lucide-react style)
export { AngleObtuseRegular, AngleObtuseRegular as AngleObtuseRegularIcon, AngleObtuseRegular as SiAngleObtuseRegular };
export default AngleObtuseRegular;
export type { AngleObtuseRegularProps };
