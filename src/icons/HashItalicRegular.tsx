import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicRegularProps = Omit<IconBaseProps, 'children'>;

const HashItalicRegular = memo(
  forwardRef<SVGSVGElement, HashItalicRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-italic" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.27 2.84a.75.75 0 0 1 1.46.32L16.6 8.25H21a.75.75 0 0 1 0 1.5h-4.73l-1 4.5H19a.75.75 0 0 1 0 1.5h-4.06l-1.2 5.41a.75.75 0 0 1-1.47-.32l1.13-5.1H8.94l-1.2 5.42a.75.75 0 0 1-1.47-.32l1.13-5.1H3a.75.75 0 1 1 0-1.5h4.73l1-4.49H5a.75.75 0 0 1 0-1.5h4.06l1.2-5.41a.75.75 0 0 1 1.47.32L10.6 8.25h4.46zm-7 11.4h4.46l1-4.49h-4.46z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashItalicRegular.displayName = 'HashItalicRegular';

// Triple export pattern (lucide-react style)
export { HashItalicRegular, HashItalicRegular as HashItalicRegularIcon, HashItalicRegular as SiHashItalicRegular };
export default HashItalicRegular;
export type { HashItalicRegularProps };
