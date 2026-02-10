import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScissorsRegularProps = Omit<IconBaseProps, 'children'>;

const ScissorsRegular = memo(
  forwardRef<SVGSVGElement, ScissorsRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scissors" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20.53 4.42a.75.75 0 0 1 .94 1.16L8.43 16.1q.31.64.32 1.4a3.25 3.25 0 1 1-1.26-2.57zM5.5 15.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" d="M13.73 13.14a.75.75 0 0 1 1.06-.11l6.68 5.39a.75.75 0 0 1-.94 1.16l-6.68-5.39a.75.75 0 0 1-.12-1.05" />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 3.25A3.25 3.25 0 0 1 8.43 7.9l2.37 1.91a.75.75 0 0 1-.94 1.17L7.49 9.07A3.25 3.25 0 1 1 5.5 3.25m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ScissorsRegular.displayName = 'ScissorsRegular';

// Triple export pattern (lucide-react style)
export { ScissorsRegular, ScissorsRegular as ScissorsRegularIcon, ScissorsRegular as SiScissorsRegular };
export default ScissorsRegular;
export type { ScissorsRegularProps };
