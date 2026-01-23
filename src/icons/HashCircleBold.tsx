import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleBoldProps = Omit<IconBaseProps, 'children'>;

const HashCircleBold = memo(
  forwardRef<SVGSVGElement, HashCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-circle-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14 6a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2v-2H7a1 1 0 1 1 0-2h2V7a1 1 0 1 1 2 0v2h2V7a1 1 0 0 1 1-1m-3 7h2v-2h-2z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleBold.displayName = 'HashCircleBold';

// Triple export pattern (lucide-react style)
export { HashCircleBold, HashCircleBold as HashCircleBoldIcon, HashCircleBold as SiHashCircleBold };
export default HashCircleBold;
export type { HashCircleBoldProps };
