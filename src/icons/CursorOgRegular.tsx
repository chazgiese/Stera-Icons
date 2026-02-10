import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgRegularProps = Omit<IconBaseProps, 'children'>;

const CursorOgRegular = memo(
  forwardRef<SVGSVGElement, CursorOgRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-og" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.7 2.32a.8.8 0 0 1 .8.12l12 10.62a.75.75 0 0 1-.4 1.3l-3.87.53 1.91 4.25c.17.37 0 .82-.37.99l-3.43 1.55a.75.75 0 0 1-1-.37l-1.9-4.25-2.94 2.58a.75.75 0 0 1-1.25-.57V3c0-.3.17-.56.44-.68m1.05 15.1 2.46-2.15a.75.75 0 0 1 1.18.26L13.41 20l2.06-.94-2.02-4.49a.75.75 0 0 1 .59-1.05l3.24-.43-9.53-8.43z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorOgRegular.displayName = 'CursorOgRegular';

// Triple export pattern (lucide-react style)
export { CursorOgRegular, CursorOgRegular as CursorOgRegularIcon, CursorOgRegular as SiCursorOgRegular };
export default CursorOgRegular;
export type { CursorOgRegularProps };
