import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashFillProps = Omit<IconBaseProps, 'children'>;

const HashFill = memo(
  forwardRef<SVGSVGElement, HashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 2c.83 0 1.5.67 1.5 1.5v4h4a1.5 1.5 0 0 1 0 3h-4v3h4a1.5 1.5 0 0 1 0 3h-4v4a1.5 1.5 0 0 1-3 0v-4h-3v4a1.5 1.5 0 0 1-3 0v-4h-4a1.5 1.5 0 0 1 0-3h4v-3h-4a1.5 1.5 0 0 1 0-3h4v-4a1.5 1.5 0 1 1 3 0v4h3v-4c0-.83.67-1.5 1.5-1.5m-4.5 11.5h3v-3h-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashFill.displayName = 'HashFill';

// Triple export pattern (lucide-react style)
export { HashFill, HashFill as HashFillIcon, HashFill as SiHashFill };
export default HashFill;
export type { HashFillProps };
