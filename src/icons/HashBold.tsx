import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashBoldProps = Omit<IconBaseProps, 'children'>;

const HashBold = memo(
  forwardRef<SVGSVGElement, HashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 2a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v4h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5h-4v5a1 1 0 1 1-2 0v-5H3a1 1 0 1 1 0-2h5v-4H3a1 1 0 0 1 0-2h5V3a1 1 0 0 1 2 0v5h4V3a1 1 0 0 1 1-1m-5 12h4v-4h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashBold.displayName = 'HashBold';

// Triple export pattern (lucide-react style)
export { HashBold, HashBold as HashBoldIcon, HashBold as SiHashBold };
export default HashBold;
export type { HashBoldProps };
