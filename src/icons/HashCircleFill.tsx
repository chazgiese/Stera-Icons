import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleFillProps = Omit<IconBaseProps, 'children'>;

const HashCircleFill = memo(
  forwardRef<SVGSVGElement, HashCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-circle-fill" {...props}>
      <path fill="currentColor" d="M13 13h-2v-2h2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m2 5a1 1 0 0 0-1 1v2h-2V7a1 1 0 1 0-2 0v2H7a1 1 0 0 0 0 2h2v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2h2a1 1 0 1 0 0-2h-2V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleFill.displayName = 'HashCircleFill';

// Triple export pattern (lucide-react style)
export { HashCircleFill, HashCircleFill as HashCircleFillIcon, HashCircleFill as SiHashCircleFill };
export default HashCircleFill;
export type { HashCircleFillProps };
