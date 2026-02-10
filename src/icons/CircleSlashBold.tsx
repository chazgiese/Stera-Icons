import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashBoldProps = Omit<IconBaseProps, 'children'>;

const CircleSlashBold = memo(
  forwardRef<SVGSVGElement, CircleSlashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.93 4.93a10 10 0 1 1 14.14 14.14A10 10 0 0 1 4.93 4.93m.75 2.17a8 8 0 0 0 11.23 11.22zm11.98-.76A8 8 0 0 0 7.1 5.68l11.22 11.23a8 8 0 0 0-.66-10.57" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashBold.displayName = 'CircleSlashBold';

// Triple export pattern (lucide-react style)
export { CircleSlashBold, CircleSlashBold as CircleSlashBoldIcon, CircleSlashBold as SiCircleSlashBold };
export default CircleSlashBold;
export type { CircleSlashBoldProps };
