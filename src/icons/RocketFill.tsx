import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RocketFillProps = Omit<IconBaseProps, 'children'>;

const RocketFill = memo(
  forwardRef<SVGSVGElement, RocketFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rocket-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.58 1.1a1 1 0 0 1 .97.07 12 12 0 0 1 4.64 5.32 10 10 0 0 1 .73 3.01l2.79 2.8a1 1 0 0 1 .28.85l-1 6.5a1 1 0 0 1-1.52.7L14.71 18H9.3l-3.76 2.35a1 1 0 0 1-1.52-.7l-1-6.5a1 1 0 0 1 .28-.86l2.79-2.78q.1-1.48.73-3.02a12 12 0 0 1 4.64-5.32zM5.06 13.34l.7 4.5 1.9-1.19a15 15 0 0 1-1.47-4.43zm12.75-1.12a15 15 0 0 1-1.47 4.43l1.9 1.19.7-4.5zM12 7a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 12 7" clipRule="evenodd" />
        <path fill="currentColor" d="M10.5 19a1 1 0 0 0-1 1c0 .37.13.75.3 1.07.47.96 1.34 1.55 2.2 2.13.86-.58 1.73-1.17 2.2-2.13.17-.32.3-.7.3-1.07a1 1 0 0 0-1-1z" />
    </IconBase>
  ))
);

RocketFill.displayName = 'RocketFill';

// Triple export pattern (lucide-react style)
export { RocketFill, RocketFill as RocketFillIcon, RocketFill as SiRocketFill };
export default RocketFill;
export type { RocketFillProps };
