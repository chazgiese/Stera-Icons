import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeFillDuotone = memo(
  forwardRef<SVGSVGElement, HomeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.95 1.94a4 4 0 0 1 2.1 0c.82.23 1.53.8 2.52 1.58l3.54 2.76c.7.54 1.2.92 1.56 1.41q.46.64.67 1.38c.17.6.16 1.22.16 2.1v3.63q.01 1.33-.05 2.22c-.05.6-.15 1.15-.41 1.66-.41.8-1.06 1.45-1.86 1.86-.51.26-1.06.36-1.66.41q-.9.06-2.22.05H8.7q-1.34.01-2.22-.05a4 4 0 0 1-1.66-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.66q-.06-.9-.05-2.22v-3.63c0-.88 0-1.5.16-2.1q.2-.75.67-1.38c.37-.49.87-.87 1.56-1.4L8.43 3.5c.98-.76 1.7-1.34 2.52-1.57m.05 9.31c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13 11.25c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25v-4c0-.69.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

HomeFillDuotone.displayName = 'HomeFillDuotone';

// Triple export pattern (lucide-react style)
export { HomeFillDuotone, HomeFillDuotone as HomeFillDuotoneIcon, HomeFillDuotone as SiHomeFillDuotone };
export default HomeFillDuotone;
export type { HomeFillDuotoneProps };
