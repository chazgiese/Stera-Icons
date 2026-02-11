import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleBoldProps = Omit<IconBaseProps, 'children'>;

const HashCircleBold = memo(
  forwardRef<SVGSVGElement, HashCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-circle-bold" {...props}>
      <path fillRule="evenodd" d="M14 6.5a1 1 0 0 1 1 1V9h1.5a1 1 0 1 1 0 2H15v2h1.5a1 1 0 1 1 0 2H15v1.5a1 1 0 1 1-2 0V15h-2v1.5a1 1 0 1 1-2 0V15H7.5a1 1 0 0 1 0-2H9v-2H7.5a1 1 0 1 1 0-2H9V7.5a1 1 0 0 1 2 0V9h2V7.5a1 1 0 0 1 1-1M11 13h2v-2h-2z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleBold.displayName = 'HashCircleBold';

// Triple export pattern (lucide-react style)
export { HashCircleBold, HashCircleBold as HashCircleBoldIcon, HashCircleBold as SiHashCircleBold };
export default HashCircleBold;
export type { HashCircleBoldProps };
