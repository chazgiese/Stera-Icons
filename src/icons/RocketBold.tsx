import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RocketBoldProps = Omit<IconBaseProps, 'children'>;

const RocketBold = memo(
  forwardRef<SVGSVGElement, RocketBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rocket-bold" {...props}>
      <path fill="currentColor" d="M12 7a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 12 7" />
        <path fill="currentColor" fillRule="evenodd" d="M11.57 1.1a1 1 0 0 1 .98.07c2.4 1.6 3.85 3.43 4.64 5.32a10 10 0 0 1 .73 3.01l2.79 2.8a1 1 0 0 1 .28.85l-1 6.5a1 1 0 0 1-1.52.7L14.71 18H9.3l-3.76 2.35a1 1 0 0 1-1.52-.7l-1-6.5a1 1 0 0 1 .28-.86l2.79-2.78q.1-1.48.73-3.02a12 12 0 0 1 4.63-5.32zm-6.5 12.25.69 4.5 1.9-1.19a15 15 0 0 1-1.48-4.43zm12.74-1.12a15 15 0 0 1-1.47 4.43l1.9 1.19.7-4.5zm-5.81-9a9.7 9.7 0 0 0-3.34 4.03 8.5 8.5 0 0 0-.54 4.37A12 12 0 0 0 9.57 16h4.86a12 12 0 0 0 1.45-4.37 8.5 8.5 0 0 0-.54-4.37A9.7 9.7 0 0 0 12 3.22" clipRule="evenodd" />
        <path fill="currentColor" d="M10.5 19a1 1 0 0 0-1 1c0 .37.13.75.3 1.07.47.96 1.34 1.55 2.2 2.13.86-.58 1.73-1.17 2.2-2.13.17-.32.3-.7.3-1.07a1 1 0 0 0-1-1z" />
    </IconBase>
  ))
);

RocketBold.displayName = 'RocketBold';

// Triple export pattern (lucide-react style)
export { RocketBold, RocketBold as RocketBoldIcon, RocketBold as SiRocketBold };
export default RocketBold;
export type { RocketBoldProps };
