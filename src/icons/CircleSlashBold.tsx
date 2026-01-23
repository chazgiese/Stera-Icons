import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashBoldProps = Omit<IconBaseProps, 'children'>;

const CircleSlashBold = memo(
  forwardRef<SVGSVGElement, CircleSlashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.22 4.22a11 11 0 1 1 15.56 15.56A11 11 0 0 1 4.22 4.22m.75 2.16a9 9 0 0 0 12.65 12.65zm13.4-.74a9 9 0 0 0-11.99-.67l12.65 12.65a9 9 0 0 0-.67-11.98" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashBold.displayName = 'CircleSlashBold';

// Triple export pattern (lucide-react style)
export { CircleSlashBold, CircleSlashBold as CircleSlashBoldIcon, CircleSlashBold as SiCircleSlashBold };
export default CircleSlashBold;
export type { CircleSlashBoldProps };
