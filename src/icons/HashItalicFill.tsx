import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicFillProps = Omit<IconBaseProps, 'children'>;

const HashItalicFill = memo(
  forwardRef<SVGSVGElement, HashItalicFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-italic-fill" {...props}>
      <path fillRule="evenodd" d="M15.54 2.67a1.5 1.5 0 1 1 2.92.66l-.92 4.17H21a1.5 1.5 0 0 1 0 3h-4.13l-.67 3H19a1.5 1.5 0 0 1 0 3h-3.46l-1.08 4.83a1.5 1.5 0 1 1-2.92-.66l.92-4.17H9.54l-1.08 4.83a1.5 1.5 0 1 1-2.92-.66l.92-4.17H3a1.5 1.5 0 0 1 0-3h4.13l.67-3H5a1.5 1.5 0 0 1 0-3h3.46l1.08-4.83a1.5 1.5 0 1 1 2.92.66l-.92 4.17h2.92zM10.2 13.5h2.93l.67-3h-2.93z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashItalicFill.displayName = 'HashItalicFill';

// Triple export pattern (lucide-react style)
export { HashItalicFill, HashItalicFill as HashItalicFillIcon, HashItalicFill as SiHashItalicFill };
export default HashItalicFill;
export type { HashItalicFillProps };
