import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDashSimpleBold = memo(
  forwardRef<SVGSVGElement, CircleDashSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.25 19.36c.48-.27 1.09-.11 1.37.37.27.48.11 1.09-.37 1.36-1.54.9-3.34 1.41-5.25 1.41s-3.7-.51-5.25-1.4c-.48-.28-.64-.9-.37-1.37.28-.48.9-.64 1.37-.37C9 20.1 10.45 20.5 12 20.5s3-.41 4.25-1.14M2.9 6.75c.28-.48.9-.64 1.37-.37.48.28.64.9.37 1.37C3.9 9 3.5 10.45 3.5 12s.41 3 1.14 4.25c.27.48.11 1.09-.37 1.37-.48.27-1.09.11-1.36-.37C2 15.71 1.5 13.91 1.5 12s.51-3.7 1.4-5.25M19.73 6.38c.48-.27 1.09-.11 1.36.37.9 1.54 1.41 3.34 1.41 5.25s-.51 3.7-1.4 5.25c-.28.48-.9.64-1.37.37-.48-.28-.64-.9-.37-1.37.73-1.25 1.14-2.7 1.14-4.25s-.41-3-1.14-4.25c-.27-.48-.11-1.09.37-1.37M12 1.5c1.91 0 3.7.51 5.25 1.4.48.28.64.9.37 1.37-.28.48-.9.64-1.37.37C15 3.9 13.55 3.5 12 3.5s-3 .41-4.25 1.14c-.48.27-1.09.11-1.37-.37-.27-.48-.11-1.09.37-1.36C8.29 2 10.09 1.5 12 1.5" />
    </IconBase>
  ))
);

CircleDashSimpleBold.displayName = 'CircleDashSimpleBold';

// Triple export pattern
export { CircleDashSimpleBold, CircleDashSimpleBold as CircleDashSimpleBoldIcon, CircleDashSimpleBold as SiCircleDashSimpleBold };
export default CircleDashSimpleBold;
export type { CircleDashSimpleBoldProps };
